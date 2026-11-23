// ===== Ma'lumotlar =====
const CATEGORIES = [
  { id: "phones", name: "Telefonlar", emoji: "📱" },
  { id: "laptops", name: "Noutbuklar", emoji: "💻" },
  { id: "clothes", name: "Kiyimlar", emoji: "🧥" },
  { id: "shoes", name: "Oyoq kiyimlar", emoji: "👟" },
  { id: "watches", name: "Soatlar", emoji: "⌚" },
  { id: "accessories", name: "Aksessuarlar", emoji: "🎧" },
  { id: "appliances", name: "Maishiy texnika", emoji: "📺" },
  { id: "cosmetics", name: "Kosmetika", emoji: "🧴" },
];

const DEFAULT_PRODUCTS = [
  { id: 1, name: "iPhone 17 Pro Max", cat: "phones", price: 18500000, oldPrice: 20000000, discount: 8, rating: 4.9, emoji: "📱", isNew: true, sold: 320, desc: "6.9 dyuymli Super Retina ekran, A19 Pro chip, 48MP kamera.", specs: ["256 GB", "Titan", "5G"] },
  { id: 2, name: "Samsung Galaxy S25 Ultra", cat: "phones", price: 16200000, oldPrice: 17500000, discount: 7, rating: 4.8, emoji: "📱", isNew: true, sold: 280, desc: "S Pen qo'llab-quvvatlashi, 200MP kamera, titan korpus.", specs: ["512 GB", "12 GB RAM", "5G"] },
  { id: 3, name: "MacBook Pro", cat: "laptops", price: 27000000, oldPrice: 29000000, discount: 7, rating: 4.9, emoji: "💻", isNew: false, sold: 150, desc: "M4 Pro chip, 14 dyuymli Liquid Retina XDR ekran.", specs: ["16 GB", "512 GB SSD", "18 soat"] },
  { id: 4, name: "ASUS ROG Laptop", cat: "laptops", price: 22000000, oldPrice: 24500000, discount: 10, rating: 4.7, emoji: "🖥️", isNew: false, sold: 120, desc: "RTX 4070 grafika, 240Hz ekran, o'yinlar uchun.", specs: ["32 GB", "1 TB SSD", "RTX 4070"] },
  { id: 5, name: "Nike Air Max", cat: "shoes", price: 1800000, oldPrice: 2200000, discount: 18, rating: 4.6, emoji: "👟", isNew: false, sold: 540, desc: "Yengil va qulay, kundalik yurish uchun ideal.", specs: ["Erkak", "Qora/Oq", "41-45"] },
  { id: 6, name: "Adidas Ultraboost", cat: "shoes", price: 1950000, oldPrice: 2300000, discount: 15, rating: 4.7, emoji: "👟", isNew: true, sold: 410, desc: "Boost tagligi, maksimal energiya qaytarish.", specs: ["Unisex", "Oq", "40-45"] },
  { id: 7, name: "Apple Watch Ultra", cat: "watches", price: 9800000, oldPrice: 10800000, discount: 9, rating: 4.8, emoji: "⌚", isNew: false, sold: 210, desc: "Sport va sayohat uchun titan soat, GPS, suv o'tkazmaydi.", specs: ["49 mm", "Titan", "GPS"] },
  { id: 8, name: "Luxury Mexanik Soat", cat: "watches", price: 4500000, oldPrice: 5600000, discount: 20, rating: 4.5, emoji: "🕰️", isNew: false, sold: 90, desc: "Rolex uslubidagi klassik avtomatik mexanizm.", specs: ["Avtomatik", "Po'lat", "100 m"] },
  { id: 9, name: "Sony WH-1000XM5", cat: "accessories", price: 4200000, oldPrice: 4900000, discount: 14, rating: 4.8, emoji: "🎧", isNew: false, sold: 350, desc: "Eng yaxshi shovqin bekor qilish, 30 soat batareya.", specs: ["Simsiz", "30 soat", "ANC"] },
  { id: 10, name: "AirPods Pro", cat: "accessories", price: 3100000, oldPrice: 3500000, discount: 11, rating: 4.7, emoji: "🎧", isNew: true, sold: 600, desc: "Aktiv shovqin bekor qilish, MagSafe zaryadlash.", specs: ["USB-C", "ANC", "6 soat"] },
  { id: 11, name: "Erkaklar uchun kurtka", cat: "clothes", price: 1400000, oldPrice: 1900000, discount: 26, rating: 4.4, emoji: "🧥", isNew: false, sold: 230, desc: "Suv o'tkazmaydigan, issiq va zamonaviy kesim.", specs: ["L / XL", "Qora", "Suvga chidamli"] },
  { id: 12, name: "Ayollar uchun sumka", cat: "accessories", price: 2300000, oldPrice: 2700000, discount: 15, rating: 4.6, emoji: "👜", isNew: true, sold: 180, desc: "Charm teri sumka, oltin furnitura bilan.", specs: ["Teri", "Oltin", "Kichik"] },
  { id: 13, name: "Premium Parfyum", cat: "cosmetics", price: 1600000, oldPrice: 1800000, discount: 11, rating: 4.7, emoji: "🧴", isNew: false, sold: 300, desc: "Uzoq saqlanadigan, yumshoq gulli-yog'och hid.", specs: ["100 ml", "EDP", "Unisex"] },
  { id: 14, name: "Smart TV 55 dyuym", cat: "appliances", price: 7800000, oldPrice: 9200000, discount: 15, rating: 4.6, emoji: "📺", isNew: false, sold: 130, desc: "4K UHD, HDR, ovozli boshqaruv.", specs: ["55 dyuym", "4K", "Smart"] },
  { id: 15, name: "Gaming Keyboard", cat: "accessories", price: 950000, oldPrice: 1200000, discount: 21, rating: 4.5, emoji: "⌨️", isNew: false, sold: 260, desc: "Mexanik klaviatura, RGB yoritish.", specs: ["Mexanik", "RGB", "Red switch"] },
  { id: 16, name: "Gaming Mouse", cat: "accessories", price: 650000, oldPrice: 800000, discount: 19, rating: 4.6, emoji: "🖱️", isNew: true, sold: 420, desc: "26000 DPI sensor, yengil korpus.", specs: ["26000 DPI", "Simsiz", "60 g"] },
];

const TESTIMONIALS = [
  { name: "Aziz K.", av: "👨", text: "Buyurtma 2 soatda yetib keldi. Sifat a'lo, qadoqlash juda chiroyli." },
  { name: "Malika R.", av: "👩", text: "Savat va chegirmalar juda qulay. Sevimlilar bo'limi ayniqsa yoqdi." },
  { name: "Jasur T.", av: "🧔", text: "Narxlar boshqa do'konlardan past. Mahsulotlar original ekan." },
  { name: "Dilnoza M.", av: "👱‍♀️", text: "Dizayn juda zamonaviy, telefonda ham juda qulay ishlaydi." },
];

const PROMO_MSGS = ["BIG SALE — 50% GACHA CHEGIRMA!", "Faqat bugun maxsus takliflar!"];

// ===== Holat (localStorage) =====
const load = (k, f) => { try { return JSON.parse(localStorage.getItem(k)) ?? f; } catch { return f; } };
let products = load("luxe_products", DEFAULT_PRODUCTS);
let cart = load("luxe_cart", []);
let wish = load("luxe_wish", []);
let orders = load("luxe_orders", []);
let users = load("luxe_users", [{ login: "admin", password: "admin", name: "Admin", phone: "+998900000000", role: "admin" }]);
let session = load("luxe_session", null);
let dark = load("luxe_dark", false);
let promoEnd = load("luxe_promo_end", 0);
if (promoEnd < Date.now()) promoEnd = Date.now() + 5 * 3600 * 1000;

function save() {
  localStorage.setItem("luxe_products", JSON.stringify(products));
  localStorage.setItem("luxe_cart", JSON.stringify(cart));
  localStorage.setItem("luxe_wish", JSON.stringify(wish));
  localStorage.setItem("luxe_orders", JSON.stringify(orders));
  localStorage.setItem("luxe_users", JSON.stringify(users));
  localStorage.setItem("luxe_session", JSON.stringify(session));
  localStorage.setItem("luxe_dark", JSON.stringify(dark));
  localStorage.setItem("luxe_promo_end", JSON.stringify(promoEnd));
}

// ===== Yordamchilar =====
const $ = (id) => document.getElementById(id);
const fmt = (n) => Math.round(n).toLocaleString("uz-UZ") + " so'm";
const finalPrice = (p) => p.price * (1 - (p.discount || 0) / 100);
const currentUser = () => users.find((u) => u.login === session) || null;
const cartCount = () => cart.reduce((s, i) => s + i.qty, 0);
const subtotal = () => cart.reduce((s, i) => s + finalPrice(i) * i.qty, 0);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function open(id) { $(id).hidden = false; document.body.classList.add("lock"); }
function close(id) {
  $(id).hidden = true;
  if (!document.querySelector(".overlay:not([hidden])")) document.body.classList.remove("lock");
}

let toastTimer;
function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (t.hidden = true), 2200);
}

function confetti() {
  const box = $("confetti");
  const colors = ["#D4AF37", "#f5d76e", "#111", "#fff", "#e11d48"];
  for (let i = 0; i < 60; i++) {
    const el = document.createElement("i");
    el.style.left = Math.random() * 100 + "%";
    el.style.background = colors[i % colors.length];
    el.style.animationDelay = Math.random() * 0.6 + "s";
    box.appendChild(el);
  }
  setTimeout(() => (box.innerHTML = ""), 3500);
}

// ===== Render =====
function renderCategories() {
  $("cats").innerHTML = CATEGORIES.map((c) => `
    <button class="cat" data-action="pickCat" data-cat="${c.id}">
      <span class="emo">${c.emoji}</span>
      <strong>${c.name}</strong><br>
      <small>${products.filter((p) => p.cat === c.id).length} ta mahsulot</small>
    </button>`).join("");
  const opts = CATEGORIES.map((c) => `<option value="${c.id}">${c.name}</option>`).join("");
  $("catSelect").innerHTML = `<option value="all">Barcha kategoriyalar</option>` + opts;
  $("addCat").innerHTML = opts;
}

function filteredProducts() {
  const q = $("searchInput").value.trim().toLowerCase();
  const cat = $("catSelect").value;
  const sort = $("sortSelect").value;
  const list = products.filter((p) => (cat === "all" || p.cat === cat) && p.name.toLowerCase().includes(q));
  const sorters = {
    new: (a, b) => Number(b.isNew) - Number(a.isNew),
    bestseller: (a, b) => (b.sold || 0) - (a.sold || 0),
    rating: (a, b) => b.rating - a.rating,
    cheap: (a, b) => finalPrice(a) - finalPrice(b),
    expensive: (a, b) => finalPrice(b) - finalPrice(a),
    discount: (a, b) => b.discount - a.discount,
  };
  return list.sort(sorters[sort]);
}

function renderProducts() {
  const list = filteredProducts();
  $("empty").hidden = list.length > 0;
  $("grid").innerHTML = list.map((p) => `
    <article class="card">
      ${p.discount > 0 ? `<span class="badge">-${p.discount}%</span>` : ""}
      ${p.isNew ? `<span class="badge new">YANGI</span>` : ""}
      <button class="fav ${wish.includes(p.id) ? "on" : ""}" data-action="toggleWish" data-id="${p.id}" title="Sevimlilar">${wish.includes(p.id) ? "♥" : "♡"}</button>
      <div class="thumb" data-action="openProduct" data-id="${p.id}"><span>${esc(p.emoji)}</span></div>
      <h3 data-action="openProduct" data-id="${p.id}">${esc(p.name)}</h3>
      <div class="rating">★ ${p.rating} <span class="muted">· ${p.sold || 0} ta sotilgan</span></div>
      <div class="prices"><strong>${fmt(finalPrice(p))}</strong>${p.oldPrice ? `<s>${fmt(p.oldPrice)}</s>` : ""}</div>
      <div class="stack" style="flex-direction:row;gap:8px">
        <button class="btn ghost small" style="flex:1" data-action="openProduct" data-id="${p.id}">Batafsil</button>
        <button class="btn gold small" style="flex:1" data-action="addToCart" data-id="${p.id}">🛒 Savat</button>
      </div>
    </article>`).join("");
}

function renderTestimonials() {
  $("testi").innerHTML = TESTIMONIALS.map((t) => `
    <div class="testi-card">
      <div class="who"><div class="av">${t.av}</div><div><strong>${t.name}</strong><div class="stars">★★★★★</div></div></div>
      <p>${t.text}</p>
    </div>`).join("");
}

function renderCounts() {
  const c = cartCount();
  $("cartCount").textContent = c || "";
  $("wishCount").textContent = wish.length || "";
}

function renderCart() {
  $("cartTitle").textContent = `Savat (${cartCount()})`;
  if (cart.length === 0) {
    $("cartItems").innerHTML = `<p class="muted">Savat bo'sh</p>`;
    $("cartFooter").hidden = true;
    return;
  }
  $("cartItems").innerHTML = cart.map((i) => `
    <div class="line">
      <span class="e">${esc(i.emoji)}</span>
      <div class="info">
        <strong>${esc(i.name)}</strong>
        <div>${fmt(finalPrice(i))}</div>
        <div class="qty">
          <button data-action="qty" data-id="${i.id}" data-delta="-1">−</button>
          <span>${i.qty}</span>
          <button data-action="qty" data-id="${i.id}" data-delta="1">+</button>
        </div>
      </div>
      <button data-action="remove" data-id="${i.id}" title="O'chirish">🗑️</button>
    </div>`).join("");
  $("cartTotal").textContent = fmt(subtotal());
  $("cartFooter").hidden = false;
}

function renderWish() {
  const items = products.filter((p) => wish.includes(p.id));
  $("wishItems").innerHTML = items.length === 0
    ? `<p class="muted">Sevimlilar ro'yxati bo'sh</p>`
    : items.map((p) => `
      <div class="line">
        <span class="e">${esc(p.emoji)}</span>
        <div class="info"><strong>${esc(p.name)}</strong><div>${fmt(finalPrice(p))}</div></div>
        <button class="btn gold small" data-action="addToCart" data-id="${p.id}">🛒</button>
        <button data-action="toggleWish" data-id="${p.id}" title="Olib tashlash">✕</button>
      </div>`).join("");
}

function renderProfile() {
  const u = currentUser();
  $("profileBtn").textContent = u ? "👤" : "🔑";
  if (!u) {
    $("pName").textContent = "Mehmon";
    $("pPhone").textContent = "Tizimga kiring";
    $("profileForm").hidden = true;
    $("pOrders").innerHTML = `<p class="muted">Buyurtmalarni ko'rish uchun tizimga kiring.</p>`;
    $("adminBtn").hidden = true;
    return;
  }
  $("profileForm").hidden = false;
  $("pName").textContent = u.name;
  $("pPhone").textContent = u.phone;
  $("profileForm").name.value = u.name;
  $("profileForm").phone.value = u.phone;
  const mine = orders.filter((o) => o.user === u.login).slice().reverse();
  $("pOrders").innerHTML = mine.length === 0
    ? `<p class="muted">Hali buyurtmalar yo'q</p>`
    : mine.map((o) => `
      <div class="order">
        <div><strong>${o.num}</strong> · <span class="pill">${o.status}</span></div>
        <div>${o.date} · ${fmt(o.total)}</div>
        <div class="muted">${o.items.map((i) => `${esc(i.name)} ×${i.qty}`).join(", ")}</div>
      </div>`).join("");
  $("adminBtn").hidden = u.role !== "admin";
}

function renderAdmin() {
  const revenue = orders.reduce((s, o) => s + o.total, 0);
  $("kRev").textContent = fmt(revenue);
  $("kOrd").textContent = orders.length;
  $("kProd").textContent = products.length;
  $("kUsers").textContent = users.length;

  const byCat = CATEGORIES.map((c) => ({
    name: c.name,
    sum: orders.reduce((s, o) => s + o.items.filter((i) => i.cat === c.id).reduce((x, i) => x + i.price * i.qty, 0), 0),
  }));
  const max = Math.max(1, ...byCat.map((c) => c.sum));
  $("chart").innerHTML = byCat.map((c) => `
    <div class="bar-row"><span>${c.name}</span><div class="bar"><i data-w="${(c.sum / max) * 100}"></i></div><span>${fmt(c.sum)}</span></div>`).join("");
  requestAnimationFrame(() => document.querySelectorAll(".bar i").forEach((i) => (i.style.width = i.dataset.w + "%")));

  $("adminOrders").innerHTML = orders.length === 0
    ? `<p class="muted">Buyurtmalar yo'q</p>`
    : orders.slice().reverse().map((o) => `
      <div class="row">
        <div><strong>${o.num}</strong><div class="muted">${esc(o.customer)} · ${esc(o.phone)} · ${o.payment}</div></div>
        <div>${fmt(o.total)}</div>
        <select data-action-change="status" data-num="${o.num}">
          ${["Yangi", "Yig'ilmoqda", "Yo'lda", "Yetkazildi", "Bekor qilindi"].map((s) => `<option ${s === o.status ? "selected" : ""}>${s}</option>`).join("")}
        </select>
      </div>`).join("");

  $("adminProducts").innerHTML = products.map((p) => `
    <div class="row">
      <span>${esc(p.emoji)} ${esc(p.name)} · ${fmt(finalPrice(p))}</span>
      <button class="btn small ghost" data-action="delProd" data-id="${p.id}">O'chirish</button>
    </div>`).join("");
}

function renderAll() {
  renderProducts();
  renderCategories();
  renderCounts();
  renderCart();
  renderWish();
  renderProfile();
  if (!$("m-admin").hidden) renderAdmin();
  save();
}

// ===== Savat / sevimlilar =====
function addToCart(id, qty = 1) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  const item = cart.find((i) => i.id === id);
  if (item) item.qty += qty;
  else cart.push({ id: p.id, name: p.name, emoji: p.emoji, price: p.price, discount: p.discount, cat: p.cat, qty });
  renderAll();
  toast(`✅ ${p.name} savatga qo'shildi`);
}

function changeQty(id, delta) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty < 1) cart = cart.filter((i) => i.id !== id);
  renderAll();
}

function toggleWish(id) {
  wish = wish.includes(id) ? wish.filter((x) => x !== id) : [...wish, id];
  renderAll();
}

// ===== Mahsulot tafsiloti =====
function openProduct(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  $("pmBody").innerHTML = `
    <div class="pd">
      <div class="thumb"><span>${esc(p.emoji)}</span></div>
      <div>
        <span class="pill">${CATEGORIES.find((c) => c.id === p.cat)?.name || ""}</span>
        <h2>${esc(p.name)}</h2>
        <div class="rating">★ ${p.rating} <span class="muted">· ${p.sold || 0} ta sotilgan</span></div>
        <div class="prices" style="margin-top:10px"><strong style="font-size:1.4rem">${fmt(finalPrice(p))}</strong>${p.oldPrice ? `<s>${fmt(p.oldPrice)}</s>` : ""}</div>
        <div class="chips">${(p.specs || []).map((s) => `<span>${esc(s)}</span>`).join("")}</div>
        <p>${esc(p.desc || "")}</p>
        <div class="qty">
          <button class="qbtn" data-action="pmQty" data-delta="-1">−</button>
          <strong id="pmQty">1</strong>
          <button class="qbtn" data-action="pmQty" data-delta="1">+</button>
        </div>
        <button class="btn gold full" data-action="pmAdd" data-id="${p.id}">🛒 Savatga qo'shish</button>
      </div>
    </div>`;
  open("m-product");
}

// ===== Buyurtma =====
function openCheckout() {
  if (cart.length === 0) return toast("Savat bo'sh");
  const u = currentUser();
  const f = $("checkoutForm");
  if (u && !f.dataset.filled) {
    const [first = "", last = ""] = u.name.split(" ");
    f.first.value = first; f.last.value = last; f.phone.value = u.phone;
  }
  updateSummary();
  close("m-cart");
  open("m-checkout");
}

function updateSummary() {
  const del = Number($("deliverySel").value);
  const sub = subtotal();
  $("sumSub").textContent = fmt(sub);
  $("sumDel").textContent = del ? fmt(del) : "Bepul";
  $("sumTotal").textContent = fmt(sub + del);
}

function submitOrder(e) {
  e.preventDefault();
  const f = e.target;
  if (cart.length === 0) return toast("Savat bo'sh");
  if (!/^\+?\d{9,13}$/.test(f.phone.value.replace(/[\s-]/g, ""))) return toast("Telefon raqamini to'g'ri kiriting");
  const del = Number(f.delivery.value);
  const payment = f.payment.value;
  const num = "LX-" + Math.floor(100000 + Math.random() * 900000);
  const order = {
    num,
    date: new Date().toLocaleString("uz-UZ"),
    user: session,
    customer: `${f.first.value} ${f.last.value}`,
    phone: f.phone.value,
    address: `${f.region.value}, ${f.city.value}, ${f.address.value}`,
    delivery: f.delivery.options[f.delivery.selectedIndex].text,
    payment,
    items: cart.map((i) => ({ name: i.name, cat: i.cat, price: finalPrice(i), qty: i.qty })),
    total: subtotal() + del,
    status: "Yangi",
  };
  orders.push(order);
  cart = [];
  f.dataset.filled = "1";
  f.reset();
  close("m-checkout");
  renderAll();
  $("orderNum").textContent = num;
  $("orderInfo").textContent = `To'lov: ${payment} (demo) · Jami: ${fmt(order.total)}`;
  open("m-success");
  confetti();
}

// ===== Kirish / profil =====
function authTab(mode) {
  document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("active", t.dataset.mode === mode));
  $("loginForm").hidden = mode !== "login";
  $("registerForm").hidden = mode !== "register";
}

function openProfile() {
  if (!currentUser()) { authTab("login"); return open("m-auth"); }
  renderProfile();
  open("m-profile");
}

function logout() {
  session = null;
  renderAll();
  close("m-profile");
  toast("Tizimdan chiqdingiz");
}

function openAdmin() {
  renderAdmin();
  open("m-admin");
}

// ===== Hodisalar =====
const actions = {
  addToCart: (el) => addToCart(Number(el.dataset.id)),
  toggleWish: (el) => toggleWish(Number(el.dataset.id)),
  qty: (el) => changeQty(Number(el.dataset.id), Number(el.dataset.delta)),
  remove: (el) => { cart = cart.filter((i) => i.id !== Number(el.dataset.id)); renderAll(); },
  openCart: () => { renderCart(); open("m-cart"); },
  openWish: () => { renderWish(); open("m-wish"); },
  openProduct: (el) => openProduct(Number(el.dataset.id)),
  pmQty: (el) => {
    const out = $("pmQty");
    out.textContent = Math.max(1, Number(out.textContent) + Number(el.dataset.delta));
  },
  pmAdd: (el) => {
    const qty = Number($("pmQty").textContent);
    addToCart(Number(el.dataset.id), qty);
    close("m-product");
  },
  openCheckout: () => openCheckout(),
  close: (el) => close(el.dataset.id),
  search: () => { $("products").scrollIntoView({ behavior: "smooth" }); setTimeout(() => $("searchInput").focus(), 500); },
  pickCat: (el) => {
    $("catSelect").value = el.dataset.cat;
    renderProducts();
    $("products").scrollIntoView({ behavior: "smooth" });
  },
  toggleTheme: () => { dark = !dark; document.documentElement.classList.toggle("dark", dark); save(); },
  openProfile: () => openProfile(),
  authTab: (el) => authTab(el.dataset.mode),
  logout: () => logout(),
  openAdmin: () => openAdmin(),
  delProd: (el) => {
    if (!confirm("Mahsulotni o'chirasizmi?")) return;
    products = products.filter((p) => p.id !== Number(el.dataset.id));
    cart = cart.filter((i) => products.some((p) => p.id === i.id));
    renderAll();
    toast("Mahsulot o'chirildi");
  },
};

document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-action]");
  if (el && actions[el.dataset.action]) actions[el.dataset.action](el, e);
});

document.addEventListener("change", (e) => {
  const el = e.target;
  if (el.dataset.actionChange === "status") {
    const o = orders.find((x) => x.num === el.dataset.num);
    if (o) { o.status = el.value; renderAll(); toast("Holat yangilandi"); }
  }
  if (el.id === "deliverySel") updateSummary();
});

// Overlay fonini bosganda yopish
document.querySelectorAll(".overlay").forEach((ov) =>
  ov.addEventListener("click", (e) => { if (e.target === ov) close(ov.id); }));

$("searchInput").addEventListener("input", renderProducts);
$("catSelect").addEventListener("change", renderProducts);
$("sortSelect").addEventListener("change", renderProducts);
$("checkoutForm").addEventListener("submit", submitOrder);

$("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;
  const u = users.find((x) => x.login === f.login.value.trim() && x.password === f.password.value);
  if (!u) return toast("Login yoki parol noto'g'ri");
  session = u.login;
  f.reset();
  close("m-auth");
  renderAll();
  toast(`Xush kelibsiz, ${u.name}!`);
});

$("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;
  const login = f.login.value.trim();
  if (users.some((u) => u.login === login)) return toast("Bunday login band");
  users.push({ login, password: f.password.value, name: f.name.value.trim(), phone: f.phone.value.trim(), role: "user" });
  session = login;
  f.reset();
  close("m-auth");
  renderAll();
  toast("Ro'yxatdan o'tdingiz!");
});

$("profileForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const u = currentUser();
  if (!u) return;
  u.name = e.target.name.value.trim();
  u.phone = e.target.phone.value.trim();
  renderAll();
  toast("Profil saqlandi");
});

$("addProdForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;
  const price = Number(f.price.value);
  products.push({
    id: Date.now(), name: f.name.value.trim(), cat: f.cat.value, price, oldPrice: price, discount: 0,
    rating: 4.5, emoji: f.emoji.value || "🛍️", isNew: true, sold: 0,
    desc: "Yangi mahsulot.", specs: [],
  });
  f.reset();
  renderAll();
  toast("Mahsulot qo'shildi");
});

// Scroll animatsiya
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Promo: rotatsiya va taymer
let promoIdx = 0;
setInterval(() => {
  const el = $("promoMsg");
  el.style.opacity = 0;
  setTimeout(() => {
    promoIdx = (promoIdx + 1) % PROMO_MSGS.length;
    el.textContent = PROMO_MSGS[promoIdx];
    el.style.opacity = 1;
  }, 400);
}, 4000);

function tick() {
  let diff = promoEnd - Date.now();
  if (diff <= 0) { promoEnd = Date.now() + 5 * 3600 * 1000; diff = promoEnd - Date.now(); save(); }
  const h = String(Math.floor(diff / 3600000)).padStart(2, "0");
  const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
  const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
  $("cd").textContent = `${h}:${m}:${s}`;
}
setInterval(tick, 1000);

// ===== Ishga tushirish =====
document.documentElement.classList.toggle("dark", dark);
renderTestimonials();
renderAll();
tick();
window.addEventListener("load", () => setTimeout(() => $("loader").classList.add("gone"), 700));