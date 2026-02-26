import type { Van } from "../../types/Van";
import type { FilterQuery } from "../../types/FilterQuery";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState, type JSX } from "react";
import VanComponent from "./Van";
import CardSkeleton from "../../components/CardSkeleton";
import GoToTop from "../../components/GoToTop";
import Filter from "../../components/Filter";
import SortBy from "./components/SortBy";
import { capitalize } from "../../utils";

export default function Vans(): JSX.Element {

  const [vans, setVans] = useState<Van[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  // derived
  const totalParams = searchParams.getAll("type"); // can be helpfull if adding more filter like status and more in the future
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


  // effect
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((json) => {
        setError(false);
        setVans(json.data);
      })
      .catch((err) => {
        console.error("Fetch ERR: ", err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="mt-20 flex flex-col w-7xl mx-auto">
      <h2 className="text-[60px] font-medium">Explore our van options</h2>

      <div className="border-b border-gray-300 pb-1">
        <div className="flex gap-4 items-center">
          {["simple", "luxury", "rugged", "comfort", "eco"].map(
            (type): JSX.Element => (
              <Filter
                key={type}
                value={type as Van["type"]}
                setQueries={setQueries}
                removeQueries={removeQueries}
                allSelectedTypes={searchParams.getAll("type")}
              />
            ),
          )}
          <SortBy setQueries={setQueries} />
          <button
            onClick={() => {
              setSearchParams("");
            }}
            className="hover:underline cursor-pointer text-sm pl-4 font-medium decoration-[1.3px] underline-offset-2"
          >
            Clear all
          </button>
        </div>
        <div className="pt-4 text-sm flex items-center">
          {totalParams.length} filters
          {totalParams.map((type) => (
            <div
              key={type}
              className="ml-3 bg-blue-100 py-0.5 px-2 rounded-lg text-sm"
            >
              {capitalize(type)}
            </div>
          ))}
        </div>
      </div>

      {loading ? (
        <div
          className="grid grid-cols-3 gap-10 justify-between my-8"
          inert={loading}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      ) : !vans.length || error ? (
        <h3>No vans available</h3>
      ) : (
        <div className="grid grid-cols-3 gap-10 justify-between my-8">
          {
            filteredVans.map((van) => (
              <VanComponent key={van.id} van={van} linkTo="/vans/" preserveParam={searchParams.toString()} />))
          }
        </div>
      )}
      <GoToTop />
    </section>
  );
}

