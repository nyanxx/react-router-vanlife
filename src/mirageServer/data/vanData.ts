import { vanFallbackImage, vansImgUrl } from "../../assets/images";
import type { Van } from "../../types/Van";

export const vanData: Van[] = [
  {
    id: 1,
    name: "Camper Deluxe",
    price: 100,
    type: "luxury",
    imageURL: vansImgUrl[0] || vanFallbackImage,
    status: "available",
    description:
      "A premium camper designed for long journeys with style. Spacious interiors, modern amenities, and a touch of luxury make every trip unforgettable.",
  },
  {
    id: 2,
    name: "Adventure Van",
    price: 80,
    type: "rugged",
    imageURL: vansImgUrl[1] || vanFallbackImage,
    status: "rented",
    description:
      "Built for thrill-seekers, this rugged van is perfect for off-road adventures. Durable, reliable, and ready to take you deep into nature.",
  },
  {
    id: 3,
    name: "Budget Ride",
    price: 50,
    type: "simple",
    imageURL: vansImgUrl[2] || vanFallbackImage,
    status: "repairing",
    description:
      "A no-frills option for travelers who value simplicity and affordability. Compact, efficient, and easy to maintain.",
  },
  {
    id: 4,
    name: "Family Cruiser",
    price: 70,
    type: "comfort",
    imageURL: vansImgUrl[3] || vanFallbackImage,
    status: "available",
    description:
      "Perfect for family trips, this van offers comfort, safety, and plenty of space. Designed to make every journey enjoyable for all ages.",
  },
  {
    id: 5,
    name: "Mountain Explorer",
    price: 90,
    type: "rugged",
    imageURL: vansImgUrl[4] || vanFallbackImage,
    status: "available",
    description:
      "Tailored for mountain trails and rough terrain, this van is your reliable partner for exploring the great outdoors.",
  },
  {
    id: 6,
    name: "Eco Compact",
    price: 60,
    type: "eco",
    imageURL: vansImgUrl[5] || vanFallbackImage,
    status: "rented",
    description:
      "An environmentally friendly van with efficient fuel use and compact design. Ideal for city trips and eco-conscious travelers.",
  },
  {
    id: 7,
    name: "Urban Nomad",
    price: 65,
    type: "simple",
    imageURL: vansImgUrl[6] || vanFallbackImage,
    status: "available",
    description:
      "Designed for city explorers, this van is compact yet versatile. Easy to park, fuel-efficient, and perfect for spontaneous urban adventures.",
  },
  {
    id: 8,
    name: "Safari Trekker",
    price: 95,
    type: "rugged",
    imageURL: vansImgUrl[7] || vanFallbackImage,
    status: "rented",
    description:
      "Built for wilderness journeys, this van is equipped to handle rough terrain and long safaris. Strong suspension and reliable performance make it a true adventurer’s choice.",
  },
  {
    id: 9,
    name: "Luxury Liner",
    price: 120,
    type: "luxury",
    imageURL: vansImgUrl[8] || vanFallbackImage,
    status: "available",
    description:
      "The ultimate in comfort and elegance. Featuring plush interiors, advanced tech, and premium finishes, this van transforms travel into a first-class experience.",
  },
  {
    id: 10,
    name: "Coastal Rider",
    price: 75,
    type: "comfort",
    imageURL: vansImgUrl[9] || vanFallbackImage,
    status: "available",
    description:
      "Ideal for scenic coastal drives, this van offers smooth handling, panoramic windows, and a relaxing ride for beachside adventures.",
  },
  {
    id: 11,
    name: "Vintage Voyager",
    price: 85,
    type: "simple",
    imageURL: vansImgUrl[10] || vanFallbackImage,
    status: "repairing",
    description:
      "A retro-styled van that brings nostalgia to every trip. Perfect for those who love timeless design paired with dependable performance.",
  },
  {
    id: 12,
    name: "Electric Glide",
    price: 110,
    type: "eco",
    imageURL: vansImgUrl[11] || vanFallbackImage,
    status: "available",
    description:
      "Powered by electricity, this van is quiet, efficient, and eco-conscious. A modern choice for travelers who care about sustainability.",
  },
  {
    id: 13,
    name: "Desert Drifter",
    price: 95,
    type: "rugged",
    imageURL: vansImgUrl[12] || vanFallbackImage,
    status: "rented",
    description:
      "Built to withstand hot climates and sandy terrain, this van is perfect for desert expeditions. Reliable cooling and durable design keep you moving.",
  },
  {
    id: 14,
    name: "Snow Rider",
    price: 85,
    type: "rugged",
    imageURL: vansImgUrl[13] || vanFallbackImage,
    status: "available",
    description:
      "Equipped with winter tires and heating systems, this van is perfect for snowy landscapes and cold-weather adventures.",
  },
  {
    id: 15,
    name: "Festival Express",
    price: 70,
    type: "comfort",
    imageURL: vansImgUrl[14] || vanFallbackImage,
    status: "rented",
    description:
      "Designed for group outings and events, this van offers spacious seating and entertainment features to keep the party going.",
  },
  {
    id: 16,
    name: "Nomad Pro",
    price: 100,
    type: "luxury",
    imageURL: vansImgUrl[15] || vanFallbackImage,
    status: "available",
    description:
      "A high-end van tailored for digital nomads. Comes with work-friendly interiors, Wi-Fi, and ergonomic seating for productivity on the road.",
  },
  {
    id: 17,
    name: "Trailblazer",
    price: 90,
    type: "rugged",
    imageURL: vansImgUrl[16] || vanFallbackImage,
    status: "repairing",
    description:
      "Built tough for forest trails and rocky paths, this van is a reliable companion for explorers who love the wild.",
  },
  {
    id: 18,
    name: "City Hopper",
    price: 55,
    type: "simple",
    imageURL: vansImgUrl[17] || vanFallbackImage,
    status: "available",
    description:
      "Compact and agile, this van is perfect for short city trips. Easy to maneuver, fuel-efficient, and ideal for everyday use.",
  },
  {
    id: 19,
    name: "Luxury Retreat",
    price: 130,
    type: "luxury",
    imageURL: vansImgUrl[18] || vanFallbackImage,
    status: "rented",
    description:
      "A top-tier van with spa-like interiors, reclining seats, and premium entertainment systems. Travel becomes relaxation at its finest.",
  },
  {
    id: 20,
    name: "Cargo Master",
    price: 75,
    type: "rugged",
    imageURL: vansImgUrl[19] || vanFallbackImage,
    status: "available",
    description:
      "Designed for hauling goods, this van offers maximum storage space and durability. Perfect for businesses and heavy-duty tasks.",
  },
  {
    id: 21,
    name: "Forest Wanderer",
    price: 95,
    type: "rugged",
    imageURL: vansImgUrl[20] || vanFallbackImage,
    status: "repairing",
    description:
      "Tailored for forest trails, this van is equipped with reinforced suspension and off-road capabilities to handle the toughest paths.",
  },
  {
    id: 22,
    name: "Skyline Cruiser",
    price: 85,
    type: "comfort",
    imageURL: vansImgUrl[21] || vanFallbackImage,
    status: "available",
    description:
      "Designed for smooth highway rides, this van offers excellent comfort and panoramic views, making long drives relaxing and enjoyable.",
  },
  {
    id: 23,
    name: "Offroad Beast",
    price: 105,
    type: "rugged",
    imageURL: vansImgUrl[22] || vanFallbackImage,
    status: "rented",
    description:
      "A powerhouse built for extreme terrains. Reinforced body, powerful engine, and high clearance make it unstoppable off-road.",
  },
  {
    id: 24,
    name: "Compact Breeze",
    price: 55,
    type: "eco",
    imageURL: vansImgUrl[23] || vanFallbackImage,
    status: "available",
    description:
      "Lightweight and efficient, this compact van is ideal for quick city commutes with minimal environmental impact.",
  },
  {
    id: 25,
    name: "Royal Voyager",
    price: 125,
    type: "luxury",
    imageURL: vansImgUrl[24] || vanFallbackImage,
    status: "available",
    description:
      "Travel like royalty with plush seating, ambient lighting, and cutting-edge features designed for ultimate comfort.",
  },
  {
    id: 26,
    name: "Weekend Escape",
    price: 70,
    type: "comfort",
    imageURL: vansImgUrl[25] || vanFallbackImage,
    status: "rented",
    description:
      "Perfect for short getaways, this van balances comfort and practicality for spontaneous weekend trips.",
  },
  {
    id: 27,
    name: "Rocky Rider",
    price: 95,
    type: "rugged",
    imageURL: vansImgUrl[26] || vanFallbackImage,
    status: "repairing",
    description:
      "Engineered for rocky paths and uneven terrain, this van offers superior durability and control in harsh conditions.",
  },
  {
    id: 28,
    name: "Metro Mini",
    price: 50,
    type: "simple",
    imageURL: vansImgUrl[27] || vanFallbackImage,
    status: "available",
    description:
      "A minimalistic van built for daily urban travel. Affordable, efficient, and easy to handle in tight spaces.",
  },
  {
    id: 29,
    name: "Solar Nomad",
    price: 115,
    type: "eco",
    imageURL: vansImgUrl[28] || vanFallbackImage,
    status: "available",
    description:
      "Equipped with solar panels, this van supports sustainable travel with renewable energy on the go.",
  },
  {
    id: 30,
    name: "Highland Trek",
    price: 100,
    type: "rugged",
    imageURL: vansImgUrl[29] || vanFallbackImage,
    status: "rented",
    description:
      "Ideal for high-altitude journeys, this van handles steep climbs and rough terrain with ease.",
  },
  {
    id: 31,
    name: "Urban Elite",
    price: 90,
    type: "luxury",
    imageURL: vansImgUrl[30] || vanFallbackImage,
    status: "available",
    description:
      "A premium city van with sleek design, modern tech, and unmatched driving comfort for urban lifestyles.",
  },
  {
    id: 32,
    name: "Traveler Lite",
    price: 60,
    type: "simple",
    imageURL: vansImgUrl[31] || vanFallbackImage,
    status: "available",
    description:
      "A lightweight and affordable option for travelers who prefer simplicity and efficiency.",
  },
  {
    id: 33,
    name: "Glacier Explorer",
    price: 110,
    type: "rugged",
    imageURL: vansImgUrl[32] || vanFallbackImage,
    status: "repairing",
    description:
      "Built for icy terrains, this van features enhanced traction and heating systems for cold environments.",
  },
  {
    id: 34,
    name: "Eco Traveler",
    price: 65,
    type: "eco",
    imageURL: vansImgUrl[33] || vanFallbackImage,
    status: "available",
    description:
      "Designed with sustainability in mind, offering low emissions and excellent fuel efficiency.",
  },
  {
    id: 35,
    name: "Grand Tourer",
    price: 120,
    type: "luxury",
    imageURL: vansImgUrl[34] || vanFallbackImage,
    status: "rented",
    description:
      "Perfect for long-distance touring, combining luxury interiors with smooth performance.",
  },
  {
    id: 36,
    name: "Pathfinder",
    price: 95,
    type: "rugged",
    imageURL: vansImgUrl[35] || vanFallbackImage,
    status: "available",
    description:
      "Reliable and strong, this van is built to find its way through forests, hills, and unknown paths.",
  },
  {
    id: 37,
    name: "City Pulse",
    price: 70,
    type: "comfort",
    imageURL: vansImgUrl[36] || vanFallbackImage,
    status: "available",
    description:
      "A stylish van designed for urban life with smooth handling and modern comfort features.",
  },
  {
    id: 38,
    name: "Nomad Eco Plus",
    price: 105,
    type: "eco",
    imageURL: vansImgUrl[37] || vanFallbackImage,
    status: "rented",
    description:
      "An advanced eco-friendly van offering electric-hybrid performance and smart energy management.",
  },
  {
    id: 39,
    name: "Trail Runner",
    price: 90,
    type: "rugged",
    imageURL: vansImgUrl[38] || vanFallbackImage,
    status: "available",
    description:
      "Designed for trail adventures, this van combines agility with durability for off-road enthusiasts.",
  },
  {
    id: 40,
    name: "Comfort Glide",
    price: 80,
    type: "comfort",
    imageURL: vansImgUrl[39] || vanFallbackImage,
    status: "available",
    description:
      "A smooth and comfortable ride with spacious interiors, ideal for relaxed long-distance travel.",
  },
  {
    id: 41,
    name: "Retro Camper",
    price: 85,
    type: "simple",
    imageURL: vansImgUrl[40] || vanFallbackImage,
    status: "repairing",
    description:
      "A vintage-inspired camper with classic aesthetics and reliable performance for nostalgic journeys.",
  },
  {
    id: 42,
    name: "Ultimate Hauler",
    price: 95,
    type: "rugged",
    imageURL: vansImgUrl[41] || vanFallbackImage,
    status: "available",
    description:
      "Built for heavy loads and tough jobs, this van delivers strength, space, and reliability.",
  },
];
