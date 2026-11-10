# Envi content handoff

This Arabic-first presentation includes an English view, responsive layouts, reduced-motion support, keyboard navigation, native modal dialogs, and all requested sections in order.

## Supplied assets

The Envi mark, VISTORE logo, hero artwork, storefront artwork, ERP reference composition, and contracts dashboard screenshot are supplied user assets. WebP derivatives only crop or compress the original files. The ERP dashboard is a crop from the composed reference, not a standalone screenshot and not a newly drawn interface. Replace it with the raw approved dashboard when supplied. The contracts screenshot is the real supplied interface with browser chrome removed.

## Required before public launch

- Approved VISTORE, contracts, and irrigation product URLs.
- Confirmation of contracts workflow and proposed irrigation features.
- Raw ERP dashboard screenshot.

Missing destinations open explicit notices. No contact form pretends to send messages. The supplied ERP demo URL is used directly. No company statistics, testimonials, client projects, or hardware were invented.

## Run

`npm run dev` starts the local preview. `node scripts/check-site.mjs` checks content and asset integrity. `npx tsc --noEmit` checks TypeScript. Use the Sites build helper for deployment.

Motion uses CSS and IntersectionObserver; no animation dependency is needed. Arabic and English strings live together in `app/page.tsx`.
