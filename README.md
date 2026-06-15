# Swad Catering — Website

> **Placeholder name.** Replace "Swad Catering" with your registered business name before launch.

A static site (SSG) for a professional catering service based in Kathmandu, Nepal. Built with Nuxt 3 and optimised for local SEO.

---

## Tech Stack

- **Framework:** Nuxt 3
- **Rendering:** SSG (`nuxt generate`) — fully static, no server required
- **Styling:** Scoped CSS (no Tailwind or external CSS framework)
- **Booking:** WhatsApp deep links (no backend needed)
- **Fonts:** Inter via Google Fonts

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Generate static site → .output/public/
npm run generate

# Preview the generated static build locally
npx serve .output/public
```

---

## Project Structure

```
swad-catering/
├── pages/
│   ├── index.vue       # Home — hero, event types, why us, testimonials
│   ├── menu.vue        # Packages & pricing — full/half catering toggle
│   ├── gallery.vue     # Event gallery — filterable by category
│   ├── about.vue       # About us — story, values, team
│   └── contact.vue     # Contact & booking — WhatsApp buttons, FAQ
│
├── components/
│   ├── TheNav.vue        # Sticky navigation with mobile hamburger
│   ├── TheFooter.vue     # Footer with links and contact info
│   └── WhatsappFloat.vue # Floating WhatsApp button (fixed bottom-right)
│
├── layouts/
│   └── default.vue     # Wraps all pages: Nav + slot + Footer + Float
│
├── public/
│   ├── favicon.svg     # SVG favicon
│   ├── robots.txt      # Search engine crawl rules
│   └── sitemap.xml     # Sitemap for all 5 pages
│
└── nuxt.config.ts      # Nuxt config — SSG prerender routes, global head
```

---

## Before You Launch

Search the codebase for `TODO` comments — they mark everything that needs a real value:

### 1. WhatsApp number
Replace `977980000000` with your actual number (digits only, no spaces or dashes):

```
components/TheNav.vue
components/TheFooter.vue
components/WhatsappFloat.vue
pages/index.vue
pages/menu.vue
pages/gallery.vue
pages/about.vue
pages/contact.vue
```

### 2. Business name
Replace `Swad Catering` with your registered business name in:

```
components/TheNav.vue
components/TheFooter.vue
pages/index.vue       ← also in the JSON-LD structured data
nuxt.config.ts        ← if you add a global site name
```

### 3. Real photos
In `pages/gallery.vue`, each `.gallery-img` div is a coloured gradient placeholder. Replace with real `<img>` tags:

```html
<!-- Replace this -->
<div class="gallery-img" :style="{ background: item.bg }">

<!-- With this (after adding images to /public/gallery/) -->
<img src="/gallery/wedding-01.jpg" alt="Wedding catering Kathmandu" loading="lazy" />
```

Name photos descriptively for SEO: `wedding-catering-kathmandu-01.jpg`, `corporate-event-catering-nepal.jpg`, etc.

### 4. Business address
In `pages/contact.vue`, replace the placeholder address with your actual Kathmandu address.

### 5. Sitemap & robots.txt domain
Replace `https://swadcatering.com.np` with your actual domain in:

```
public/sitemap.xml
public/robots.txt
```

Also update the `og:url` and canonical URLs in page `useHead()` calls once you have the domain.

### 6. Team section
In `pages/about.vue`, replace the placeholder initials and descriptions with real names, photos, and bios.

### 7. Pricing
Prices are hardcoded in `pages/menu.vue`. Update `prices` and `addonPrices` to match your actual rates.

---

## SEO Features

| Feature | Details |
|---|---|
| JSON-LD structured data | `FoodEstablishment` schema on home page — enables Google rich results |
| Geo meta tags | `geo.region: NP-BA`, `geo.placename: Kathmandu` — local search signals |
| Nepali keywords | Meta keywords include Nepali script (`खानपान सेवा काठमाडौं`) |
| Unique page titles | Every page has a distinct, keyword-rich `<title>` |
| Sitemap | `public/sitemap.xml` covers all 5 routes |
| robots.txt | Allows all crawlers, points to sitemap |
| Prerendered HTML | Full HTML on every page — no JS required for Googlebot to read content |

---

## Deployment

The `npm run generate` command produces a fully static folder at `.output/public/`. Deploy it to any static host:

| Host | How |
|---|---|
| **Vercel** | Connect repo → framework: Nuxt → output: `.output/public` |
| **Netlify** | Build command: `npm run generate` · Publish dir: `.output/public` |
| **GitHub Pages** | Copy `.output/public` contents to `gh-pages` branch |
| **cPanel / shared hosting** | Upload `.output/public` contents via FTP to `public_html` |

For a `.com.np` domain, register through [Mercantile Nepal](https://www.mos.com.np) or similar NP registrar.

---

## Adding Google Analytics

In `nuxt.config.ts`, add your GA4 measurement ID to the `head.script` array:

```ts
script: [
  {
    src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX',
    async: true,
  },
  {
    children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');`,
  },
],
```

---

## Adding Real Testimonials

Testimonials are hardcoded in `pages/index.vue` in the `<!-- Testimonials -->` section. Replace the placeholder reviewer names, text, and avatars with real client feedback.
