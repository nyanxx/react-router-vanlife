import { useEffect, useState, type JSX } from "react"
import type { Van } from "../../types/Van"
import { getVanTypeColor } from "../../utils";
import { Link } from "react-router-dom";


export default function Rentals(): JSX.Element {


    const [rentedVans, setRentedVans] = useState<Van[]>()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)


    useEffect(() => {
        fetch("/api/user/uservans")
            .then(res => res.json())
            .then(json => {
                setError(false)
                if (json.success) {
                    const rVans: Van[] = json.data.filter((van: Van): boolean => van.status === "rented")
                    setRentedVans(rVans)
                }
            }).catch(err => {
                console.error(err)
                setError(true)
            }).finally(() => {
                setIsLoading(false)
            })
    }, [])

    return (
        <section className="p-12 text-[1.1rem] w-7xl mx-auto">


            {
                error ?
                    <div className="flex flex-col justify-center items-center h-full p-12 text-[1.1rem] w-7xl mx-auto">
                        <h1 className="text-5xl mb-2 font-bold">No Data Found!</h1>
                        <p className="text-3xl mb-2">Sorry, the van you are looking for doesn't exist.</p>
                        <Link to=".." relative="path" className="text-white bg-footer p-3 rounded-[0.6rem]" >
                            Go Back
                        </Link>
                    </div >
                    :
                    <>
                        <h2 className="text-[2.5rem] font-medium mb-4">Vans you are renting</h2>
                        {
                            isLoading ?
                                <div className="flex justify-center items-center w-full p-18">
                                    <h3 className="font-bold text-2xl">Loading...</h3>
                                </div>
                                :
                                (rentedVans && rentedVans.length) ?
                                    <div className="grid grid-cols-3 gap-10 justify-between">
                                        {
                                            rentedVans.map((van: Van): JSX.Element => (
                                                <div key={van.id} className="bg-white text-[#161616] h-auto w-[365.33px] flex flex-col rounded-lg overflow-hidden shadow-sm ">
                                                    <img className="h-78 w-full object-cover bg-[#f7f7f6]" src={van.imageURL} alt={`Photo of ${van.name}`} />
                                                    <div className="flex justify-between px-4 pt-4 items-center">
                                                        <h3 className="font-bold text-lg">{van.name}</h3>
                                                        <p className="bg-[#663399] text-white py-[0.2rem] px-[0.3rem] rounded-[0.3rem]" style={{ backgroundColor: getVanTypeColor(van.type) }}>{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</p>
                                                    </div>
                                                    <p className="ml-auto mr-4 text-[1.1rem] py-2"><span className="font-semibold">${van.price}</span>/day</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    :
                                    <div>
                                        <p className="mt-[1.6rem] text-center text-red-500">You are currently not renting any vans.</p>
                                        <p className="text-gray-700 italic text-right text-[0.9rem]">No items found</p>
                                    </div>
                        }
                    </>
            }
        </section >
    )
}
