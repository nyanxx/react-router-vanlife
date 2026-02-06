import { useState, type JSX } from "react"
export default function App(): JSX.Element {

    const [page, setPage] = useState("home")
    // A Simple React App Without Router
    return (
        <>
            <div>
                <nav>
                    <button onClick={() => (setPage("home"))}>Home</button>
                    <button onClick={() => (setPage("about"))}>About</button>
                </nav>
            </div>
            {page === "home" && <h1>Welcome to Home Page</h1>}
            {page === "about" && <h1>About Us</h1>}
        </>
    )
}