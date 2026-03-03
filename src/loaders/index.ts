import type { LoaderError } from "../types/LoaderError";
import type { Van } from "../types/Van";

export async function vansLoader(): Promise<Van[] | undefined> {
    const res = await fetch("/api/vans")
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        } as LoaderError
    }
    const data = await res.json()
    if (!data.success) throw new Error("Error fetching from miragejs")
    return data.data as Van[]
}

export async function vanByIdLoader() {
    return "hi"
}

export async function userVansLoader() {
    return "hi"
}

export async function userVanByIdLoader() {
    return "hi"
}