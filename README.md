# Aaron Parnala Projects — Website Prototype

A photography-led, editorial interior design website prototype created for **Aaron Parnala** (`@aaron_parnala_projects`).

> **Notice:** This repository is an unlisted, prospective-client prototype created by Mark David Gan. Aaron Parnala has not yet reviewed or approved this as his official production website. All prototype deployments are set to `noindex, nofollow`.

---

## Strategic Purpose

To demonstrate how a dedicated website can elevate Aaron's design practice beyond an Instagram feed by:
- Organizing projects into coherent architectural typologies (Commercial/Clinics, Urban Condominiums, Hospitality);
- Highlighting his hands-on philosophy bridging spatial design with turnkey on-site execution;
- Explaining his working process (Walkthrough → Spatial Modeling → Material Calibration → On-Site Execution);
- Offering an interactive project qualification and inquiry intake for prospective clients.

## Temporary Target

- `https://aaronparnala.markdavidgan.com`

## Tech Stack

- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS (Architectural dark/warm-earth aesthetic)
- **Hosting:** Vercel (Preview-first deployment)
- **Data:** Static typed project models (`src/data/projects.ts`)
- **Backend / CMS:** None (Intentionally zero-infrastructure for prototype phase)

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
