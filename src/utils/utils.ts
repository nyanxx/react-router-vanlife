import type { Van } from "../types/Van"

export function getVanTypeColor(vanType: Van["type"]): string {
    if (!vanType) return "#e17654"
    if (vanType === "comfort") {
        return "#2f85a2"
    }
    if (vanType === "eco") {
        return "#2d9339"
    }
    if (vanType === "luxury") {
        return "#161616"
    }
    if (vanType === "rugged") {
        return "#115e59"
    }
    if (vanType === "simple") {
        return "#e17654"
    } else {
        return "#e17654"
    }
}

export function getVanStatusColor(status: Van["status"]): string | undefined {
    if (status === "available") return "bg-green-500"
    if (status === "rented") return "bg-red-500"
    if (status === "repairing") return "bg-yellow-500"
}