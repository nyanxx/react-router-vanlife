import type { JSX } from "react";
import {
    Link,
    // useRouteError
} from "react-router-dom";
// import type { LoaderError } from "../types/LoaderError";

export default function Error(): JSX.Element {

    // const error = useRouteError() as LoaderError

    return (
        <section className="p-12.5 flex flex-col justify-center items-center h-full">
            <h1 className="text-5xl mb-2 font-bold">Error Occured!</h1>
            {/* <p className="text-3xl mb-2">Sorry, there was some problem on our side.</p> */}
            <Link to="/" className="text-white bg-footer p-3 rounded-[0.6rem]" >
                Go back to Home
            </Link>
        </section >

    )
}