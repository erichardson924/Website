# Elizabeth Richardson — Portfolio

A personal site with two ways to arrive: an immersive, scroll-driven homepage and a simpler classic layout that shares the same words. This first pass builds the **hero** and **intro** only. Selected Work, Services, and Contact come next.

## How to look at it on your computer

1. Install [Node.js](https://nodejs.org) if you do not already have it.
2. In this folder, run:

```bash
npm install
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) for the immersive page.
4. Open [http://localhost:3000/classic](http://localhost:3000/classic) for the simpler page.

Each version has a small link in the nav (`Classic Experience →` / `Immersive Experience →`) so visitors can switch.

## What each file is for

You can skip this until you want to change something. Every file starts with a short comment in the same spirit.

| File | Plain-language job |
| --- | --- |
| `lib/content.ts` | **The words.** Name, tagline, manifesto, and the three principles. Edit this file to change copy without touching design code. |
| `app/layout.tsx` | The wrapper around every page: fonts, the browser-tab title, and shared styles. |
| `app/globals.css` | The color palette (cream, clay, olive, ink) and a few animations, like the slow zoom on the hero photo. |
| `app/page.tsx` | The immersive homepage. It only *assembles* pieces — it does not contain the actual hero text. |
| `app/classic/page.tsx` | The classic homepage. Same content, quieter layout. |
| `components/SiteNav.tsx` | The top bar. On the immersive page it sits over the photo, then becomes a cream bar after you scroll. |
| `components/SiteFooter.tsx` | A small closing line with your name, city, and the experience toggle. |
| `components/immersive/Experience.tsx` | Assembles the immersive homepage (smooth scroll, nav, hero, intro). |
| `components/immersive/SmoothScroll.tsx` | Makes mouse-wheel scrolling feel like a camera move. |
| `components/immersive/Hero.tsx` | Pinned full-screen photo. As you scroll, the name fades and manifesto lines appear over the image. |
| `components/immersive/Intro.tsx` | Philosophy chapter: large type, a full-screen drifting image, then one principle per screen. |
| `components/classic/Hero.tsx` | Same opening information as a normal scrolling page. |
| `components/classic/Intro.tsx` | Same manifesto, no animation. |
| `public/images/` | The photographs. Replace `hero.png` and `intro.png` with your own images (keep the same file names, or update the `src` paths in the hero/intro components). |

## Design notes

Warm editorial wellness energy, not a tech landing page.

- **Palette:** cream `#F4EDE3`, sand `#E7D8C6`, clay `#C26A45`, olive `#4A5340`, ink `#2A241E`
- **Type:** Fraunces (headlines — a soft serif) and Outfit (body and nav)
- **Motion:** the immersive page is a scroll-driven film — pinned photo, lines that appear as you scroll, then slower philosophy chapters. If someone has “reduce motion” turned on, it stays still.

## Changing the obvious things

- **Your name, tagline, manifesto:** `lib/content.ts`
- **Photos:** drop new files into `public/images/`
- **Colors:** the `@theme` block at the top of `app/globals.css`

## What’s next (not in this pass)

1. Selected Work — numbered project cards
2. Services — “Ways to Work Together”
3. Contact — email and social
