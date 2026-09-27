// Wires the chat widget UI to the agent (shopping-assistant.js) and the
// judge (assistant-judge.js). Every draft response is checked by the judge
// before it's rendered; a failed check falls back to a safe generic reply
// and logs why, instead of showing the customer whatever the agent drafted.

const assistantToggle = document.getElementById("assistantToggle");
const assistantPanel = document.getElementById("assistantPanel");
const assistantClose = document.getElementById("assistantClose");
const assistantMessages = document.getElementById("assistantMessages");
const assistantForm = document.getElementById("assistantForm");
const assistantInput = document.getElementById("assistantInput");

function openAssistant() {
  assistantPanel.classList.add("open");
  assistantInput.focus();
}

function closeAssistant() {
  assistantPanel.classList.remove("open");
}

function appendAssistantMessage(role, text) {
  const bubble = document.createElement("div");
  bubble.className = `assistant-msg assistant-msg-${role}`;
  bubble.textContent = text;
  assistantMessages.appendChild(bubble);
  assistantMessages.scrollTop = assistantMessages.scrollHeight;
}

function appendAssistantChips(productIds) {
  if (productIds.length === 0) return;
  const wrap = document.createElement("div");
  wrap.className = "assistant-chips";
  productIds.forEach(id => {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;
    const chip = document.createElement("button");
    chip.className = "assistant-chip";
    chip.type = "button";
    chip.innerHTML = `<span>${product.icon}</span> ${product.name}`;
    chip.addEventListener("click", () => openProductModal(product.id));
    wrap.appendChild(chip);
  });
  assistantMessages.appendChild(wrap);
  assistantMessages.scrollTop = assistantMessages.scrollHeight;
}

function handleAssistantQuestion(question) {
  appendAssistantMessage("user", question);

  const draft = draftAssistantResponse(question);
  const verdict = judgeAssistantResponse(draft);
  const finalResponse = verdict.passed ? draft : ASSISTANT_FALLBACK_RESPONSE;

  if (!verdict.passed) {
    console.warn("[assistant-judge] blocked a response:", verdict.reasons, draft);
  }

  appendAssistantMessage("assistant", finalResponse.text);
  appendAssistantChips(finalResponse.productIds);
}

assistantToggle.addEventListener("click", () => {
  if (assistantPanel.classList.contains("open")) closeAssistant();
  else openAssistant();
});

assistantClose.addEventListener("click", closeAssistant);

assistantForm.addEventListener("submit", e => {
  e.preventDefault();
  const question = assistantInput.value.trim();
  if (!question) return;
  assistantInput.value = "";
  handleAssistantQuestion(question);
});

appendAssistantMessage("assistant", "Hi! I'm here to help you find your next Lumora favorite. Ask me about a category, a concern, or a budget.");
