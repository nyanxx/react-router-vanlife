import { type JSX } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"

export default function App(): JSX.Element {
    return (
        <BrowserRouter >
            <nav>
                <Link to="/">Home</Link> | <Link to="/contact">Contact</Link> | <Link to="/about">About</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}