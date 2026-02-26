import type { JSX } from "react";
import { DropdownMenu } from "radix-ui";
import { CaretDownIcon } from "@radix-ui/react-icons"
import type { FilterQuery } from "../../../types/FilterQuery";

type SortByProps = { setQueries: (query: FilterQuery) => void }

export default function SortBy({ setQueries }: SortByProps): JSX.Element {

    function handleOptionClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const sortQuery = (event.target as HTMLDivElement).textContent
        // if (sortQuery === "Rating") setQueries({ for: "sortby", sortby: "rating" })
        if (sortQuery === "Price: High - Low") setQueries({ for: "sortby", sortby: "HL" })
        if (sortQuery === "Price: Low - High") setQueries({ for: "sortby", sortby: "LH" })
    }

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className={`cursor-pointer bg-[#f7c59b] text-[#161616] font-bold py-2 px-[0.8rem] rounded-lg text-[0.9rem] transition hover:bg-[#ffb476]`}>
                Sort by
                <CaretDownIcon className="pl-1 inline-block" style={{ transform: "scale(1.7)" }} />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content onClick={handleOptionClick} className="overflow-hidden bg-white text-nowrap shadow-lg z-99 mt-2 rounded-md">
                {/* <DropdownMenu.Item className="py-2 px-4 block hover:bg-button cursor-pointer">Rating</DropdownMenu.Item> */}
                <DropdownMenu.Item className="py-2 px-4 block hover:bg-button cursor-pointer">Price: High - Low</DropdownMenu.Item>
                <DropdownMenu.Item className="py-2 px-4 block hover:bg-button cursor-pointer">Price: Low - High</DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root >
    )
}


// onClick={() => {
//                     setQueries({ for: "sortby", sort: "HL" })
//                 }} 