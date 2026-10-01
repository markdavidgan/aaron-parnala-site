# AGENTS.md

`aaron-parnala-site` is the **independent website prototype repository** for interior designer Aaron Parnala (`@aaron_parnala_projects`).

## Operating context

- **Status:** Speculative / prospective-client prototype.
- **Client status:** Aaron Parnala has **not yet approved** this as his production website.
- **Temporary hosting target:** `https://aaronparnala.markdavidgan.com`
- **Indexing status:** `noindex, nofollow` on all environments.
- **Controlling strategy:** Owned by `markdavidgan/ventures` (current redesign: `explorations/2026-10-01-aaron-parnala-threshold-redesign-plan.md`; original discovery: `2026-10-01-aaron-parnala-instagram-audit.md`).

## Core integrity & imagery rules

1. **No fabrication:** Never invent credentials, awards, client names, budgets, testimonials, or completed project locations that are not verified from Aaron's actual portfolio.
2. **Asset Provenance:**
   - Aaron-sourced portfolio imagery uses `source: "aaron"`; this identifies source, not whether an asset is photography or a render. Do not claim completed-project photography without verification.
   - Any AI-generated filler imagery used for visual layout demonstration (`source: "concept-ai"`) must carry an explicit `Concept image` label.
   - The global prototype banner must disclose:
     > *Prototype preview — selected concept imagery is AI-generated for layout visualization and does not represent completed Aaron Parnala projects.*
   - Never insert AI concept images into a real project's case study gallery.
3. **Lead capture:** The project inquiry contact form is simulated for the prototype phase. Do not collect or forward real customer inquiries without Aaron's explicit setup.
4. **Architecture:** Lightweight Next.js App Router + TypeScript + Tailwind CSS. No CMS, database, custom backend, or unnecessary external dependencies.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
