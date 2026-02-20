import type { JSX } from "react";
import { Outlet, NavLink, type NavLinkRenderProps } from "react-router-dom";
export default function UserLayout(): JSX.Element {

    const linkBaseStyle = `p-1 mr-8 text-[#161616] border-b-2 border-transparent`
    const activeLinkStyle = `p-1 mr-8 text-[#161616] font-bold border-b-2 border-solid border-black`
    const hoverLinkStyle = `hover:text-button hover:border-b-2 hover:border-solid hover:border-button`

    function navLinkClass({ isActive }: NavLinkRenderProps): string {
        return isActive ? activeLinkStyle : `${linkBaseStyle} ${hoverLinkStyle}`
    }

    return (
        <>
            <nav className="mt-16 bg-[#ffedd6] min-h-12.5 flex items-center justify-center gap-4">
                <NavLink
                    to="."
                    className={navLinkClass}
                    end
                >Dashboard
                </NavLink>
                <NavLink
                    to="income"
                    className={navLinkClass}
                >Income
                </NavLink>
                <NavLink
                    to="transfer"
                    className={navLinkClass}

                >Transfer
                </NavLink>
                <NavLink
                    to="uservans"
                    className={navLinkClass}

                >Your Vans
                </NavLink>
                <NavLink
                    to="reviews"
                    className={navLinkClass}

                >Reviews
                </NavLink>
                <NavLink
                    to="addvan"
                    className={navLinkClass}

                >Add Van
                </NavLink>
                <NavLink
                    to="rentals"
                    className={navLinkClass}

                >Rentals
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}   