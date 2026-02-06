import type { JSX } from "react"
import { useParams } from "react-router-dom"

export default function Services(): JSX.Element {
    const id = useParams()
    return (
        <>
            <h1>Our Services are listed here</h1>
            {id && <h1>{id.id}</h1>}
            {/* Object.keys(id).length */}
        </>

    )
}

