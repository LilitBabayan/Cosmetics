const productGrid = document.getElementById("productGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const modalBackdrop = document.getElementById("modalBackdrop");
const productModal = document.getElementById("productModal");
const cartToggle = document.getElementById("cartToggle");
const cartClose = document.getElementById("cartClose");
const cartDrawer = document.getElementById("cartDrawer");
const cartBackdrop = document.getElementById("cartBackdrop");
const cartItemsEl = document.getElementById("cartItems");
const cartCountEl = document.getElementById("cartCount");
const cartSubtotalEl = document.getElementById("cartSubtotal");
const checkoutBtn = document.getElementById("checkoutBtn");

const CART_KEY = "lumora_cart";
let cart = loadCart();

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || {};
  } catch {
    return {};
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch {
    // localStorage unavailable — cart just won't persist across reloads
  }
}

function formatPrice(n) {
  return `$${n.toFixed(2)}`;
}

function renderProducts(category = "all") {
  productGrid.innerHTML = "";
  const items = category === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === category);

  items.forEach((product, index) => {
    const isFeatured = category === "all" && index === 0;
    const card = document.createElement("article");
    card.className = isFeatured ? "product-card featured" : "product-card";
    card.innerHTML = `
      <div class="product-thumb" style="background:${product.color}">
        <span>${product.icon}</span>
      </div>
      <div class="product-info">
        <p class="product-category">${product.category}</p>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${formatPrice(product.price)}</p>
        ${isFeatured ? `<p class="product-description">${product.description}</p>` : ""}
        <button class="btn btn-secondary btn-full" data-view="${product.id}">View details</button>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

function openProductModal(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  productModal.innerHTML = `
    <button class="modal-close" id="modalClose" aria-label="Close">&times;</button>
    <div class="modal-thumb" style="background:${product.color}"><span>${product.icon}</span></div>
    <p class="product-category">${product.category}</p>
    <h2>${product.name}</h2>
    <p class="modal-price">${formatPrice(product.price)}</p>
    <p class="modal-description">${product.description}</p>
    <button class="btn btn-primary btn-full" id="modalAddToCart" data-id="${product.id}">Add to Bag</button>
  `;
  modalBackdrop.classList.add("open");
  document.getElementById("modalClose").addEventListener("click", closeProductModal);
  document.getElementById("modalAddToCart").addEventListener("click", () => {
    addToCart(product.id);
    closeProductModal();
    openCart();
  });
}

function closeProductModal() {
  modalBackdrop.classList.remove("open");
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderCart();
}

function updateQuantity(id, delta) {
  if (!cart[id]) return;
  cart[id] += delta;
  if (cart[id] <= 0) delete cart[id];
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  delete cart[id];
  saveCart();
  renderCart();
}

function renderCart() {
  const ids = Object.keys(cart);
  const totalCount = ids.reduce((sum, id) => sum + cart[id], 0);
  cartCountEl.textContent = totalCount;

  if (ids.length === 0) {
    cartItemsEl.innerHTML = `<p class="cart-empty">Your bag is empty.</p>`;
    cartSubtotalEl.textContent = formatPrice(0);
    return;
  }

  let subtotal = 0;
  cartItemsEl.innerHTML = ids.map(id => {
    const product = PRODUCTS.find(p => p.id === id);
    const qty = cart[id];
    const lineTotal = product.price * qty;
    subtotal += lineTotal;
    return `
      <div class="cart-item">
        <div class="cart-item-thumb" style="background:${product.color}">${product.icon}</div>
        <div class="cart-item-info">
          <p class="cart-item-name">${product.name}</p>
          <p class="cart-item-price">${formatPrice(product.price)}</p>
          <div class="qty-control">
            <button data-qty-minus="${id}">&minus;</button>
            <span>${qty}</span>
            <button data-qty-plus="${id}">+</button>
          </div>
        </div>
        <button class="cart-item-remove" data-remove="${id}" aria-label="Remove">&times;</button>
      </div>
    `;
  }).join("");
  cartSubtotalEl.textContent = formatPrice(subtotal);
}

function openCart() {
  cartDrawer.classList.add("open");
  cartBackdrop.classList.add("open");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartBackdrop.classList.remove("open");
}

// Event delegation
productGrid.addEventListener("click", e => {
  const id = e.target.getAttribute("data-view");
  if (id) openProductModal(id);
});

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProducts(btn.dataset.category);
  });
});

cartToggle.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cartBackdrop.addEventListener("click", closeCart);
modalBackdrop.addEventListener("click", e => {
  if (e.target === modalBackdrop) closeProductModal();
});

cartItemsEl.addEventListener("click", e => {
  const plusId = e.target.getAttribute("data-qty-plus");
  const minusId = e.target.getAttribute("data-qty-minus");
  const removeId = e.target.getAttribute("data-remove");
  if (plusId) updateQuantity(plusId, 1);
  if (minusId) updateQuantity(minusId, -1);
  if (removeId) removeFromCart(removeId);
});

checkoutBtn.addEventListener("click", () => {
  if (Object.keys(cart).length === 0) return;
  alert("Thanks for shopping with Lumora! Checkout isn't wired up yet — this is a demo storefront.");
});

renderProducts();
renderCart();
