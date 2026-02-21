import { userVanData } from "../data/userData";

export function getUserVans() {
    return userVanData
}

export function getUserVansById(id: number) {
    return userVanData.find(van => (van.id === id))
}