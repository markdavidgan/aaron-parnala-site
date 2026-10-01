# Spatial motion — 2026-10-01

The Threshold visual identity stays warm ivory, dark timber ink, Geist architectural headings and Newsreader editorial accents. Motion follows spatial scale: the opening settles into place, imagery uncovers vertically, and the material/hospitality images move gently within their frames as the visitor scrolls. The existing expanding hero remains the principal scroll moment. No scroll hijacking, pinned sections or custom cursor.

Interaction states: image magnification and caption movement on linked projects; drawn underlines on navigation and text links; directional arrows; a rotating, filled Instagram contact circle; filter selection and collection refresh; animated mobile menu entry and clear open-button state. Keyboard focus receives equivalent linked-project and CTA feedback.

Implementation uses the native Web Animations API, IntersectionObserver and a requestAnimationFrame-throttled scroll listener. No additional runtime package. Route changes dispose observers, listeners and animations; filter replacements register new images. Server-rendered content is visible without JavaScript. Reduced-motion preference skips JS animation, cancels active animations and removes depth transforms; CSS transitions and animations are disabled. No forms, prototype labels or contact destination changes.

Acceptance: lint, TypeScript and production build; desktop scroll and collection filtering; mobile menu and layout; production HTTP checks and Instagram contact/AI disclosure regression checks. Live browser review is distinct from build success.

## Release verification

Production: https://aaron-parnala-site-8g24argss-markdavidgan-code.vercel.app, aliased to https://aaronparnala.markdavidgan.com. Lint, TypeScript and build passed. Safari preview review covered desktop collection filtering, homepage image loading/depth scene, 390 × 844 responsive homepage scroll, mobile menu open/close and client route navigation. Production homepage opened successfully. All ten production page routes passed HTTP 200, Instagram contact, no forms/prototype wording, noindex header and concept disclosure checks. Deployed CSS and JS contain the motion implementation. Reduced-motion branches and cleanup were reviewed in code; OS preference switching and physical-device motion were not separately exercised.
