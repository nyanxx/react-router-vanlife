import { useEffect, useRef, type JSX } from "react"
import { Link } from "react-router-dom"
import type { User } from "../types/User"

export default function SignUp(): JSX.Element {

    function handleForm(formData: FormData) {
        const name = formData.get("name")
        const email = formData.get("email")
        const password = formData.get("password")
        const confPassword = formData.get("confirm-password")

        try {

            const usersString = localStorage.getItem('users')
            const users: User[] = usersString && JSON.parse(usersString) || [];
            const userExists = users.some(existingUser => existingUser.email === email || existingUser.name === name);

            if (userExists) {
                alert('Error: User with this email or username already exists.');
                return;
            }

            if (password !== confPassword) {
                alert('Error: Password is not same');
                return;
            }

            const userObj: User = {
                name: name as string,
                email: email as string,
                password: password as string,
            }

            users.push(userObj)
            localStorage.setItem("users", JSON.stringify(users))
            console.log('Stored users:', users);
            alert('Account created successfully!');

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
            <form action={handleForm} className="bg-white p-8 rounded-md flex flex-col gap-4 shadow-md">
                <h2 ref={head} tabIndex={-1} className="text-lg focus:outline-none">Create your account</h2>
                <label htmlFor="name" className="sr-only">Enter your name</label>
                <input
                    id="name"
                    name="name"
                    className="py-2 px-[0.6rem] rounded-md border border-[#696969] border-solid"
                    type="text"
                    placeholder="Joo Foobar"
                    defaultValue={"Joo Foobar"}
                    aria-label="Enter your name"
                    required
                />
                <label htmlFor="email" className="sr-only">Enter your email</label>
                <input
                    id="email"
                    name="email"
                    className="py-2 px-[0.6rem] rounded-md border border-[#696969] border-solid"
                    type="email"
                    placeholder="joo.foobar@email.com"
                    defaultValue="foobar@email.com"
                    aria-label="Enter your email"
                    required
                />
                <label htmlFor="password" className="sr-only">Enter new password</label>
                <input
                    id="password"
                    name="password"
                    className="py-2 px-[0.6rem] rounded-md border border-[#696969] border-solid"
                    type="password"
                    placeholder="Password"
                    defaultValue="password"
                    aria-label="Enter new password"
                    required
                />
                <label htmlFor="confirm-password" className="sr-only">Confirm your email</label>

                <input
                    id="confirm-password"
                    name="confirm-password"
                    className="py-2 px-[0.6rem] rounded-md border border-[#696969] border-solid"
                    type="password"
                    placeholder="Confirm Password"
                    defaultValue="password"
                    aria-label="Confirm your email"
                    required
                />
                <button className="button" aria-label="Submit the form" type="submit">Sign up</button>
                <p className="text-gray-500 text-sm">
                    Already have an account? <Link className="text-button [word-spacing:-0.07rem] hover:underline" aria-label="Go to sign in page" to="/signin">Sign in now</Link>
                </p>
            </form >
        </section >
    )
}