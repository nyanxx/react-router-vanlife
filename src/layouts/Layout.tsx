import type { JSX } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardSkeleton from "../components/CardSkeleton";

export default function Layout(): JSX.Element {

    const navigation = useNavigation()
    const isLoadingVans =
        navigation.state === "loading" &&
        navigation.location?.pathname === "/vans";


    return (
        <>
            <Header />
            {isLoadingVans ? (
                <section className="mt-20 flex flex-col w-7xl mx-auto">
                    <h2 className="text-[60px] font-medium">
                        Explore our van options
                    </h2>

                    <div className="grid grid-cols-3 gap-10 justify-between my-8">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <CardSkeleton key={i} />
                        ))}
                    </div>
                </section>
            ) : (
                <Outlet />
            )}
            <Footer />
        </>
    )
}