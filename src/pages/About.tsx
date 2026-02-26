import type { JSX } from "react"
import { Link } from "react-router-dom"
import { vanAtNight } from "../assets/images"

export default function About(): JSX.Element {
    return (
        <section className="w-full pt-16">
            <div className="relative">
                <img className="w-full h-50 object-cover" src={vanAtNight} alt="van image" />
                <p className="absolute bottom-2.5 right-2.5 text-[#ffffffa7] text-[10px] z-10 ">Image by <a className="text-[#ff8b38a7]" rel="noopener noreferrer" target="_blank" href="https://pixabay.com/users/xat-ch-12531001/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5438537">Xavier Turpain</a> from <a className="text-[#ff8b38a7]" rel="noopener noreferrer" target="_blank" href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5438537">Pixabay</a></p>
            </div>
            <div className="p-8 w-5xl mx-auto">
                <h2 className="text-[2.2rem] font-bold">Don't <span className="underline underline-offset-4 decoration-red-500">squeeze</span> in a sedan when you could <span className="underline underline-offset-4 decoration-green-500">relax</span> in a van.</h2>
                <p className="pt-4 text-lg">
                    <span>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</span>
                    <span>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</span>
                </p>
                <div className="bg-[#ffcc8d] py-[1.9rem] px-12 flex flex-col rounded-lg w-[50%] mx-auto mt-16">
                    <h3 className="flex flex-col text-[1.5rem] font-medium">
                        <span>Your destination is waiting.</span>
                        <span>Your van is ready.</span>
                    </h3>
                    <Link className="p-[0.6rem] rounded-lg bg-[#161616] text-white font-semibold cursor-pointer text-center mt-[1.8rem] transition duration-225 ease-in-out hover:bg-button" to="/vans">
                        Explore our vans
                    </Link>
                </div>
            </div>
        </section>
    )
}