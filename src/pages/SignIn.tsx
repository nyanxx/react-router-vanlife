import { useEffect, useRef, type JSX } from "react"
import { Link, useNavigate } from "react-router-dom"
import type { User } from "../types/User"
import { EyeOpenIcon, EyeNoneIcon } from "@radix-ui/react-icons";
import { usePasswordVisibility } from "../hooks/usePasswordVisibility";
import { useLoginContext } from "../context/LoginContext";

export default function SignIn(): JSX.Element {

    const navigate = useNavigate()
    const { setLogedIn } = useLoginContext()

    function handleSignIn(formData: FormData) {
        const email = formData.get("email")
        const password = formData.get("password")

        try {
            const usersString = localStorage.getItem("users")
            const users: User[] = usersString && JSON.parse(usersString)
            // if (!users) return alert("User not found")
            if (!users) return alert("wrong password or email")
            const user = users.find(u => u.email === email)
            if (!user) {
                // alert("User not found")
                alert("wrong password or email")
                return
            }

            if (user.password === password) {
                // alert("logged in success")
                // sessionStorage.setItem('isLogedIn', '{"status": true}')
                setLogedIn(true)
                navigate("/user")
            } else {
                alert("wrong password or email")
            }

        } catch (error) {
            console.error(error)
        }

    }

    const { isPasswordVisible, inputType, togglePasswordVisibility } = usePasswordVisibility();

    const head = useRef<HTMLHeadingElement>(null)
    useEffect(() => {
        head.current?.focus()
    }, [])

    // if the inp is controled als contr the value

    return (
        <section className="flex justify-center items-center h-full">
            <form
                action={handleSignIn}
                // onSubmit={handleSubmit}
                className="bg-white p-8 rounded-md flex flex-col gap-4 shadow-md min-w-70"
            >
                <h2 ref={head} tabIndex={-1} className="text-lg focus:outline-none">SignIn to your account</h2>
                <label htmlFor="email" className="sr-only">Enter your signin email</label>
                <input
                    id="email"
                    name="email"
                    className="py-2 px-[0.6rem] rounded-md border border-[#696969] border-solid"
                    type="email"
                    placeholder="joo.ava@email.com"
                    aria-label="Enter your signin email"
                    defaultValue={"foobar@email.com"}
                    // onChange={e => setEmail(e.target.value)}
                    required
                />
                <div className="relative w-full">
                    <label htmlFor="password" className="sr-only">Enter your signin password</label>
                    <input
                        id="password"
                        name="password"
                        className="py-2 px-[0.6rem] pr-9 rounded-md border border-[#696969] border-solid w-full"
                        type={inputType}
                        placeholder="Password"
                        defaultValue={"password"}
                        aria-label="Enter your signin password"
                        // onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <button
                        className="absolute cursor-pointer flex justify-center items-center right-3 top-1/2 -translate-y-1/2"
                        type="button"
                        onClick={togglePasswordVisibility}>
                        {!isPasswordVisible ? <EyeOpenIcon /> : <EyeNoneIcon />}
                    </button>
                </div>


                <button className="button" type="submit">Sign in</button>
                <p className="text-gray-500 text-sm">
                    Don't have an account? <Link className="text-button [word-spacing:-0.07rem] hover:underline " to="/signup">Create a new one</Link>
                </p>
            </form>
        </section>
    )
}