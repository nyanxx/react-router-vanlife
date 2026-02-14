export type Van = {
    id: number
    name: string
    price: number
    type: "comfort" | "luxury" | "simple" | "eco" | "rugged"
    imageURL: string
    description: string
    // oldPrice?: number
    status: "available" | "rented" | "repairing"
    // discount?: number // actual optional
}