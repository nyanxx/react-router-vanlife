import { useEffect, useState, type JSX } from "react"
import type { Van } from "../../types/Van"
import VanComponenet from "./Van"
import CardSkeleton from "../../components/CardSkeleton";
import GoToTop from "../../components/GoToTop";

export default function Vans(): JSX.Element {


    const [vans, setVans] = useState<Van[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(json => {
                setError(false)
                setVans(json.data)
            })
            .catch((err) => {
                console.error("Fetch ERR: ", err)
                setError(true)

            }).finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <section className="mt-20 flex flex-col items-center">
            {

                <>
                    <h2 className="text-[60px] font-medium">Explore our van options</h2>
                    {
                        loading ?
                            <div className="grid grid-cols-3 gap-10 p-4 mt-5 mb-8" inert={loading}>
                                {Array.from({ length: 6 }).map((_, index) => <CardSkeleton key={index} />)}
                            </div>
                            :
                            (!vans.length || error) ?
                                <h3>No vans available</h3>
                                :
                                <div className="grid grid-cols-3 gap-10 p-4 mt-5 mb-8">
                                    {vans.map(van => <VanComponenet key={van.id} van={van} linkTo="/vans/" />)}
                                </div>
                    }
                </>
            }
            <GoToTop />
        </section >
    )

}

