/* ============================================
   KHAN SAHAB — E-Commerce Script
   Data + Cart + Filters + Modal + Search
   ============================================ */

/* ---------- PRODUCT DATA ---------- */
const PRODUCTS = [
    /* ---- MEN: Formal ---- */
    { id: 1,  cat: "men", sub: "dress-pants",        label: "Dress Pants",      name: "Slim Fit Dress Pants",       price: 3499, old: 4200, color: "Navy",     size: ["28", "30", "32", "34", "36"], emoji: "👖", badge: "New",    desc: "Premium wool-blend dress pants with a modern slim fit. Perfect for formal occasions." },
    { id: 2,  cat: "men", sub: "dress-pants",        label: "Dress Pants",      name: "Classic Pleated Trousers",   price: 2999, old: 0,    color: "Black",    size: ["30", "32", "34", "36"],     emoji: "👖", badge: "",       desc: "Timeless pleated trousers in rich black — a wardrobe essential." },
    { id: 3,  cat: "men", sub: "dress-pants",        label: "Dress Pants",      name: "Grey Tailored Dress Pant",    price: 3799, old: 0,    color: "Grey",     size: ["28", "30", "32", "34"],     emoji: "👖", badge: "Hot",     desc: "Tailored fit dress pants in charcoal grey with subtle texture." },
    { id: 4,  cat: "men", sub: "full-sleeves-shirts", label: "Full Sleeves Shirts", name: "White Formal Full Sleeve Shirt", price: 2499, old: 0, color: "White", size: ["S", "M", "L", "XL", "XXL"], emoji: "👔", badge: "", desc: "Crisp white cotton shirt with full sleeves, ideal for boardrooms and weddings." },
    { id: 5,  cat: "men", sub: "full-sleeves-shirts", label: "Full Sleeves Shirts", name: "Sky Blue Oxford Shirt",     price: 2799, old: 3200, color: "Blue",     size: ["M", "L", "XL", "XXL"],       emoji: "👔", badge: "New",    desc: "Oxford weave full-sleeve shirt in sky blue — smart casual perfection." },
    { id: 6,  cat: "men", sub: "full-sleeves-shirts", label: "Full Sleeves Shirts", name: "Black Slim Formal Shirt",   price: 2699, old: 0,    color: "Black",    size: ["S", "M", "L", "XL"],        emoji: "👔", badge: "",       desc: "Slim-fit black formal shirt with contrast stitching." },

    /* ---- MEN: Informal ---- */
    { id: 7,  cat: "men", sub: "kameez-shalwar",     label: "Kameez Shalwar",   name: "Royal Navy Kameez Shalwar",   price: 4499, old: 5500, color: "Navy",     size: ["M", "L", "XL", "XXL"],       emoji: "🥻", badge: "Hot",     desc: "Hand-finished navy kameez shalwar in premium lawn fabric." },
    { id: 8,  cat: "men", sub: "kameez-shalwar",     label: "Kameez Shalwar",   name: "Embroidered White Kurta Set", price: 5999, old: 0,    color: "White",    size: ["M", "L", "XL"],             emoji: "🥻", badge: "",       desc: "Elegant embroidered kurta set — a statement of tradition." },
    { id: 9,  cat: "men", sub: "kameez-shalwar",     label: "Kameez Shalwar",   name: "Green Washed Kameez",         price: 3999, old: 0,    color: "Green",    size: ["L", "XL", "XXL"],           emoji: "🥻", badge: "Sale",    desc: "Breathable washed-green kameez for everyday comfort." },
    { id: 10, cat: "men", sub: "cargos",             label: "Cargos",           name: "Olive Utility Cargo Pants",   price: 3299, old: 0,    color: "Olive",    size: ["30", "32", "34", "36"],     emoji: "👖", badge: "New",     desc: "6-pocket olive cargos in durable cotton twill." },
    { id: 11, cat: "men", sub: "cargos",             label: "Cargos",           name: "Black Strapped Cargos",       price: 3499, old: 4000, color: "Black",    size: ["30", "32", "34", "36"],     emoji: "👖", badge: "",        desc: "Tactical-style black cargos with ankle straps." },
    { id: 12, cat: "men", sub: "t-shirts",           label: "T-Shirts",         name: "Premium Cotton Crew T-Shirt", price: 1499, old: 0,    color: "White",    size: ["S", "M", "L", "XL", "XXL"], emoji: "👕", badge: "",        desc: "Heavyweight cotton crew tee — soft, breathable, timeless." },
    { id: 13, cat: "men", sub: "t-shirts",           label: "T-Shirts",         name: "Graphic Print T-Shirt",       price: 1799, old: 0,    color: "Navy",     size: ["M", "L", "XL", "XXL"],       emoji: "👕", badge: "Hot",     desc: "Statement graphic tee in deep navy with golden print." },
    { id: 14, cat: "men", sub: "t-shirts",           label: "T-Shirts",         name: "Striped Polo Shirt",          price: 2199, old: 0,    color: "Grey",     size: ["S", "M", "L", "XL"],        emoji: "👕", badge: "",        desc: "Classic stripes, collared comfort — the weekend essential." },
    { id: 15, cat: "men", sub: "pants",              label: "Pants",            name: "Chino Slim Pants",            price: 2899, old: 0,    color: "Tan",      size: ["30", "32", "34", "36", "38"], emoji: "👖", badge: "Sale",   desc: "Smart-casual chinos in versatile tan." },
    { id: 16, cat: "men", sub: "pants",              label: "Pants",            name: "Denim Blue Jeans",            price: 3399, old: 3900, color: "Blue",     size: ["30", "32", "34", "36", "38"], emoji: "👖", badge: "",       desc: "Mid-rise stretch denim with classic blue wash." },
    { id: 17, cat: "men", sub: "pants",              label: "Pants",            name: "Grey Jogger Pants",           price: 2599, old: 0,    color: "Grey",     size: ["28", "30", "32", "34", "36"], emoji: "👖", badge: "New",    desc: "Comfort-fit joggers with elastic hem and cuffs." },
    { id: 18, cat: "men", sub: "shirts",             label: "Shirts",           name: "Beige Check Shirt",           price: 2599, old: 0,    color: "Beige",    size: ["S", "M", "L", "XL", "XXL"], emoji: "👔", badge: "",        desc: "Casual check shirt in warm beige — relaxed button-down." },
    { id: 19, cat: "men", sub: "shirts",             label: "Shirts",           name: "Navy Casual Shirt",           price: 2699, old: 0,    color: "Navy",     size: ["M", "L", "XL", "XXL"],       emoji: "👔", badge: "Hot",     desc: "Soft-hand casual navy shirt with chest pocket." },
    { id: 20, cat: "men", sub: "shirts",             label: "Shirts",           name: "Off-White Linen Shirt",       price: 2999, old: 0,    color: "White",    size: ["S", "M", "L", "XL"],        emoji: "👔", badge: "",        desc: "Linen-blend shirt — breezy and effortless for summer." },

    /* ---- WOMEN: Formal ---- */
    { id: 21, cat: "women", sub: "pants",            label: "Pants",            name: "High-Waist Formal Pants",     price: 2999, old: 0,    color: "Black",    size: ["XS", "S", "M", "L", "XL"],   emoji: "👖", badge: "New",     desc: "Sleek high-waist formal pants for the modern professional woman." },
    { id: 22, cat: "women", sub: "pants",            label: "Pants",            name: "Tailored Navy Pants",         price: 3299, old: 3700, color: "Navy",     size: ["S", "M", "L", "XL"],         emoji: "👖", badge: "",        desc: "Crisp tailored navy pants with straight-leg cut." },
    { id: 23, cat: "women", sub: "coats",            label: "Coats",            name: "Elegant Wool Coat",           price: 8499, old: 9900, color: "Beige",    size: ["S", "M", "L", "XL"],         emoji: "🧥", badge: "Hot",     desc: "Double-breasted wool coat — timeless sophistication." },
    { id: 24, cat: "women", sub: "coats",            label: "Coats",            name: "Black Longline Blazer",       price: 6499, old: 0,    color: "Black",    size: ["XS", "S", "M", "L"],         emoji: "🧥", badge: "",        desc: "Structured longline blazer that elevates any formal look." },
    { id: 25, cat: "women", sub: "coats",            label: "Coats",            name: "Plum Trench Coat",            price: 7999, old: 0,    color: "Plum",     size: ["S", "M", "L"],               emoji: "🧥", badge: "New",     desc: "Statement plum trench with belted waist." },
    { id: 26, cat: "women", sub: "western-dresses",  label: "Western Dresses",  name: "Chic Black Midi Dress",       price: 5499, old: 6200, color: "Black",    size: ["XS", "S", "M", "L"],         emoji: "👗", badge: "",        desc: "Sleek midi dress — from office to evening in one piece." },
    { id: 27, cat: "women", sub: "western-dresses",  label: "Western Dresses",  name: "Floral Summer Dress",         price: 4799, old: 0,    color: "Pink",     size: ["S", "M", "L", "XL"],         emoji: "👗", badge: "Hot",     desc: "Breezy floral dress with flowy skirt — summer ready." },
    { id: 28, cat: "women", sub: "western-dresses",  label: "Western Dresses",  name: "Emerald Satin Gown",          price: 9499, old: 0,    color: "Green",    size: ["S", "M", "L"],               emoji: "👗", badge: "New",     desc: "Luxurious satin gown in deep emerald for grand events." },

    /* ---- WOMEN: Informal ---- */
    { id: 29, cat: "women", sub: "kameez-shalwar",   label: "Kameez Shalwar",   name: "Pastel Lawn Suit",            price: 5999, old: 7200, color: "Pink",     size: ["S", "M", "L", "XL"],         emoji: "🥻", badge: "Sale",    desc: "Pastel lawn three-piece suit with delicate embroidery." },
    { id: 30, cat: "women", sub: "kameez-shalwar",   label: "Kameez Shalwar",   name: "Royal Blue Chiffon Suit",     price: 7499, old: 0,    color: "Blue",     size: ["S", "M", "L", "XL"],         emoji: "🥻", badge: "Hot",     desc: "Royal blue chiffon suit with intricate gold embellishment." },
    { id: 31, cat: "women", sub: "kameez-shalwar",   label: "Kameez Shalwar",   name: "White Embroidered Ensemble",  price: 8499, old: 9800, color: "White",    size: ["M", "L", "XL"],              emoji: "🥻", badge: "",        desc: "Pure white embroidered ensemble — bridal shower elegance." },
    { id: 32, cat: "women", sub: "trousers",         label: "Trousers",         name: "Comfort Stretch Trousers",    price: 2799, old: 0,    color: "Grey",     size: ["XS", "S", "M", "L", "XL"],   emoji: "👖", badge: "",        desc: "Everyday stretch trousers with relaxed comfort fit." },
    { id: 33, cat: "women", sub: "trousers",         label: "Trousers",         name: "Wide-Leg Palazzo Trousers",   price: 3199, old: 0,    color: "Black",    size: ["S", "M", "L", "XL"],         emoji: "👖", badge: "New",     desc: "Flowing wide-leg palazzos for effortless style." },
    { id: 34, cat: "women", sub: "trousers",         label: "Trousers",         name: "Khaki Cropped Trousers",      price: 2999, old: 3400, color: "Tan",      size: ["XS", "S", "M", "L"],         emoji: "👖", badge: "",        desc: "Chic cropped khakis — smart casual staple." },

    /* ---- KIDS: Formal ---- */
    { id: 35, cat: "kids", sub: "dress-pants",       label: "Dress Pants (Kids)",    name: "Kids Navy Dress Pants",    price: 1899, old: 0,    color: "Navy",     size: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"], emoji: "👖", badge: "",    desc: "Sharp navy dress pants sized for young gentlemen." },
    { id: 36, cat: "kids", sub: "dress-pants",       label: "Dress Pants (Kids)",    name: "Kids Black Formal Pants",   price: 1799, old: 0,    color: "Black",    size: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"], emoji: "👖", badge: "New",    desc: "Versatile black formal pants for school events." },
    { id: 37, cat: "kids", sub: "full-sleeves-shirts", label: "Full Sleeves Shirts (Kids)", name: "Kids White Shirt",   price: 1499, old: 0,    color: "White",    size: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"], emoji: "👔", badge: "",   desc: "Crisp kids' full-sleeve shirt in bright white." },
    { id: 38, cat: "kids", sub: "full-sleeves-shirts", label: "Full Sleeves Shirts (Kids)", name: "Kids Blue Check Shirt", price: 1599, old: 0, color: "Blue",  size: ["6-7Y", "8-9Y", "10-11Y"], emoji: "👔", badge: "Sale", desc: "Cheerful blue check shirt for little ones." },
    { id: 39, cat: "kids", sub: "pants",             label: "Pants (Kids)",          name: "Kids Denim Jeans",         price: 1999, old: 0,    color: "Blue",     size: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"], emoji: "👖", badge: "",       desc: "Durable denim jeans built for active kids." },
    { id: 40, cat: "kids", sub: "pants",             label: "Pants (Kids)",          name: "Kids Chino Pants",         price: 1899, old: 2200, color: "Tan",      size: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"], emoji: "👖", badge: "",       desc: "Soft chinos in classic tan — dress up or down." },
    { id: 41, cat: "kids", sub: "coats",             label: "Coats (Kids)",          name: "Kids Navy Blazer",         price: 3999, old: 0,    color: "Navy",     size: ["6-7Y", "8-9Y", "10-11Y"], emoji: "🧥", badge: "Hot",    desc: "Mini navy blazer for formal family occasions." },
    { id: 42, cat: "kids", sub: "coats",             label: "Coats (Kids)",          name: "Kids Grey Peacoat",        price: 4499, old: 0,    color: "Grey",     size: ["4-5Y", "6-7Y", "8-9Y"], emoji: "🧥", badge: "New",      desc: "Warm grey peacoat with cozy fleece lining." },
    { id: 43, cat: "kids", sub: "western-dresses",   label: "Western Dresses (Kids)", name: "Kids Floral Party Dress",  price: 3499, old: 0,    color: "Pink",     size: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"], emoji: "👗", badge: "",   desc: "Twirl-ready floral party dress for little princesses." },
    { id: 44, cat: "kids", sub: "western-dresses",   label: "Western Dresses (Kids)", name: "Kids Royal Blue Dress",    price: 3699, old: 4100, color: "Blue",    size: ["4-5Y", "6-7Y", "8-9Y"], emoji: "👗", badge: "Sale",    desc: "Sparkling royal blue dress with tulle skirt." },

    /* ---- KIDS: Informal ---- */
    { id: 45, cat: "kids", sub: "kameez-shalwar",    label: "Kameez Shalwar (Kids)", name: "Kids Yellow Kameez Set",   price: 2499, old: 0,    color: "Yellow",   size: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"], emoji: "🥻", badge: "",    desc: "Sunny yellow kameez shalwar for festive fun." },
    { id: 46, cat: "kids", sub: "kameez-shalwar",    label: "Kameez Shalwar (Kids)", name: "Kids Embroidered Kurta",    price: 2999, old: 3400, color: "White",   size: ["4-5Y", "6-7Y", "8-9Y"], emoji: "🥻", badge: "New",      desc: "Mini embroidered kurta — Eid-ready charm." },
    { id: 47, cat: "kids", sub: "cargos",            label: "Cargos (Kids)",         name: "Kids Camo Cargos",          price: 1799, old: 0,    color: "Olive",    size: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"], emoji: "👖", badge: "Hot",    desc: "Rugged camo cargos with lots of pockets." },
    { id: 48, cat: "kids", sub: "cargos",            label: "Cargos (Kids)",         name: "Kids Black Cargos",         price: 1699, old: 0,    color: "Black",    size: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"], emoji: "👖", badge: "",       desc: "Everyday black cargos, tough and comfy." },
    { id: 49, cat: "kids", sub: "t-shirts",          label: "T-Shirts (Kids)",       name: "Kids Cartoon Tee",          price: 999,  old: 0,    color: "Blue",     size: ["2-3Y", "4-5Y", "6-7Y"], emoji: "👕", badge: "Sale",     desc: "Playful cartoon tee in bright blue." },
    { id: 50, cat: "kids", sub: "t-shirts",          label: "T-Shirts (Kids)",       name: "Kids Striped Tee",           price: 1099, old: 0,    color: "Red",      size: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"], emoji: "👕", badge: "",       desc: "Classic striped cotton tee for everyday adventures." },
    { id: 51, cat: "kids", sub: "shirts",            label: "Shirts (Kids)",         name: "Kids Casual Blue Shirt",     price: 1499, old: 0,    color: "Blue",     size: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"], emoji: "👔", badge: "New",    desc: "Soft casual button-up in sky blue." },
    { id: 52, cat: "kids", sub: "shirts",            label: "Shirts (Kids)",         name: "Kids Plaid Shirt",           price: 1599, old: 0,    color: "Olive",    size: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"], emoji: "👔", badge: "",       desc: "Cosy plaid shirt, winter-ready." },
    { id: 53, cat: "kids", sub: "trousers",          label: "Trousers (Kids)",       name: "Kids Jogger Trousers",       price: 1599, old: 0,    color: "Grey",     size: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"], emoji: "👖", badge: "",       desc: "Ultra-comfy jogger trousers with soft waistband." },
    { id: 54, cat: "kids", sub: "trousers",          label: "Trousers (Kids)",       name: "Kids Khaki Trousers",        price: 1699, old: 1900, color: "Tan",     size: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"], emoji: "👖", badge: "Sale",    desc: "Clean khaki trousers for neat & tidy look." }
];

/* ---------- PAGE DETECTION ---------- */
const PAGE = (() => {
    const f = window.location.pathname.split("/").pop() || "index.html";
    if (f.includes("men")) return "men";
    if (f.includes("women")) return "women";
    if (f.includes("kids")) return "kids";
    if (f.includes("cart")) return "cart";
    return "home";
})();

const CAT_TITLES = {
    men:   { title: "MEN'S",   span: "COLLECTION",   tagline: "Formal & Informal dressing — crafted for the modern gentleman" },
    women: { title: "WOMEN'S", span: "COLLECTION",   tagline: "Formal & Informal dressing — made for the modern woman" },
    kids:  { title: "KIDS'",   span: "COLLECTION",   tagline: "Formal & Informal dressing — available in smaller, specialized sizes" }
};

/* ---------- CART (localStorage) ---------- */
function getCart() {
    try { return JSON.parse(localStorage.getItem("ksCart")) || []; }
    catch (e) { return []; }
}
function saveCart(cart) { localStorage.setItem("ksCart", JSON.stringify(cart)); }

function updateCartCount() {
    const cart = getCart();
    const total = cart.reduce((s, i) => s + i.qty, 0);
    document.querySelectorAll(".cart-count").forEach(el => el.textContent = total);
}

function addToCart(id, size, qty = 1) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const cart = getCart();
    const key = id + "|" + (size || "");
    const existing = cart.find(i => i.key === key);
    if (existing) existing.qty += qty;
    else cart.push({ key, id: p.id, name: p.name, price: p.price, emoji: p.emoji, size: size || "", color: p.color, qty });
    saveCart(cart);
    updateCartCount();
    showToast("✅ Added to cart: " + p.name);
}

function changeQty(key, delta) {
    let cart = getCart();
    cart = cart.filter(i => {
        if (i.key === key) {
            i.qty += delta;
            return i.qty > 0;
        }
        return true;
    });
    saveCart(cart);
    renderCart();
    updateCartCount();
}

function removeItem(key) {
    let cart = getCart().filter(i => i.key !== key);
    saveCart(cart);
    renderCart();
    updateCartCount();
    showToast("🗑️ Item removed from cart");
}

/* ---------- TOAST ---------- */
let toastTimer;
function showToast(msg) {
    const t = document.getElementById("toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2500);
}

/* ---------- PRODUCT CARDS ---------- */
function productCard(p) {
    const discount = p.old > p.price ? `<span class="old">PKR ${p.old.toLocaleString()}</span>` : "";
    return `
    <div class="product-card" data-id="${p.id}">
        <div class="product-img">
            ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
            <span class="emoji">${p.emoji}</span>
            <div class="quick-view" onclick="quickView(${p.id})">👁 Quick View</div>
        </div>
        <div class="product-info">
            <div class="product-name">${p.name}</div>
            <div class="product-sub">${p.label} · ${p.color}</div>
            <div class="product-price">
                <span>${discount}PKR ${p.price.toLocaleString()}</span>
                <button class="add-btn" onclick="addToCart(${p.id})" title="Add to Cart">+</button>
            </div>
        </div>
    </div>`;
}

function renderProducts(list, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = list.map(productCard).join("");
}

/* ---------- QUICK VIEW MODAL ---------- */
function quickView(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const modal = document.getElementById("modal");
    if (!modal) return;
    let selectedSize = p.size[0] || "M";
    const body = document.getElementById("modalBody");
    body.innerHTML = `
        <div class="modal-img">${p.emoji}</div>
        <h3>${p.name}</h3>
        <div class="sub">${p.label} · ${p.color}</div>
        <div class="price">PKR ${p.price.toLocaleString()} ${p.old > p.price ? `<s style="color:#aaa;font-size:15px;font-weight:400">PKR ${p.old.toLocaleString()}</s>` : ""}</div>
        <div class="desc">${p.desc}</div>
        <div style="font-size:13px;font-weight:600;color:var(--navy)">Select Size:</div>
        <div class="size-row" id="sizeRow">
            ${p.size.map((s, i) => `<button class="size-btn ${i === 0 ? "active" : ""}" onclick="selectSize(this, '${s}')">${s}</button>`).join("")}
        </div>
        <button class="modal-add" onclick="addFromModal(${p.id})">Add to Cart</button>`;
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}

function selectSize(el, size) {
    document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
    el.classList.add("active");
}

function addFromModal(id) {
    const active = document.querySelector(".size-btn.active");
    const size = active ? active.textContent : "M";
    addToCart(id, size);
    closeModal();
}

function closeModal() {
    document.getElementById("modal")?.classList.remove("show");
    document.body.style.overflow = "";
}

/* ---------- CATEGORY PAGE (men/women/kids) ---------- */
function initCategoryPage() {
    const cat = PAGE;
    if (!["men", "women", "kids"].includes(cat)) return;

    // Banner
    const cfg = CAT_TITLES[cat];
    const bannerHeading = document.querySelector(".page-banner h1");
    const bannerP = document.querySelector(".page-banner p");
    const breadcrumb = document.querySelector(".breadcrumb");
    if (bannerHeading) bannerHeading.innerHTML = `${cfg.title} <span>${cfg.span}</span>`;
    if (bannerP) bannerP.textContent = cfg.tagline;
    if (breadcrumb) breadcrumb.textContent = "HOME / " + cat.toUpperCase();

    const all = PRODUCTS.filter(p => p.cat === cat);

    // Build sub-category filter from URL param
    const params = new URLSearchParams(window.location.search);
    const presetSub = params.get("sub") || "";

    // Populate sub-category checkboxes
    const subs = [...new Set(all.map(p => p.sub))];
    document.getElementById("subFilter").innerHTML = subs.map(s => `
        <label><input type="checkbox" value="${s}" ${presetSub === s ? "checked" : ""}> ${s.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())} <span class="count">(${all.filter(p => p.sub === s).length})</span></label>`).join("");

    // Populate size filter
    const sizes = [...new Set(all.flatMap(p => p.size))];
    document.getElementById("sizeFilter").innerHTML = sizes.map(s => `
        <label><input type="checkbox" value="${s}"> ${s} <span class="count">(${all.filter(p => p.size.includes(s)).length})</span></label>`).join("");

    // Populate color filter
    const colors = [...new Set(all.map(p => p.color))];
    document.getElementById("colorFilter").innerHTML = colors.map(c => `
        <label><input type="checkbox" value="${c}"> ${c} <span class="count">(${all.filter(p => p.color === c).length})</span></label>`).join("");

    document.title = cfg.title.replace("'S", "'s") + " Collection — KHAN SAHAB";

    applyFilters();
}

function applyFilters() {
    const cat = PAGE;
    const all = PRODUCTS.filter(p => p.cat === cat);

    let list = [...all];

    // Sub-category
    const subChecked = [...document.querySelectorAll("#subFilter input:checked")].map(i => i.value);
    if (subChecked.length) list = list.filter(p => subChecked.includes(p.sub));

    // Size
    const sizeChecked = [...document.querySelectorAll("#sizeFilter input:checked")].map(i => i.value);
    if (sizeChecked.length) list = list.filter(p => p.size.some(s => sizeChecked.includes(s)));

    // Color
    const colorChecked = [...document.querySelectorAll("#colorFilter input:checked")].map(i => i.value);
    if (colorChecked.length) list = list.filter(p => colorChecked.includes(p.color));

    // Price
    const min = parseFloat(document.getElementById("minPrice").value);
    const max = parseFloat(document.getElementById("maxPrice").value);
    if (!isNaN(min)) list = list.filter(p => p.price >= min);
    if (!isNaN(max)) list = list.filter(p => p.price <= max);

    // Sort
    const sort = document.getElementById("sortSelect").value;
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));

    renderProducts(list, "productGrid");
    document.getElementById("resultCount").textContent = `Showing ${list.length} product${list.length !== 1 ? "s" : ""}`;
    document.getElementById("noResults").style.display = list.length ? "none" : "block";
}

function clearFilters() {
    document.querySelectorAll(".sidebar input[type=checkbox]").forEach(c => c.checked = false);
    document.getElementById("minPrice").value = "";
    document.getElementById("maxPrice").value = "";
    applyFilters();
}

/* ---------- HOME PAGE ---------- */
function initHomePage() {
    if (PAGE !== "home") return;
    const arrivals = [...PRODUCTS].sort((a, b) => b.id - a.id).slice(0, 8);
    renderProducts(arrivals, "newArrivals");
}

/* ---------- CART PAGE ---------- */
function renderCart() {
    if (PAGE !== "cart") return;
    const cart = getCart();
    const wrap = document.getElementById("cartWrap");
    if (!wrap) return;

    if (!cart.length) {
        wrap.innerHTML = `<div class="empty-cart">
            <div class="e-icon">🛒</div>
            <h2 style="color:var(--navy);font-family:Georgia,serif;margin-bottom:8px">Your Cart is Empty</h2>
            <p>Looks like you haven't added anything yet. Explore our royal collections!</p>
            <a href="men.html" class="hero-btn" style="font-size:13px;padding:12px 26px">Shop Men</a>
            <a href="women.html" class="hero-btn" style="font-size:13px;padding:12px 26px;margin-left:8px">Shop Women</a>
            <a href="kids.html" class="hero-btn" style="font-size:13px;padding:12px 26px;margin-left:8px">Shop Kids</a>
        </div>`;
        return;
    }

    const itemsHtml = cart.map(i => `
        <div class="cart-item">
            <div class="ci-img">${i.emoji}</div>
            <div class="ci-info">
                <div class="ci-name">${i.name}</div>
                <div class="ci-meta">${i.size ? `Size: ${i.size} · ` : ""}Color: ${i.color} · PKR ${i.price.toLocaleString()}</div>
                <div class="qty-row">
                    <button class="qty-btn" onclick="changeQty('${i.key}', -1)">−</button>
                    <span class="qty-val">${i.qty}</span>
                    <button class="qty-btn" onclick="changeQty('${i.key}', 1)">+</button>
                    <button class="ci-remove" onclick="removeItem('${i.key}')">Remove</button>
                </div>
            </div>
            <div class="ci-price">PKR ${(i.price * i.qty).toLocaleString()}</div>
        </div>`).join("");

    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const shipping = subtotal >= 5000 ? 0 : 299;
    const total = subtotal + shipping;

    wrap.innerHTML = `
        <div class="cart-layout">
            <div>${itemsHtml}</div>
            <div class="cart-summary">
                <h3>Order Summary</h3>
                <div class="summary-row"><span>Subtotal</span><span>PKR ${subtotal.toLocaleString()}</span></div>
                <div class="summary-row"><span>Shipping</span><span>${shipping === 0 ? "FREE" : "PKR " + shipping.toLocaleString()}</span></div>
                <div class="summary-row total"><span>Total</span><span class="val">PKR ${total.toLocaleString()}</span></div>
                <button class="checkout-btn" onclick="checkout()">Proceed to Checkout →</button>
                <a href="index.html" style="display:block;text-align:center;font-size:13px;color:var(--mut);margin-top:12px">← Continue Shopping</a>
            </div>
        </div>`;
}

function checkout() {
    showToast("🎉 Order placed! (Demo — thank you for shopping at KHAN SAHAB)");
    localStorage.removeItem("ksCart");
    updateCartCount();
    setTimeout(renderCart, 800);
}

/* ---------- SEARCH ---------- */
function doSearch() {
    const q = (document.getElementById("globalSearch")?.value || "").trim().toLowerCase();
    if (!q) return;
    const results = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.label.toLowerCase().includes(q) ||
        p.sub.replace(/-/g, " ").includes(q) ||
        p.color.toLowerCase().includes(q));

    const grid = document.getElementById("productGrid");
    if (grid) {
        renderProducts(results.slice(0, 12), "productGrid");
        document.getElementById("resultCount").textContent = `Search results for "${q}" — ${results.length} found`;
        document.getElementById("noResults").style.display = results.length ? "none" : "block";
    } else {
        // On home page — jump to a category page with a tiny search UX
        const target = results.length ? (results[0].cat + ".html") : "men.html";
        window.location.href = target + (results.length ? "#search=" + encodeURIComponent(q) : "");
    }
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    initHomePage();
    initCategoryPage();
    renderCart();

    // Enter key on search
    document.getElementById("globalSearch")?.addEventListener("keydown", e => {
        if (e.key === "Enter") doSearch();
    });

    // Close modal on overlay click
    document.getElementById("modal")?.addEventListener("click", e => {
        if (e.target === e.currentTarget) closeModal();
    });

    // Mobile nav toggle
    document.querySelectorAll(".nav-item > a").forEach(link => {
        link.addEventListener("click", e => {
            if (window.innerWidth <= 768 && link.parentElement.querySelector(".dropdown")) {
                e.preventDefault();
                link.parentElement.classList.toggle("open");
            }
        });
    });
});