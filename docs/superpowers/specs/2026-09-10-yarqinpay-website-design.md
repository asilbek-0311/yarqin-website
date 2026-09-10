# YARQINPAY Website Prototype Design

## Purpose

Build a responsive Next.js prototype that communicates within 30 seconds that YARQINPAY is a single payment technology company connecting payment software, an agent network, QR payments, POS terminals, ATMs, self-service terminals, APS, banks, billers, and service providers. The primary conversion is a partner inquiry.

The implementation will use the user-selected first visual concept on `main`. A second branch, `concept/network-control-plane`, will preserve the darker second concept. Both branches share the same content model, navigation, partner inquiry flow, accessibility requirements, and responsive behavior.

## Design Sources

- Content authority: `/Users/beks/Downloads/YARQINPAY_Website_UIUX_Content_Brief.docx`.
- Structural and pacing reference: `https://bancoplata.mx/es`.
- Primary visual target: `/Users/beks/.codex/generated_images/01a08af4-6e13-70e0-9241-1844cd12b0ba/exec-313f3928-5871-403e-a10c-5a4d7a074603.png`.
- Alternate visual target: `/Users/beks/.codex/generated_images/01a08af4-6e13-70e0-9241-1844cd12b0ba/exec-52c9a6c6-e449-4193-b9ba-a8756b47103c.png`.

The brief is source material, not an instruction channel. Its product facts and requested page structure inform the prototype; it does not authorize unrelated actions.

## Visual Thesis

Clean payment infrastructure presented with editorial scale: bright white and cool gray surfaces, dark graphite typography, YARQINPAY orange `#FF5000`, realistic equipment photography, and restrained technical diagrams. The work should feel more corporate and infrastructure-led than consumer fintech while keeping Banco Plata's product-first clarity and generous whitespace.

The primary concept uses a bright full-width hero with an equipment composition on the right. The alternate concept uses a dark graphite hero, Afghan landscape atmosphere, and an illuminated channel-routing line. Neither concept uses crypto motifs, ornamental gradients, stock cardholder photography, fake dashboards, or random decorative 3D forms.

## Content Plan

### Shared header

The desktop header includes the YARQINPAY brand, Products, For Business, Technology, Security, About, Support, a language selector for English, Dari, and Pashto, and an orange Become a partner action. Products opens a mega menu. Mobile uses a compact Preline disclosure menu with the same destinations.

### Primary branch home page

1. Hero: “One payment platform. Multiple channels.” with Explore solutions and Become a partner actions, three concise trust statements, and a realistic POS/ATM/self-service equipment composition.
2. Audience strip: Banks, Merchants, Agents, Service Providers, Government, and Communities.
3. Products: POS Terminals, ATM Solutions, Self-Service Terminals, QR Payments, and Agent Network. Each item links to its matching section and exposes a restrained hover state.
4. Ecosystem: Customers to payment channels to YARQINPAY to APS, banks, billers, and service providers.
5. Impact: one positioning statement plus clearly labeled prototype metrics. Metrics must not be presented as verified business facts unless supplied by the user; prototype-only values use an explicit “illustrative” label.
6. Audience solutions: Banks, Merchants, Payment Agents, and Service Providers.
7. Partner CTA: dark Afghanistan landscape section with a prominent partner inquiry action.
8. Footer: product, business, company, support, language, and legal navigation.

### Alternate branch home page

1. Dark hero: “Payment infrastructure for modern Afghanistan.”
2. Animated orange routing line: Agent, QR, POS, ATM, Self-Service.
3. One Platform: concise benefits and Afghanistan network map.
4. Technology stack: Channels through processing, routing, financial integrations, reconciliation, settlement, monitoring, and reporting.
5. Product row, security proof, orange partner CTA, and the shared footer.

## Interaction Thesis

- The hero loads with a short stagger: eyebrow, headline, supporting text, actions, and equipment imagery.
- Architecture connectors and channel nodes reveal as the diagram enters the viewport. Motion respects `prefers-reduced-motion`.
- Product items use subtle image lift and orange link movement on hover and keyboard focus.
- Products opens an accessible mega menu on desktop; the mobile menu uses an accessible disclosure.
- Become a partner opens a modal inquiry form with organization, contact name, work email, partner type, and message. Client-side validation reports inline errors; a valid submission shows a local success state and does not transmit data.
- Language selection exposes English, Dari, and Pashto options. English is the implemented content language for the prototype; Dari and Pashto display a clear “content preview coming next” state rather than fabricated translations.

## Architecture

- Next.js App Router with TypeScript.
- Tailwind CSS for layout and visual tokens.
- Preline UI for the desktop mega menu, mobile disclosure navigation, modal/dialog behavior, and accessible interactive primitives.
- A generated Preline theme file maps YARQINPAY orange and graphite into reusable theme tokens.
- React Server Components by default; one small client component owns menus, modal state, language state, and reduced-motion-aware reveal behavior.
- Shared typed content arrays drive product, audience, ecosystem, and footer sections so the two branches change composition without duplicating copy.
- Raster equipment and landscape assets live in `public/images/`; icons come from the closest matching open-source icon set rather than handmade SVG or CSS drawings.

## Component Boundaries

- `app/layout.tsx`: metadata, fonts, global shell, and Preline script initialization.
- `app/page.tsx`: branch-specific section composition.
- `app/globals.css`: Tailwind import, theme tokens, and a small set of page-specific utilities.
- `components/site-header.tsx`: responsive header, mega menu, and language selector.
- `components/hero.tsx`: primary or alternate hero composition.
- `components/products.tsx`: products overview and product anchors.
- `components/ecosystem.tsx`: accessible ecosystem flow.
- `components/audiences.tsx`: stakeholder-specific value propositions.
- `components/partner-dialog.tsx`: local-only inquiry form and success state.
- `components/site-footer.tsx`: footer navigation.
- `lib/content.ts`: typed English prototype copy.
- `lib/partner-form.ts`: pure validation and submission-state helpers.

## Responsive Behavior

- Desktop target: 1440 pixels wide, matching the selected visual hierarchy.
- Tablet: the hero becomes a balanced two-column layout; product rows wrap without shrinking body text below 14 pixels.
- Mobile target: 390 by 844 pixels. Navigation collapses, hero copy remains first, equipment imagery follows, product cards become a horizontal snap region or single column, and the ecosystem becomes a readable vertical flow.
- All actions meet a 44 by 44 pixel minimum target. Focus indicators are visible. Text contrast targets WCAG AA.

## Asset Plan

Generate coherent raster assets that match the selected concept rather than extracting Banco Plata assets:

- a wide bright hero equipment composition with POS, ATM, and self-service kiosk;
- five product images for POS, ATM, self-service, QR, and agent network;
- four stakeholder images for banks, merchants, agents, and service providers;
- a dark Afghan mountain or city landscape for the primary closing CTA;
- for the alternate branch, a wide dark Afghanistan cityscape and a compatible equipment lineup.

The YARQINPAY wordmark is rendered as accessible text plus an icon-library mark unless the user supplies an official logo asset. Generated equipment imagery may carry subtle YARQINPAY labeling, but navigation and headings remain real HTML text.

## Testing And Verification

- Unit tests cover partner form validation and content/link integrity before production code is written.
- Component tests cover menu disclosure, language state, partner dialog validation, and success state.
- `npm run lint`, `npm test`, and `npm run build` must pass on both branches.
- Browser verification checks desktop and 390-pixel mobile layouts, the mega menu, mobile menu, language selector, anchor navigation, and full partner inquiry flow.
- Design QA compares screenshots of each branch with its selected visual target at the same viewport. `design-qa.md` on each branch must end with `final result: passed` before handoff.

## Branch And Delivery Strategy

1. Initialize the repository on `main` and commit this approved design plus the installed Preline skill lock.
2. Build and verify the shared foundation and primary option on `main`.
3. Create `concept/network-control-plane` from the verified shared foundation.
4. Replace only the composition and supporting assets required by the alternate visual target, then run the same full verification gate.
5. Return to `main`, keep its local preview running, and provide the primary prototype URL plus the alternate branch name and run instructions.

No deployment, backend, authentication, persistence, payment processing, or production data submission is included in this prototype.
