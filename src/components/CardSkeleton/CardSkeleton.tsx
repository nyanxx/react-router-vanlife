import type { JSX } from "react"
import "./CardSkeleton.css"

export default function CardSkeleton(): JSX.Element {
    return (

        <div className="card-skeleton">
            <div className="card-img-skeleton" />
            <div>
                <h3></h3>
                <p className="card-type-skeleton"></p>
            </div>
            <p className="card-price-skeleton"></p>
        </div >
    )
}