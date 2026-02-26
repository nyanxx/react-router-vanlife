import type { JSX } from "react";
import type { Van } from "../../types/Van";
import { Link } from "react-router-dom";
import { capitalize, getVanStatusColor, getVanTypeColor } from "../../utils";

type VanProps = {
    van: Van
    linkTo: string
    preserveParam?: string
}

export default function Van({ van, linkTo = "/vans/", preserveParam }: VanProps): JSX.Element {

    const param = () => {
        if (preserveParam) {
            return `?${preserveParam}`
        } else {
            return ""
        }
    }

    return (
        <Link state={{ query: param() }} to={`${linkTo}${van.id}`} className="bg-white text-[#161616] h-auto w-[365.33px] flex flex-col rounded-lg overflow-hidden cursor-pointer shadow-sm relative">
            <p className={`right-4 top-4 absolute z-50 py-1 px-2 bg-button text-sm text-white font-medium rounded-[0.3rem]  ${getVanStatusColor(van.status)} `} >{van.status}</p>
            {/* https://sentry.io/answers/how-do-i-auto-resize-an-image-to-fit-a-div-container/  */}
            <img className="h-78 w-full object-cover bg-[#f7f7f6]" src={van.imageURL} alt={`Photo of ${van.name}`} />
            <div className="flex justify-between px-4 pt-4 items-center">
                <h3 className="font-bold text-lg">{van.name}</h3>
                <p className="bg-[#663399] text-white py-[0.2rem] px-[0.3rem] rounded-[0.3rem]" style={{ backgroundColor: getVanTypeColor(van.type) }}>{capitalize(van.type)}</p>
            </div>
            <p className="ml-auto mr-4 text-[1.1rem] py-2"><span className="font-semibold">${van.price}</span>/day</p>
        </Link>
    )

}