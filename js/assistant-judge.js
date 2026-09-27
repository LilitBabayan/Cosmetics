// The "judge": checks a candidate assistant response before it's shown to
// the customer. Runs entirely offline right now, but does the same job a
// real LLM-as-judge guardrail would do if the assistant is later upgraded
// to call an actual model — catch hallucinated products, unsafe claims, or
// off-brand replies before they reach anyone.

const ASSISTANT_BANNED_PHRASES = [
  "cure", "cures", "treats acne", "heals", "diagnos", "prescri",
  "fda", "guarantee", "medical", "clinically proven"
];

const ASSISTANT_MAX_LENGTH = 600;

function judgeAssistantResponse(response) {
  const reasons = [];
  const lowerText = response.text.toLowerCase();

  const unknownIds = response.productIds.filter(id => !PRODUCTS.some(p => p.id === id));
  if (unknownIds.length > 0) {
    reasons.push(`references unknown product id(s): ${unknownIds.join(", ")}`);
  }

  const bannedHit = ASSISTANT_BANNED_PHRASES.find(phrase => lowerText.includes(phrase));
  if (bannedHit) {
    reasons.push(`contains disallowed claim language: "${bannedHit}"`);
  }

  if (response.text.length > ASSISTANT_MAX_LENGTH) {
    reasons.push(`response too long (${response.text.length} chars, max ${ASSISTANT_MAX_LENGTH})`);
  }

  return { passed: reasons.length === 0, reasons };
}

const ASSISTANT_FALLBACK_RESPONSE = {
  text: "Let's find you something lovely — try browsing Skincare, Makeup, or Fragrance above, or ask me again with a bit more detail.",
  productIds: []
};
