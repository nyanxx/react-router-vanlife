import type { JSX } from "react"
import { Link } from "react-router-dom"
import "./SignIn.css"

export default function SignIn(): JSX.Element {
    return (
        <section className="signin-section">
            <form>
                <h2>SignIn to your account</h2>
                <input type="email" placeholder="joo.ava@email.com" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign in</button>
                <p>
                    Don't have an account? <Link to="/signup">Create a new one</Link>
                </p>
            </form>
        </section>
    )
}