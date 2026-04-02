import { createServer, Response } from "miragejs";
import { vanRoutes } from "./routes/vans.routes";
import { userVansRoutes } from "./routes/userVans.routes";
import { authRoutes } from "./routes/auth.routes";
// import { checkAuthRoute, checkUserVansRoute, checkVansRoute } from "./check";

try {
  createServer({
    routes() {
      this.logging = false;
      this.namespace = "api/auth";
      authRoutes(this);

      this.namespace = "api/vans";
      vanRoutes(this);

      // This is a protected route (need access token verification)
      this.namespace = "api/user/vans";
      userVansRoutes(this);

      this.namespace = "";
      this.get("*", () => {
        return new Response(404, {}, { message: "No route found!" });
      });
    },
  });
} catch (err) {
  console.error("ServerCreationError: ", err);
}

// checkAuthRoute();
// checkVansRoute();
// checkUserVansRoute();
