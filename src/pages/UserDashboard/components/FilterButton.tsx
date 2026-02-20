import type { JSX, ReactNode } from "react"
export default function FilterButton({ children }: { children: ReactNode }): JSX.Element {
    return <li className="cursor-pointer bg-[#fc923c] text-white py-2 px-[0.8rem] rounded-lg font-medium text-[0.9rem] transition hover:bg-[#e17b27]">{children}</li>
}