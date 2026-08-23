/* ==========================================================================
   Aurelia Estates — main.js
   Vanilla ES6+, no frameworks/libraries.
   ========================================================================== */

/* ---------------------------------------------------------------------- */
/* Property data (shared by homepage search + properties.html listing)     */
/* ---------------------------------------------------------------------- */
const PROPERTIES = [
  {
    id: "aurelia-heights",
    name: "Aurelia Heights",
    type: "Apartments",
    location: "Whitefield, Bengaluru",
    bhk: "2 & 3 BHK",
    bhkValue: 3,
    area: "1,150 – 1,850 sq.ft",
    price: "₹78 Lakh onwards",
    priceValue: 7800000,
    status: "Under Construction",
    statusClass: "status-progress",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
    tagline: "A landmark tower of light-filled residences overlooking the Whitefield tech corridor."
  },
  {
    id: "grand-residences",
    name: "The Grand Residences",
    type: "Luxury Apartments",
    location: "Bandra West, Mumbai",
    bhk: "3 & 4 BHK",
    bhkValue: 4,
    area: "1,900 – 3,200 sq.ft",
    price: "₹4.2 Cr onwards",
    priceValue: 42000000,
    status: "Ready to Move",
    statusClass: "status-ready",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    tagline: "Sea-facing residences with private lifts, set along Mumbai's most storied address."
  },
  {
    id: "green-villas",
    name: "Aurelia Green Villas",
    type: "Villas",
    location: "Whitefield, Bengaluru",
    bhk: "4 BHK",
    bhkValue: 4,
    area: "3,400 sq.ft plot",
    price: "₹2.9 Cr onwards",
    priceValue: 29000000,
    status: "New Launch",
    statusClass: "status-launch",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
    tagline: "Independent villas framed by private courtyards and mature landscaped avenues."
  },
  {
    id: "skyline-business-park",
    name: "Skyline Business Park",
    type: "Commercial",
    location: "Gachibowli, Hyderabad",
    bhk: "Office & Retail",
    bhkValue: 0,
    area: "500 – 8,000 sq.ft",
    price: "₹65 Lakh onwards",
    priceValue: 6500000,
    status: "Under Construction",
    statusClass: "status-progress",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    tagline: "A Grade-A commercial address built for HITEC City's next generation of businesses."
  },
  {
    id: "aurelia-riverside",
    name: "Aurelia Riverside",
    type: "Apartments",
    location: "Kondhwa, Pune",
    bhk: "2 & 3 BHK",
    bhkValue: 3,
    area: "980 – 1,540 sq.ft",
    price: "₹62 Lakh onwards",
    priceValue: 6200000,
    status: "Ready to Move",
    statusClass: "status-ready",
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1200&auto=format&fit=crop",
    tagline: "Riverside residences with a private promenade and uninterrupted valley views."
  },
  {
    id: "orchard-villas",
    name: "Aurelia Orchard Villas",
    type: "Villas",
    location: "ECR, Chennai",
    bhk: "5 BHK",
    bhkValue: 5,
    area: "4,200 sq.ft plot",
    price: "₹3.6 Cr onwards",
    priceValue: 36000000,
    status: "New Launch",
    statusClass: "status-launch",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    tagline: "Coastal villas along East Coast Road, designed for slow mornings and sea air."
  },
  {
    id: "aurelia-tech-square",
    name: "Aurelia Tech Square",
    type: "Commercial",
    location: "Sector 62, Noida",
    bhk: "Office Spaces",
    bhkValue: 0,
    area: "800 – 12,000 sq.ft",
    price: "₹1.1 Cr onwards",
    priceValue: 11000000,
    status: "Under Construction",
    statusClass: "status-progress",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    tagline: "A LEED-aligned business park built around light, air and walkable courtyards."
  },
  {
    id: "aurelia-meadow-homes",
    name: "Aurelia Meadow Homes",
    type: "Apartments",
    location: "Sarjapur Road, Bengaluru",
    bhk: "1 & 2 BHK",
    bhkValue: 2,
    area: "650 – 1,120 sq.ft",
    price: "₹48 Lakh onwards",
    priceValue: 4800000,
    status: "Ready to Move",
    statusClass: "status-ready",
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1200&auto=format&fit=crop",
    tagline: "Compact, efficient homes for first-time buyers, five minutes from the tech park."
  }
];

/* ---------------------------------------------------------------------- */
/* Utility: property card markup                                           */
/* ---------------------------------------------------------------------- */
function propertyCardHTML(p) {
  return `
  <article class="property-card reveal" data-type="${p.type}" data-location="${p.location}" data-bhk="${p.bhkValue}" data-price="${p.priceValue}">
    <div class="card-img-wrap h-56 md:h-64">
      <img src="${p.image}" alt="${p.name}, ${p.type} in ${p.location}" loading="lazy" class="w-full h-full object-cover">
    </div>
    <div class="p-6">
      <div class="flex items-center justify-between mb-3">
        <span class="status-pill ${p.statusClass}">${p.status}</span>
        <span class="text-xs tracking-widest uppercase text-[var(--stone-light)]">${p.type}</span>
      </div>
      <h3 class="font-display text-2xl mb-1">${p.name}</h3>
      <p class="text-sm text-[var(--stone)] mb-4">${p.location}</p>
      <div class="grid grid-cols-3 gap-2 text-xs mb-5 border-t border-b border-[var(--line)] py-3">
        <div><span class="block text-[var(--stone-light)] uppercase tracking-wide mb-1">Config</span><span class="font-semibold">${p.bhk}</span></div>
        <div><span class="block text-[var(--stone-light)] uppercase tracking-wide mb-1">Area</span><span class="font-semibold">${p.area}</span></div>
        <div><span class="block text-[var(--stone-light)] uppercase tracking-wide mb-1">Price</span><span class="font-semibold">${p.price}</span></div>
      </div>
      <a href="properties.html#${p.id}" class="btn btn-ghost-dark w-full justify-center">View Details</a>
    </div>
  </article>`;
}

/* ---------------------------------------------------------------------- */
/* Render: featured properties (homepage) + full listing (properties.html) */
/* ---------------------------------------------------------------------- */
function renderFeatured() {
  const el = document.getElementById("featured-grid");
  if (!el) return;
  const featuredIds = ["aurelia-heights", "grand-residences", "green-villas", "skyline-business-park"];
  el.innerHTML = featuredIds.map(id => propertyCardHTML(PROPERTIES.find(p => p.id === id))).join("");
  observeReveals();
}

function renderSearchResults(list) {
  const el = document.getElementById("search-results-grid");
  if (!el) return;
  if (list.length === 0) {
    el.innerHTML = `<p class="col-span-full text-center text-[var(--stone)] py-12">No properties match those filters yet. Try widening your search.</p>`;
    return;
  }
  el.innerHTML = list.map(propertyCardHTML).join("");
  observeReveals();
}

function renderAllListing() {
  const el = document.getElementById("all-properties-grid");
  if (!el) return;
  el.innerHTML = PROPERTIES.map(propertyCardHTML).join("");
  observeReveals();
}

/* ---------------------------------------------------------------------- */
/* Search / filter panel                                                   */
/* ---------------------------------------------------------------------- */
function initSearchFilters() {
  const form = document.getElementById("property-filter-form");
  if (!form) return;

  const typeSel = document.getElementById("filter-type");
  const locSel = document.getElementById("filter-location");
  const bhkSel = document.getElementById("filter-bhk");
  const priceSel = document.getElementById("filter-price");

  // populate location options dynamically from data
  const locations = [...new Set(PROPERTIES.map(p => p.location))].sort();
  locations.forEach(loc => {
    const opt = document.createElement("option");
    opt.value = loc;
    opt.textContent = loc;
    locSel.appendChild(opt);
  });

  function applyFilters(e) {
    if (e) e.preventDefault();
    const type = typeSel.value;
    const loc = locSel.value;
    const bhk = bhkSel.value;
    const price = priceSel.value;

    const filtered = PROPERTIES.filter(p => {
      if (type && p.type !== type) return false;
      if (loc && p.location !== loc) return false;
      if (bhk && String(p.bhkValue) !== bhk) return false;
      if (price) {
        const [min, max] = price.split("-").map(Number);
        if (p.priceValue < min || (max && p.priceValue > max)) return false;
      }
      return true;
    });

    renderSearchResults(filtered);
    document.getElementById("search-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  form.addEventListener("submit", applyFilters);

  document.getElementById("filter-reset")?.addEventListener("click", () => {
    form.reset();
    renderSearchResults(PROPERTIES);
  });
}

/* ---------------------------------------------------------------------- */
/* Sticky nav shrink/blur + mobile menu                                    */
/* ---------------------------------------------------------------------- */
function initNav() {
  const nav = document.getElementById("site-nav");
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 24) nav.classList.add("nav-scrolled");
      else nav.classList.remove("nav-scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  const menuBtn = document.getElementById("mobile-menu-btn");
  const closeBtn = document.getElementById("mobile-menu-close");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn?.addEventListener("click", () => {
    mobileMenu.classList.add("open");
    document.body.style.overflow = "hidden";
  });
  closeBtn?.addEventListener("click", closeMobileMenu);
  mobileMenu?.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMobileMenu));

  function closeMobileMenu() {
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
  }
}

/* ---------------------------------------------------------------------- */
/* Scroll reveal (IntersectionObserver)                                    */
/* ---------------------------------------------------------------------- */
let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
  }
  document.querySelectorAll(".reveal:not(.in-view)").forEach(el => revealObserver.observe(el));
}

/* ---------------------------------------------------------------------- */
/* Animated counters (About stats)                                        */
/* ---------------------------------------------------------------------- */
function initCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.counter, 10);
      const suffix = el.dataset.suffix || "";
      const duration = 1600;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target).toLocaleString("en-IN") + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => counterObserver.observe(el));
}

/* ---------------------------------------------------------------------- */
/* Construction progress bars                                             */
/* ---------------------------------------------------------------------- */
function initProgressBars() {
  const bars = document.querySelectorAll("[data-progress]");
  if (!bars.length) return;

  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.style.width = el.dataset.progress + "%";
      progressObserver.unobserve(el);
    });
  }, { threshold: 0.4 });

  bars.forEach(el => progressObserver.observe(el));
}

/* ---------------------------------------------------------------------- */
/* Gallery lightbox                                                       */
/* ---------------------------------------------------------------------- */
function initGallery() {
  const items = Array.from(document.querySelectorAll(".gallery-item"));
  const lightbox = document.getElementById("lightbox");
  if (!items.length || !lightbox) return;

  const lbImg = document.getElementById("lightbox-img");
  const lbCaption = document.getElementById("lightbox-caption");
  const lbCounter = document.getElementById("lightbox-counter");
  let currentIndex = 0;

  function openAt(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function updateLightbox() {
    const img = items[currentIndex].querySelector("img");
    lbImg.src = img.src.replace(/w=\d+/, "w=1600");
    lbImg.alt = img.alt;
    lbCaption.textContent = img.alt;
    lbCounter.textContent = `${currentIndex + 1} / ${items.length}`;
  }
  function close() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  items.forEach((item, index) => {
    item.addEventListener("click", () => openAt(index));
  });

  document.getElementById("lightbox-close")?.addEventListener("click", close);
  document.getElementById("lightbox-next")?.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateLightbox();
  });
  document.getElementById("lightbox-prev")?.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateLightbox();
  });
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") document.getElementById("lightbox-next")?.click();
    if (e.key === "ArrowLeft") document.getElementById("lightbox-prev")?.click();
  });
}

/* ---------------------------------------------------------------------- */
/* Testimonial carousel                                                    */
/* ---------------------------------------------------------------------- */
function initTestimonials() {
  const track = document.getElementById("testimonial-track");
  if (!track) return;
  const slides = track.children.length;
  let index = 0;

  function go(i) {
    index = (i + slides) % slides;
    track.style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll("[data-testi-dot]").forEach((dot, di) => {
      dot.classList.toggle("bg-[var(--gold)]", di === index);
      dot.classList.toggle("bg-[var(--line)]", di !== index);
    });
  }

  document.getElementById("testi-next")?.addEventListener("click", () => go(index + 1));
  document.getElementById("testi-prev")?.addEventListener("click", () => go(index - 1));
  document.querySelectorAll("[data-testi-dot]").forEach((dot, di) => {
    dot.addEventListener("click", () => go(di));
  });

  let auto = setInterval(() => go(index + 1), 6000);
  track.closest("section")?.addEventListener("mouseenter", () => clearInterval(auto));
  track.closest("section")?.addEventListener("mouseleave", () => {
    auto = setInterval(() => go(index + 1), 6000);
  });

  go(0);
}

/* ---------------------------------------------------------------------- */
/* Site visit form validation                                              */
/* ---------------------------------------------------------------------- */
function initVisitForm() {
  const form = document.getElementById("site-visit-form");
  if (!form) return;
  const successMsg = document.getElementById("form-success");

  const validators = {
    "visit-name": v => v.trim().length >= 2 || "Please enter your full name.",
    "visit-phone": v => /^[6-9]\d{9}$/.test(v.trim()) || "Enter a valid 10-digit phone number.",
    "visit-email": v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || "Enter a valid email address.",
    "visit-property": v => v !== "" || "Please select a property.",
    "visit-date": v => v !== "" || "Please choose a preferred date.",
    "visit-time": v => v !== "" || "Please choose a preferred time."
  };

  function validateField(id) {
    const field = document.getElementById(id);
    const errorEl = document.getElementById(id + "-error");
    const result = validators[id](field.value);
    if (result === true) {
      field.classList.remove("error");
      errorEl.classList.remove("show");
      return true;
    } else {
      field.classList.add("error");
      errorEl.textContent = result;
      errorEl.classList.add("show");
      return false;
    }
  }

  Object.keys(validators).forEach(id => {
    document.getElementById(id)?.addEventListener("blur", () => validateField(id));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    Object.keys(validators).forEach(id => {
      if (!validateField(id)) valid = false;
    });
    if (!valid) return;

    form.classList.add("hidden");
    successMsg.classList.remove("hidden");
    successMsg.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

/* ---------------------------------------------------------------------- */
/* Init                                                                     */
/* ---------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initNav();
  renderFeatured();
  initSearchFilters();
  renderSearchResults(PROPERTIES);
  renderAllListing();
  initCounters();
  initProgressBars();
  initGallery();
  initTestimonials();
  initVisitForm();
  observeReveals();

  if (window.lucide) lucide.createIcons();

  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();
});
