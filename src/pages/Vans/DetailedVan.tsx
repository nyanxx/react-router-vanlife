import { useEffect, useState, type JSX } from "react";
import type { Van } from "../../types/Van";
import { Link, useLocation, useParams } from "react-router-dom";
import { getVanStatusColor, getVanTypeColor } from "../../utils";
import DetailedVanSkeleton from "./components/DetailedVanSkeleton";

export default function DetailedVan(): JSX.Element {

    const [van, setVan] = useState<Van>()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const location = useLocation()
    const query = location.state?.query || ""

    const { id } = useParams()

    useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(json => {
                setError(false)
                setIsLoading(true)
                if (json.success) {
                    setVan(json.data)
                } else {
                    throw new Error("error fetching from miragejs")
                }
            })
            .catch((err) => {
                console.error("Fetch ERR: ", err)
                setError(true)
            }).finally(() => {
                setIsLoading(false)
            })
    }, [id])


    return (
        <>
            {
                isLoading ?
                    <DetailedVanSkeleton />
                    :
                    (!error && van)
                        ?
                        <div className="flex flex-col py-20 px-40">
                            <Link to={`../${query}`} relative="path" className="mr-auto mb-8 hover:underline hover:text-button">← Back to all vans</Link>
                            <div className="flex gap-8 bg-white p-8 rounded-lg">
                                <div className="relative min-w-100">
                                    <img className="h-100 object-cover rounded-lg bg-[#f7f7f6] " src={van.imageURL} alt={van.name} />
                                    <p className={`right-4 top-4 absolute z-50 py-1 px-2 bg-button text-sm text-white font-medium rounded-[0.3rem]  ${getVanStatusColor(van.status)} `} >{van.status}</p>
                                </div>
                                <div className="flex flex-col justify-center items-end">
                                    <p className="bg-[##663399] text-white py-[0.2rem] px-2 rounded-[0.3rem]" style={{ backgroundColor: getVanTypeColor(van.type) }}>{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</p>
                                    <h3 className="text-[2.5rem] font-bold">{van.name}</h3>
                                    <p className="ml-auto text-[1.4rem]"><span className="font-semibold">${van.price}</span>/day</p>
                                    <p className="text-right w-[80%]">{van.description}</p>
                                    <button className={`button w-[30%] mt-6 ${(van.status !== "available") ? "button-disabled " : ""} `} disabled={van.status !== "available"} onClick={() => {
                                        console.log("feat pending...")
                                    }} type="button" aria-label={`Rent ${van.name} van`}>Rent this van</button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="p-12.5 flex flex-col justify-center items-center h-full">
                            <h1 className="text-5xl mb-2 font-bold">No Data Found!</h1>
                            <p className="text-3xl mb-2">Sorry, the van you are looking for doesn't exist.</p>
                            <Link to={`../${query}`} relative="path" className="text-white bg-footer p-3 rounded-[0.6rem]" >
                                Go back to Vans
                            </Link>
                        </div >
            }

        </>
    )

}