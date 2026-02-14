import type { JSX } from "react";
import type { Van } from "../../types/Van";
import { Link } from "react-router-dom";

type VanProps = {
    van: Van
}

export default function DetailedVan({ van }: VanProps): JSX.Element {

    function vanTypeBgColor(vanType: Van["type"]): string {
        if (!vanType) return "#e17654"
        if (vanType === "comfort") {
            return "#2f85a2"
        }
        if (vanType === "eco") {
            return "#2d9339"
        }
        if (vanType === "luxury") {
            return "#161616"
        }
        if (vanType === "rugged") {
            return "#115e59"
        }
        if (vanType === "simple") {
            return "#e17654"
        } else {
            return "#e17654"
        }
    }

    return (

        <div className="detailed-van-container">
            <Link to="/vans" className="back-link">← Back to all vans</Link>
            <div className="van-item">
                <img className="van-image" src={van.imageURL} alt={van.name} />
                <div className="van-details">
                    <p className="van-type" style={{ backgroundColor: vanTypeBgColor(van.type) }}>{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</p>
                    <h3 className="van-name" >{van.name}</h3>
                    <p className="van-price"><span className="bold">${van.price}</span>/day</p>
                    <p className="van-description">{van.description}</p>
                    <button type="button" aria-label={`Rent ${van.name} van`}>Rent this van</button>
                </div>
            </div>
        </div>
    )

}