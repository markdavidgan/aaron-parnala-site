# Deployment Strategy & DNS Routing

## Target Hostname

- **Prototype Hostname:** `https://aaronparnala.markdavidgan.com`
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
   - Verify simulated form state.
4. **Subdomain Assignment:**
   - Inspect existing `markdavidgan.com` Cloudflare/Vercel DNS zone.
   - Attach `aaronparnala.markdavidgan.com` to the Vercel project.
   - Verify SSL/TLS issuance and edge propagation.
5. **Live Verification:**
   - Confirm HTTPS, response headers (`noindex`), and zero console errors.
