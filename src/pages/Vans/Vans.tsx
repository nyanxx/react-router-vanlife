import { useEffect, useState, type JSX } from "react"
import { useParams } from "react-router-dom"
import type { Van } from "../../types/Van"
import VanComponenet from "./Van"
import DetailedVan from "./DetailedVan";
import CardSkeleton from "../../components/CardSkeleton";
import GoToTop from "../../components/GoToTop";
import "./Vans.css"

export default function Vans(): JSX.Element {

    let singleVan: Van | undefined;

    const [vans, setVans] = useState<Van[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const { id } = useParams()
    if (id) {
        singleVan = vans.find((van: Van): boolean => van.id === +id)
    }

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(json => {
                setVans(json)
                setError(false)
            })
            .catch((err) => {
                console.error("Fetch ERR: ", err)
                setError(true)

            }).finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <section className="vans-section">
            {
                (id && singleVan) ?
                    <DetailedVan van={singleVan} />
                    :
                    <>
                        <h2>Explore our van options</h2>
                        {
                            loading ?

                                <>
                                    <div className="vans-container" inert={loading}>
                                        {/* <h3>Loading...</h3> */}
                                        {Array.from({ length: 6 }).map((_, index) => <CardSkeleton key={index} />)}
                                    </div>

                                </>

                                :

                                <>
                                    {
                                        (!vans.length || error) ?
                                            <h3>No vans available</h3>
                                            :
                                            <>
                                                <div className="vans-container">
                                                    {vans.map(van => <VanComponenet key={van.id} van={van} />)}
                                                </div>
                                            </>
                                    }
                                </>
                        }
                    </>
            }
            <GoToTop />
        </section >
    )

}

