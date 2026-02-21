import { createServer, Response } from "miragejs";
import { vanRoutes } from "./routes/vans.routes";
import { userRoutes } from "./routes/user.routes";

try {
    createServer({
        routes() {
            this.namespace = "api"
            vanRoutes(this)
            userRoutes(this)
  
            this.namespace = ""
            this.get("*",
                () => {
                    return new Response(404, {}, {
                        success: false,
                        erroMsg: "No route found"
                    })
                }
            )
        },
    })
} catch (err) {
    console.error("Server ERR: ", err)
}

// fetch("/api/test").then(res => res.json()).then(data => console.log(data))

