import { useEffect, useState, type JSX } from "react";
import type { Van } from "../../types/Van";
import { Link, useParams } from "react-router-dom";
import { getVanStatusColor, getVanTypeColor } from "../../utils";
import DetailedVanSkeleton from "../Vans/components/DetailedVanSkeleton";
// import axios from "axios";
import { useAuthFetch } from "../../context/AuthContext";

export default function UserDetailedVan(): JSX.Element {
  const [van, setVan] = useState<Van>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const { id } = useParams();

  // const { token } = useAuthContext();
  const { authFetch } = useAuthFetch();

  useEffect(() => {
    async function fetchUserVansById() {
      try {
        const response = await authFetch(`/api/user/vans/${id}`);

        // const response = await axios.get(`/api/user/vans/${id}`, {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //     "Content-Type": "application/json",
        //   },
        // });

        if (response.status === 200) {
          setError(false);
          setVan(response.data);
        } else {
          throw new Error(
            `${response.status}: ${response.data.message || "Error fetching user van"}`,
          );
        }
      } catch (error) {
        console.error("Fetch err:", error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUserVansById();
  }, [id, authFetch]);

  return (
    <>
      {isLoading ? (
        <DetailedVanSkeleton />
      ) : !error && van ? (
        <div className="flex flex-col py-20 px-10 md:px-20 lg:px-40">
          <Link
            to=".."
            relative="path"
            className="mr-auto mb-8 hover:underline hover:text-button"
          >
            ← Back to all vans
          </Link>
          <div className="flex flex-col items-center lg:flex-row lg:justify-evenly gap-8 bg-white p-8 rounded-lg">
            <div className="relative w-100 lg:w-80 xl:w-100">
              <img
                className="h-100 lg:h-80 xl:h-100 object-cover rounded-lg bg-[#f7f7f6]"
                src={van.imageURL}
                alt={van.name}
              />
              <p
                className={`right-4 top-4 absolute z-50 py-1 px-2 bg-button text-sm text-white font-medium rounded-[0.3rem]  ${getVanStatusColor(van.status)} `}
              >
                {van.status}
              </p>
            </div>{" "}
            <div className="flex w-100 flex-col justify-center md:items-end">
              <p
                className="bg-[##663399] text-white py-[0.2rem] px-2 rounded-[0.3rem] max-w-fit"
                style={{ backgroundColor: getVanTypeColor(van.type) }}
              >
                {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
              </p>
              <h3 className="text-[2.5rem] font-bold">{van.name}</h3>
              <p className="text-[1.4rem]">
                <span className="font-semibold">${van.price}</span>/day
              </p>
              <p className="md:text-right w-[80%]">{van.description}</p>
              {/* <button className="button w-[30%] mt-6 " type="button" aria-label={`Rent ${van.name} van`}>Rent this van</button> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-12.5 flex flex-col justify-center items-center h-full">
          <h1 className="text-5xl mb-2 font-bold">No Data Found!</h1>
          <p className="text-3xl mb-2">
            Sorry, the van you are looking for doesn't exist.
          </p>
          <Link
            to=".."
            relative="path"
            className="text-white bg-footer p-3 rounded-[0.6rem]"
          >
            Go Back
          </Link>
        </div>
      )}
    </>
  );
}
