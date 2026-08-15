/**
 * This file holds all of the words on the website.
 *
 * Edit the text inside the quotes to change copy. Project images live in
 * public/images/. Add a new item to `projects` to add another work sample.
 */

export const site = {
  name: "Elizabeth Richardson",
  firstName: "Elizabeth",
  lastName: "Richardson",
  role: "Brand & Web Designer",
  location: "Austin, TX",
  email: "hello@elizrichardson.co",
  tagline: "Websites, identity, and print.",
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
    src: "/images/atmosphere-type.png",
    alt: "Letterpress type, paper, and ink on a linen work table",
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
    "Websites, identity, and print.",
    "Clear type. Quiet color. Enough space.",
    "Simple work, carefully made.",
  ],
  paragraphs: [
    "I design visual systems for small businesses — the website, the identity, and the printed pieces that have to live together.",
    "The work is restrained on purpose. Hierarchy, type, and material do the talking.",
  ],
  principles: [
    {
      number: "01",
      title: "Web",
      text: "Landing pages and sites with a clear structure and room to breathe.",
    },
    {
      number: "02",
      title: "Identity",
      text: "Marks, color, and type that make a business recognizable without shouting.",
    },
    {
      number: "03",
      title: "Print",
      text: "Flyers, menus, and collateral that feel as considered in the hand as on screen.",
    },
  ],
  imageCaption: "Type, paper, and light.",
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  description: string[];
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    slug: "lumen",
    number: "01",
    title: "Lumen",
    category: "Website",
    summary: "A one-page studio site: large type, one photograph, almost no decoration.",
    description: [
      "A marketing site for a small studio that needed to feel as calm as the work it shows. The page is a single column — hero, a short story, and a clear way to get in touch.",
      "Type does most of the work. Headlines sit in a warm serif; body copy stays small and readable. Photographs are given full width and not much else competes with them.",
    ],
    image: "/images/work-web.png",
    imageAlt: "Printed landing-page layout on a linen table",
  },
  {
    slug: "oak-line",
    number: "02",
    title: "Oak & Line",
    category: "Identity",
    summary: "A quiet mark, cream stationery, and a color story of clay and olive.",
    description: [
      "An identity built from a few pieces that can travel: a simple mark, two typefaces, and a short set of colors. Nothing extra, so the system still feels like itself on a card, a box, or a screen.",
      "Materials stay tactile — cotton paper, a cloth notebook, a terracotta box — so the brand is felt before it is read.",
    ],
    image: "/images/work-brand.png",
    imageAlt: "Brand stationery, cards, and a terracotta box on linen",
  },
  {
    slug: "sunday-press",
    number: "03",
    title: "Sunday Press",
    category: "Print",
    summary: "A flyer and poster series with generous margins and one botanical note.",
    description: [
      "Print for a small seasonal series. Each piece uses the same grid: a large title, a date, and a lot of unused paper. The restraint is the identity.",
      "Flyers and a poster were designed as a set so they can sit on a wall or in a stack and still read as one voice.",
    ],
    image: "/images/work-print.png",
    imageAlt: "Minimal flyers and a poster leaning on a plaster wall",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
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
