import { vanData } from "../data/vanData";

export function getVans() {
    return vanData
}

export function getVansById(id: number) {
    return vanData.find(van => (van.id === id))
}