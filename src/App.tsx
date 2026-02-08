import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import type { JSX } from "react"
import "./server"
import Home from "./pages/Home"
import Vans from "./pages/Vans"
import About from "./pages/About"
import Contact from "./pages/Contact"

export default function App(): JSX.Element {
    return (
        <BrowserRouter>
            <header>
                <h1>#VanLife</h1>
                <nav>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "active-nav-link" : "")}
                    >Home</NavLink>
                    <NavLink
                        to="/vans"
                        className={({ isActive }) => (isActive ? "active-nav-link" : "")}
                    >Vans</NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? "active-nav-link" : "")}
                    >About Us</NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? "active-nav-link" : "")}
                    >Contact Us</NavLink>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vans" element={<Vans />} />
                <Route path="/vans/:id" element={<Vans />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter >
    )
}