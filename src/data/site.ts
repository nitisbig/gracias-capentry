export const site = {
  name: "Garcia's Wood and More",
  shortName: "Garcia's Wood & More",
  tagline: "Architectural Woodwork & Custom Carpentry",
  craftsman: "Ricardo",
  phone: "+1 469-661-4839",
  phoneHref: "tel:+14696614839",
  area: "Dallas & nearby areas",
  rating: "5.0",
  reviewCount: 13,
  email: "hello@garciaswoodandmore.com",
};

export type ServiceGroup = {
  title: string;
  blurb: string;
  icon: "wardrobe" | "deck" | "trim" | "remodel" | "repair";
  items: string[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Custom Wardrobes & Storage",
    blurb:
      "Built-in closets, shelving and storage designed around your space and finished to last.",
    icon: "wardrobe",
    items: [
      "Custom wardrobe design & installation",
      "Wardrobe construction & installation",
      "Wardrobe repair",
      "Shelving & storage construction",
      "Shelving & storage repair",
    ],
  },
  {
    title: "Decks & Fencing",
    blurb:
      "Outdoor structures built for Texas weather — clean lines, solid joinery, and lasting protection.",
    icon: "deck",
    items: [
      "Deck construction",
      "Deck repair",
      "Fencing construction & installation",
      "Fencing repair",
    ],
  },
  {
    title: "Finish & Trim Carpentry",
    blurb:
      "The detail work that elevates a room — precise trim, finish carpentry and rough framing alike.",
    icon: "trim",
    items: [
      "Finish carpentry services",
      "Trim carpentry services",
      "Rough carpentry services",
      "General carpentry & cabinetry",
      "Furniture assembly",
    ],
  },
  {
    title: "Drywall & Remodeling",
    blurb:
      "From a single wall to a full room refresh — drywall, flooring, tile and interior finishes.",
    icon: "remodel",
    items: [
      "Drywall installation & repair",
      "Remodeling",
      "Floor fitting & flooring repair",
      "Tile work installation & replacement",
      "Interior decorating",
      "Exterior painting",
    ],
  },
  {
    title: "Repairs & Installs",
    blurb:
      "The reliable fixes and mounts every home needs, done right the first time.",
    icon: "repair",
    items: [
      "TV mounting",
      "Fan installation",
      "Plumbing fixture installation",
      "Gutter cleaning",
      "Repairs & maintenance",
    ],
  },
];

export type Review = {
  name: string;
  quote: string;
  service?: string;
};

export const reviews: Review[] = [
  {
    name: "Gloria Gamino",
    quote:
      "In love with my custom closets! I have so much extra space. Ricardo did an amazing job!",
    service: "Custom wardrobe design & installation",
  },
  {
    name: "Gloria Santelices",
    quote:
      "He did a very good job putting the shelves in our laundry room. Very quick and loved the outcome.",
    service: "Shelving & storage installation",
  },
  {
    name: "R Pepito",
    quote:
      "We got a table resized and refurbished. He did an amazing job on it. Very respectful and knowledgeable with the things he does.",
    service: "Furniture refurbishing",
  },
  {
    name: "Christa Egusquiza",
    quote:
      "On-the-dot precision with the dimensions I wanted. I called, we set up the appointment that same day, and I got the table back that same night — with delivery, a great price, and real care. Don't risk your project elsewhere.",
    service: "Custom carpentry",
  },
  {
    name: "Debbie Price",
    quote:
      "He did a great job! Very responsive and dependable and great quality work! I would definitely use him again!",
    service: "Repairs & maintenance",
  },
];
