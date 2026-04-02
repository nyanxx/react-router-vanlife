import type { MirageServer } from "../types/MirageServer";
import {
  getUserVans,
  getUserVansByVanId,
} from "../controllers/userVans.controllers";

export function userVansRoutes(server: MirageServer) {
  // server.namespace = "api/user/vans"
  server.get("/", getUserVans);
  server.get("/:id", getUserVansByVanId);
}
