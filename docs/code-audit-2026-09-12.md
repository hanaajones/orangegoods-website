# Website code audit — 2026-09-12

## References used

- React: break UI into a component hierarchy and keep components focused on one concern.
- React purity rule: components/hooks should be idempotent, avoid side effects during render, and keep effects/event handlers separate from rendering.
- Next.js App Router: keep route files as routing entry points, use colocated folders deliberately, and use client boundaries only for interactive UI.
- Next.js data fetching: server-side/API code should own credentialed delivery and side effects; client components should call stable internal interfaces.

## Issues found

- `app/api/contact/route.ts` had grown into a 1,060-line route handler that mixed routing, request parsing, upload staging, bridge delivery, HubSpot sync, email delivery, Slack notification, and response formatting.
- Contact-style client forms repeated the same `/api/contact` `fetch` / JSON-error fallback / submitting-state sequence across the contact page, services lead form, hats quick-start form, design-start form, and project cart.
- Lead-attribution hidden-field hydration was repeated in multiple interactive components.
- `eslint .` included generated `next-env.d.ts`, causing a generated-code lint error after Next emitted a route-types triple-slash reference.
- `components/BeanieBuilderPreview.tsx` had an existing `react-hooks/exhaustive-deps` warning in the project-cart hydration effect.
- Large component/data files remain and should be split in later passes, especially `components/ProductStylePreview.tsx`, `components/ApparelBuilderPreview.tsx`, `components/AllGoodsBrowser.tsx`, `app/contact/page.tsx`, and `app/case-studies/*`.

## Changes made in this PR

- Moved the contact route implementation into `lib/contact/server/handler.ts` and left `app/api/contact/route.ts` as a one-line route entry point.
- Split the contact server `POST` flow into named helpers for request parsing/validation, durable J-Core database capture, post-capture side effects, success responses, and error responses.
- Added `lib/contact/client-submit.ts` so client forms share one typed `/api/contact` submission/error handling layer.
- Added `hooks/useLeadAttributionHiddenFields.ts` so interactive forms share one attribution hydration hook.
- Updated the contact page, service lead form, hats quick-start form, design-start form, and project cart to use the shared client contact layer.
- Ignored generated `next-env.d.ts` in ESLint instead of editing generated code.
- Fixed the existing beanie-builder hook dependency warning by including `requestedStyleSlug` in the effect dependency list.

## Contracts preserved

- `/api/contact` remains the public website contact endpoint.
- Contact/artwork form field names are unchanged.
- J-Core bridge env names and fallback env names are unchanged.
- HubSpot, Resend/email, Slack, and webhook delivery behavior remains behind the same route flow.
- No DNS, Vercel production settings, external systems, HubSpot records, Trello, email sends, DB records, or automations were changed.
- No full `/api/contact` browser/API smoke was run because that path can send real internal/client email.

## Verification

- `npm run lint`
- `npx tsc --noEmit --pretty false`
- `npm run build`

No test script exists in `package.json` as of this audit.

## Recommended next cleanup passes

1. Split `ProductStylePreview` into state/use-cart helpers, product summary components, and rendering sections.
2. Move shared field/label/select primitives out of individual forms once visual snapshots are available.
3. Add focused unit tests around contact payload parsing/signing/response behavior before deeper API-route rewrites.
4. Split large static content/data files from route/page render code where the page currently owns both data and presentation.
