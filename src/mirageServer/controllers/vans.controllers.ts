import { Response, type Request } from "miragejs";
import * as vanServices from "../services/van.services";
import { paging } from "../../utils/paging";
import type { Van } from "../../types/Van";

// NOTE: Frontend is not expecting to receive "Van[][]"
export const getVans = (_: unknown, request: Request): Response => {
  try {
    const vans = vanServices.getVans();
    const { type, price, status, perpage, pageno } = request.queryParams;
    let filteredVans = vans;
    let pages = undefined;

    if (pageno && +pageno !== 0) {
      const { totalPages, pageItems } = paging(
        filteredVans,
        perpage ? +perpage : 3,
        +pageno,
      );
      pages = totalPages;
      filteredVans = pageItems as Van[];
    }

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

    return new Response(200, {}, { vans: filteredVans, pages });
  } catch {
    return new Response(500, {}, { message: "Internal Server Error" });
  }
};

export const getVansById = (request: Request): Response => {
  try {
    const van = vanServices.getVansById(+request.params.id);
    return new Response(200, {}, van);
  } catch {
    return new Response(500, {}, { message: "Internal Server Error" });
  }
};
