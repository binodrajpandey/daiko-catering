<script setup lang="ts">
// TODO: Replace WHATSAPP_NUMBER and business name when confirmed
const WHATSAPP_NUMBER = '977980000000'
const waQuote = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I would like to get a catering quote for my event.')}`
const waWedding = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I am interested in your wedding catering service.')}`
const waCorporate = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I am interested in your corporate event catering service.')}`
const waPicnic = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I am interested in your dry picnic catering service.')}`

// ── Cost calculator ──────────────────────────────────
const calcType    = ref<'full' | 'half'>('full')
const calcGuests  = ref(100)
const calcPackage = ref<'basic' | 'standard' | 'premium'>('standard')
const calcAddons  = reactive({ extra_main: false, dessert_bar: false, live_cooking: false, beverages: false })

const calcPrices = computed(() => ({
  basic:    calcType.value === 'half' ? 299 : 499,
  standard: calcType.value === 'half' ? 349 : 599,
  premium:  calcType.value === 'half' ? 449 : 799,
}))

const calcAddonPrices = computed(() => ({
  extra_main:   calcType.value === 'half' ? 25  : 50,
  dessert_bar:  calcType.value === 'half' ? 50  : 100,
  live_cooking: calcType.value === 'half' ? 60  : 120,
  beverages:    calcType.value === 'half' ? 75  : 150,
}))

const calcAddonTotal     = computed(() =>
  (calcAddons.extra_main   ? calcAddonPrices.value.extra_main   : 0) +
  (calcAddons.dessert_bar  ? calcAddonPrices.value.dessert_bar  : 0) +
  (calcAddons.live_cooking ? calcAddonPrices.value.live_cooking : 0) +
  (calcAddons.beverages    ? calcAddonPrices.value.beverages    : 0)
)
const calcPricePerPerson = computed(() => calcPrices.value[calcPackage.value] + calcAddonTotal.value)
const calcTotal          = computed(() => calcGuests.value * calcPricePerPerson.value)
const calcTotalFormatted = computed(() => calcTotal.value.toLocaleString('en-IN'))

const calcWaMsg = computed(() => {
  const pkg  = calcPackage.value.charAt(0).toUpperCase() + calcPackage.value.slice(1)
  const type = calcType.value === 'half' ? 'half catering' : 'full catering'
  const addons = (Object.entries(calcAddons) as [string, boolean][])
    .filter(([, v]) => v).map(([k]) => k.replace('_', ' ')).join(', ')
  return `Hello! I used your cost calculator and got an estimate of NRS ${calcTotalFormatted.value} for ${calcGuests.value} guests (${pkg} package, ${type}${addons ? ', add-ons: ' + addons : ''}). Can you provide an exact quote?`
})

function clampGuests() {
  calcGuests.value = Math.min(1000, Math.max(10, calcGuests.value || 10))
}

useHead({
  title: 'Daiko Catering — Best Catering Service in Kathmandu, Nepal',
  meta: [
    { name: 'description', content: 'Professional catering service in Kathmandu, Nepal. Authentic Nepali cuisine for weddings, corporate events, birthday parties and social gatherings. From NRS 499/person. Book via WhatsApp.' },
    { name: 'keywords', content: 'catering service Kathmandu, wedding catering Nepal, event catering Kathmandu, food catering Nepal, Nepali catering, catering company Kathmandu, खानपान सेवा काठमाडौं' },
    { property: 'og:title', content: 'Daiko Catering — Best Catering Service in Kathmandu, Nepal' },
    { property: 'og:description', content: 'Authentic Nepali cuisine for weddings, corporate events and celebrations. From NRS 499/person. Serving Kathmandu Valley.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://daikocatering.com.np/' },
    { name: 'geo.region', content: 'NP-BA' },
    { name: 'geo.placename', content: 'Kathmandu' },
  ],
  link: [{ rel: 'canonical', href: 'https://daikocatering.com.np/' }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FoodEstablishment',
        name: 'Daiko Catering',
        description: 'Professional catering service in Kathmandu, Nepal specialising in authentic Nepali cuisine for weddings, corporate events, and celebrations.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kathmandu',
          addressRegion: 'Bagmati',
          addressCountry: 'NP',
        },
        url: 'https://daikocatering.com.np',
        telephone: '+977-98XXXXXXXX',
        servesCuisine: ['Nepali', 'Indian', 'Continental'],
        priceRange: 'NRS 499 - NRS 799 per person',
        areaServed: { '@type': 'City', name: 'Kathmandu' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Catering Packages',
          itemListElement: [
            { '@type': 'Offer', name: 'Basic Package', price: '499', priceCurrency: 'NPR', description: 'Perfect for small gatherings' },
            { '@type': 'Offer', name: 'Standard Package', price: '599', priceCurrency: 'NPR', description: 'Our most popular wedding & event package' },
            { '@type': 'Offer', name: 'Premium Package', price: '799', priceCurrency: 'NPR', description: 'The complete experience for prestigious events' },
          ],
        },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '120' },
      }),
    },
  ],
})
</script>

<template>
  <div class="page">

    <!-- ── Hero ─────────────────────────────────────── -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-text">
          <span class="hero-badge">
            <span class="badge-dot" />
            Serving Kathmandu Valley
          </span>
          <h1 class="hero-h1">
            Exceptional Food<br>for <span class="accent">Every Occasion</span>
          </h1>
          <p class="hero-sub">
            From intimate family dinners to grand Kathmandu weddings — our professional chefs craft
            authentic Nepali and fusion menus that leave lasting memories.
          </p>

          <div class="hero-stats">
            <div class="stat">
              <strong>500+</strong>
              <span>Events catered</span>
            </div>
            <div class="stat-sep" />
            <div class="stat">
              <strong>20,000+</strong>
              <span>Guests served</span>
            </div>
            <div class="stat-sep" />
            <div class="stat">
              <strong>4.9★</strong>
              <span>Average rating</span>
            </div>
          </div>

          <div class="hero-btns">
            <a :href="waQuote" target="_blank" rel="noopener noreferrer" class="btn-primary">
              Get a Free Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <NuxtLink to="/menu" class="btn-secondary">View Menu Packages</NuxtLink>
          </div>
        </div>

        <div class="hero-img-wrap" aria-hidden="true">
          <div class="hero-img-glow" />
          <div class="hero-img-frame">
            <img src="/images/dal-bhat.jpg" alt="Dal Bhat Thali" class="hero-food-img" />
          </div>
          <div class="hero-float-badge badge-top">
            <strong>4.9★</strong>
            <span>Google Rating</span>
          </div>
          <div class="hero-float-badge badge-bottom">
            <strong>500+</strong>
            <span>Events Catered</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Stats bar ──────────────────────────────── -->
    <section class="stats-bar">
      <div class="stats-inner">
        <div class="stat-item"><strong>500+</strong><span>Events Catered</span></div>
        <div class="stat-rule" />
        <div class="stat-item"><strong>20,000+</strong><span>Guests Served</span></div>
        <div class="stat-rule" />
        <div class="stat-item"><strong>8+</strong><span>Years in Kathmandu</span></div>
        <div class="stat-rule" />
        <div class="stat-item"><strong>4.9★</strong><span>Google Rating</span></div>
      </div>
    </section>

    <!-- ── Event types ────────────────────────────── -->
    <section class="section">
      <div class="inner">
        <div class="section-label">What We Cater</div>
        <h2 class="section-heading">Every event. Every taste.</h2>
        <p class="section-sub">Specialised menus and staffing for any occasion in Kathmandu and surrounding areas.</p>

        <div class="event-grid">
          <a :href="waWedding" target="_blank" rel="noopener noreferrer" class="event-card event-wedding">
            <div class="event-icon">💍</div>
            <h3>Weddings & Receptions</h3>
            <p>Full-service wedding catering from mehendi to reception. Authentic Nepali sadhya, live cooking stations, and elegant presentation for your special day.</p>
            <span class="event-cta">Get wedding quote →</span>
          </a>

          <a :href="waCorporate" target="_blank" rel="noopener noreferrer" class="event-card event-corporate">
            <div class="event-icon">🏢</div>
            <h3>Corporate Events</h3>
            <p>Professional buffets, lunch boxes, and conference catering. We handle setup, service, and cleanup so your team can focus on the meeting.</p>
            <span class="event-cta">Get corporate quote →</span>
          </a>

          <NuxtLink to="/menu" class="event-card event-birthday">
            <div class="event-icon">🎂</div>
            <h3>Birthday Parties</h3>
            <p>Make every birthday unforgettable with customised menus — from intimate family gatherings to large celebrations with live cooking stations.</p>
            <span class="event-cta">View packages →</span>
          </NuxtLink>

          <NuxtLink to="/menu" class="event-card event-social">
            <div class="event-icon">🎉</div>
            <h3>Social Gatherings</h3>
            <p>Bratabandha, pasni, anniversaries, puja events — we understand the cultural significance and deliver food that honours every tradition.</p>
            <span class="event-cta">View packages →</span>
          </NuxtLink>

          <a :href="waPicnic" target="_blank" rel="noopener noreferrer" class="event-card event-picnic">
            <div class="event-icon">🧺</div>
            <h3>Dry Picnic</h3>
            <p>We travel to your picnic location and cook fresh on-site — school trips, corporate outings, family picnics. You enjoy the outdoors; we handle all the food.</p>
            <span class="event-cta">Get picnic quote →</span>
          </a>
        </div>
      </div>
    </section>

    <!-- ── Food menu ─────────────────────────────────── -->
    <section class="section section-alt">
      <div class="inner">
        <div class="section-label">Our Food</div>
        <h2 class="section-heading">What's on the Menu</h2>
        <p class="section-sub">Authentic Nepali and fusion dishes prepared fresh for every event. All items can be customised per package.</p>

        <div class="food-grid">
          <div class="food-cat">
            <div class="food-cat-head">
              <span class="food-emoji">🍚</span>
              <h3>Rice & Breads</h3>
            </div>
            <ul>
              <li>Steamed Rice</li>
              <li>Jeera Rice</li>
              <li>Fried Rice</li>
              <li>Roti / Chapati</li>
              <li>Bhatura</li>
              <li>Puri</li>
            </ul>
          </div>

          <div class="food-cat">
            <div class="food-cat-head">
              <span class="food-emoji">🍲</span>
              <h3>Dal & Curries</h3>
            </div>
            <ul>
              <li>Dal Bhat</li>
              <li>Dal Tadka</li>
              <li>Dal Makhani</li>
              <li>Aloo Gobi</li>
              <li>Mixed Veg Curry</li>
              <li>Mushroom Tarkari</li>
            </ul>
          </div>

          <div class="food-cat">
            <div class="food-cat-head">
              <span class="food-emoji">🍗</span>
              <h3>Protein Dishes</h3>
            </div>
            <ul>
              <li>Chicken Curry</li>
              <li>Mutton Curry</li>
              <li>Fish Curry</li>
              <li>Egg Curry</li>
              <li>Paneer Butter Masala</li>
              <li>Soya Tarkari</li>
            </ul>
          </div>

          <div class="food-cat">
            <div class="food-cat-head">
              <span class="food-emoji">🥟</span>
              <h3>Snacks & Starters</h3>
            </div>
            <ul>
              <li>Steam Momo</li>
              <li>Fried Momo</li>
              <li>Samosa</li>
              <li>Pakoda</li>
              <li>Chowmein</li>
              <li>Sadeko (spiced salad)</li>
            </ul>
          </div>

          <div class="food-cat">
            <div class="food-cat-head">
              <span class="food-emoji">🍮</span>
              <h3>Desserts</h3>
            </div>
            <ul>
              <li>Kheer</li>
              <li>Gulab Jamun</li>
              <li>Rasgulla</li>
              <li>Jalebi</li>
              <li>Fruit Salad</li>
              <li>Halwa</li>
            </ul>
          </div>

          <div class="food-cat">
            <div class="food-cat-head">
              <span class="food-emoji">🥤</span>
              <h3>Drinks</h3>
            </div>
            <ul>
              <li>Soft Drinks</li>
              <li>Fresh Juice</li>
              <li>Lassi</li>
              <li>Masala Tea</li>
              <li>Mineral Water</li>
              <li>Mango Shakes</li>
            </ul>
          </div>
        </div>

        <div class="food-cta">
          <NuxtLink to="/menu" class="food-cta-link">See full packages & pricing →</NuxtLink>
        </div>
      </div>
    </section>

    <!-- ── Pricing teaser ────────────────────────────── -->
    <section class="section">
      <div class="inner">
        <div class="section-label">Pricing</div>
        <h2 class="section-heading">Simple, transparent pricing</h2>
        <p class="section-sub">All packages include setup, service, and cleanup. No hidden charges — ever.</p>

        <div class="price-grid">
          <div class="price-card">
            <div class="price-tier">Basic</div>
            <div class="price-amount">NRS 499<span>/person</span></div>
            <p class="price-desc">Ideal for small gatherings and simple events up to 100 guests.</p>
            <ul class="price-items">
              <li>Steamed rice & 2 veg curries</li>
              <li>Dal, pickle & papadum</li>
              <li>Light dessert & soft drinks</li>
            </ul>
            <NuxtLink to="/menu" class="price-link">View full details →</NuxtLink>
          </div>

          <div class="price-card price-popular">
            <div class="popular-badge">Most Popular</div>
            <div class="price-tier popular-tier">Standard</div>
            <div class="price-amount">NRS 599<span>/person</span></div>
            <p class="price-desc">Our most-loved package for weddings and major events.</p>
            <ul class="price-items">
              <li>Rice + roti or bhatura</li>
              <li>2 veg + 1 protein dish</li>
              <li>Dal tadka, salad & dessert</li>
            </ul>
            <NuxtLink to="/menu" class="price-link price-link-pop">View full details →</NuxtLink>
          </div>

          <div class="price-card">
            <div class="price-tier">Premium</div>
            <div class="price-amount">NRS 799<span>/person</span></div>
            <p class="price-desc">The complete experience for prestigious and large-scale events.</p>
            <ul class="price-items">
              <li>Rice + bhatura & roti</li>
              <li>3 veg + 2 protein dishes</li>
              <li>Soup bar, salad & 2 desserts</li>
            </ul>
            <NuxtLink to="/menu" class="price-link">View full details →</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Cost calculator ──────────────────────────── -->
    <section class="section section-alt">
      <div class="inner">
        <div class="section-label">Calculator</div>
        <h2 class="section-heading">Estimate your catering cost</h2>
        <p class="section-sub">Adjust the options to get an instant estimate. Prices update in real time.</p>

        <div class="calc-wrap">

          <!-- Inputs -->
          <div class="calc-inputs">

            <!-- Type toggle -->
            <div class="calc-group">
              <div class="calc-label">Catering Type</div>
              <div class="calc-type-row">
                <button class="calc-type-btn" :class="{ active: calcType === 'full' }" @click="calcType = 'full'">
                  <strong>Full Catering</strong>
                  <span>We supply everything</span>
                </button>
                <button class="calc-type-btn" :class="{ active: calcType === 'half' }" @click="calcType = 'half'">
                  <strong>Half Catering</strong>
                  <span>You supply ingredients</span>
                </button>
              </div>
            </div>

            <!-- Guest count -->
            <div class="calc-group">
              <div class="calc-label">Number of Guests</div>
              <div class="calc-guest-row">
                <button class="calc-step" @click="calcGuests = Math.max(10, calcGuests - 10)">−</button>
                <input
                  type="number"
                  v-model.number="calcGuests"
                  min="10" max="1000"
                  class="calc-guest-input"
                  @change="clampGuests"
                />
                <button class="calc-step" @click="calcGuests = Math.min(1000, calcGuests + 10)">+</button>
              </div>
              <input type="range" v-model.number="calcGuests" min="10" max="1000" step="10" class="calc-slider" />
              <div class="calc-slider-labels"><span>10</span><span>500</span><span>1,000</span></div>
            </div>

            <!-- Package -->
            <div class="calc-group">
              <div class="calc-label">Package</div>
              <div class="calc-pkgs">
                <label class="calc-pkg-btn" :class="{ selected: calcPackage === 'basic' }">
                  <input type="radio" v-model="calcPackage" value="basic" />
                  <span class="cpkg-name">Basic</span>
                  <span class="cpkg-price">NRS {{ calcPrices.basic }}</span>
                </label>
                <label class="calc-pkg-btn" :class="{ selected: calcPackage === 'standard' }">
                  <input type="radio" v-model="calcPackage" value="standard" />
                  <span class="cpkg-name">Standard <em>Popular</em></span>
                  <span class="cpkg-price">NRS {{ calcPrices.standard }}</span>
                </label>
                <label class="calc-pkg-btn" :class="{ selected: calcPackage === 'premium' }">
                  <input type="radio" v-model="calcPackage" value="premium" />
                  <span class="cpkg-name">Premium</span>
                  <span class="cpkg-price">NRS {{ calcPrices.premium }}</span>
                </label>
              </div>
            </div>

            <!-- Add-ons -->
            <div class="calc-group">
              <div class="calc-label">Add-ons <span class="calc-label-opt">optional</span></div>
              <div class="calc-addons">
                <label class="calc-addon" :class="{ selected: calcAddons.extra_main }">
                  <input type="checkbox" v-model="calcAddons.extra_main" />
                  <span>Extra Main Dish</span>
                  <span class="addon-tag">+NRS {{ calcAddonPrices.extra_main }}/person</span>
                </label>
                <label class="calc-addon" :class="{ selected: calcAddons.dessert_bar }">
                  <input type="checkbox" v-model="calcAddons.dessert_bar" />
                  <span>Dessert Bar</span>
                  <span class="addon-tag">+NRS {{ calcAddonPrices.dessert_bar }}/person</span>
                </label>
                <label class="calc-addon" :class="{ selected: calcAddons.live_cooking }">
                  <input type="checkbox" v-model="calcAddons.live_cooking" />
                  <span>Live Cooking Station</span>
                  <span class="addon-tag">+NRS {{ calcAddonPrices.live_cooking }}/person</span>
                </label>
                <label class="calc-addon" :class="{ selected: calcAddons.beverages }">
                  <input type="checkbox" v-model="calcAddons.beverages" />
                  <span>Premium Beverages</span>
                  <span class="addon-tag">+NRS {{ calcAddonPrices.beverages }}/person</span>
                </label>
              </div>
            </div>

          </div>

          <!-- Result -->
          <div class="calc-result">
            <div class="result-card">
              <div class="result-eyebrow">Estimated Total</div>
              <div class="result-amount">NRS {{ calcTotalFormatted }}</div>
              <div class="result-breakdown">
                {{ calcGuests }} guests × NRS {{ calcPricePerPerson }}/person
              </div>
              <div v-if="calcAddonTotal > 0" class="result-addons-note">
                Includes NRS {{ calcAddonTotal }}/person in add-ons
              </div>
              <div class="result-divider" />
              <ul class="result-summary">
                <li>
                  <span>Package</span>
                  <strong>{{ calcPackage.charAt(0).toUpperCase() + calcPackage.slice(1) }} ({{ calcType === 'half' ? 'Half' : 'Full' }})</strong>
                </li>
                <li>
                  <span>Price/person</span>
                  <strong>NRS {{ calcPrices[calcPackage] }}</strong>
                </li>
                <li v-if="calcAddonTotal > 0">
                  <span>Add-ons/person</span>
                  <strong>+NRS {{ calcAddonTotal }}</strong>
                </li>
                <li>
                  <span>Guests</span>
                  <strong>{{ calcGuests }}</strong>
                </li>
              </ul>
              <div class="result-divider" />
              <p class="result-note">Actual price may vary by location and requirements.</p>
              <a
                :href="`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(calcWaMsg)}`"
                target="_blank" rel="noopener noreferrer"
                class="result-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.43 12.38c-.23.64-.67 1.17-1.23 1.51-.38.23-.8.35-1.23.35-.24 0-.49-.03-.73-.1-.94-.26-1.84-.73-2.62-1.38-.72-.6-1.33-1.32-1.79-2.12-.28-.49-.44-1.01-.46-1.54-.02-.55.14-1.1.48-1.54.24-.31.55-.48.89-.48h.25c.2 0 .4.01.57.4.21.48.67 1.6.73 1.72.06.12.1.26.03.41-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.22.23-.1.45.13.22.57.94 1.22 1.52.84.75 1.55.98 1.77 1.09.22.11.35.09.48-.05.13-.14.55-.64.7-.86.15-.22.29-.18.49-.11.2.07 1.27.6 1.49.71.22.11.37.16.42.25.06.09.06.52-.17 1.02z"/>
                </svg>
                Get Exact Quote on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ── Why us ──────────────────────────────────── -->
    <section class="section section-alt">
      <div class="inner">
        <div class="section-label">Why Choose Us</div>
        <h2 class="section-heading">Food that speaks for itself</h2>
        <p class="section-sub">Kathmandu's most trusted catering team — here's what sets us apart.</p>

        <div class="feature-grid">
          <div class="feature-card">
            <div class="feat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <h4>Authentic Nepali Cuisine</h4>
            <p>From dal bhat thali to momo and traditional sadhya — our chefs are masters of authentic Nepali flavours your guests will love.</p>
          </div>

          <div class="feature-card">
            <div class="feat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h4>Professional Staff</h4>
            <p>Trained, uniformed servers and coordinators who handle setup, service, and cleanup — you focus on celebrating, we handle the rest.</p>
          </div>

          <div class="feature-card">
            <div class="feat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h4>Transparent Pricing</h4>
            <p>Clear per-person pricing in NRS. No hidden charges, no last-minute surprises. Choose full or half catering based on your budget.</p>
          </div>

          <div class="feature-card">
            <div class="feat-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <h4>Easy WhatsApp Booking</h4>
            <p>No forms, no hassle. Message us on WhatsApp and get a personalised quote within hours. We confirm your booking quickly.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── How it works ───────────────────────────── -->
    <section class="section">
      <div class="inner">
        <div class="section-label">Process</div>
        <h2 class="section-heading">Booked in three simple steps</h2>
        <p class="section-sub">From first contact to a perfectly catered event — smooth every step of the way.</p>

        <div class="steps">
          <div class="step">
            <div class="step-num">1</div>
            <div>
              <h4>Message us on WhatsApp</h4>
              <p>Tell us your event type, date, location, and approximate guest count. We'll ask a few questions to understand your needs.</p>
            </div>
          </div>
          <div class="step-line" />
          <div class="step">
            <div class="step-num">2</div>
            <div>
              <h4>Receive your personalised quote</h4>
              <p>We send a detailed, itemised quote in NRS — menu, staffing, setup, and any add-ons. No surprises, no hidden fees.</p>
            </div>
          </div>
          <div class="step-line" />
          <div class="step">
            <div class="step-num">3</div>
            <div>
              <h4>Confirm and relax</h4>
              <p>Approve the quote, pay a small advance, and we handle everything. Our team arrives prepared and on time, every time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Testimonials ───────────────────────────── -->
    <section class="section section-alt">
      <div class="inner">
        <div class="section-label">Reviews</div>
        <h2 class="section-heading">What our clients say</h2>
        <p class="section-sub">Trusted by hundreds of families and businesses across Kathmandu.</p>

        <div class="review-grid">
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"The food at our son's bratabandha was absolutely incredible. Every guest was raving about the dal makhani and momo. The staff were professional and the setup was spotless. Will definitely book again!"</p>
            <div class="reviewer">
              <div class="reviewer-avatar">SK</div>
              <div>
                <strong>Sunita K.</strong>
                <span>Lalitpur, Kathmandu</span>
              </div>
            </div>
          </div>

          <div class="review-card review-highlight">
            <div class="stars">★★★★★</div>
            <p>"We used Daiko Catering for our company's annual day event — 200+ employees. The team was incredibly organised, the buffet was diverse and delicious, and they cleaned everything up perfectly. Highly recommend for corporate events."</p>
            <div class="reviewer">
              <div class="reviewer-avatar">RP</div>
              <div>
                <strong>Ramesh P.</strong>
                <span>Operations Manager, Kathmandu</span>
              </div>
            </div>
          </div>

          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"Our wedding reception had over 300 guests. The premium package exceeded every expectation — 3 veg curries, 2 protein dishes, live roti station, and an amazing dessert bar. Every detail was perfect. Thank you!"</p>
            <div class="reviewer">
              <div class="reviewer-avatar">AM</div>
              <div>
                <strong>Anita M.</strong>
                <span>Wedding, Kathmandu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA ────────────────────────────────────── -->
    <section class="cta-strip">
      <div class="cta-content">
        <h2>Ready to plan your event?</h2>
        <p>Chat with us on WhatsApp and get a personalised catering quote for your Kathmandu event.</p>
        <a :href="waQuote" target="_blank" rel="noopener noreferrer" class="cta-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.43 12.38c-.23.64-.67 1.17-1.23 1.51-.38.23-.8.35-1.23.35-.24 0-.49-.03-.73-.1-.94-.26-1.84-.73-2.62-1.38-.72-.6-1.33-1.32-1.79-2.12-.28-.49-.44-1.01-.46-1.54-.02-.55.14-1.1.48-1.54.24-.31.55-.48.89-.48h.25c.2 0 .4.01.57.4.21.48.67 1.6.73 1.72.06.12.1.26.03.41-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.22.23-.1.45.13.22.57.94 1.22 1.52.84.75 1.55.98 1.77 1.09.22.11.35.09.48-.05.13-.14.55-.64.7-.86.15-.22.29-.18.49-.11.2.07 1.27.6 1.49.71.22.11.37.16.42.25.06.09.06.52-.17 1.02z"/>
          </svg>
          Get a Free Quote on WhatsApp
        </a>
        <NuxtLink to="/menu" class="cta-link">Or view our menu packages →</NuxtLink>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* ── Shared ────────────────────────────────────────── */
.inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-label {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #f97316;
  margin-bottom: 0.75rem;
}

.section-heading {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  color: #0f172a;
  margin-bottom: 0.6rem;
  line-height: 1.15;
}

.section-sub {
  font-size: 0.975rem;
  color: #64748b;
  line-height: 1.65;
  margin-bottom: 2.75rem;
  max-width: 520px;
}

.section { padding: 5rem 0; background: #fff; }
.section-alt { background: #f8fafc; }

/* ── Hero ──────────────────────────────────────────── */
.hero {
  background: linear-gradient(150deg, #fff7ed 0%, #ffffff 55%, #fef3c7 100%);
  padding: 5.5rem 2rem 4.5rem;
  overflow: hidden;
}

.hero-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
}

.hero-text { max-width: 560px; flex-shrink: 0; }

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #fff;
  border: 1.5px solid #fed7aa;
  color: #c2410c;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding: 0.35rem 0.9rem;
  border-radius: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(249,115,22,0.12);
}

.badge-dot {
  width: 7px;
  height: 7px;
  background: #22c55e;
  border-radius: 50%;
  box-shadow: 0 0 0 2px rgba(34,197,94,0.25);
}

.hero-h1 {
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  color: #0f172a;
  line-height: 1.1;
  margin-bottom: 1.25rem;
}

.accent {
  background: linear-gradient(135deg, #f97316, #ea580c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-sub {
  font-size: 1.1rem;
  color: #64748b;
  line-height: 1.75;
  margin-bottom: 2rem;
  max-width: 490px;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 2.25rem;
}

.stat strong { display: block; font-size: 1.2rem; font-weight: 800; color: #0f172a; }
.stat span { font-size: 0.78rem; color: #94a3b8; font-weight: 500; }
.stat-sep { width: 1px; height: 30px; background: #e2e8f0; }

.hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  background: #f97316;
  color: #fff;
  border: none;
  border-radius: 2rem;
  font-weight: 700;
  font-size: 0.95rem;
  box-shadow: 0 4px 16px rgba(249,115,22,0.35);
  transition: background 0.15s, transform 0.15s, box-shadow 0.15s;
}

.btn-primary:hover {
  background: #ea6c0a;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(249,115,22,0.45);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  padding: 0.85rem 1.75rem;
  border: 1.5px solid #e2e8f0;
  color: #334155;
  border-radius: 2rem;
  font-weight: 600;
  font-size: 0.95rem;
  background: #fff;
  transition: border-color 0.15s, color 0.15s, transform 0.15s;
}

.btn-secondary:hover {
  border-color: #f97316;
  color: #f97316;
  transform: translateY(-1px);
}

/* ── Hero image ────────────────────────────────────── */
.hero-img-wrap {
  position: relative;
  flex-shrink: 0;
  width: 360px;
  height: 380px;
}

.hero-img-glow {
  position: absolute;
  inset: -30px;
  background: radial-gradient(circle at center, rgba(249,115,22,0.18) 0%, transparent 65%);
  border-radius: 50%;
  pointer-events: none;
}

.hero-img-frame {
  position: absolute;
  top: 24px;
  left: 16px;
  right: 16px;
  bottom: 24px;
  border-radius: 2rem;
  overflow: hidden;
  border: 4px solid #fff;
  box-shadow: 0 24px 64px rgba(249,115,22,0.2), 0 4px 20px rgba(0,0,0,0.1);
  transform: rotate(2deg);
}

.hero-food-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: rotate(-2deg) scale(1.07);
  transition: transform 0.5s ease;
}

.hero-img-frame:hover .hero-food-img {
  transform: rotate(-2deg) scale(1.13);
}

.hero-float-badge {
  position: absolute;
  background: #fff;
  border: 1.5px solid #fed7aa;
  border-radius: 1rem;
  padding: 0.65rem 1rem;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  z-index: 2;
  text-align: center;
  min-width: 110px;
}

.hero-float-badge strong {
  display: block;
  font-size: 1.1rem;
  font-weight: 900;
  color: #f97316;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.hero-float-badge span {
  font-size: 0.68rem;
  color: #94a3b8;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.badge-top { top: 4px; right: -4px; }
.badge-bottom { bottom: 16px; left: -4px; }

/* ── Stats bar ─────────────────────────────────────── */
.stats-bar { background: #0f172a; }

.stats-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-item { flex: 1; padding: 1.75rem 2rem; text-align: center; }
.stat-item strong { display: block; font-size: 1.75rem; font-weight: 900; color: #fff; letter-spacing: -0.03em; line-height: 1; margin-bottom: 0.25rem; }
.stat-item span { font-size: 0.78rem; color: #64748b; font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; }
.stat-rule { width: 1px; height: 40px; background: rgba(255,255,255,0.08); flex-shrink: 0; }

/* ── Event cards ───────────────────────────────────── */
.event-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.event-card {
  background: #f8fafc;
  border-radius: 1.25rem;
  padding: 2rem;
  border: 1.5px solid #e2e8f0;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  display: block;
}

.event-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.1);
  border-color: #f97316;
}

.event-wedding { border-top: 3px solid #f97316; }
.event-corporate { border-top: 3px solid #0891b2; }
.event-birthday { border-top: 3px solid #7c3aed; }
.event-social { border-top: 3px solid #059669; }
.event-picnic { border-top: 3px solid #d97706; }

.event-icon { font-size: 2rem; margin-bottom: 1rem; }

.event-card h3 {
  font-size: 1.15rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 0.6rem;
  letter-spacing: -0.02em;
}

.event-card p {
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.65;
  margin-bottom: 1.25rem;
}

.event-cta {
  font-size: 0.875rem;
  font-weight: 700;
  color: #f97316;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

/* ── Feature cards ─────────────────────────────────── */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.feature-card {
  background: #fff;
  border-radius: 1.25rem;
  padding: 1.75rem;
  border: 1.5px solid #e2e8f0;
  transition: transform 0.2s, box-shadow 0.2s;
}

.feature-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 28px rgba(0,0,0,0.08);
}

.feat-icon {
  width: 44px;
  height: 44px;
  background: #fff7ed;
  border-radius: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.feature-card h4 { font-size: 0.975rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem; }
.feature-card p { font-size: 0.875rem; color: #64748b; line-height: 1.65; }

/* ── Steps ─────────────────────────────────────────── */
.steps {
  display: flex;
  align-items: flex-start;
  gap: 0;
}

.step {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  background: #f8fafc;
  border-radius: 1.25rem;
  border: 1.5px solid #e2e8f0;
}

.step-num {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #f97316, #ea580c);
  color: #fff;
  font-size: 1.1rem;
  font-weight: 900;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(249,115,22,0.35);
  flex-shrink: 0;
}

.step h4 { font-size: 1rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem; }
.step p { font-size: 0.875rem; color: #64748b; line-height: 1.65; }

.step-line {
  flex-shrink: 0;
  width: 2rem;
  height: 2px;
  background: repeating-linear-gradient(90deg, #e2e8f0 0, #e2e8f0 6px, transparent 6px, transparent 12px);
  margin-top: 3.5rem;
}

/* ── Reviews ───────────────────────────────────────── */
.review-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.review-card {
  background: #fff;
  border-radius: 1.25rem;
  padding: 2rem;
  border: 1.5px solid #e2e8f0;
}

.review-highlight {
  border-color: #f97316;
  box-shadow: 0 4px 24px rgba(249,115,22,0.12);
}

.stars { color: #f97316; font-size: 1rem; margin-bottom: 1rem; letter-spacing: 0.1em; }

.review-card p { font-size: 0.9rem; color: #334155; line-height: 1.7; margin-bottom: 1.5rem; font-style: italic; }

.reviewer { display: flex; align-items: center; gap: 0.75rem; }

.reviewer-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f97316, #ea580c);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.reviewer strong { display: block; font-size: 0.875rem; font-weight: 700; color: #0f172a; }
.reviewer span { font-size: 0.78rem; color: #94a3b8; }

/* ── CTA strip ─────────────────────────────────────── */
.cta-strip {
  background: linear-gradient(135deg, #c2410c 0%, #f97316 50%, #fb923c 100%);
  padding: 5rem 2rem;
  text-align: center;
}

.cta-content { max-width: 600px; margin: 0 auto; }

.cta-strip h2 {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  color: #fff;
  margin-bottom: 0.75rem;
}

.cta-strip p {
  color: rgba(255,255,255,0.85);
  font-size: 1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2.25rem;
  background: #fff;
  color: #ea580c;
  border-radius: 2rem;
  font-weight: 800;
  font-size: 1rem;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
  transition: background 0.15s, transform 0.15s, box-shadow 0.15s;
}

.cta-btn:hover {
  background: #fff7ed;
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(0,0,0,0.25);
}

.cta-link {
  display: block;
  margin-top: 1.25rem;
  color: rgba(255,255,255,0.75);
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.15s;
}

.cta-link:hover { color: #fff; }

/* ── Food menu ─────────────────────────────────────── */
.food-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.food-cat {
  background: #fff;
  border: 1.5px solid #e2e8f0;
  border-top: 3px solid #f97316;
  border-radius: 1.25rem;
  padding: 1.5rem;
}

.food-cat-head {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.food-emoji { font-size: 1.5rem; }

.food-cat h3 {
  font-size: 1rem;
  font-weight: 800;
  color: #0f172a;
}

.food-cat ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.food-cat ul li {
  font-size: 0.875rem;
  color: #475569;
  padding-left: 1rem;
  position: relative;
}

.food-cat ul li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 5px;
  background: #f97316;
  border-radius: 50%;
}

.food-cta {
  text-align: center;
  margin-top: 2.5rem;
}

.food-cta-link {
  display: inline-block;
  font-size: 0.95rem;
  font-weight: 700;
  color: #ea580c;
  border: 2px solid #f97316;
  border-radius: 2rem;
  padding: 0.65rem 1.75rem;
  transition: background 0.15s, color 0.15s;
}

.food-cta-link:hover {
  background: #f97316;
  color: #fff;
}

/* ── Pricing teaser ────────────────────────────────── */
.price-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  align-items: start;
}

.price-card {
  background: #f8fafc;
  border: 1.5px solid #e2e8f0;
  border-radius: 1.5rem;
  padding: 2rem;
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;
}

.price-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 36px rgba(0,0,0,0.09);
}

.price-popular {
  background: #fff;
  border-color: #f97316;
  box-shadow: 0 8px 32px rgba(249,115,22,0.14);
  transform: scale(1.03);
}

.price-popular:hover {
  transform: scale(1.03) translateY(-4px);
  box-shadow: 0 16px 48px rgba(249,115,22,0.2);
}

.popular-badge {
  position: absolute;
  top: -13px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #f97316, #ea580c);
  color: #fff;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  padding: 0.3rem 1rem;
  border-radius: 2rem;
  white-space: nowrap;
}

.price-tier {
  font-size: 0.75rem;
  font-weight: 800;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.6rem;
}

.popular-tier { color: #f97316; }

.price-amount {
  font-size: 2rem;
  font-weight: 900;
  color: #0f172a;
  letter-spacing: -0.03em;
  line-height: 1;
  margin-bottom: 0.75rem;
}

.price-amount span {
  font-size: 0.9rem;
  font-weight: 500;
  color: #94a3b8;
  letter-spacing: 0;
}

.price-desc {
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.55;
  margin-bottom: 1.25rem;
}

.price-items {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.price-items li {
  font-size: 0.875rem;
  color: #475569;
  padding-left: 1.1rem;
  position: relative;
}

.price-items li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 5px;
  background: #f97316;
  border-radius: 50%;
}

.price-link {
  font-size: 0.875rem;
  font-weight: 700;
  color: #64748b;
  transition: color 0.15s;
}

.price-link:hover { color: #f97316; }
.price-link-pop { color: #ea580c; }
.price-link-pop:hover { color: #c2410c; }

/* ── Cost calculator ───────────────────────────────── */
.calc-wrap {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 2rem;
  align-items: start;
}

.calc-inputs { display: flex; flex-direction: column; gap: 1.75rem; }

.calc-group { display: flex; flex-direction: column; gap: 0.6rem; }

.calc-label {
  font-size: 0.8rem;
  font-weight: 800;
  color: #0f172a;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.calc-label-opt {
  font-size: 0.7rem;
  font-weight: 600;
  color: #94a3b8;
  text-transform: none;
  letter-spacing: 0;
  background: #f1f5f9;
  padding: 0.1rem 0.5rem;
  border-radius: 1rem;
}

.calc-type-row { display: flex; gap: 0.75rem; }

.calc-type-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  padding: 0.85rem 1.1rem;
  background: #fff;
  border: 1.5px solid #e2e8f0;
  border-radius: 0.875rem;
  cursor: pointer;
  transition: border-color 0.15s, box-shadow 0.15s;
  text-align: left;
}

.calc-type-btn strong { font-size: 0.875rem; font-weight: 700; color: #0f172a; }
.calc-type-btn span { font-size: 0.75rem; color: #94a3b8; }

.calc-type-btn.active {
  border-color: #f97316;
  background: #fff7ed;
  box-shadow: 0 0 0 3px rgba(249,115,22,0.12);
}

.calc-type-btn.active strong { color: #ea580c; }

.calc-guest-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.calc-step {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1.5px solid #e2e8f0;
  background: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  color: #475569;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.15s, background 0.15s;
  flex-shrink: 0;
}

.calc-step:hover { border-color: #f97316; color: #f97316; background: #fff7ed; }

.calc-guest-input {
  width: 100px;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 800;
  color: #0f172a;
  border: 1.5px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 0.5rem;
  outline: none;
  transition: border-color 0.15s;
}

.calc-guest-input:focus { border-color: #f97316; }
.calc-guest-input::-webkit-inner-spin-button,
.calc-guest-input::-webkit-outer-spin-button { opacity: 1; }

.calc-slider {
  width: 100%;
  accent-color: #f97316;
  cursor: pointer;
  height: 4px;
  margin-top: 0.25rem;
}

.calc-slider-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.72rem;
  color: #94a3b8;
  font-weight: 500;
  margin-top: 0.2rem;
}

.calc-pkgs { display: flex; flex-direction: column; gap: 0.5rem; }

.calc-pkg-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1.1rem;
  background: #fff;
  border: 1.5px solid #e2e8f0;
  border-radius: 0.875rem;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
}

.calc-pkg-btn input[type="radio"] { accent-color: #f97316; }

.calc-pkg-btn.selected {
  border-color: #f97316;
  background: #fff7ed;
}

.cpkg-name {
  flex: 1;
  font-size: 0.875rem;
  font-weight: 700;
  color: #0f172a;
}

.cpkg-name em {
  font-style: normal;
  font-size: 0.65rem;
  font-weight: 700;
  background: #f97316;
  color: #fff;
  padding: 0.1rem 0.45rem;
  border-radius: 1rem;
  margin-left: 0.4rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  vertical-align: middle;
}

.cpkg-price {
  font-size: 0.875rem;
  font-weight: 800;
  color: #f97316;
}

.calc-addons { display: flex; flex-direction: column; gap: 0.5rem; }

.calc-addon {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: #fff;
  border: 1.5px solid #e2e8f0;
  border-radius: 0.875rem;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
  font-size: 0.875rem;
  color: #334155;
}

.calc-addon input[type="checkbox"] { accent-color: #f97316; width: 15px; height: 15px; flex-shrink: 0; }
.calc-addon span:nth-child(2) { flex: 1; font-weight: 600; }
.calc-addon.selected { border-color: #f97316; background: #fff7ed; }

.addon-tag {
  font-size: 0.775rem;
  font-weight: 700;
  color: #f97316;
  white-space: nowrap;
}

/* Result card */
.calc-result { position: sticky; top: 5rem; }

.result-card {
  background: #fff;
  border: 1.5px solid #e2e8f0;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.07);
}

.result-eyebrow {
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #f97316;
  margin-bottom: 0.5rem;
}

.result-amount {
  font-size: 2.25rem;
  font-weight: 900;
  color: #0f172a;
  letter-spacing: -0.03em;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.result-breakdown {
  font-size: 0.825rem;
  color: #64748b;
  margin-bottom: 0.3rem;
}

.result-addons-note {
  font-size: 0.775rem;
  color: #94a3b8;
  margin-bottom: 0.3rem;
}

.result-divider {
  height: 1px;
  background: #f1f5f9;
  margin: 1.1rem 0;
}

.result-summary {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.result-summary li {
  display: flex;
  justify-content: space-between;
  font-size: 0.825rem;
}

.result-summary li span { color: #94a3b8; }
.result-summary li strong { color: #0f172a; font-weight: 700; }

.result-note {
  font-size: 0.75rem;
  color: #94a3b8;
  line-height: 1.5;
  margin-bottom: 1.25rem;
}

.result-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  width: 100%;
  padding: 0.9rem 1.5rem;
  background: linear-gradient(135deg, #25d366, #128c7e);
  color: #fff;
  border-radius: 0.875rem;
  font-weight: 700;
  font-size: 0.9rem;
  transition: opacity 0.15s, transform 0.15s;
}

.result-btn:hover { opacity: 0.92; transform: translateY(-1px); }

/* ── Responsive ────────────────────────────────────── */
@media (max-width: 900px) {
  .hero { padding: 3.5rem 1.5rem; }
  .hero-inner { flex-direction: column; text-align: center; }
  .hero-text { max-width: 100%; }
  .hero-stats { justify-content: center; }
  .hero-sub { max-width: 100%; }
  .hero-btns { justify-content: center; }
  .hero-img-wrap { display: none; }
  .stats-inner { flex-wrap: wrap; }
  .stat-item { flex: 1 1 45%; padding: 1.25rem; }
  .stat-rule { display: none; }
  .event-grid { grid-template-columns: 1fr 1fr; }
  .feature-grid { grid-template-columns: 1fr 1fr; }
  .steps { flex-direction: column; gap: 1rem; }
  .step-line { width: 2px; height: 1.5rem; background: repeating-linear-gradient(180deg, #e2e8f0 0, #e2e8f0 6px, transparent 6px, transparent 12px); margin: 0 0 0 1.5rem; }
  .review-grid { grid-template-columns: 1fr; }
  .food-grid { grid-template-columns: 1fr 1fr; }
  .price-grid { grid-template-columns: 1fr; }
  .price-popular { transform: none; }
  .price-popular:hover { transform: translateY(-4px); }
  .calc-wrap { grid-template-columns: 1fr; }
  .calc-result { position: static; }
}

@media (max-width: 480px) {
  .feature-grid { grid-template-columns: 1fr; }
  .event-grid { grid-template-columns: 1fr; }
  .stat-item { flex: 1 1 100%; }
  .step-line { display: none; }
  .food-grid { grid-template-columns: 1fr; }
  .price-grid { grid-template-columns: 1fr; }
}
</style>
