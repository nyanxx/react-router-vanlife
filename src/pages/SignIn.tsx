import { useEffect, useRef, type JSX } from "react"
import { Link } from "react-router-dom"
import type { User } from "../types/User"

export default function SignIn(): JSX.Element {

    function handleSignIn(formData: FormData) {
        const email = formData.get("email")
        const password = formData.get("password")

        try {
            const usersString = localStorage.getItem("users")
            const users: User[] = usersString && JSON.parse(usersString)
            if (!users) return alert("User not found")
            const user = users.find(u => u.email === email)
            if (!user) {
                alert("User not found")
                return
            }

            if (user.password === password) {
                alert("password matched")
            } else {
                alert("wrong password or email")
            }

        } catch (error) {
            console.error(error)
        }

    }

    const head = useRef<HTMLHeadingElement>(null)
    useEffect(() => {
        head.current?.focus()
    }, [])

    return (
        <section className="flex justify-center items-center h-full">
            <form action={handleSignIn} className="bg-white p-8 rounded-md flex flex-col gap-4 shadow-md">
                <h2 ref={head} tabIndex={-1} className="text-lg focus:outline-none">SignIn to your account</h2>
                <label htmlFor="email" className="sr-only">Enter your signin email</label>
                <input
                    name="email"
                    className="py-2 px-[0.6rem] rounded-md border border-[#696969] border-solid"
                    type="email"
                    placeholder="joo.ava@email.com"
                    aria-label="Enter your signin email"
                    defaultValue={"foobar@email.com"}
                    required
                />
                <label htmlFor="password" className="sr-only">Enter your signin password</label>
                <input
                    name="password"
                    className="py-2 px-[0.6rem] rounded-md border border-[#696969] border-solid"
                    type="password"
                    placeholder="Password"
                    defaultValue={"password"}
                    aria-label="Enter your signin password"
                    required
                />
                <button className="button" type="submit">Sign in</button>
                <p className="text-gray-500 text-sm">
                    Don't have an account? <Link className="text-button [word-spacing:-0.07rem] hover:underline " to="/signup">Create a new one</Link>
                </p>
            </form>
        </section>
    )
}