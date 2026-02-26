import type { Van } from "./Van"

export type FilterQuery = FilterQueryForVanType | FilterQueryForVanSort

type FilterQueryForVanType = {
    for: "type",
    vanType: Van["type"]
}

type FilterQueryForVanSort = {
    for: "sortby"
    sortby: "HL" | "LH" | "rating"
}