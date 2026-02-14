import { vansImgUrl } from "../assets/images";
import type { Van } from "../types/Van";

export const vanData: Van[] = [
    {
        id: 1,
        name: "Camper Deluxe",
        price: 100,
        type: "luxury",
        imageURL: vansImgUrl[0],
        status: "available",
        description: "A premium camper designed for long journeys with style. Spacious interiors, modern amenities, and a touch of luxury make every trip unforgettable."
    },
    {
        id: 2,
        name: "Adventure Van",
        price: 80,
        type: "rugged",
        imageURL: vansImgUrl[1],
        status: "rented",
        description: "Built for thrill-seekers, this rugged van is perfect for off-road adventures. Durable, reliable, and ready to take you deep into nature."
    },
    {
        id: 3,
        name: "Budget Ride",
        price: 50,
        type: "simple",
        imageURL: vansImgUrl[2],
        status: "repairing",
        description: "A no-frills option for travelers who value simplicity and affordability. Compact, efficient, and easy to maintain."
    },
    {
        id: 4,
        name: "Family Cruiser",
        price: 70,
        type: "comfort",
        imageURL: vansImgUrl[3],
        status: "available",
        description: "Perfect for family trips, this van offers comfort, safety, and plenty of space. Designed to make every journey enjoyable for all ages."
    },
    {
        id: 5,
        name: "Mountain Explorer",
        price: 90,
        type: "rugged",
        imageURL: vansImgUrl[4],
        status: "available",
        description: "Tailored for mountain trails and rough terrain, this van is your reliable partner for exploring the great outdoors."
    },
    {
        id: 6,
        name: "Eco Compact",
        price: 60,
        type: "eco",
        imageURL: vansImgUrl[5],
        status: "rented",
        description: "An environmentally friendly van with efficient fuel use and compact design. Ideal for city trips and eco-conscious travelers."
    },
]
