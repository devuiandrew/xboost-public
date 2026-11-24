# X-Boost — website for a vertical video agency

**English** | [Русский](README.ru.md)

Marketing website for **X-Boost**, an agency that produces vertical short-form videos (Reels, TikTok, Shorts) for businesses. The site presents the agency's services, client cases and video formats, and lets visitors estimate the effect of a video campaign with a built-in calculator.

The project started as a rewrite of the agency's original React site in **Next.js (App Router)**. It is multilingual (English, Russian, Ukrainian), and most of the content is video.

## Features

- **Three languages** with locale-prefixed routes (`/en`, `/ru`, `/uk`), built with `next-intl`. All copy, links and media paths are stored in translation files, so content changes don't require touching components.
- **Landing page**: hero, results in numbers, client cases with videos, how the work is organised, and the list of video categories.
- **Category pages** (`/category/faceless`, `/talkingHead`, `/socialSurvey`, `/thirdPerson`). Each page has its own hero, a carousel of video formats with hashtags, and links to the other categories. Unknown categories return a 404.
- **Campaign calculator**: a form validated with Zod (subscribers, views, budget, category, platforms). It estimates reach, subscriber growth, number of videos and savings, with numbers formatted for the current locale.
- **Static generation**: every locale and category page is prerendered at build time.
- **SEO**: localized title and description for each page, canonical URLs and `hreflang` alternates.
- **Video performance**: videos are mounted only when they come into view (IntersectionObserver) and show loading skeletons until ready.
- **Cookie consent**: Google Analytics loads only after the visitor accepts cookies.
- **Responsive layout**: desktop dropdown navigation, a mobile side menu, and a navigation bar that hides on scroll.

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 14 (App Router), React 18 |
| Language | TypeScript and JavaScript (gradual migration to TypeScript) |
| i18n | next-intl (locale middleware, shared navigation helpers) |
| Styling | Tailwind CSS, custom brand palette and background-pattern utilities |
| UI primitives | Radix UI (shadcn/ui-style components), class-variance-authority, lucide / react-icons |
| Forms | react-hook-form + Zod |
| Animation & carousels | Framer Motion, Embla Carousel |
| Testing | Vitest (calculator formulas) |
| Analytics | Google Analytics, behind cookie consent |
| Tooling | ESLint (next/core-web-vitals), Prettier with the Tailwind plugin |

## Project structure

```
app/[locale]/                      layouts and pages, one route tree per locale
  (public)/page                    landing page
  (public)/category/[slug]/page    category pages
app/navigation                     locale list and locale-aware Link / router
middleware                         next-intl locale routing
components/
  ui/                              reusable primitives (buttons, headings, carousel, video loader, form…)
  page/main-page/                  landing page sections
  page/categories-page/            category page sections, including the calculator
  page/shared/                     header, footer, cookie consent
lib/                               categories, SEO helpers, i18n config, utilities
messages/{en,ru,uk}.json           all site content: copy, links, video paths
public/video, public/imgs          media
```

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev        # http://localhost:3000 (redirects to /en)
npm run build      # production build
npm test           # unit tests
npm run lint
```

Optional environment variables:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS` | Google Analytics measurement ID. Analytics is disabled when it is not set |
| `NEXT_PUBLIC_SITE_URL` | Base URL for canonical and `hreflang` links (defaults to `https://xboosthub.com`) |

## Roadmap

- Finish the TypeScript migration
- Client accounts to track ordered videos and their status
- Online ordering and payment
- Internal web app for the team to accept and hand over projects

## Author

Built and maintained by [@devuiandrew](https://github.com/devuiandrew), with contributions from Day-fartuna.

The code is published as a portfolio project. The X-Boost name, logo, videos and site content belong to X-Boost and are not covered by any open-source license.
