import { Link } from "react-router-dom";
import type { JSX } from "react";

/**       
 * <Routes>
 *   <Route path="*" element={<NotFound />} />
 * </Routes>
 */
export default function NotFound(): JSX.Element {
    return (
        <section className="p-12.5 flex flex-col justify-center items-center h-full">
            <h1 className="text-5xl mb-2 font-bold">404 - Page Not Found</h1>
            <p className="text-3xl mb-2">Sorry, the page you are looking for doesn't exist.</p>
            <Link to="/" className="text-white bg-footer p-3 rounded-[0.6rem]" >
                Go back to Home
            </Link>
        </section >
    );
}

