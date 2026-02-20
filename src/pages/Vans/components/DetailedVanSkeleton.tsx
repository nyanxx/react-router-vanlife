import type { JSX } from "react";

export default function DetailedVanSkeleton(): JSX.Element {
    return (
        <div className="flex flex-col p-12 w-7xl mx-auto animate-[pulse_1.5s_infinite] [@keyframes_pulse:{0%{opacity:1}50%{opacity:.4}100%{opacity:1}} ">
            <div className="mr-auto mb-8 font-jost hover:underline hover:text-button cursor-pointer text-[16.6px]">← Back to all vans</div>
            <div className="flex gap-8 bg-white p-8 rounded-lg">
                <div className="object-cover rounded-lg bg-[#e0e0e0] w-100 h-100" />
                <div className="flex flex-col justify-center ml-auto gap-3">
                    <div className="rounded-lg bg-[#e0e0e0] py-[0.2rem] px-2 w-14.75 h-7.5 ml-auto"></div>
                    <div className="rounded-lg  bg-[#e0e0e0] w-68 h-15 ml-auto"></div>
                    <div className="rounded-lg  bg-[#e0e0e0] w-24.5 h-8.25 ml-auto"></div>
                    <div className="rounded-lg w-xl h-12 bg-[#e0e0e0] ml-auto "></div>
                    {/* <div className="rounded-lg w-54 mt-4 h-10.5 bg-[#e0e0e0] ml-auto"></div> */}
                </div>
            </div>
        </div>
    )
}