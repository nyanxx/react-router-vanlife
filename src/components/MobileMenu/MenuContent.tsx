import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useMobileMenuContext } from "./MobileMenu";

export const MenuContent = () => {
  const { isMenuActive, menuToggle } = useMobileMenuContext();
  const { authStatus, logout } = useAuthContext();

  const hamMenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* Toggle menu (off) if click outside of menu */
    function handleOutsideClick(event: MouseEvent) {
      if (hamMenu.current && !hamMenu.current.contains(event.target as Node)) {
        menuToggle();
      }
    }

    if (isMenuActive) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuActive, menuToggle]);

  // if (isMenuActive) // By commenting this keeping the component always mounted (for transition to work)
  return (
    <>
      {/* Semi-transparent Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black opacity-60 
          transition-opacity duration-200 ${isMenuActive ? "translate-x-0" : "translate-x-full"}`}
        onClick={() => menuToggle()}
      />
      {/* Scope: Accept content through children or props */}
      {/* Slider - (Edit as per your need) */}
      <div
        ref={hamMenu}
        className={`bg-amber-100 absolute h-screen md:hidden w-100 z-99999999 right-0 top-0 flex flex-col 
          transform transition-transform duration-200 ease-in-out ${isMenuActive ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-5 right-11 font-bold text-xl cursor-pointer w-8 h-8 rounded-full transition hover:bg-amber-200 hover:shadow-2xl hover:shadow-amber-200"
          onClick={() => menuToggle()}
        >
          X
        </button>
        <nav className="flex flex-col items-center justify-center h-full gap-5">
          {[
            { name: "home", path: "", alt: "Go to homepage", show: true },
            { name: "vans", path: "vans", alt: "Explore vans", show: true },
            {
              name: "about",
              path: "about",
              alt: "Know about us",
              show: true,
            },
            {
              name: "dashboard",
              path: "user",
              alt: "Go to user dashboard",
              // show: isLogedIn,
              show: authStatus === "authenticated",
            },
            {
              name: "sign in",
              path: "signin",
              alt: "Sign into your account",
              // show: !isLogedIn,
              show: authStatus === "unauthenticated",
            },
          ].map(
            (nav) =>
              nav.show && (
                <NavLink
                  key={nav.name}
                  to={`/${nav.path}`}
                  aria-label={nav.alt}
                  title={nav.alt}
                  className={({ isActive }) =>
                    [
                      "p-1 text-2xl mr-8 text-[#161616] border-b-2 border-transparent capitalize hover:text-button hover:border-b-2 hover:border-solid hover:border-button cursor-pointer",
                      isActive
                        ? "p-1 mr-8 text-[#161616] font-extrabold border-b-2 border-solid border-black"
                        : "font-medium",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                  onClick={async () => {
                    // await new Promise((resolve) => setTimeout(resolve, 200));
                    menuToggle();
                  }}
                >
                  {nav.name}
                </NavLink>
              ),
          )}
          {authStatus === "authenticated" && (
            <button
              onClick={() => {
                logout();
                menuToggle();
              }}
              className="font-medium p-1 text-2xl mr-8 text-[#161616] border-b-2 border-transparent capitalize hover:text-button hover:border-b-2 hover:border-solid hover:border-button cursor-pointer"
            >
              Signout
            </button>
          )}
        </nav>
      </div>
    </>
  );
};
