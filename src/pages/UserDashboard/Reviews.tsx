import type { JSX } from "react";

export default function Reviews(): JSX.Element {
  return (
    <section className="p-12 md:py-12 md:px-42 w-full text-[1.1rem] mx-auto">
      <h2 className="text-[2.5rem] mb-[-0.7rem] font-medium">Your reviews</h2>
      <div className="py-32 px-20 text-center text-red-500">Graph</div>
      <div>
        <p className="mt-[1.6rem] text-center text-red-500">
          You have received no reviews
        </p>

        <p className="text-gray-700 italic text-right text-[0.9rem]">
          No items found
        </p>
      </div>
    </section>
  );
}
