import type { JSX } from "react"

export default function CardSkeleton(): JSX.Element {

    return (
        <div className=" 
            bg-white 
            h-100 w-[365.33px] 
            flex flex-col 
            rounded-lg 
            overflow-hidden 
            cursor-pointer 
            animate-[pulse_1.5s_infinite] 
            [@keyframes_pulse:{0%{opacity:1}50%{opacity:.4}100%{opacity:1}}
            shadow-sm"
        >
            <div className="h-78 w-full bg-[#e0e0e0] flex justify-between items-center p-4" />
            <div className="flex justify-between items-center p-4 ">
                <h3 className="m-0 bg-[#e0e0e0] h-6 w-40 rounded-sm"></h3>
                <p className="bg-[#e0e0e0] h-6 w-16 p-[0.2rem_0.5rem] rounded m-0"></p>
            </div>
            <p className="bg-[#e0e0e0] ml-auto mr-4 w-19 rounded-sm h-5 py-2" ></p>
        </div >

    )
}