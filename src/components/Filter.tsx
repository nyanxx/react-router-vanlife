import type { JSX, PropsWithChildren } from "react"
import type { Van } from "../types/Van"
import { capitalize, getVanTypeColor } from "../utils"
import type { FilterQuery } from "../types/FilterQuery"


type FilterButtonProps = {
    value: Van["type"]
    setQueries: (query: FilterQuery) => void
    removeQueries: (query: FilterQuery) => void
    allSelectedTypes: string[]
}

export default function FilterButton({ value, setQueries, removeQueries, allSelectedTypes }: PropsWithChildren<FilterButtonProps>): JSX.Element {

    function handleClick() {
        if (!allSelectedTypes.includes(value)) {
            setQueries({ for: "type", vanType: value })
        } else {
            removeQueries({ for: "type", vanType: value })
        }
    }

    return (
        <div onClick={handleClick}
            style={{
                backgroundColor: allSelectedTypes.includes(value) ? getVanTypeColor(value) : "",
                color: allSelectedTypes?.includes(value) ? "white" : ""
            }}
            className={
                `cursor-pointer 
                bg-[#f7c59b] 
                text-[#161616] 
                font-bold py-2 px-[0.8rem] 
                rounded-lg 
                text-[0.9rem] 
                ransition 
                hover:bg-[#ffb476]`
            }
        >
            {capitalize(value)}
        </div>
    )
}
