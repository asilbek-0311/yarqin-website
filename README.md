# YARQINPAY website prototype

Next.js App Router, TypeScript, Tailwind CSS 4, and the existing Preline theme. The September 2026 redesign takes its visual direction from [Banco Plata](https://bancoplata.mx/es): oversized typography, warm orange, pale-gray surfaces, chrome 3D imagery, and focused product storytelling.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. For a production check, run `npm run build` and `npm start`.

## Pages and interactions

- `/`: landing page with keyboard-accessible solution tabs, business-audience switching, FAQ disclosures, and partnership entry points.
- `/solutions/pos-terminals`
- `/solutions/qr-payments`
- `/solutions/atm-solutions`
- `/solutions/self-service-terminals`
- `/solutions/agent-network`

Every detail page has its own metadata, product story, next steps, related solutions, and partner CTA. Product content lives in `lib/solutions.ts`. The original alternate design branch is unchanged.

Partner inquiries validate locally and display a preview confirmation. They are **not transmitted or persisted**. No payment processing, authentication, or production integrations are included. English is implemented; the language menu labels Dari and Pashto as upcoming previews. Generated QR imagery is illustrative and is not a payment destination. No unverified business metrics or certification claims are shown.

## Checks

```sh
npm run test:run
npm run lint
npm run build
```

Tests cover content destinations, solution and audience switching, keyboard navigation, form validation, focus containment, and the local confirmation. Browser QA covers desktop, tablet, and mobile layouts. See `design-qa.md` for captured evidence and limitations.

Manrope is self-hosted in `public/fonts` under the included SIL Open Font License. Original generated chrome imagery and prompts are documented in `docs/design/chrome-assets.md`.
