import type { JSX } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import About from "./pages/About"
import Contact from "./pages/Contact"

export default function App(): JSX.Element {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link> | <Link to="/services">Services</Link> | <Link to="/about">About Us</Link> | <Link to="/contact">Contact Us</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

        </BrowserRouter>
    )
}