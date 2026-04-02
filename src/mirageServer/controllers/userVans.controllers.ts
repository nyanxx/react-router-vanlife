import { Response, type Request } from "miragejs";
import { authenticate } from "../utils";
import { userVansData } from "../data/userVansData";
import type { User } from "../data/userData";
import { vanData } from "../data/vanData";
import { JWSInvalid, JWTExpired } from "jose/errors";

// Most of the 500 status code here shouldn't be 500 but 401 unauthorized
// Check in detail and add appropriatly

export const getUserVans = async (
  _: unknown,
  request: Request,
): Promise<Response> => {
  try {
    const decoded = await authenticate(request);
    if (!decoded) return new Response(401, {}, { message: "Unauthorized" });
    const payload = decoded.payload;

    const { type, price, status } = request.queryParams;

    /* Get user vans by user id */
    const userId = payload.id as User["id"];
    // Based on the userId you are finding the array of vanIDs that the user have
    const userVansId = userVansData.find(
      (user) => user.userID == userId,
    )?.vansIDs;
    if (!userVansId) return new Response(200, {}, []);

    // Populating to vans object based on array of vans id
    const userVansObject = vanData.filter((van) => userVansId.includes(van.id));

    /* Filtering and sorting */
    let filteredVans = userVansObject;

    if (price) {
      if (price === "htl")
        filteredVans = filteredVans.sort((a, b) => b.price - a.price);
      if (price === "lth") filteredVans.sort((a, b) => a.price - b.price);
    }

    if (type) {
      filteredVans = filteredVans.filter((van) => van.type === type);
    }

    if (status) {
      filteredVans = filteredVans.filter((van) => van.status === status);
    }

    return new Response(200, {}, filteredVans);
  } catch (err) {
    if (err instanceof JWSInvalid || err instanceof JWTExpired) {
      return new Response(401, {}, { message: "Unauthorized" });
    } else {
      return new Response(500, {}, { message: "Internal Server Error" });
    }
  }
};

export const getUserVansByVanId = async (
  _: unknown,
  request: Request,
): Promise<Response> => {
  try {
    const decoded = await authenticate(request);
    if (!decoded) return new Response(401, {}, { message: "Unauthorized" });
    const payload = decoded.payload;

    const { id } = request.params;

    /* Get user vans by user id */
    const userId = payload.id as User["id"];
    // Based on the userId you are finding the array of vanIDs that the user have
    const userVansId = userVansData.find(
      (user) => user.userID == userId,
    )?.vansIDs;
    if (!userVansId) return new Response(200, {}, {});

    // Populating to vans object based on array of vans id
    const userVansObject = vanData.filter((van) => userVansId.includes(van.id));

    const van = userVansObject.find((van) => van.id == +id);
    return new Response(200, {}, van ? van : {});
  } catch (err) {
    if (err instanceof JWSInvalid) {
      return new Response(401, {}, { message: "Unauthorized" });
    } else {
      return new Response(500, {}, { message: "Internal Server Error" });
    }
  }
};
