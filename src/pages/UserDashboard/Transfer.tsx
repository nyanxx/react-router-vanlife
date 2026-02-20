import type { JSX } from "react"
import FilterButton from "./components/FilterButton"

export default function Transfer(): JSX.Element {
    return (
        <section className="p-12 text-[1.1rem] w-7xl mx-auto">
            <h2 className="text-[2.5rem] mb-[-0.7rem] font-medium">Transfers</h2>
            <p>Last <span className="text-[#434343] font-semibold underline" >0 days</span></p>
            <p className="mt-4 text-[2.5rem] font-bold"><strong>$0.00</strong></p>
            <div className="py-32 px-20 text-center text-red-500">
                <p>Graph</p>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-[1.7rem] font-medium">Transaction History</h3>
                    <ul className="flex gap-4">
                        <FilterButton>Newest</FilterButton>
                        <FilterButton>Oldest</FilterButton>
                        <FilterButton>Highest</FilterButton>
                        <FilterButton>Lowest</FilterButton>
                    </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 text-[1rem]">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <p key={index} className="bg-white p-[1.3rem] flex justify-between rounded-lg border border-[#161616]">
                            <span>$10,000.00</span>
                            <span>Sat Feb 14 2026</span>
                        </p>
                    ))}
                </div>
                <div className="mt-4 flex justify-between">
                    <select className="py-[0.4rem] pr-6 pl-[0.1rem] rounded-[0.3rem] border border-[#161616] cursor-pointer" name="perpage" id="perpage">
                        <option value="5">5</option>
                        {/* Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.  */}
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                    <div>
                        <button className="rounded-[0.3rem] bg-white border border-[#161616] py-2 px-[0.8rem] mr-[0.3rem] cursor-pointer transition duration-200 ease-in-out font-bold hover:bg-[#ececec]" type="button">{"<"}</button>
                        <button className="rounded-[0.3rem] bg-white border border-[#161616] py-2 px-[0.8rem] mr-[0.3rem] cursor-pointer transition duration-200 ease-in-out font-bold hover:bg-[#ececec]" type="button">{">"}</button>
                    </div>
                </div>
            </div>
        </section >
    )
}