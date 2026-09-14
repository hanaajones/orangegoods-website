# Orange Goods UI component layer

This website now has a small Orange Goods-owned visual layer under `components/og/` plus colocated product-style preview pieces under `components/product-style-preview/`.

## Current scope

- `components/og/visual-primitives.tsx` centralizes repeated Orange Goods panel, badge, eyebrow, and class-composition primitives.
- `components/product-style-preview/` splits the large hat/product style preview into digestible presentation components for media, timeline, quick facts, order process, and the product summary card.
- `components/ProductStylePreview.tsx` remains the state/pricing/control orchestrator so this PR avoids visual redesign or route behavior changes.

## Next safe cleanup candidates

- Extract the product-style option controls into colocated components once the repeated button/select patterns settle.
- Move cart/request configuration assembly into a focused hook after the visual split has shipped cleanly.
- Reuse `components/og/visual-primitives.tsx` in the apparel, beanie, and tote builders where markup already matches the hats-master shell.
