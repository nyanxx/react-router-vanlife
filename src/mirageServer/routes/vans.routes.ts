import type { MirageServer } from "../types/MirageServer";
import { getVans, getVansById } from "../controllers/vans.controllers";

export function vanRoutes(server: MirageServer) {
  // server.namespace = "api/vans"
  server.get("/", getVans);
  server.get("/:id", (_, request) => getVansById(request));
}
