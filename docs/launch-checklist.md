# Prototype Review & Launch Checklist

Before sharing `https://aaronparnala.markdavidgan.com` with Aaron Parnala:

- [ ] **Real vs AI Imagery Integrity:**
  - [ ] Every AI concept image carries the visible `Concept image` label.
  - [ ] Persistent prototype disclaimer banner renders at top of screen.
  - [ ] Real projects feature only verified imagery from Aaron's portfolio.
- [ ] **No Unverified Claims:**
  - [ ] No invented client testimonials.
  - [ ] No unverified studio size, licenses, awards, or square-meter figures.
  - [ ] Unverified dates/budgets omitted.
- [ ] **Responsive Visual Quality:**
  - [ ] Mobile navigation drawer operates cleanly at 390px.
  - [ ] Hero photography crops well without head-cutting or awkward framing.
  - [ ] Tablet (768px) and desktop (1440px) maintain architectural whitespace.
- [ ] **Lead Flow Safety:**
  - [ ] Contact form is explicitly labeled as a simulated prototype.
  - [ ] Submitting form produces a graceful demo response without sending unexpected emails.
  - [ ] Aaron's real email (`aaronparnala@gmail.com`) and Instagram link (`@aaron_parnala_projects`) are clearly accessible as official channels.
- [ ] **SEO & Indexing Protection:**
  - [ ] `robots.txt` / metadata configured with `noindex, nofollow`.
- [ ] **Performance & Build:**
  - [ ] `pnpm build` succeeds with zero TypeScript or ESLint errors.
  - [ ] Images optimized via Next.js Image component.
