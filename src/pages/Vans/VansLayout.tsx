import { Outlet, useLoaderData, useSearchParams } from "react-router-dom";
import type { JSX } from "react";
import type { Van } from "../../types/Van";
import type { FilterQuery } from "../../types/FilterQuery";
import GoToTop from "../../components/GoToTop";
import FiltersAndSort from "./components/FiltersAndSort";

export default function VansLayout(): JSX.Element {

  const vans = useLoaderData<Van[]>()

  const [searchParams, setSearchParams] = useSearchParams();

  // derived
  const totalParams = searchParams.getAll("type");
  const sortedVans = sortVans(vans);
  const filteredVans = filterVans(sortedVans);

  // functions
  function sortVans(arrOfVan: Van[]): Van[] {
    if (!searchParams.getAll("sortby").length) return arrOfVan

    if (searchParams.get("sortby") === "LH") {
      return [...arrOfVan].sort((a, b) => a.price - b.price);
    }

    if (searchParams.get("sortby") === "HL") {
      return [...arrOfVan].sort((a, b) => b.price - a.price);
    }
    return arrOfVan;
  }

  function filterVans(arrOfVan: Van[]) {
    if (searchParams.getAll("type").length) {
      return arrOfVan.filter((van) =>
        searchParams.getAll("type").includes(van.type),
      );
    } else {
      return arrOfVan;
    }
  }

  function setQueries(query: FilterQuery) {
    if (query.for === "type") {
      setSearchParams((prevPram) => {
        return {
          type: [...new Set([...prevPram.getAll("type"), query.vanType])],
          sortby: prevPram.getAll("sortby"),
        };
      });
    }

    if (query.for === "sortby") {
      setSearchParams((prevPram) => {
        const params = Object.fromEntries(prevPram);
        console.log(params);
        return {
          type: [...new Set([...prevPram.getAll("type")])],
          sortby: query.sortby,
        };
      });
    }
  }

  function removeQueries(query: FilterQuery) {
    if (query.for === "type") {
      setSearchParams((prevPram) => {
        return {
          type: prevPram
            .getAll("type")
            .filter((type) => type !== query.vanType),
          sortby: prevPram.getAll("sortby"),
        };
      });
    }

    // the following is only usefull if i am creating a state for the sorby options for wether they are active or not
    // till then i can just use clear all
    // don't over do it
    // if (query.for === "sortby") {
    //   setSearchParams((prevPram) => {
    //     return { type: [...new Set([...prevPram.getAll("type")])] };
    //   });
    // }
  }

  return (
    <section className="mt-20 flex flex-col w-7xl mx-auto">
      <h2 className="text-[60px] font-medium">Explore our van options</h2>

      <FiltersAndSort
        setQueries={setQueries}
        removeQueries={removeQueries}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        totalParams={totalParams}
      />

      <Outlet
        context={{ filteredVans, searchParams }}
      />
      <GoToTop />
    </section >
  );
}

