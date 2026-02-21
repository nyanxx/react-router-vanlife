import type { MirageServer } from "../types/MirageServer"
import { getVans, getVansById } from "../controllers/vans.controllers";

export function vanRoutes(server: MirageServer) {
    // server.namespace = "api"
    server.get("/vans", getVans)
    server.get("/vans/:id", (_, request) => (getVansById(request)))
} 