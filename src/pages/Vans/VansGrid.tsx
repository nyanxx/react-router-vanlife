import { type JSX } from "react";
import { useOutletContext } from "react-router-dom";
import VanComponent from "./Van";
import type { Van } from "../../types/Van";

export default function VansGrid(): JSX.Element {
    const context: { filteredVans: Van[], searchParams: URLSearchParams } = useOutletContext()

    return (
        <div className="grid grid-cols-3 gap-10 justify-between my-8">
            {
                context.filteredVans.length ?
                    context.filteredVans.map((van) => (
                        <VanComponent key={van.id} van={van} linkTo="/vans/" preserveParam={context.searchParams.toString()} />))
                    :
                    <h3 className="pt-15 text-center text-2xl text-red-950 opacity-80 font-bold">No vans available</h3>
            }
        </div>
    )
}