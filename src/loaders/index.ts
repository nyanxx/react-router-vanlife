import type { LoaderError } from "../types/LoaderError";
import type { Van } from "../types/Van";

export async function vansLoader({
  request,
}: {
  request: Request;
}): Promise<Van[] | undefined> {
  // getting the url from request and converting it into URL object
  const url = new URL(request.url);

  const pageno = url.searchParams.get("pg") || 1;
  const res = await fetch(`/api/vans?pageno=${pageno}&perpage=6`);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    } as LoaderError;
  }
  const data = await res.json();
  return data as Van[];
}

export async function vanByIdLoader() {
  return "hi";
}

export async function userVansLoader() {
  return "hi";
}

export async function userVanByIdLoader() {
  return "hi";
}
