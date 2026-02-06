import { type JSX } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
export default function App(): JSX.Element {

    function Home(): JSX.Element {
        return <h1>Welcome to Home Page</h1>
    }

    function About(): JSX.Element {
        return <h1>About Us</h1>
    }

    // Same app with React Router
    return (
        <BrowserRouter >
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}