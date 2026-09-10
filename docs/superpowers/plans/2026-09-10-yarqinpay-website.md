# YARQINPAY Website Prototype Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and visually verify two responsive Next.js YARQINPAY homepage prototypes, with the bright equipment-led concept on `main` and the dark routing-led concept on `concept/network-control-plane`.

**Architecture:** A Next.js App Router site renders static, typed product content through focused server components. One client interaction layer owns Preline-backed navigation, language selection, partner-dialog state, and local-only form feedback. The alternate branch preserves the shared content and interaction contracts while swapping the hero and selected storytelling sections.

**Tech Stack:** Next.js 16.3.4, React 19.3.0, TypeScript, Tailwind CSS 4.3.3, Preline 5.0.0, Phosphor React 2.1.10, Vitest 5, Testing Library, Playwright browser verification through the Codex in-app browser.

**Spec:** `docs/superpowers/specs/2026-09-10-yarqinpay-website-design.md`

## Global Constraints

- Primary brand accent is `#FF5000`; surfaces are white/light cool gray with dark graphite type.
- English prototype copy must stay concrete and B2B; Dari and Pashto must show an honest preview-unavailable state.
- Partner form remains local-only and transmits no user data.
- All raster assets are original generated assets; Banco Plata assets are reference-only and may not be hotlinked or copied.
- Icons come from Phosphor React; no handmade SVG, CSS drawings, text glyph icons, or emoji.
- Body text remains at least 14 pixels, interactive targets at least 44 by 44 pixels, and focus states remain visible.
- `prefers-reduced-motion` disables nonessential movement.
- `design-qa.md` must end in `final result: passed` on both branches.

---

### Task 1: Scaffold, Content Contracts, And Theme

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `vitest.config.ts`, `vitest.setup.ts`
- Create: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`
- Create: `lib/content.ts`, `lib/content.test.ts`, `lib/partner-form.ts`, `lib/partner-form.test.ts`
- Create: `src/styles/themes/yarqinpay.css`
- Modify: `.gitignore`

**Interfaces:**
- Produces: `products`, `audiences`, `ecosystemColumns`, `footerGroups`, `validatePartnerForm(input)`, and `PartnerFormValues`.
- Consumes: design spec and approved visual targets only.

- [ ] **Step 1: Create the Next.js test/tooling scaffold**

Define scripts `dev`, `build`, `start`, `lint`, `test`, and `test:run`. Install exact major versions listed above plus `eslint`, `eslint-config-next`, `jsdom`, `@testing-library/react`, and `@testing-library/jest-dom`.

- [ ] **Step 2: Write failing content and form tests**

`lib/content.test.ts` asserts unique product IDs, valid local anchors, all required product labels, and no unsupported languages presented as translated. `lib/partner-form.test.ts` asserts required organization/name/email/partner type fields, rejects malformed email, and accepts a complete valid record.

- [ ] **Step 3: Run tests and confirm RED**

Run: `npm run test:run`

Expected: failure because `lib/content.ts` and `lib/partner-form.ts` do not exist.

- [ ] **Step 4: Implement typed content and pure validation**

Export stable typed arrays and:

```ts
export type PartnerFormValues = {
  organization: string;
  contactName: string;
  email: string;
  partnerType: string;
  message: string;
};

export function validatePartnerForm(values: PartnerFormValues): Partial<Record<keyof PartnerFormValues, string>>;
```

- [ ] **Step 5: Run tests and confirm GREEN**

Run: `npm run test:run`

Expected: all content and validation tests pass.

- [ ] **Step 6: Generate and enable the Preline theme**

Create `src/styles/themes/`, run the installed theme generator with normalized inputs `name=yarqinpay`, `primaryColor=#FF5000`, `style=vibrant`, and `tailwindGray=neutral`, then set `data-theme="theme-yarqinpay"` on `<html>`.

- [ ] **Step 7: Commit**

```bash
git add package.json package-lock.json next.config.ts tsconfig.json postcss.config.mjs vitest.config.ts vitest.setup.ts app lib src/styles .gitignore
git commit -m "chore: scaffold YARQINPAY Next.js prototype"
```

### Task 2: Shared Interactive Shell

**Files:**
- Create: `components/brand.tsx`, `components/site-header.tsx`, `components/site-footer.tsx`, `components/partner-dialog.tsx`, `components/preline-loader.tsx`
- Create: `components/site-header.test.tsx`, `components/partner-dialog.test.tsx`
- Modify: `app/layout.tsx`, `app/globals.css`

**Interfaces:**
- Consumes: navigation/footer data and `validatePartnerForm` from Task 1.
- Produces: `SiteHeader`, `SiteFooter`, `PartnerDialog`, and shared `data-partner-trigger` behavior.

- [ ] **Step 1: Write failing interaction tests**

Test that the mobile menu exposes an accessible expanded state, the language menu identifies English/Dari/Pashto, the partner dialog opens from a trigger, invalid submission renders inline errors, and valid submission renders a success state without issuing a network request.

- [ ] **Step 2: Run tests and confirm RED**

Run: `npm run test:run -- components/site-header.test.tsx components/partner-dialog.test.tsx`

Expected: component modules are missing.

- [ ] **Step 3: Implement the shared shell**

Use Preline-compatible `hs-collapse`, `hs-dropdown`, and `hs-overlay` data attributes. Keep component state deterministic in React for testability and initialize Preline after route hydration through a tiny client loader.

- [ ] **Step 4: Run tests and confirm GREEN**

Run: `npm run test:run`

Expected: all tests pass with no act warnings.

- [ ] **Step 5: Commit**

```bash
git add app components
git commit -m "feat: add responsive navigation and partner flow"
```

### Task 3: Primary Visual Implementation And Assets

**Files:**
- Create: `components/hero.tsx`, `components/products.tsx`, `components/ecosystem.tsx`, `components/audiences.tsx`, `components/impact.tsx`, `components/partner-cta.tsx`
- Create: `public/images/hero-equipment.webp`, `public/images/product-*.webp`, `public/images/audience-*.webp`, `public/images/afghanistan-landscape.webp`
- Modify: `app/page.tsx`, `app/globals.css`

**Interfaces:**
- Consumes: shared content arrays and partner trigger behavior.
- Produces: the complete option 1 homepage composition and local asset set.

- [ ] **Step 1: Generate and inspect original raster assets**

Create one bright hero equipment composition, five product images, four audience images, and one dark Afghanistan landscape. Match the reference slots, neutral product-lighting direction, crop, and orange accent. Inspect each output before placing it.

- [ ] **Step 2: Write failing page integrity test**

Create `app/page.test.tsx` and assert one `h1`, all required section IDs, both hero CTAs, all five product names, ecosystem labels, illustrative metric labeling, and the closing partner CTA.

- [ ] **Step 3: Run test and confirm RED**

Run: `npm run test:run -- app/page.test.tsx`

Expected: required headings and sections are absent.

- [ ] **Step 4: Implement the option 1 page**

Match the approved image hierarchy with a full-width poster-like hero, audience strip, product grid, ecosystem diagram, impact strip, audience solutions, dark landscape CTA, and footer. Use `next/image` with correct `sizes`; prioritize only the hero image.

- [ ] **Step 5: Run test and confirm GREEN**

Run: `npm run test:run`

Expected: all unit and component tests pass.

- [ ] **Step 6: Run static verification**

Run: `npm run lint && npm run build`

Expected: both commands exit 0 without errors.

- [ ] **Step 7: Commit**

```bash
git add app components public lib src package.json package-lock.json
git commit -m "feat: build bright YARQINPAY homepage concept"
```

### Task 4: Primary Browser And Design QA

**Files:**
- Create: `design-qa.md`
- Modify: any primary-page files required to resolve P0/P1/P2 findings.

**Interfaces:**
- Consumes: running option 1 site and primary target image.
- Produces: a browser-verified `main` branch and passing `design-qa.md`.

- [ ] **Step 1: Start the local Next.js server**

Run `npm run dev -- --hostname 0.0.0.0 --port 3000` in a persistent terminal session.

- [ ] **Step 2: Verify desktop interactions in the in-app browser**

At 1440 pixels wide, test the products mega menu, language selector, anchor navigation, partner dialog errors, valid local success state, and console logs.

- [ ] **Step 3: Verify mobile interactions**

At 390 by 844 pixels, test navigation disclosure, content order, product readability, ecosystem vertical flow, and partner dialog.

- [ ] **Step 4: Compare against the approved image and iterate**

Capture the implementation at the same desktop viewport. Compare source and implementation together. Fix P0/P1/P2 differences; record remaining P3 polish only.

- [ ] **Step 5: Write the QA report**

Create `design-qa.md` with source, tested viewports, interaction results, visual findings, fixes, and `final result: passed`.

- [ ] **Step 6: Re-run all verification and commit**

Run: `npm run test:run && npm run lint && npm run build`

```bash
git add .
git commit -m "test: verify primary YARQINPAY concept"
```

### Task 5: Alternate Branch Implementation

**Files:**
- Create: `components/network-hero.tsx`, `components/platform-stack.tsx`
- Create: `public/images/network-cityscape.webp`, `public/images/network-equipment.webp`, `public/images/afghanistan-map.webp`
- Modify: `app/page.tsx`, `app/page.test.tsx`, `app/globals.css`, `design-qa.md`

**Interfaces:**
- Consumes: the verified shared foundation from `main` and alternate visual target.
- Produces: the verified `concept/network-control-plane` variant.

- [ ] **Step 1: Create the alternate branch**

Run: `git switch -c concept/network-control-plane`.

- [ ] **Step 2: Generate and inspect alternate assets**

Create a dark Afghan cityscape, compatible product equipment lineup, and restrained Afghanistan network map raster.

- [ ] **Step 3: Change the page test to the alternate contract and confirm RED**

Assert the `Payment infrastructure for modern Afghanistan.` heading, five route labels, One Platform section, full technology stack, product row, security proof, and orange closing CTA.

Run: `npm run test:run -- app/page.test.tsx`

Expected: failure because alternate sections are missing.

- [ ] **Step 4: Implement the alternate composition**

Replace only branch-specific sections. Keep shared navigation, content, partner flow, accessibility, and footer behavior unchanged.

- [ ] **Step 5: Run test and confirm GREEN**

Run: `npm run test:run`

Expected: all tests pass.

- [ ] **Step 6: Run alternate browser and design QA**

Test desktop and mobile interactions, compare with the alternate target, fix P0/P1/P2 findings, and update `design-qa.md` to `final result: passed` for this branch.

- [ ] **Step 7: Re-run all verification and commit**

Run: `npm run test:run && npm run lint && npm run build`

```bash
git add .
git commit -m "feat: add network control plane concept"
```

### Task 6: Final Branch Audit And Handoff

**Files:**
- Modify: only files required by verified final findings.

**Interfaces:**
- Consumes: both verified branches.
- Produces: final branch status, run instructions, and a primary local preview.

- [ ] **Step 1: Audit branch history and cleanliness**

Run `git log --oneline --decorate --graph --all`, `git status --short`, and compare branch file lists.

- [ ] **Step 2: Re-verify the alternate branch**

Run `npm run test:run && npm run lint && npm run build` and confirm `design-qa.md` passes.

- [ ] **Step 3: Return to `main` and re-verify**

Run `git switch main`, `npm run test:run && npm run lint && npm run build`, and confirm `design-qa.md` passes.

- [ ] **Step 4: Keep the primary preview open**

Start or retain the primary Next.js server and open the local URL in the Codex in-app browser.

- [ ] **Step 5: Provide the handoff**

Return the clickable local prototype URL first, identify both branches, summarize fresh test/lint/build evidence, and invite one focused polish pass or deployment if desired.
