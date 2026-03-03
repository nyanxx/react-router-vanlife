import { createBrowserRouter } from "react-router-dom"
import Layout from "./layouts/Layout"
import UserLayout from "./layouts/UserLayout"
import Home from "./pages/Home"
import DetailedVan from "./pages/Vans/DetailedVan"
import About from "./pages/About"
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
import { vansLoader } from "./loaders"
import VansError from "./pages/Vans/components/VansError"
import Error from "./components/Error"
import VansLayout from "./pages/Vans/VansLayout"
import VansGrid from "./pages/Vans/VansGrid"

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        errorElement: <Error />,
        children: [
            { index: true, Component: Home },
            {
                path: "vans",
                Component: VansLayout,
                loader: vansLoader,
                errorElement: <VansError />,
                children: [
                    {
                        index: true,
                        Component: VansGrid,

                    }
                ]
            },
            {
                path: "vans/:id",
                Component: DetailedVan,
            },
            { path: "about", Component: About },
            { path: "signup", Component: SignUp },
            { path: "signin", Component: SignIn },
            {
                path: "user",
                Component: UserLayout,
                children: [
                    { index: true, Component: UserDashboard },
                    { path: "income", Component: Income },
                    { path: "transfer", Component: Transfer },
                    {
                        path: "uservans",
                        Component: UserVans,
                    },
                    {
                        path: "uservans/:id",
                        Component: UserDetailedVan,
                    },
                    { path: "reviews", Component: Reviews },
                    { path: "addvan", Component: AddVan },
                    { path: "rentals", Component: Rentals },
                ]
            },
            { path: "*", Component: NotFound }
        ]
    }
])

export default router