---
name: add-cosmetics-product
description: Add a new product to the Lumora Cosmetics storefront (js/products.js) from a plain-language description of an item — a lipstick, serum, perfume, etc. Make sure to use this skill whenever the user wants to add, create, or list a new product, item, or SKU for the Lumora Cosmetics shop, even if they don't mention the file name or say "skill" explicitly (e.g. "add a new blush to the shop", "we're launching a new serum called...", "put this perfume on the site").
---

# Add Cosmetics Product

This skill appends a new product to the `PRODUCTS` array in `js/products.js` for the
Lumora Cosmetics storefront. The site reads this array directly to render the product
grid, the detail modal, and the cart — so a correctly-shaped entry is all that's needed
for a new product to appear everywhere, with no other file changes.

## Why this matters

Every product object must match the exact shape the site's rendering code expects
(`js/app.js`), or the product will render with a blank thumbnail, a broken price, or
throw a JS error that breaks the whole grid for every other product too. Getting the
shape and the visual consistency right on the first try is the whole point of this
skill.

## The product shape

```js
{
  id: "p9",                 // string, next in sequence — see below
  name: "Product Name",     // string, a real product name
  category: "Skincare",     // exactly one of: "Skincare", "Makeup", "Fragrance"
  price: 28.00,             // number, no currency symbol
  icon: "🧴",                // a single emoji that reads clearly at small size
  color: "#f0e6da",         // hex string, soft pastel background for the thumbnail
  description: "A one-sentence description in the site's warm, simple voice."
}
```

## Steps

1. **Read the current `js/products.js`** to see the existing `PRODUCTS` array — you need
   its last entry to pick the next `id` (e.g. if the last id is `p8`, the new one is
   `p9`), and to keep the new entry visually and tonally consistent with what's already
   there.

2. **Fill in whatever the user didn't specify:**
   - **Category**: infer it from the product type if not stated (lipstick/blush/foundation
     → Makeup; serum/cream/toner → Skincare; perfume/cologne/mist → Fragrance). Ask only
     if it's genuinely ambiguous.
   - **Icon**: pick a single emoji that a shopper would recognize at a glance for this
     product type (e.g. 💄 lipstick, 🧴 lotion/serum, 🌹 rose-scented, ✨ perfume, 🌸
     blush/floral). Avoid reusing an icon already in the array if a distinct one fits
     better — variety helps the grid stay scannable.
   - **Color**: pick a hex value in the same soft pastel family as the existing thumbnail
     colors (light, low-saturation, warm-neutral tones — think `#e8f0e6`, `#f6dede`,
     `#f3e6d8`, `#f7e3e8`, `#fbe4ee`, `#e6eaf2`, `#faf0dd`, `#fdeee0`). Don't reuse a color
     already in use if you can help it, and never pick something saturated or dark — it
     will clash with every other card in the grid.
   - **Description**: one sentence, written in the same warm, benefit-forward voice as
     the existing entries (e.g. "A lightweight hyaluronic acid serum that locks in
     moisture for a plump, dewy finish all day long."). Lead with what it does for the
     person, not just what it is.
   - **Price**: if the user didn't give one, ask — don't guess at a number that affects
     real (even if demo) pricing.

3. **Append the new object to the end of the `PRODUCTS` array** in `js/products.js`,
   matching the existing formatting (trailing comma on the previous last entry, same
   indentation, same key order).

4. **Confirm the change** by showing the user the exact object you added, and mention
   where it'll show up (the "All" view plus its category filter).

## After adding

If the project is a git repository, offer to commit and push the change — don't do it
silently. A one-line commit message naming the product (e.g. `Add Golden Hour Blush to
product catalog`) is enough; this isn't a change that needs a longer explanation.
