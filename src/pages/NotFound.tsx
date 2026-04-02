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
      <h1 className="text-3xl md:text-5xl mb-2 font-bold smooth-transition">
        404 - Page Not Found
      </h1>
      <p className="text-xl md:text-3xl mb-2 md:mb-3 text-center smooth-transition">
        Sorry, the page you are looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="text-white bg-footer p-2 md:p-3 rounded-[0.6rem] smooth-transition"
      >
        Go back to Home
      </Link>
    </section>
  );
}
