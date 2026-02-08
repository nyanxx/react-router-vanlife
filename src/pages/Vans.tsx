import { useEffect, useState, type JSX } from "react"
import { useParams } from "react-router-dom"
import type { Van } from "../server"

export default function Vans(): JSX.Element {

    const { id } = useParams()
    const [vans, setVans] = useState<Van[]>([])

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(json => setVans(json))
    }, [])

    let van: Van | undefined;
    if (id) {
        van = vans.find((van: Van): boolean => van.id === +id)
    }

    return (
        <>
            <h1>Browse our Vans</h1>

            <ul>
                {vans.map((van: Van): JSX.Element =>
                    <li key={van.id}>{van.name} - ${van.price}/day ({van.type})</li>
                )}
            </ul>


            {(id && van) ?
                <ul>
                    <li>{van?.name} - ${van?.price}/day ({van?.type})</li>
                </ul>
                : undefined}
        </>
    )

}

