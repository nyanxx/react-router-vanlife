import { createServer, Response } from "miragejs";
import { vanData } from "./vanData";

try {
    createServer({
        routes() {
            this.namespace = "api"
            this.get("/vans", () => vanData)
            this.get("/vans/:id", (_, request) => {
                try {
                    const van = vanData.find(van => (van.id === +request.params.id))
                    if (van) {
                        return new Response(200, {}, {
                            success: true,
                            data: van
                        })
                    } else {
                        return new Response(404, {}, {
                            success: false,
                            error: "No data found."
                        })
                    }
                } catch (err) {
                    console.error(err)
                    return new Response(500, {}, {
                        success: false,
                        error: "Internal Server Error",
                    })
                }
            })
        },
    })
} catch (err) {
    console.error("Server ERR: ", err)
}

// fetch("/api/vans/134").then(res => res.json()).then(data => console.log(data))

