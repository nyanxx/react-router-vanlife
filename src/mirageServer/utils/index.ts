import {
  jwtVerify,
  SignJWT,
  type JWTPayload,
  type JWTVerifyResult,
} from "jose";
import { type Request } from "miragejs";

/**************************************************[ Cookies ]**************************************************/

/**
 * Set a Cookie
 *
 * @param name Name for the cookie
 * @param value Value for the set cookie
 * @param days Expiration days
 */
export function setCookie(name: string, value: string, days: number): void {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // add days
  const expires = "expires=" + date.toUTCString();
  // document.cookie = name + "=" + value + "; " + expires;
  document.cookie = name + "=" + value + "; " + expires + "; path=/";
  // document.cookie = name + "=" + value + "; " + expires + "; path=/; Secure;";
  // document.cookie = name + "=" + value + "; " + expires + "; path=/; SameSite=None"; // SameSite=Note don't even add the cookie to the browser
  // document.cookie = name + "=" + value + "; " + expires + "; path=/; SameSite=None; Secure;"; //
}

export function getCookieValue(name: string): string | null {
  let cookies: string | string[] = document.cookie; // cookies = "username=JohnDoe; theme=dark"
  cookies = cookies.split("; "); // cookies = ["username=JohnDoe", "theme=dark"]
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

export function deleteCookie(name: string) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
}

/**************************************************[ Auth ]**************************************************/

const secret = new TextEncoder().encode("MY_SECRET_KEY");

export function generateRefershToken(id: string) {
  return (
    new SignJWT({ id })
      .setProtectedHeader({ alg: "HS256" })
      // .setExpirationTime("36h")
      .setExpirationTime("24h")
      .sign(secret)
  );
}
export function generateAccessToken(id: string, username: string) {
  return (
    new SignJWT({ id, username })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("7m")
      // .setExpirationTime("10s")
      .sign(secret)
  );
}

export async function verifyToken(jwtToken: string) {
  try {
    return jwtVerify(jwtToken, secret);
  } catch {
    return null;
  }
}

function _extractToken(request: Request) {
  const authHeader = request.requestHeaders;
  if (!authHeader) return "";
  return request.requestHeaders.Authorization.split(" ")[1];
}

/**
 * Check Authentication by verifying the token extracted from request header.
 *
 * @param request Takes the miragejs request as parameter.
 * @returns Promise<JWTVerifyResult<JWTPayload>> on successful authentication.
 * @returns Promise<null> on authentication faliure
 */
export async function authenticate(
  request: Request,
): Promise<JWTVerifyResult<JWTPayload> | null> {
  try {
    const token = _extractToken(request);
    if (!token) return null;
    const decoded = verifyToken(token);
    return decoded;
  } catch {
    // console.log(error)
    return null;
  }
}

/**************************************************[ Other ]**************************************************/

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
