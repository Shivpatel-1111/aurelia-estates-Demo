# Aurelia Estates — Luxury Real Estate Website

A static, client-ready website for **Aurelia Estates**, a premium residential and
commercial property developer. Built with plain HTML5, Tailwind CSS (via CDN),
custom CSS and vanilla ES6+ JavaScript — no backend, database, build step or
external framework required.

## Design concept

- **Palette:** warm white (`#f6f3ec`), charcoal (`#1b1a17`), stone gray
  (`#59544c`), and a champagne gold accent (`#b08d57`) — evoking architectural
  materials rather than a generic "real-estate blue."
- **Type:** Fraunces (serif, display headings) paired with Manrope (sans-serif,
  body copy and UI labels).
- **Signature motif:** a recurring "blueprint" language — thin gold tick-rules
  under headings, corner brackets framing key imagery, and a faint grid on dark
  panels — referencing an architect's scale drawing rather than a stock photo
  carousel.

## File structure

```
aurelia-estates/
├── index.html          Homepage — hero, search, all 15 required sections
├── about.html           Company story, philosophy, stats, leadership
├── properties.html      Full filterable property portfolio
├── contact.html         Contact details, map placeholder, site-visit form
├── css/
│   ├── style.css        Design tokens, components, motif, animations
│   └── responsive.css   Small-screen refinements (320–425px) & overflow guards
├── js/
│   └── main.js          Nav, filters, gallery lightbox, testimonials,
│                         counters, progress bars, scroll reveal, form validation
├── assets/
│   ├── images/          (imagery is loaded from Unsplash CDN for this demo)
│   ├── icons/           (icons rendered via Lucide, loaded from CDN)
│   └── fonts/           (fonts loaded from Google Fonts CDN)
├── favicon.svg
└── README.md
```

## Features implemented

- Sticky, blurring navigation with animated mobile hamburger menu
- Hero section with overlapping property search/filter panel
- Dynamic property rendering + live client-side filtering (type, location,
  BHK, price range) shared across the homepage and `properties.html`
- Residential and commercial project showcases
- About section with animated count-up statistics
- Six-card "Why Choose Us" feature grid
- Construction progress trackers with animated fill bars
- Image gallery with a custom lightbox (keyboard + click navigation)
- Testimonial carousel with autoplay, dots and manual controls
- Site-visit request form with full client-side validation and a success state
- Neighbourhood/location section with a static map placeholder
- Footer with quick links, project links and social icons
- Semantic HTML, meta description, Open Graph tags, SVG favicon, alt text on
  every image, and `loading="lazy"` on below-the-fold imagery

## Notes for going live

- Swap the Unsplash demo photography for your own optimized property images.
- Replace the map placeholder with a Google Maps or Mapbox embed and an API key.
- Wire the site-visit form to a form backend or email service of your choice
  (this build is intentionally frontend-only, per the static-site requirement).
- Update phone numbers, email addresses and RERA details with real records
  before publishing.

## Testing checklist

- [x] Navigation links and anchors resolve correctly across all pages
- [x] Mobile menu opens/closes and locks body scroll
- [x] Property filters return correct dynamic results, including "no matches"
- [x] Gallery lightbox opens, navigates (arrows + keyboard) and closes
- [x] Site-visit form blocks submission until all required fields are valid
- [x] Animations respect `prefers-reduced-motion`
- [x] Layout verified at 320px, 375px, 425px, tablet, laptop and large-desktop
      widths with no horizontal scroll
- [x] No console errors on load
