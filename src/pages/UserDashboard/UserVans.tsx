import { useEffect, useState, type JSX } from "react";
import VanElement from "../Vans/Van";
import type { Van } from "../../types/Van";
import CardSkeleton from "../../components/CardSkeleton";
import { Link } from "react-router-dom";
// import axios from "axios";
import { useAuthFetch } from "../../context/AuthContext";

export default function UserVans(): JSX.Element {
  const { authFetch } = useAuthFetch();

  const [userVans, setUserVans] = useState<Van[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getUserVans() {
      try {
        const response = await authFetch("/api/user/vans");
        // const response = await axios.get("/api/user/vans", {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //     "Content-Type": "application/json",
        //   },
        // });

        if (response.status === 200) {
          // console.log(response.data);
          setError(false);
          setUserVans(response.data);
        } else {
          throw new Error(
            `${response.status}: ${response.data.message || "Error fetching user vans"}`,
          );
        }
      } catch (error) {
        console.error("Fetch err:", error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getUserVans();
  }, [authFetch]);

  return (
    <section className="p-12 md:py-12 md:px-42 w-full text-[1.1rem] mx-auto">
      <h2 className="text-[2.5rem] mb-[-0.7rem] font-medium text-center xl:text-left">
        Your listed vans
      </h2>

      {error ? (
        <div className="p-12.5 flex flex-col justify-center items-center">
          <h1 className="text-5xl mb-2 font-bold">No Data Found!</h1>
          <p className="text-3xl mb-2">
            Sorry, the vans you are looking for doesn't exist.
          </p>
          <Link
            to=".."
            relative="path"
            className="text-white bg-footer p-3 rounded-[0.6rem]"
          >
            Go back to Dashboard
          </Link>
        </div>
      ) : isLoading ? (
        <div
          className="grid grid-cols-3 gap-10 justify-between py-4 mt-5 mb-8"
          inert={isLoading}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      ) : userVans && userVans.length ? (
        <div className="flex items-center flex-wrap gap-10 justify-center xl:justify-normal py-4 mt-5 mb-8">
          {userVans.map((van) => {
            return (
              <VanElement key={van.id} van={van} linkTo="/user/uservans/" />
            );
          })}
        </div>
      ) : (
        <>
          <div>
            <p className="mt-[1.6rem] text-center text-red-500">
              You are currently not listing any vans.
            </p>
            <p className="text-gray-700 italic text-right text-[0.9rem]">
              No items found
            </p>
          </div>
          <div className="flex justify-center mt-16">
            <Link to="../addvan" className="button py-2 px-4" relative="path">
              Add Van
            </Link>
          </div>
        </>
      )}
    </section>
  );
}
