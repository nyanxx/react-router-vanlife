import type { JSX } from "react";
import SortBy from "./SortBy";
import type { SetURLSearchParams } from "react-router-dom";
import type { FilterQuery } from "../../../../types/FilterQuery";
import Filter from "./Filter";
import type { Van } from "../../../../types/Van";
import { capitalize } from "../../../../utils";


type FiltersAndSortProps = {
    setQueries: (query: FilterQuery) => void
    removeQueries: (query: FilterQuery) => void
    searchParams: URLSearchParams
    setSearchParams: SetURLSearchParams
    totalParams: string[]
}

export default function FiltersAndSort(props: FiltersAndSortProps): JSX.Element {
    return (
        <div className="border-b border-gray-300 pb-1">
            <div className="flex gap-4 items-center">
                {["simple", "luxury", "rugged", "comfort", "eco"].map(
                    (type): JSX.Element => (
                        <Filter
                            key={type}
                            value={type as Van["type"]}
                            setQueries={props.setQueries}
                            removeQueries={props.removeQueries}
                            allSelectedTypes={props.searchParams.getAll("type")}
                        />
                    ),
                )}
                <SortBy setQueries={props.setQueries} />
                <button
                    onClick={() => {
                        props.setSearchParams("");
                    }}
                    className="hover:underline cursor-pointer text-sm pl-4 font-medium decoration-[1.3px] underline-offset-2"
                >
                    Clear all
                </button>
            </div>
            <div className="pt-4 text-sm flex items-center">
                {props.totalParams.length} filters
                {props.totalParams.map((type) => (
                    <div
                        key={type}
                        className="ml-3 bg-blue-100 py-0.5 px-2 rounded-lg text-sm"
                    >
                        {capitalize(type)}
                    </div>
                ))}
            </div>
        </div>
    )
}