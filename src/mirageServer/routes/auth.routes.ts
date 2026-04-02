import {
  getProfile,
  loginUser,
  logout,
  refresh,
  registerUser,
} from "../controllers/auth.controllers";
import type { MirageServer } from "../types/MirageServer";

export function authRoutes(server: MirageServer) {
  // server.namespace = "api/auth"
  server.post("/register", registerUser);
  server.post("/login", loginUser);
  server.get("/profile", getProfile);
  server.post("/refresh", refresh);
  server.post("/logout", logout);
}
