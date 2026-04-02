import { RouterProvider } from "react-router-dom";
import { type JSX } from "react";
import "./mirageServer";
import router from "./router";
import { AuthContextProvider } from "./context/AuthContext";

export default function App(): JSX.Element {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}
