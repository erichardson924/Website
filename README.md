# Elizabeth Richardson — Portfolio

A personal site with two ways to arrive: an immersive, scroll-driven homepage and a simpler classic layout that shares the same words. Sample work is four digital websites (desktop + phone mockups), each with its own brand.

## How to look at it on your computer

```bash
npm install
npm run dev
```

- Immersive: [http://localhost:3000](http://localhost:3000) — scroll slowly; one line of text at a time
- Classic: [http://localhost:3000/classic](http://localhost:3000/classic)
- Contact: [http://localhost:3000/contact](http://localhost:3000/contact)
- A project: [http://localhost:3000/work/vela](http://localhost:3000/work/vela)

If a preview is already running, stop it with Control + C, then run `git pull`, `npm install`, and `npm run dev` again.

## What each file is for

| File | Plain-language job |
| --- | --- |
| `lib/content.ts` | **The words and the work list.** Change copy or add a project here. |
| `app/page.tsx` | Immersive homepage. |
| `app/classic/page.tsx` | Classic homepage. |
| `app/contact/page.tsx` | Contact page: consult request or say hi. |
| `components/contact/ContactForm.tsx` | The form. Sends to `erichardson924@gmail.com` via the visitor’s email app. |
| `components/immersive/Hero.tsx` | Pinned film: photos change, name then one line at a time. |
| `components/immersive/Intro.tsx` | Short approach section, then a full-bleed image. |
| `components/immersive/Work.tsx` | Large, clickable work images. |
| `components/classic/*` | Same content, no animation. |
| `public/images/` | Photographs. Replace files with your own work; keep the names, or update paths in `lib/content.ts`. |

## Design notes

Clean, minimal, editorial. Cream, clay, olive, ink. Fraunces + Outfit.

The immersive page is a film (photos behind a single line of type), then a quiet intro, then work you can open. Lines never overlap: each fades out fully before the next appears.

## Changing the obvious things

- **Words and projects:** `lib/content.ts`
- **Photos:** `public/images/`
- **Colors:** `@theme` in `app/globals.css`
