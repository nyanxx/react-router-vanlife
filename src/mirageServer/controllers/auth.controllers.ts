import { Response, type Request } from "miragejs";
import { nanoid } from "nanoid";
import { compareSync, hashSync } from "bcryptjs";
import { users, type User } from "../data/userData";
import {
  authenticate,
  deleteCookie,
  generateAccessToken,
  generateRefershToken,
  getCookieValue,
  setCookie,
  verifyToken,
} from "../utils";
import { JWSInvalid, JWTExpired } from "jose/errors";

// const users: User[] = []; // In-memory store for demo

export const registerUser = (_: unknown, request: Request): Response => {
  try {
    const { username, password, email } = JSON.parse(request.requestBody);
    const user = users.find((u) => u.username === username);
    if (user) return new Response(409, {}, { message: "User already exist" });
    const hashedPassword = hashSync(password, 10);
    const newUser: User = {
      id: nanoid(),
      username,
      email,
      password_hash: hashedPassword,
      created_at: new Date() as unknown as string,
      role: "user",
    };
    users.push(newUser);

    return new Response(201, {}, { message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    return new Response(500, {}, { message: "Internal Server Error" });
  }
};

export const loginUser = async (
  _: unknown,
  request: Request,
): Promise<Response> => {
  try {
    const { email, password } = JSON.parse(request.requestBody);

    const user = users.find((u) => u.email === email);
    if (!user) return new Response(404, {}, { message: "Invalid credentials" });

    const isMatch = compareSync(password, user.password_hash);

    if (!isMatch)
      return new Response(401, {}, { message: "Invalid credentials" });

    /**
     * ISSUE WITH SIGNING IN ON MOBILE ENVIRONMENT
     *
     * TypeError: Cannot read property of undefined (reading "importKey") on mobile devices with browsers like chrome.
     *
     * The issuse is with `jose` depending on the `crypto.subtle` which is availble in desktop environment and but not on mobile environment.
     * `jose` is using `generateKey` or `importKey` of `crypto.subtle`.
     * You can try this by `if (!crypto?.subtle) alert (Web Crypto API not available)`.
     * So on mobile devices if not catched the below token generator throws and even if try to catch that specific error the token will be undefined.
     * We don't want that.
     *
     */
    const accessToken = await generateAccessToken(user.id, user.username);
    const refreshToken = await generateRefershToken(user.id);

    setCookie("rtk", refreshToken, 3);

    return new Response(200, {}, { token: accessToken });
  } catch {
    return new Response(500, {}, { message: "Internal Server Error" });
  }
};

export const getProfile = async (
  _: unknown,
  request: Request,
): Promise<Response> => {
  try {
    const decoded = await authenticate(request);
    if (!decoded) return new Response(401, {}, { message: "Unauthorized" });

    return new Response(
      200,
      {},
      { message: "protected data got successfully" },
    );
  } catch (err) {
    if (err instanceof JWSInvalid) {
      return new Response(401, {}, { message: "Unauthorized" });
    } else {
      return new Response(500, {}, { message: "Internal Server Error" });
    }
  }
};

export const refresh = async (): Promise<Response> => {
  // Was not able to get the cookie from the request and as this a just a mock backend, we will get the cookie directly.
  try {
    const cookieValue = getCookieValue("rtk");
    if (!cookieValue) return new Response(401, {}, { message: "unauthorized" });
    const decoded = await verifyToken(cookieValue);
    if (!decoded) return new Response(401, {}, { message: "unauthorized" });
    const userId = decoded.payload.id as string;
    const username = users.find((el) => el.id === userId)?.username;
    const accessToken = await generateAccessToken(userId, username || "null");
    return new Response(200, {}, { token: accessToken });
  } catch (error) {
    if (error instanceof JWTExpired) {
      return new Response(401, {}, { message: "Unauthorized" });
    } else {
      return new Response(500, {}, { message: "Internal Server Error" });
    }
  }
};

export const logout = async (
  _: unknown,
  request: Request,
): Promise<Response> => {
  try {
    await authenticate(request);
    deleteCookie("rtk");
    return new Response(200, {}, "Cookie cleared");
  } catch {
    return new Response(500, {}, { message: "Internal Server Error" });
  }
};
