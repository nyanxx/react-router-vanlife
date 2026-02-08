import { createServer } from "miragejs";

export type Van = {
    id: number
    name: string
    price: number
    type: string
}

createServer({
    routes() {
        this.namespace = "api"
        this.get("/vans", () => {
            const data: Van[] = [
                { id: 1, name: "Camper Deluxe", price: 100, type: "luxury" },
                { id: 2, name: "Adventure Van", price: 80, type: "rugged" },
                { id: 3, name: "Budget Ride", price: 50, type: "simple" }
            ]
            return data
        })
    },
})