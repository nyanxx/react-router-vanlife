import type { JSX } from "react"
import { Link } from "react-router-dom"
import { vanAtNight } from "../../assets/images"
import "./About.css"

export default function About(): JSX.Element {
    return (
        <section className="about-section">
            <div className="image-container">
                <img src={vanAtNight} alt="van image" />
                <p className="attribution">Image by <a href="https://pixabay.com/users/xat-ch-12531001/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5438537">Xavier Turpain</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5438537">Pixabay</a></p>
            </div>
            <div className="about-div">
                <h2>Don't squeeze in a sedan when you could relax in a van.</h2>
                <p>
                    <span>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</span>
                    <span>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</span>
                </p>
                <div className="about-to-explore">
                    <h3>
                        <span>Your destination is waiting.</span>
                        <span>Your van is ready.</span>
                    </h3>
                    <Link to="/vans">
                        Explore our vans
                    </Link>
                </div>
            </div>
        </section>
    )
}