import { BrowserRouter, Routes, Route } from "react-router-dom"
import type { JSX } from "react"
import "./mirageServer"
import Home from "./pages/Home"
import Vans from "./pages/Vans"
import About from "./pages/About"
import Contact from "./pages/Contact"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import DashBoard from "./pages/DashBoard"
import NotFound from "./pages/NotFound"
import Layout from "./layouts/Layout"

export default function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="vans" element={<Vans />} />
                    <Route path="vans/:id" element={<Vans />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="dashboard" element={<DashBoard />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter >
    )
}