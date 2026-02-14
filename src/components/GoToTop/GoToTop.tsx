import { useEffect, useRef, type JSX } from "react"
import "./GoToTop.css"

type GoToTopProps = {
    content?: string | JSX.Element
    activeFromTop?: number
    title?: string
}

function getTopSVG(wh: number = 25, stroke: string = "#000000"): JSX.Element {
    return (
        <>
            {/* Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools  */}
            <svg width={wh} height={wh} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 15L12 10L7 15" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </>
    )
}

export default function GoToTop({
    content = getTopSVG(30, "#161616") || "↑",
    activeFromTop = 20,
    title = "Go to top"
}: GoToTopProps): JSX.Element {

    const goToTopBtnRef = useRef<HTMLButtonElement>(null)

    function scrollFunction(): void {
        if (goToTopBtnRef.current) {
            const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
            // goToTopBtnRef.current.style.display = scrollTop > activeFromTop ? "block" : "none"
            if (scrollTop > activeFromTop) { goToTopBtnRef.current.classList.add("visible"); } else { goToTopBtnRef.current.classList.remove("visible"); }
        }
    }

    function goToTop(): void {
        /**
        * document.body.scrollTop = 0
        * document.documentElement.scrollTop = 0
        */
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    useEffect(() => {
        // window.onscroll = function () {
        //     scrollFunction()
        // };

        window.addEventListener("scroll", scrollFunction);
        return () => {
            window.removeEventListener("scroll", scrollFunction);
        };
    }) 

    return (
        <button
            ref={goToTopBtnRef}
            onClick={goToTop}
            className="go-to-top-button"
            title={title}
        >
            {content}
        </button >
    )
}

