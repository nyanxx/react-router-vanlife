import type { JSX } from "react"
import { Link, NavLink, type NavLinkRenderProps } from "react-router-dom"
// import { siteLogo } from "./assets/images/images"

export default function Header(): JSX.Element {

    const linkBaseStyle = `p-1 mr-8 text-[#161616] border-b-2 border-transparent`
    const activeLinkStyle = `p-1 mr-8 text-[#161616] font-bold border-b-2 border-solid border-black`
    const hoverLinkStyle = `hover:text-button hover:border-b-2 hover:border-solid hover:border-button`
    function navLinkClass({ isActive }: NavLinkRenderProps): string {
        return isActive ? activeLinkStyle : `${linkBaseStyle} ${hoverLinkStyle}`
    }

    return (
        <header className="bg-header flex justify-between items-center fixed w-full z-1000 h-16 shadow-[0_2px_3px_-1px_rgba(0,0,0,0.3)]">
            <Link to="/" aria-label="Go to home page">
                <h1 className="font-bold ml-8 text-[1.5rem] uppercase text-3xl">#VanLife</h1>
            </Link>
            {/* <img src={siteLogo} alt="van-life-site-logo"/> */}
            <nav className="flex items-center justify-center">
                <NavLink
                    to="/vans"
                    aria-label="Explore vans"
                    title="Explore Vans"
                    className={navLinkClass}
                >Vans</NavLink>
                <NavLink
                    to="/about"
                    aria-label="Know about us"
                    title="Know About Us"
                    className={navLinkClass}
                >About Us</NavLink>
                {/* <NavLink
                    to="/contact"
                    aria-label="Contact us"
                    title="Contact Us"
                    className={navLinkClass}
                >Contact Us
                </NavLink> */}
                <NavLink
                    to="/user"
                    aria-label="Go to user profile"
                    className={
                        ({ isActive }) => `p-1 mr-8  ${isActive ? "text-button" : "text-[#161616]"}`
                    }
                    title="User Profile"
                >
                    <svg
                        className="w-6.5 h-6.5 fill-none group"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="fill-current group-hover:fill-button"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            // Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools 
                            d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9999 6C9.79077 6 7.99991 7.79086 7.99991 10C7.99991 12.2091 9.79077 14 11.9999 14C14.209 14 15.9999 12.2091 15.9999 10C15.9999 7.79086 14.209 6 11.9999 6ZM17.1115 15.9974C17.8693 16.4854 17.8323 17.5491 17.1422 18.1288C15.7517 19.2966 13.9581 20 12.0001 20C10.0551 20 8.27215 19.3059 6.88556 18.1518C6.18931 17.5723 6.15242 16.5032 6.91351 16.012C7.15044 15.8591 7.40846 15.7251 7.68849 15.6097C8.81516 15.1452 10.2542 15 12 15C13.7546 15 15.2018 15.1359 16.3314 15.5954C16.6136 15.7102 16.8734 15.8441 17.1115 15.9974Z"
                        />
                    </svg>
                </NavLink>
            </nav>
        </header>
    )
}