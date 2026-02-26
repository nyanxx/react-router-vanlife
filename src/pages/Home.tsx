import type { JSX } from "react"
import { useNavigate } from "react-router-dom"
// import { homeHeroImage } from "../assets/images"

export default function Home(): JSX.Element {

    const navigate = useNavigate()

    function handleButton() {
        navigate("/vans")
    }

    return (
        <>
            <section className="p-0 min-h-full text-white flex flex-col justify-center items-center text-xl bg-no-repeat bg-cover bg-center" style={{
                // backgroundImage: `url(${homeHeroImage})`
                backgroundImage: `url(https://cdn.pixabay.com/photo/2020/05/26/09/01/night-5222267_1280.jpg)`
                // https://pixabay.com/photos/night-milky-way-road-light-traces-5222267/
            }}>
                <h2 className="text-[2.6rem] font-bold">You got the travel plans, we got the travel vans.</h2>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <button className="button mt-12 text-sm w-135 tracking-wider " type="button" onClick={handleButton}>Find your van</button>
            </section>
            <section>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloremque saepe consectetur voluptate, molestias inventore recusandae aliquam! Veniam neque sint prov ident, quam aliquam non quos eos libero? Sunt, quis necessitatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloremque saepe consectetur voluptate, molestias inventore recusandae aliquam! Veniam neque sint prov ident, quam aliquam non quos eos libero? Sunt, quis necessitatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloremque saepe consectetur voluptate, molestias inventore recusandae aliquam! Veniam neque sint prov ident, quam aliquam non quos eos libero? Sunt, quis necessitatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloremque saepe consectetur voluptate, molestias inventore recusandae aliquam! Veniam neque sint prov ident, quam aliquam non quos eos libero? Sunt, quis necessitatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloremque saepe consectetur voluptate, molestias inventore recusandae aliquam! Veniam neque sint prov ident, quam aliquam non quos eos libero? Sunt, quis necessitatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloremque saepe consectetur voluptate, molestias inventore recusandae aliquam! Veniam neque sint prov ident, quam aliquam non quos eos libero? Sunt, quis necessitatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloremque saepe consectetur voluptate, molestias inventore recusandae aliquam! Veniam neque sint prov ident, quam aliquam non quos eos libero? Sunt, quis necessitatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloremque saepe consectetur voluptate, molestias inventore recusandae aliquam! Veniam neque sint prov ident, quam aliquam non quos eos libero? Sunt, quis necessitatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloremque saepe consectetur voluptate, molestias inventore recusandae aliquam! Veniam neque sint prov ident, quam aliquam non quos eos libero? Sunt, quis necessitatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloremque saepe consectetur voluptate, molestias inventore recusandae aliquam! Veniam neque sint prov ident, quam aliquam non quos eos libero? Sunt, quis necessitatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloremque saepe consectetur voluptate, molestias inventore recusandae aliquam! Veniam neque sint prov ident, quam aliquam non quos eos libero? Sunt, quis necessitatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloremque saepe consectetur voluptate, molestias inventore recusandae aliquam! Veniam neque sint prov ident, quam aliquam non quos eos libero? Sunt, quis necessitatibus.
                </p>
            </section>
        </>
    )
}