# Aaron Parnala Projects — Website

A warm, immersive Threshold interior design website created for **Aaron Parnala** (`@aaron_parnala_projects`).

> **Current status:** Mark designated this a live site on 2026-10-01. Contact is through Instagram only; no contact/signup forms or prototype markings. Existing `noindex, nofollow` policy remains until indexing is explicitly changed.

---

## Current design

Threshold pairs an oversized “Spaces, felt.” opening with a scroll-expanding residential image, light editorial chapters, and an espresso hospitality interlude. Portfolio, case studies, practice and inquiry share this direction. Mobile and reduced-motion presentations remain complete. See `docs/brief.md`.

## Strategic Purpose

To demonstrate how a dedicated website can elevate Aaron's design practice beyond an Instagram feed by:
- Organizing projects into coherent architectural typologies (Commercial/Clinics, Urban Condominiums, Hospitality);
- Highlighting his hands-on philosophy bridging spatial design with turnkey on-site execution;
- Explaining his working process (Walkthrough → Spatial Modeling → Material Calibration → On-Site Execution);
- Directing prospective clients to Aaron’s Instagram for inquiries.

## Live Site

- `https://aaronparnala.markdavidgan.com`

## Tech Stack

- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS + custom CSS (warm ivory, architectural type, asymmetric portfolio imagery)
- **Hosting:** Vercel (Preview-first deployment)
- **Data:** Static typed project models (`src/data/projects.ts`)
- **Backend / CMS:** None (Intentionally zero-infrastructure)

## Documentation

- [`AGENTS.md`](AGENTS.md) — Operating rules, image provenance model, and guardrails
- [`docs/brief.md`](docs/brief.md) — Strategic positioning and design brief
- [`docs/content-plan.md`](docs/content-plan.md) — Sitemap, page structures, and copy strategy
- [`docs/deployment.md`](docs/deployment.md) — Vercel preview & DNS routing details
- [`docs/launch-checklist.md`](docs/launch-checklist.md) — Pre-presentation quality checklist

## Local Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.
