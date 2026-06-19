export const site = {
  name: "The Maintenance Man Painting and Carpentry",
  shortName: "The Maintenance Man",
  monogram: "M",
  tagline: "Painting & Carpentry",
  craftsman: "Larry",
  phone: "+1 601-310-2598",
  phoneHref: "tel:+16013102598",
  area: "Mississippi",
  areaLong: "Mississippi & surrounding areas",
  rating: "5.0",
  reviewCount: 18,
};

export type ServiceGroup = {
  title: string;
  blurb: string;
  icon: "paint" | "deck" | "floor" | "remodel" | "repair";
  items: string[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Interior & Exterior Painting",
    blurb:
      "Clean lines, even coats and color matched to perfection — inside and out, finished with care.",
    icon: "paint",
    items: [
      "Interior painting",
      "Exterior painting",
      "Drywall & mud repair",
      "Interior decorating",
    ],
  },
  {
    title: "Decks & Fencing",
    blurb:
      "Privacy fences, decks and porches built to stand up to the seasons and look great doing it.",
    icon: "deck",
    items: [
      "Build privacy fences",
      "Deck construction & rebuilds",
      "Porches & steps",
      "General construction",
    ],
  },
  {
    title: "Flooring & Tile",
    blurb:
      "From floor fitting to fresh tile work — a solid, level foundation for every room.",
    icon: "floor",
    items: [
      "Floor fitting",
      "Flooring repair",
      "Tile work installation",
    ],
  },
  {
    title: "Remodeling & Renovation",
    blurb:
      "Kitchens, baths and full-room refreshes — cabinets, counters, built-ins and finish work.",
    icon: "remodel",
    items: [
      "Remodeling",
      "General construction",
      "Cabinets & built-ins",
      "Custom carpentry",
    ],
  },
  {
    title: "Repairs & Installations",
    blurb:
      "The dependable fixes and installs every home needs — done right the first time.",
    icon: "repair",
    items: [
      "General repairs",
      "Fan installation",
      "Plumbing fixture installation",
      "Water fixture repair",
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
    name: "Susette Clark-Walker",
    quote:
      "An amazing experience working with Larry! He painted both the interior and exterior beautifully, installed new cabinets, doors and drawers, and updated the lighting throughout. Reliable, easy to communicate with, and truly went above and beyond. Highly recommend!",
    service: "Interior & exterior painting",
  },
  {
    name: "Elisabeth Palchak",
    quote:
      "A good, reliable handyman is hard to find. Larry and his team were professional, punctual and knowledgeable with great attention to detail. They did mud work, painted my kitchen, repaired outdoor rot, and replaced and fixed doors. Honest and fair priced — I highly recommend!",
    service: "Painting & repairs",
  },
  {
    name: "Becky Ryder",
    quote:
      "I have used Larry and his helper for about 5 years. He painted the interior and exterior, rebuilt and painted a deck, hung stained glass artwork, and installed a storm door. He is my go-to guy for home repair. Enough said!",
    service: "Painting & deck rebuild",
  },
  {
    name: "Darnicka Collins",
    quote:
      "I recently got the interior of my house painted and they did a great job! Very professional and respectful. I wanted to be in my house by Christmas and he got the job done in a timely manner. The colors match perfect — just what I asked for. Highly recommend!",
    service: "Interior painting",
  },
  {
    name: "Galit Kaunitz",
    quote:
      "Larry and Craig did such a wonderful job painting our living and dining rooms, installing new light fixtures, and screening the porch. Professional, reliable and knowledgeable craftsmen — plus they're great people. We'll absolutely have them back!",
    service: "Painting & installations",
  },
  {
    name: "Ashley Butterworth",
    quote:
      "I started knowing absolutely nothing about home repair. Finding The Maintenance Man team was a blessing! Every detail of my project was handled with professionalism and care. An honest team that does excellent work at a fair price.",
    service: "Home repair & remodeling",
  },
];

export type Project = {
  img: string;
  label: string;
  category: "Painting" | "Remodeling" | "Flooring" | "Decks & Fencing" | "Carpentry";
};

export const projects: Project[] = [
  {
    img: "/works/third.webp",
    label: "Kitchen Remodel",
    category: "Remodeling",
  },
  {
    img: "/works/sceond.webp",
    label: "Exterior Repaint",
    category: "Painting",
  },
  {
    img: "/works/seventh.webp",
    label: "Living Room & Built-Ins",
    category: "Flooring",
  },
  {
    img: "/works/fourth.webp",
    label: "Privacy Fence",
    category: "Decks & Fencing",
  },
  {
    img: "/works/tenth.webp",
    label: "Craftsman Porch",
    category: "Painting",
  },
  {
    img: "/works/first.webp",
    label: "Covered Porch & Deck",
    category: "Decks & Fencing",
  },
  {
    img: "/works/fifth.webp",
    label: "Front Porch & Steps",
    category: "Decks & Fencing",
  },
  {
    img: "/works/ninth.webp",
    label: "Custom Crib Build",
    category: "Carpentry",
  },
  {
    img: "/works/sixth.webp",
    label: "Backyard Deck",
    category: "Decks & Fencing",
  },
];

export const categories = [
  "All",
  "Painting",
  "Remodeling",
  "Flooring",
  "Decks & Fencing",
  "Carpentry",
] as const;
