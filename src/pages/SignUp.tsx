import type { JSX } from "react"
import { Link } from "react-router-dom"

export default function SignUp(): JSX.Element {
    return (
        <section className="flex justify-center items-center h-full">
            <form className="bg-white p-8 rounded-md flex flex-col gap-4 shadow-md">
                <h2 className="text-lg">Create your account</h2>
                <input className="py-2 px-[0.6rem] rounded-md border border-[#696969] border-solid" type="text" placeholder="Joo Foobar" />
                <input className="py-2 px-[0.6rem] rounded-md border border-[#696969] border-solid" type="email" placeholder="joo.ava@email.com" />
                <input className="py-2 px-[0.6rem] rounded-md border border-[#696969] border-solid" type="password" placeholder="Password" />
                <input className="py-2 px-[0.6rem] rounded-md border border-[#696969] border-solid" type="password" placeholder="Confirm Password" />
                <button className="button" type="submit">Sign up</button>
                <p className="text-gray-500 text-sm">
                    Already have an account? <Link className="text-button [word-spacing:-0.07rem] hover:underline " to="/signin">Sign in now</Link>
                </p>
            </form >
        </section >
    )
}