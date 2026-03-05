import { RouterProvider } from "react-router-dom"
import { type JSX } from "react"
import "./mirageServer"
import router from "./router"
import useLogin from "./hooks/useLogin"
import { LoginContext } from "./context/LoginContext"

export default function App(): JSX.Element {

    return (
        <LoginContext.Provider value={useLogin()}>
            <RouterProvider router={router} />
        </LoginContext.Provider>
    )
}