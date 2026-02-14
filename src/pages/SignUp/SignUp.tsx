import type { JSX } from "react"
import { Link } from "react-router-dom"
import "./SignUp.css"

export default function SignUp(): JSX.Element {
    return (
        <section className="signup-section">
            < form >
                <h2>Create your account</h2>
                <input type="text" placeholder="Joo Foobar" />
                <input type="email" placeholder="joo.ava@email.com" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button type="submit">Sign up</button>
                <p>
                    Already have an account? <Link to="/signin">Sign in now</Link>
                </p>
            </form >
        </section >
    )
}