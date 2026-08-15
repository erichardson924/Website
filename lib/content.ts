/**
 * This file holds all of the words on the website.
 *
 * Edit the text inside the quotes to change copy. Project images live in
 * public/images/work/. Add a new item to `projects` to add another work sample.
 */

export const site = {
  name: "Elizabeth Richardson",
  firstName: "Elizabeth",
  lastName: "Richardson",
  role: "Brand & Web Designer",
  location: "Austin, TX",
  email: "erichardson924@gmail.com",
  tagline: "Websites and digital identity.",
  heroLine: "Simple, considered design.",
};

export const filmStills = [
  {
    src: "/images/hero.png",
    alt: "Sunlit linen table with terracotta, olive branches, and a ceramic cup",
  },
  {
    src: "/images/atmosphere-room.png",
    alt: "A quiet cream room with tall windows and a low oak bench",
  },
  {
    src: "/images/atmosphere-studio.png",
    alt: "A design studio at dusk with a monitor glowing on a dark desk",
  },
];

export const intro = {
  number: "01",
  eyebrow: "Approach",
  heading: "Design as a practice of attention.",
  /**
   * These lines appear one at a time over the hero film.
   * Keep them short so they never crowd the frame.
   */
  scrollBeats: [
    "Websites and digital identity.",
    "Clear type. Quiet color. Enough space.",
    "Simple work, carefully made.",
  ],
  paragraphs: [
    "I design websites and digital identities for small businesses — the look of the brand, and the site people actually use.",
    "The work is restrained on purpose. Hierarchy, type, and screens do the talking.",
  ],
  principles: [
    {
      number: "01",
      title: "Web",
      text: "Marketing sites and landing pages with a clear structure and room to breathe.",
    },
    {
      number: "02",
      title: "Identity",
      text: "Digital marks, color, and type that make a business recognizable without shouting.",
    },
    {
      number: "03",
      title: "Direction",
      text: "Art direction for the pages, photography, and UI so the brand holds together on screen.",
    },
  ],
  imageCaption: "Light, space, and the screen.",
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  brief: string;
  approach: string;
  pages: string[];
  palette: { name: string; hex: string }[];
  cover: ProjectImage;
  phone: ProjectImage;
  interior: ProjectImage;
};

export const projects: Project[] = [
  {
    slug: "vela",
    number: "01",
    title: "Vela",
    category: "Website",
    year: "2025",
    summary:
      "A high-contrast shop and story site for a running brand — black, white, and signal orange.",
    brief:
      "Vela needed a site that felt like the product: fast, loud in the right places, and easy to buy from on a phone. The old page was a generic template that disappeared next to bigger athletic labels.",
    approach:
      "We built a dark system around a condensed wordmark and one accent color. Photography is cropped tight; type does the shouting. The shop is a simple grid with almost no chrome, so the gear is the interface.",
    pages: ["Home", "Shop", "Product", "Stories", "Cart"],
    palette: [
      { name: "Ink", hex: "#0A0A0A" },
      { name: "White", hex: "#F5F5F5" },
      { name: "Signal", hex: "#FF4D00" },
    ],
    cover: {
      src: "/images/work/vela-desktop.png",
      alt: "MacBook showing the Vela athletics homepage on a black concrete desk",
      caption: "Desktop — home",
    },
    phone: {
      src: "/images/work/vela-phone.png",
      alt: "iPhone showing the Vela mobile shop",
      caption: "Phone — shop",
    },
    interior: {
      src: "/images/work/vela-shop.png",
      alt: "Vela shop page with a grid of apparel and sneakers",
      caption: "Shop — new arrivals",
    },
  },
  {
    slug: "orchard",
    number: "02",
    title: "Orchard",
    category: "Website",
    year: "2025",
    summary:
      "A weekly produce-box site for a neighborhood grocer — lemon yellow, forest green, and a round sans.",
    brief:
      "Orchard sells CSA-style boxes from nearby farms. They needed a site that made signing up feel as easy as adding fruit to a basket, and that didn’t look like a farm-stand poster.",
    approach:
      "The brand lives in bright yellow and deep green — cheerful, not rustic. The homepage leads with the weekly box; the inner page walks through packing, farms, and delivery in three steps. Mobile is built around cards and a persistent cart.",
    pages: ["Home", "The box", "How it works", "Farms", "Account"],
    palette: [
      { name: "Lemon", hex: "#F5D547" },
      { name: "Leaf", hex: "#1F6B3A" },
      { name: "Night", hex: "#142016" },
    ],
    cover: {
      src: "/images/work/orchard-desktop.png",
      alt: "iMac in a kitchen showing the Orchard grocery website",
      caption: "Desktop — home",
    },
    phone: {
      src: "/images/work/orchard-phone.png",
      alt: "Phone showing Orchard produce cards and a cart",
      caption: "Phone — box builder",
    },
    interior: {
      src: "/images/work/orchard-how.png",
      alt: "Orchard webpage explaining how a weekly box works",
      caption: "How a box works",
    },
  },
  {
    slug: "drift",
    number: "03",
    title: "Drift",
    category: "Website",
    year: "2024",
    summary:
      "A booking site for a coastal inn — navy, champagne gold, and rooms that fill the frame.",
    brief:
      "Drift is a small hotel that was losing reservations to booking engines. They wanted a site that felt like arriving after dark: quiet, cinematic, and able to take a date range without sending people away.",
    approach:
      "Photography does most of the talking. Type is a small serif in champagne on navy. The rooms page is three large stays — Cove, Lookout, Suite — each with a rate and a single action. Mobile booking keeps dates and Reserve on the first screen.",
    pages: ["Home", "Rooms", "A stay", "Reserve", "The inn"],
    palette: [
      { name: "Navy", hex: "#12182A" },
      { name: "Champagne", hex: "#D4C4A8" },
      { name: "Dusk", hex: "#3A4A6B" },
    ],
    cover: {
      src: "/images/work/drift-desktop.png",
      alt: "Laptop on a hotel desk showing the Drift booking homepage",
      caption: "Desktop — home",
    },
    phone: {
      src: "/images/work/drift-phone.png",
      alt: "Phone on hotel linen showing Drift room booking",
      caption: "Phone — reserve",
    },
    interior: {
      src: "/images/work/drift-rooms.png",
      alt: "Drift rooms listing with three stays and nightly rates",
      caption: "Rooms",
    },
  },
  {
    slug: "sable",
    number: "04",
    title: "Sable",
    category: "Website",
    year: "2024",
    summary:
      "A booking and lookbook site for a hair salon — charcoal, dusty rose, and editorial cuts.",
    brief:
      "Sable’s walk-in reputation was stronger than its website. They needed online booking that still felt like a fashion story, not a clinic form.",
    approach:
      "The site is dark on purpose: serif wordmark, rose as the only warm note, and a lookbook that behaves like a magazine. Services and prices sit on the phone first. Booking is one tap from Cut, Color, or Blowout.",
    pages: ["Home", "Lookbook", "Services", "Book", "The studio"],
    palette: [
      { name: "Charcoal", hex: "#161417" },
      { name: "Rose", hex: "#C98990" },
      { name: "Porcelain", hex: "#F3EEE8" },
    ],
    cover: {
      src: "/images/work/sable-desktop.png",
      alt: "Laptop in a salon showing the Sable homepage",
      caption: "Desktop — home",
    },
    phone: {
      src: "/images/work/sable-phone.png",
      alt: "Phone showing Sable service menu and booking",
      caption: "Phone — book",
    },
    interior: {
      src: "/images/work/sable-lookbook.png",
      alt: "Sable lookbook page with editorial hair photography",
      caption: "Lookbook",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) {
    return undefined;
  }
  return projects[(index + 1) % projects.length];
}

export const work = {
  number: "02",
  eyebrow: "Selected Work",
  heading: "A few examples.",
};

export const experienceToggle = {
  toClassic: "Classic Experience",
  toImmersive: "Immersive Experience",
};

export const contact = {
  heading: "Contact",
  lede: "Request a consult, or send a short note. I read everything.",
  consultHelp:
    "A few questions so I can show up prepared. I’ll reply with times for a call.",
  helloHelp: "No agenda needed.",
  services: [
    { id: "web", label: "Website" },
    { id: "identity", label: "Digital identity" },
    { id: "refresh", label: "Refresh an existing site" },
    { id: "unsure", label: "Not sure yet" },
  ],
  stages: [
    { value: "new", label: "Starting from scratch" },
    { value: "refresh", label: "Refreshing existing work" },
    { value: "exploring", label: "Exploring / not sure" },
  ],
  timelines: [
    { value: "soon", label: "This month" },
    { value: "later", label: "In 1–2 months" },
    { value: "research", label: "Just looking for now" },
  ],
};
