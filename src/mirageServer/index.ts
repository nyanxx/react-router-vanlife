import { createServer } from "miragejs";
import { vanRoutes } from "./routes/vans.routes";
import { userRoutes } from "./routes/user.routes";
import { makeResponse } from "./utils/makeResponse";

try {
    createServer({
        routes() {
            this.namespace = "api"
            vanRoutes(this)
            userRoutes(this)

            this.namespace = ""
            this.get("*",
                () => {
                    return makeResponse(404, {
                        success: false,
                        errorMsg: "No route found!"
                    })

                }
            )
        },
    })
} catch (err) {
    console.error("Server ERR: ", err)
}

// fetch("/api/test").then(res => res.json()).then(data => console.log(data))
