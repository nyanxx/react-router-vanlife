import type { JSX } from "react"
import { useParams } from "react-router-dom"

export default function Vans(): JSX.Element {
    const id = useParams()
    return (
        <>
            <h1>Browse our Vans</h1>
            {id && <h1>{id.id}</h1>}
            {/* Object.keys(id).length */}
        </>

    )
}

