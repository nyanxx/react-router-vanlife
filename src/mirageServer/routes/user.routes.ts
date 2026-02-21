import type { MirageServer } from "../types/MirageServer"
import { getUserVans, getUserVansById } from "../controllers/user.controllers";

export function userRoutes(server: MirageServer) {
    server.namespace = "api"
    server.get("/user/uservans", getUserVans)
    server.get("/user/uservans/:id", (_, request) => getUserVansById(request))
} 