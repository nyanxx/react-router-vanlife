import type { JSX } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Layout(): JSX.Element {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}