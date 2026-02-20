import type { JSX } from "react"

export default function Income(): JSX.Element {
    return (
        <section className="p-12 text-[1.1rem] w-7xl mx-auto">
            <h2 className="text-[2.5rem] mb-[-0.7rem] font-medium">Income</h2>
            <p>Last <span className="text-[#434343] font-semibold underline">0 days</span></p>
            <p className="mt-4 text-[2.5rem] font-bold"><strong>$0.00</strong></p>
            <div className="py-32 px-20 text-center">
                <p className="text-red-500">No income yet</p>
            </div>
            <div>
                <p className="text-center text-red-500">Rent some vans and your income will appear here.</p>
                <p className="text-right text-gray-700 text-[0.9rem] italic">No items found</p>
            </div>
        </section>
    )
}