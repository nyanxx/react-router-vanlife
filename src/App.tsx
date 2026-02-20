import { BrowserRouter, Routes, Route } from "react-router-dom"
import type { JSX } from "react"
import "./mirageServer"
import Layout from "./layouts/Layout"
import UserLayout from "./layouts/UserLayout"
import Home from "./pages/Home"
import Vans from "./pages/Vans"
import DetailedVan from "./pages/Vans/DetailedVan"
import About from "./pages/About"
// import Contact from "./pages/Contact"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import NotFound from "./pages/NotFound"
import UserDashboard from "./pages/UserDashboard"
import Income from "./pages/UserDashboard/Income"
import Transfer from "./pages/UserDashboard/Transfer"
import UserVans from "./pages/UserDashboard/UserVans"
import UserDetailedVan from "./pages/UserDashboard/UserDetailedVan"
import Reviews from "./pages/UserDashboard/Reviews"
import AddVan from "./pages/UserDashboard/AddVan"
import Rentals from "./pages/UserDashboard/Rentals"

export default function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="vans" element={<Vans />} />
                    {/* <Route path="vans/:id" element={<Vans />} /> */}
                    <Route path="vans/:id" element={<DetailedVan />} />
                    <Route path="about" element={<About />} />
                    {/* <Route path="contact" element={<Contact />} /> */}
                    <Route path="signup" element={<SignUp />} />
                    <Route path="signin" element={<SignIn />} />

                    <Route path="user" element={<UserLayout />}>
                        <Route index element={<UserDashboard />} />
                        <Route path="income" element={<Income />} />
                        <Route path="transfer" element={<Transfer />} />
                        <Route path="uservans" element={<UserVans />} />
                        <Route path="uservans/:id" element={<UserDetailedVan />} />
                        <Route path="reviews" element={<Reviews />} />
                        <Route path="addvan" element={<AddVan />} />
                        <Route path="rentals" element={<Rentals />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter >
    )
}