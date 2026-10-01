# Deployment Strategy & DNS Routing

## Target Hostname

- **Live Hostname:** `https://aaronparnala.markdavidgan.com`
- **Indexing:** Enforce `X-Robots-Tag: noindex, nofollow` in HTTP response headers and `<meta name="robots" content="noindex, nofollow" />`.

## Deployment Pipeline

1. **Local verification:**
   ```bash
   pnpm lint
   pnpm build
   ```
2. **Vercel Preview Deployment:**
   Deploy to Vercel and obtain a preview URL (e.g. `https://aaron-parnala-site-*.vercel.app`).
3. **Verify Preview:**
   - Inspect layout on 390px (mobile), 768px (tablet), and 1440px (desktop).
   - Verify image loading, aspect ratios, responsive navigation, and concept image disclosures.
   - Verify Instagram contact links and absence of contact/signup forms.
4. **Subdomain Assignment:**
   - Inspect existing `markdavidgan.com` Cloudflare/Vercel DNS zone.
   - Attach `aaronparnala.markdavidgan.com` to the Vercel project.
   - Verify SSL/TLS issuance and edge propagation.
5. **Live Verification:**
   - Confirm HTTPS, response headers (`noindex`), and zero console errors.

## Verified Deployment Status (2026-10-01)

- **Production URL:** `https://aaronparnala.markdavidgan.com` (HTTP 200, valid SSL)
- **Vercel Alias:** `https://aaron-parnala-site.vercel.app`
- **DNS Routing:** Cloudflare DNS CNAME pointing directly to `cname.vercel-dns.com` (`proxied: false`)
- **Access Policy:** Direct public access enabled (bypassing Cloudflare Access Zero Trust proxy while keeping `noindex, nofollow` headers intact)
- **SSL Certificate:** Auto-managed Let's Encrypt cert via Vercel Edge (`cert_ZhcBa0xSc4yJkB6VuEpY7nYk`)


## Threshold redesign — 2026-10-01

- Owner-authorized warm-light redesign implemented across home, portfolio, all six case studies, practice and contact.
- Final verified preview: `https://aaron-parnala-site-bnz8uxh5x-markdavidgan-code.vercel.app`.
- Production deployment: `https://aaron-parnala-site-2p6w8405p-markdavidgan-code.vercel.app`.
- Live custom hostname: `https://aaronparnala.markdavidgan.com`; new “Spaces, felt.” content verified in Safari and over HTTP.
- Existing DNS preserved. CLI preview promotion returned a team-resolution error; production deployment of the same checked source succeeded through the project's normal pipeline.
- Passed: ESLint, TypeScript, production build, diff whitespace check; all ten content routes HTTP 200 with noindex metadata/header and one h1; robots disallow; all fifteen optimized image URLs return images.
- Safari visual review: 390×844, 768×1024 and 1440×900 responsive viewports, plus normal desktop. Mobile menu, concept filter, case-study navigation and simulated form exercised; final preview confirmation focus verified.
- Reduced-motion static composition verified in source; system-level motion emulation was not performed. No claim of a full accessibility audit, measured performance, or real-device testing.
- Some Aaron-sourced portfolio imagery may be renders. Original files, image medium and individual photographer credits remain client-production handoff items. AI studies remain explicitly labeled and excluded from real project galleries.

## Live-site direction — 2026-10-01

Mark explicitly designated the site live. Removed global prototype banner, footer/metadata prototype wording and all inquiry-form code. Contact CTAs open Aaron’s project Instagram; `/contact` is a direct-contact landing page for existing links. AI concept labels and the existing noindex policy remain. Earlier prototype verification entries are historical.

### Live contact release verification

Production deployment: https://aaron-parnala-site-owbqkjmyk-markdavidgan-code.vercel.app

Verified at https://aaronparnala.markdavidgan.com on 2026-10-01: all ten page routes return HTTP 200, contain no prototype wording or form fields, link to project Instagram, and retain noindex metadata and headers. Robots disallowance and concept AI disclosures pass. Safari desktop homepage and direct-contact landing reviewed. Lint, TypeScript and production build pass.
