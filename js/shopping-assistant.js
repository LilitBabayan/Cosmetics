// The "agent": a rule-based shopping assistant that matches a customer's
// free-text question against the PRODUCTS catalog and drafts a warm,
// on-brand reply. No external API calls — everything here reads only from
// PRODUCTS, so there is nothing to hallucinate beyond that array.

const ASSISTANT_CATEGORY_KEYWORDS = {
  Skincare: ["skincare", "serum", "cream", "toner", "moisturizer", "moisturiser", "cleanser", "skin"],
  Makeup: ["makeup", "lipstick", "lip", "foundation", "blush", "concealer", "mascara"],
  Fragrance: ["fragrance", "perfume", "cologne", "scent", "parfum", "toilette", "smell"]
};

const ASSISTANT_CONCERN_KEYWORDS = {
  dry: ["dry", "dryness", "flaky", "hydrat", "moistur"],
  oily: ["oily", "oil-control", "shine", "matte"],
  glow: ["glow", "dewy", "radian", "brighten"],
  sensitive: ["sensitive", "gentle", "soothe", "calm"],
  antiAging: ["wrinkle", "fine line", "anti-aging", "anti aging", "firm"]
};

function assistantExtractPriceCeiling(text) {
  const match = text.match(/(?:under|below|less than|no more than)\s*\$?(\d+(\.\d+)?)/i);
  return match ? parseFloat(match[1]) : null;
}

function assistantMatchCategories(text) {
  return Object.entries(ASSISTANT_CATEGORY_KEYWORDS)
    .filter(([, words]) => words.some(w => text.includes(w)))
    .map(([category]) => category);
}

function assistantScoreProduct(product, text, categories) {
  let score = 0;
  const haystack = `${product.name} ${product.description}`.toLowerCase();

  if (categories.includes(product.category)) score += 3;
  if (text.includes(product.name.toLowerCase())) score += 5;
  if (product.brand !== "Lumora" && text.includes(product.brand.toLowerCase())) score += 5;

  Object.values(ASSISTANT_CONCERN_KEYWORDS).forEach(words => {
    const mentioned = words.some(w => text.includes(w));
    const matches = words.some(w => haystack.includes(w));
    if (mentioned && matches) score += 2;
  });

  return score;
}

function draftAssistantResponse(question) {
  const text = question.toLowerCase();
  const categories = assistantMatchCategories(text);
  const priceCeiling = assistantExtractPriceCeiling(text);

  const candidates = PRODUCTS
    .map(product => ({ product, score: assistantScoreProduct(product, text, categories) }))
    .filter(({ product, score }) => {
      if (priceCeiling !== null && product.price > priceCeiling) return false;
      return score > 0;
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ product }) => product);

  if (candidates.length === 0) {
    return {
      text: "I couldn't find a perfect match for that — try browsing Skincare, Makeup, or Fragrance above, or tell me a bit more about what you're looking for, like a concern or a budget.",
      productIds: []
    };
  }

  const intro = candidates.length === 1
    ? "Here's one I think you'll love:"
    : "Here's what I'd suggest:";

  const lines = candidates.map(p => `• ${p.brand} ${p.name} (${formatPrice(p.price)}) — ${p.description}`);

  return {
    text: `${intro}\n${lines.join("\n")}`,
    productIds: candidates.map(p => p.id)
  };
}
