import { RouterProvider } from "react-router-dom"
import { type JSX } from "react"
import "./mirageServer"
import router from "./router"

export default function App(): JSX.Element {

    return (
        <RouterProvider router={router} />
    )
}