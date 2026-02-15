import type { JSX } from "react";
import { Outlet, NavLink } from "react-router-dom";
export default function UserLayout(): JSX.Element {
    return (
        <>
            <section>
                <nav>
                    <NavLink
                        to="."
                        className={({ isActive }) => (isActive ? "active-nav-link" : "")}
                        end 
                    >Dashboard
                    </NavLink>
                    <NavLink
                        to="income"
                        className={({ isActive }) => (isActive ? "active-nav-link" : "")}
                    >Income
                    </NavLink>
                    <NavLink
                        to="transfer"
                        className={({ isActive }) => (isActive ? "active-nav-link" : "")}

                    >Transfer
                    </NavLink>
                    <NavLink
                        to="/user/uservans"
                        className={({ isActive }) => (isActive ? "active-nav-link" : "")}

                    >Your Vans
                    </NavLink>
                    <NavLink
                        to="/user/reviews"
                        className={({ isActive }) => (isActive ? "active-nav-link" : "")}

                    >Reviews
                    </NavLink>
                    <NavLink
                        to="/user/addvan"
                        className={({ isActive }) => (isActive ? "active-nav-link" : "")}

                    >Add Van
                    </NavLink>
                    <NavLink
                        to="/user/rentals"
                        className={({ isActive }) => (isActive ? "active-nav-link" : "")}

                    >Rentals
                    </NavLink>
                </nav>
                <Outlet />
            </section>
        </>
    )
}   