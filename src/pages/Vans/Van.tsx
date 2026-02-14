import type { JSX } from "react";
import type { Van } from "../../types/Van";
import { Link, useNavigate } from "react-router-dom";

type VanProps = {
    van: Van
}

export default function Van({ van }: VanProps): JSX.Element {

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

    const navigate = useNavigate()

    function handleClick() {
        navigate(`/vans/${van.id}`)
    }

    return (
        <Link to={`/vans/${van.id}`} className="van" onClick={handleClick}>
            <img src={van.imageURL} alt={`Photo of ${van.name}`} />
            <div>
                <h3>{van.name}</h3>
                <p className="van-type" style={{ backgroundColor: vanTypeBgColor(van.type) }}>{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</p>
            </div>
            <p className="van-price"><span className="bold">${van.price}</span>/day</p>
        </Link>
    )

}