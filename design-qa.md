# YARQINPAY redesign QA — September 14, 2026

## Comparison target

This is a Banco Plata-inspired YARQINPAY redesign, not a pixel-for-pixel copy of a consumer credit-card website. The user requested its metallic 3D objects, colors, smoother pacing, and product-led flow while retaining YARQINPAY solutions. Original artwork and product-specific pages are intentional adaptations. No Banco Plata branding, commercial claims, or photography was reused.

Source visual truth:

- https://bancoplata.mx/es
- `/Users/beks/coding/work/lovable/yarqin-website/design-qa-reference.png` — desktop hero.
- `/Users/beks/coding/work/lovable/yarqin-website/design-qa-reference-icons.png` — chrome benefit icons and pale-gray section treatment.

Implementation: http://localhost:3000

## Evidence and viewport normalization

All following files are in `/Users/beks/coding/work/lovable/yarqin-website/`.

- `design-qa-desktop.png`: final homepage hero, 1280×720 pixels / CSS viewport, 1:1 capture.
- `design-qa-icons.png`: chrome benefit icons and editorial introduction, 1280×720.
- `design-qa-solutions.png`: final POS story, readable copy, chrome terminal and carousel controls, 1280×720.
- `design-qa-business.png`: selected Merchant story, 1280×720.
- `design-qa-security.png`: chrome shield and trust copy, 1280×720.
- `design-qa-detail.png`: QR solution detail page, 1280×720.
- `design-qa-mobile.png`: homepage at 390×844.
- `design-qa-mobile-solutions.png`: keyboard-selected Agent Network tab at 390×844.
- `design-qa-mobile-detail.png`: Agent Network detail at 390×844.
- `design-qa-tablet.png`: final uncropped POS showcase at 820×1180.
- `design-qa-tablet-hero.png`: final uncropped tablet hero at 820×1180.

The two desktop hero images were opened together in one comparison tool response at the same viewport and top-of-page state. The source icon capture, final icon section, and final POS section were also opened together for material, typography, copy contrast, and layout review. These focused views compare the visual language, not identical text or scroll positions. Mobile and tablet are responsive adaptations and were reviewed independently; no claim of pixel fidelity to an uncaptured mobile source is made. A further live 320×740 check confirmed no page-level horizontal overflow. No image density normalization was needed.

## Findings and iteration history

1. **P1 — Supporting copy nearly invisible.** A generic `--muted` variable collided with Preline’s pale surface token. Browser-computed color and the initial POS screenshot exposed the problem. Renamed the website text token to `--copy-muted`; recaptured `design-qa-solutions.png`, `design-qa-security.png`, and detail pages show readable gray copy.
2. **P2 — Hero asset edges and cropping.** Initial orange-background artwork showed a rectangular seam; early tablet framing clipped the sculpture. Generated a transparent version, removed the mask, and constrained the artwork within its column. Final desktop, mobile, and `design-qa-tablet-hero.png` show complete artwork without the former seam. The tablet showcase now uses a square aspect ratio to avoid cropping its payment device.
3. **P2 — Form labels changed when errors appeared.** Exact accessible labels initially included inline error text. Added stable input labels while retaining error descriptions. Browser verification then completed invalid → corrected → confirmation. Keyboard focus is trapped, scrolling is locked, Escape restores the opener, and success returns focus to the close control.
4. **P2 — Route-entry position and motion compatibility.** Explicit top anchors make solution/home links open their first screen. Added Next.js 16’s documented `data-scroll-behavior="smooth"` attribute. Browser navigation verified top-of-page arrival; a fresh final load emitted no warnings or errors.
5. **P2 — Text contrast on orange.** Small hero copy and navigation now use dark ink. Small white button/business text uses a deeper orange surface. Large hero headings remain white. The color changes preserve the warm-orange direction without relying on the source’s small white-on-bright-orange text.

All listed issues were fixed and followed by live recapture or interaction verification. No actionable P0/P1/P2 findings remain.

## Required fidelity surfaces

- **Typography:** self-hosted Manrope is loaded and verified in the browser. Large, regular-weight display type and tight tracking preserve the source’s open editorial character. Mobile headings wrap without overflow at 320 and 390 pixels. Navigation is intentionally more compact than the source to accommodate B2B destinations.
- **Spacing/layout:** an orange campaign hero leads to pale-gray space, one interactive product story, a concise platform explanation, audience-specific copy, a large chrome trust visual, FAQ, and closing CTA. Repeated product/audience grids and illustrative metric blocks have been removed. Rounded major sections, restrained borders, and generous spacing match the reference direction.
- **Colors/tokens:** warm orange, graphite, white, and pale gray; scoped supporting-text token avoids Preline collisions. Higher-contrast colors are used for primary small text and buttons. This review is not a formal WCAG certification.
- **Images:** original polished chrome Y, payment card, coin, POS terminal, QR placard, ATM, kiosk, community symbol, and shield. Real raster assets are used for the 3D imagery. Standard navigational icons remain from Phosphor. No broken images were detected in the final homepage state. Device and QR imagery is illustrative.
- **Copy/content:** YARQINPAY’s five solutions, Afghanistan positioning, financial partners, technology, and partnership journey are retained. The site does not assert fabricated business metrics, unprovided certifications, or Banco Plata offers. Form transmission and localization limitations are clearly stated in the prototype.

## Functional verification

- Hero → solution showcase → QR and Agent Network detail pages.
- Mobile navigation → POS detail page; menu closes after selection.
- All five tabs update product copy and detail links; previous/next cycling and Arrow/Home/End keyboard behavior are covered by tests. End-key selection was exercised in the mobile browser.
- Merchant audience selection updates its story and destination.
- Desktop solution menu, Escape dismissal, language preview feedback, FAQ disclosure, and back-to-top behavior checked live.
- Partner dialog opened from a detail page; invalid submission, field correction, successful local preview, and close were exercised. Mobile dialog fits and is scrollable on smaller viewports.
- 17 automated tests passed; lint passed; final production build passed with all five solution pages prerendered.
- Final fresh browser load: no new warning/error entries, Manrope loaded, no horizontal overflow at 1280 pixels.
- Default browser viewport restored, local preview left at the hero.

## Scope and follow-up polish

- English only; Dari/Pashto are upcoming previews.
- Form data is not transmitted or persisted. Production CRM/email, legal content, final commercial terms, localization, and certified hardware details require real inputs and integrations.
- P3: an official supplied YARQINPAY vector wordmark could replace the current accessible text wordmark.
- The original alternate branch is unchanged; this redesign targets `main`.

## Implementation checklist

- [x] Original chrome asset family and local font/license
- [x] Responsive homepage and five solution pages
- [x] Core navigation, product selection, FAQ, inquiry interactions
- [x] Browser desktop/mobile/tablet review and fix loop
- [x] Tests, lint, production build
- [x] Local preview available

final result: passed
