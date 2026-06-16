<script setup lang="ts">
// TODO: Replace WHATSAPP_NUMBER and business name when confirmed
const WHATSAPP_NUMBER = '977980000000'
const waQuote = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I would like to get a catering quote for my event.')}`
const waWedding = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I am interested in your wedding catering service.')}`
const waCorporate = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I am interested in your corporate event catering service.')}`

useHead({
  title: 'Daiko Catering — Best Catering Service in Kathmandu, Nepal',
  meta: [
    { name: 'description', content: 'Professional catering service in Kathmandu, Nepal. Authentic Nepali cuisine for weddings, corporate events, birthday parties and social gatherings. From NRS 399/person. Book via WhatsApp.' },
    { name: 'keywords', content: 'catering service Kathmandu, wedding catering Nepal, event catering Kathmandu, food catering Nepal, Nepali catering, catering company Kathmandu, खानपान सेवा काठमाडौं' },
    { property: 'og:title', content: 'Daiko Catering — Best Catering Service in Kathmandu, Nepal' },
    { property: 'og:description', content: 'Authentic Nepali cuisine for weddings, corporate events and celebrations. From NRS 399/person. Serving Kathmandu Valley.' },
    { property: 'og:type', content: 'website' },
    { name: 'geo.region', content: 'NP-BA' },
    { name: 'geo.placename', content: 'Kathmandu' },
  ],
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
        telephone: '+977-98XXXXXXXX',
        servesCuisine: ['Nepali', 'Indian', 'Continental'],
        priceRange: 'NRS 399 - NRS 699 per person',
        areaServed: { '@type': 'City', name: 'Kathmandu' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Catering Packages',
          itemListElement: [
            { '@type': 'Offer', name: 'Basic Package', price: '399', priceCurrency: 'NPR', description: 'Perfect for small gatherings' },
            { '@type': 'Offer', name: 'Standard Package', price: '499', priceCurrency: 'NPR', description: 'Our most popular wedding & event package' },
            { '@type': 'Offer', name: 'Premium Package', price: '699', priceCurrency: 'NPR', description: 'The complete experience for prestigious events' },
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

        <div class="hero-art" aria-hidden="true">
          <div class="art-circle" />
          <div class="dishes">
            <div class="dish dish-1">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 11l19-9-9 19-2-8-8-2z"/>
              </svg>
              <span>Dal Bhat</span>
            </div>
            <div class="dish dish-2">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
              </svg>
              <span>Momo</span>
            </div>
            <div class="dish dish-3">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M12 8v4l3 3"/>
              </svg>
              <span>Sweets</span>
            </div>
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

/* ── Hero art ──────────────────────────────────────── */
.hero-art {
  position: relative;
  width: 280px;
  height: 280px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.art-circle {
  position: absolute;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(249,115,22,0.12) 0%, rgba(249,115,22,0) 70%);
  border: 1.5px dashed rgba(249,115,22,0.2);
}

.dishes {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.dish {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: #fff;
  border: 1.5px solid #fed7aa;
  border-radius: 1rem;
  padding: 0.75rem 1.25rem;
  box-shadow: 0 4px 16px rgba(249,115,22,0.1);
}

.dish span { font-weight: 700; color: #0f172a; font-size: 0.9rem; }
.dish-1 { transform: translateX(-20px); }
.dish-2 { transform: translateX(20px); }
.dish-3 { transform: translateX(-10px); }

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
  grid-template-columns: repeat(2, 1fr);
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

/* ── Responsive ────────────────────────────────────── */
@media (max-width: 900px) {
  .hero { padding: 3.5rem 1.5rem; }
  .hero-inner { flex-direction: column; text-align: center; }
  .hero-text { max-width: 100%; }
  .hero-stats { justify-content: center; }
  .hero-sub { max-width: 100%; }
  .hero-btns { justify-content: center; }
  .hero-art { display: none; }
  .stats-inner { flex-wrap: wrap; }
  .stat-item { flex: 1 1 45%; padding: 1.25rem; }
  .stat-rule { display: none; }
  .event-grid { grid-template-columns: 1fr; }
  .feature-grid { grid-template-columns: 1fr 1fr; }
  .steps { flex-direction: column; gap: 1rem; }
  .step-line { width: 2px; height: 1.5rem; background: repeating-linear-gradient(180deg, #e2e8f0 0, #e2e8f0 6px, transparent 6px, transparent 12px); margin: 0 0 0 1.5rem; }
  .review-grid { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .feature-grid { grid-template-columns: 1fr; }
  .event-grid { grid-template-columns: 1fr; }
  .stat-item { flex: 1 1 100%; }
  .step-line { display: none; }
}
</style>
