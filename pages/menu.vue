<script setup lang="ts">
const WHATSAPP_NUMBER = '977980000000'

type CateringType = 'full' | 'half'
const cateringType = ref<CateringType>('full')
const isHalf = computed(() => cateringType.value === 'half')

const prices = computed(() => ({
  basic:    isHalf.value ? 299 : 499,
  standard: isHalf.value ? 349 : 599,
  premium:  isHalf.value ? 449 : 799,
}))

const addonPrices = computed(() => ({
  extra_main:  isHalf.value ? 25  : 50,
  dessert_bar: isHalf.value ? 50  : 100,
  live_cooking: isHalf.value ? 60 : 120,
  beverages:   isHalf.value ? 75  : 150,
}))

function waBook(pkg: string, price: number) {
  const type = isHalf.value ? 'half catering' : 'full catering'
  const msg = `Hello! I would like to book the ${pkg} catering package (NRS ${price}/person, ${type}).`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
}

const waGeneral = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I would like to discuss a custom catering package.')}`

useHead({
  title: 'Catering Menu & Packages — Daiko Catering Kathmandu',
  meta: [
    { name: 'description', content: 'View our catering packages for events in Kathmandu. Basic from NRS 499/person, Standard NRS 599, Premium NRS 799. Full catering and half catering options. Weddings, corporate events, parties.' },
    { name: 'keywords', content: 'catering packages Kathmandu, wedding catering menu Nepal, catering price Nepal, catering cost Kathmandu, dal bhat catering, buffet catering Nepal' },
    { property: 'og:title', content: 'Menu & Catering Packages — Daiko Catering Kathmandu' },
    { property: 'og:description', content: 'Full & half catering packages from NRS 499/person. Authentic Nepali cuisine for any event in Kathmandu.' },
    { property: 'og:url', content: 'https://daikocatering.com.np/menu' },
  ],
  link: [{ rel: 'canonical', href: 'https://daikocatering.com.np/menu' }],
})
</script>

<template>
  <div class="page">

    <!-- ── Hero ─────────────────────────────────────── -->
    <section class="hero">
      <div class="hero-inner">
        <span class="badge">Menu & Packages</span>
        <h1>Honest Pricing.<br><span class="accent">Exceptional Food.</span></h1>
        <p>Clear per-person pricing in NRS — choose full or half catering based on your budget. No hidden fees.</p>
        <a :href="waGeneral" target="_blank" rel="noopener noreferrer" class="btn-hero">
          Ask for a Custom Quote
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </section>

    <!-- ── Catering type toggle ───────────────────── -->
    <section class="section section-alt">
      <div class="inner">
        <div class="section-label">Catering Type</div>
        <h2 class="section-heading">Full or Half Catering?</h2>
        <p class="section-sub">Choose the option that suits your budget — prices update automatically below.</p>

        <div class="type-toggle">
          <button class="toggle-btn" :class="{ 'toggle-active': !isHalf }" @click="cateringType = 'full'">
            <span class="toggle-icon">🍽️</span>
            <span class="toggle-title">Full Catering</span>
            <span class="toggle-desc">We supply everything — ingredients, cooking, staff & setup</span>
          </button>
          <button class="toggle-btn" :class="{ 'toggle-active': isHalf }" @click="cateringType = 'half'">
            <span class="toggle-icon">🧑‍🍳</span>
            <span class="toggle-title">Half Catering</span>
            <span class="toggle-desc">You supply raw materials — we bring the cooks, equipment & staff</span>
          </button>
        </div>

        <div v-if="isHalf" class="half-notice">
          <strong>Half catering:</strong> You purchase and deliver all groceries, spices, and ingredients to the venue. We handle cooking, service, and cleanup. Package & add-on prices are <strong>~50% off</strong>. Staff and travel fees remain unchanged.
        </div>
      </div>
    </section>

    <!-- ── Packages ───────────────────────────────── -->
    <section class="section">
      <div class="inner">
        <div class="section-label">Pricing</div>
        <h2 class="section-heading">Menu Packages</h2>
        <p class="section-sub">
          Priced per person —
          <span v-if="isHalf">half catering prices shown (you supply ingredients)</span>
          <span v-else>full catering prices shown (we supply everything)</span>
        </p>

        <div class="package-grid">

          <!-- Basic -->
          <div class="package-card">
            <div class="pkg-top">
              <div class="pkg-tier">Basic</div>
              <div class="pkg-price">
                <span class="pkg-amount">NRS {{ prices.basic }}</span>
                <span class="pkg-unit">/ person</span>
              </div>
              <p class="pkg-desc">Perfect for small gatherings and simple events.</p>
            </div>
            <ul class="pkg-features">
              <li>Steamed rice</li>
              <li>2 vegetable curries (aloo gobi, mixed veg)</li>
              <li>Dal (lentil curry)</li>
              <li>Pickle & papadum</li>
              <li>Light dessert: fruit salad or kheer</li>
              <li>Soft drinks</li>
            </ul>
            <a :href="waBook('Basic', prices.basic)" target="_blank" rel="noopener noreferrer" class="pkg-btn pkg-btn-outline">
              Book Basic Package
            </a>
          </div>

          <!-- Standard (Popular) -->
          <div class="package-card package-popular">
            <div class="popular-band">Most Popular</div>
            <div class="pkg-top">
              <div class="pkg-tier popular-tier">Standard</div>
              <div class="pkg-price">
                <span class="pkg-amount">NRS {{ prices.standard }}</span>
                <span class="pkg-unit">/ person</span>
              </div>
              <p class="pkg-desc">Our most-loved package for weddings and major events.</p>
            </div>
            <ul class="pkg-features">
              <li>Steamed rice + bhatura or roti</li>
              <li>2 vegetable curries</li>
              <li>1 protein dish (chicken, lamb, or paneer)</li>
              <li>Dal tadka</li>
              <li>Garden salad & raita</li>
              <li>Pickle & papadum</li>
              <li>Dessert: gulab jamun or rasgulla</li>
              <li>Soft drinks</li>
            </ul>
            <a :href="waBook('Standard', prices.standard)" target="_blank" rel="noopener noreferrer" class="pkg-btn pkg-btn-solid">
              Book Standard Package
            </a>
          </div>

          <!-- Premium -->
          <div class="package-card">
            <div class="pkg-top">
              <div class="pkg-tier">Premium</div>
              <div class="pkg-price">
                <span class="pkg-amount">NRS {{ prices.premium }}</span>
                <span class="pkg-unit">/ person</span>
              </div>
              <p class="pkg-desc">The complete experience for prestigious events.</p>
            </div>
            <ul class="pkg-features">
              <li>Steamed rice + bhatura & roti</li>
              <li>3 vegetable curries</li>
              <li>2 protein dishes (chicken, lamb, fish, or paneer)</li>
              <li>Dal makhani</li>
              <li>Soup & salad bar</li>
              <li>Raita & chutney selection</li>
              <li>2 desserts (kheer + gulab jamun)</li>
              <li>Soft drinks & fresh juice</li>
            </ul>
            <a :href="waBook('Premium', prices.premium)" target="_blank" rel="noopener noreferrer" class="pkg-btn pkg-btn-outline">
              Book Premium Package
            </a>
          </div>

        </div>
      </div>
    </section>

    <!-- ── Add-ons ────────────────────────────────── -->
    <section class="section section-alt">
      <div class="inner">
        <div class="section-label">Extras</div>
        <h2 class="section-heading">Add-ons</h2>
        <p class="section-sub">Enhance your package with these extras (priced per person)</p>

        <div class="addon-grid">
          <div class="addon-card">
            <div class="addon-price">+NRS {{ addonPrices.extra_main }}</div>
            <h4>Extra Main Dish</h4>
            <p>One additional curry or protein of your choice</p>
          </div>
          <div class="addon-card">
            <div class="addon-price">+NRS {{ addonPrices.dessert_bar }}</div>
            <h4>Dessert Bar</h4>
            <p>4-item spread: halwa, barfi, jalebi, ice cream</p>
          </div>
          <div class="addon-card">
            <div class="addon-price">+NRS {{ addonPrices.live_cooking }}</div>
            <h4>Live Cooking Station</h4>
            <p>Freshly made roti/bhatura or momo chaat station</p>
          </div>
          <div class="addon-card">
            <div class="addon-price">+NRS {{ addonPrices.beverages }}</div>
            <h4>Beverages Service</h4>
            <p>Beer, wine, spirits & mocktail service with staff</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Service fees ───────────────────────────── -->
    <section class="section">
      <div class="inner">
        <div class="section-label">Fees</div>
        <h2 class="section-heading">Service Fees</h2>
        <p class="section-sub">Flat fees applied once per booking (not per person)</p>

        <div class="fees-wrap">
          <table class="fees-table">
            <tbody>
              <tr><td>Staff (up to 50 guests)</td><td class="fee-val">NRS 5,000</td></tr>
              <tr><td>Staff (51–150 guests)</td><td class="fee-val">NRS 8,000</td></tr>
              <tr><td>Staff (151+ guests)</td><td class="fee-val">NRS 12,000</td></tr>
              <tr><td>Setup & cleanup</td><td class="fee-val">NRS 3,000</td></tr>
              <tr><td>Travel (within Kathmandu Valley)</td><td class="fee-val fee-free">Free</td></tr>
              <tr class="last-row"><td>Travel (outside Kathmandu Valley)</td><td class="fee-val">By quote</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ── Dry Picnic ────────────────────────────── -->
    <section class="section section-alt">
      <div class="inner">
        <div class="section-label">Dry Picnic</div>
        <h2 class="section-heading">On-Site Picnic Catering</h2>
        <p class="section-sub">We travel to your picnic location and cook fresh on-site. You pick the spot — we bring the chefs, equipment, ingredients, and staff. Perfect for school trips, corporate outings, and family picnics.</p>

        <div class="picnic-how">
          <div class="picnic-step">
            <span class="picnic-num">1</span>
            <div><strong>You choose the location</strong><p>Any outdoor venue in or around Kathmandu Valley — park, riverside, resort, or open ground.</p></div>
          </div>
          <div class="picnic-step">
            <span class="picnic-num">2</span>
            <div><strong>We arrive fully equipped</strong><p>Our team brings chefs, portable stoves, utensils, ingredients, and serving equipment — nothing for you to arrange.</p></div>
          </div>
          <div class="picnic-step">
            <span class="picnic-num">3</span>
            <div><strong>Fresh food cooked on-site</strong><p>Hot, freshly cooked Nepali and snack-style food served directly to your group at the picnic spot.</p></div>
          </div>
        </div>

        <div class="picnic-pkg-note">
          <div class="picnic-pkg-icon">🧺</div>
          <div>
            <p>Dry picnic catering uses the same <strong>Basic, Standard, and Premium packages</strong> listed above — just cooked and served fresh at your outdoor location.</p>
            <p>Browse the packages above to choose the right one, then mention it's a dry picnic when you book.</p>
          </div>
          <a :href="`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I would like to book dry picnic catering. Please help me choose the right package.')}`" target="_blank" rel="noopener noreferrer" class="picnic-pkg-btn">
            Book a Picnic on WhatsApp →
          </a>
        </div>

        <div class="picnic-note">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <p>Minimum 20 guests. Travel within Kathmandu Valley included. Outside valley available by quote. Menu can be customised — <a :href="`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I would like to discuss a custom dry picnic package.')}`" target="_blank" rel="noopener noreferrer">chat with us on WhatsApp</a>.</p>
        </div>
      </div>
    </section>

    <!-- ── CTA ────────────────────────────────────── -->
    <section class="cta-strip">
      <div class="cta-content">
        <h3>Not sure which package is right for you?</h3>
        <p>Message us on WhatsApp with your event details and we'll recommend the best option.</p>
        <a :href="waGeneral" target="_blank" rel="noopener noreferrer" class="cta-btn">
          Chat with us on WhatsApp
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </section>

  </div>
</template>

<style scoped>
.inner { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }

.section-label { display: inline-block; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #f97316; margin-bottom: 0.75rem; }
.section-heading { font-size: clamp(1.75rem, 3vw, 2.5rem); font-weight: 900; letter-spacing: -0.03em; color: #0f172a; margin-bottom: 0.6rem; line-height: 1.15; }
.section-sub { font-size: 0.975rem; color: #64748b; line-height: 1.65; margin-bottom: 2.75rem; }
.section { padding: 5rem 0; background: #fff; }
.section-alt { background: #f8fafc; }

/* Hero */
.hero {
  background: linear-gradient(150deg, #fff7ed 0%, #ffffff 55%, #fef3c7 100%);
  padding: 5rem 2rem 4.5rem;
  text-align: center;
}

.hero-inner { max-width: 700px; margin: 0 auto; }

.badge {
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

.hero h1 { font-size: clamp(2.25rem, 5vw, 3.5rem); font-weight: 900; letter-spacing: -0.03em; color: #0f172a; line-height: 1.1; margin-bottom: 1.25rem; }

.accent { background: linear-gradient(135deg, #f97316, #ea580c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

.hero p { font-size: 1.1rem; color: #64748b; line-height: 1.75; margin-bottom: 2.25rem; }

.btn-hero {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 2rem;
  background: #f97316;
  color: #fff;
  border-radius: 2rem;
  font-weight: 700;
  font-size: 1rem;
  box-shadow: 0 4px 16px rgba(249,115,22,0.35);
  transition: background 0.15s, transform 0.15s, box-shadow 0.15s;
}
.btn-hero:hover { background: #ea6c0a; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(249,115,22,0.45); }

/* Toggle */
.type-toggle { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; max-width: 680px; margin-bottom: 1.5rem; }

.toggle-btn {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.35rem;
  padding: 1.25rem 1.5rem;
  background: #fff;
  border: 2px solid #e2e8f0;
  border-radius: 1.25rem;
  cursor: pointer;
  text-align: left;
  transition: border-color 0.15s, box-shadow 0.15s;
  font-family: inherit;
}

.toggle-btn:hover { border-color: #f97316; }
.toggle-active { border-color: #f97316; box-shadow: 0 0 0 3px rgba(249,115,22,0.15); background: #fff7ed; }
.toggle-icon { font-size: 1.5rem; }
.toggle-title { font-size: 1rem; font-weight: 800; color: #0f172a; }
.toggle-desc { font-size: 0.82rem; color: #64748b; line-height: 1.45; }

.half-notice { max-width: 680px; background: #fefce8; border: 1.5px solid #fde68a; border-radius: 1rem; padding: 1rem 1.25rem; font-size: 0.88rem; color: #713f12; line-height: 1.6; }

/* Packages */
.package-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; align-items: start; }

.package-card { background: #fff; border-radius: 1.25rem; border: 1.5px solid #e2e8f0; overflow: hidden; transition: transform 0.2s, box-shadow 0.2s; display: flex; flex-direction: column; }
.package-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.1); }

.package-popular { border-color: #f97316; box-shadow: 0 8px 32px rgba(249,115,22,0.2); transform: scale(1.02); }
.package-popular:hover { transform: scale(1.02) translateY(-4px); }

.popular-band { background: linear-gradient(135deg, #c2410c, #f97316); color: #fff; text-align: center; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.5rem; }

.pkg-top { padding: 1.75rem 1.75rem 1.25rem; border-bottom: 1px solid #f1f5f9; }

.pkg-tier { font-size: 0.8rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #94a3b8; margin-bottom: 0.75rem; }
.popular-tier { color: #f97316; }

.pkg-price { display: flex; align-items: baseline; gap: 0.4rem; margin-bottom: 0.6rem; }
.pkg-amount { font-size: 2rem; font-weight: 900; letter-spacing: -0.03em; color: #0f172a; }
.pkg-unit { font-size: 0.8rem; color: #94a3b8; font-weight: 500; }
.pkg-desc { font-size: 0.875rem; color: #64748b; line-height: 1.5; }

.pkg-features { padding: 1.25rem 1.75rem; margin: 0; flex: 1; }
.pkg-features li { font-size: 0.875rem; color: #334155; padding: 0.45rem 0; border-bottom: 1px solid #f1f5f9; display: flex; align-items: flex-start; gap: 0.6rem; }
.pkg-features li::before { content: ''; display: inline-block; width: 16px; height: 16px; min-width: 16px; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2322c55e' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E") center/contain no-repeat; margin-top: 1px; }
.pkg-features li:last-child { border-bottom: none; }

.pkg-btn { display: block; text-align: center; margin: 0 1.5rem 1.5rem; padding: 0.75rem 1rem; border-radius: 2rem; font-weight: 700; font-size: 0.9rem; font-family: inherit; cursor: pointer; transition: background 0.15s, transform 0.1s, box-shadow 0.15s; border: none; }
.pkg-btn-outline { background: #f8fafc; color: #334155; border: 1.5px solid #e2e8f0; }
.pkg-btn-outline:hover { border-color: #f97316; color: #f97316; background: #fff7ed; }
.pkg-btn-solid { background: #f97316; color: #fff; box-shadow: 0 4px 12px rgba(249,115,22,0.35); }
.pkg-btn-solid:hover { background: #ea6c0a; transform: translateY(-1px); box-shadow: 0 6px 16px rgba(249,115,22,0.45); }

/* Add-ons */
.addon-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; }

.addon-card { background: #fff; border-radius: 1.25rem; padding: 1.5rem; border: 1.5px solid #e2e8f0; transition: transform 0.2s, box-shadow 0.2s; }
.addon-card:hover { transform: translateY(-3px); box-shadow: 0 8px 28px rgba(0,0,0,0.09); }

.addon-price { display: inline-block; font-size: 1.1rem; font-weight: 900; letter-spacing: -0.02em; color: #f97316; background: #fff7ed; padding: 0.2rem 0.6rem; border-radius: 0.5rem; margin-bottom: 0.75rem; }
.addon-card h4 { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin-bottom: 0.4rem; }
.addon-card p { font-size: 0.83rem; color: #64748b; line-height: 1.55; margin: 0; }

/* Fees table */
.fees-wrap { max-width: 560px; margin: 0 auto; }

.fees-table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 1.25rem; overflow: hidden; border: 1.5px solid #e2e8f0; }
.fees-table tr { border-bottom: 1px solid #f1f5f9; transition: background 0.12s; }
.fees-table tr:nth-child(even) { background: #f8fafc; }
.fees-table tr:hover { background: #fff7ed; }
.fees-table tr.last-row { border-bottom: none; }
.fees-table td { padding: 0.9rem 1.25rem; font-size: 0.9rem; color: #334155; }
.fee-val { text-align: right; font-weight: 700; color: #f97316; }
.fee-free { color: #16a34a; }

/* Picnic how-it-works */
.picnic-how { display: flex; flex-direction: column; gap: 1rem; max-width: 680px; margin-bottom: 0.5rem; }
.picnic-step { display: flex; align-items: flex-start; gap: 1rem; background: #fff; border: 1.5px solid #e2e8f0; border-radius: 1rem; padding: 1.25rem 1.5rem; }
.picnic-num { width: 32px; height: 32px; background: linear-gradient(135deg, #d97706, #b45309); color: #fff; font-size: 0.9rem; font-weight: 900; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.picnic-step strong { display: block; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin-bottom: 0.25rem; }
.picnic-step p { font-size: 0.875rem; color: #64748b; line-height: 1.55; margin: 0; }

/* Picnic note */
.picnic-pkg-note {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2.5rem;
  background: #fff;
  border: 1.5px solid #e2e8f0;
  border-radius: 1.25rem;
  padding: 1.75rem 2rem;
  flex-wrap: wrap;
}
.picnic-pkg-icon { font-size: 2.5rem; flex-shrink: 0; }
.picnic-pkg-note > div { flex: 1; min-width: 200px; }
.picnic-pkg-note p { font-size: 0.9rem; color: #475569; line-height: 1.65; margin: 0 0 0.4rem; }
.picnic-pkg-note p:last-child { margin: 0; }
.picnic-pkg-note strong { color: #0f172a; }
.picnic-pkg-btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #f97316;
  color: #fff;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 700;
  white-space: nowrap;
  transition: background 0.15s;
  flex-shrink: 0;
}
.picnic-pkg-btn:hover { background: #ea580c; }

.picnic-note { display: flex; align-items: flex-start; gap: 0.75rem; margin-top: 2rem; background: #fffbeb; border: 1.5px solid #fde68a; border-radius: 1rem; padding: 1rem 1.25rem; }
.picnic-note svg { flex-shrink: 0; margin-top: 1px; }
.picnic-note p { font-size: 0.875rem; color: #713f12; line-height: 1.6; margin: 0; }
.picnic-note a { color: #d97706; font-weight: 600; }

/* CTA */
.cta-strip { background: linear-gradient(135deg, #c2410c 0%, #f97316 50%, #fb923c 100%); padding: 4rem 2rem; text-align: center; }
.cta-content { max-width: 600px; margin: 0 auto; }
.cta-strip h3 { font-size: clamp(1.5rem, 3vw, 2.25rem); font-weight: 900; letter-spacing: -0.03em; color: #fff; margin-bottom: 0.6rem; }
.cta-strip p { color: rgba(255,255,255,0.82); font-size: 1rem; margin-bottom: 2rem; }
.cta-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.85rem 2rem; background: #fff; color: #ea580c; border-radius: 2rem; font-weight: 700; font-size: 0.95rem; cursor: pointer; transition: background 0.15s, transform 0.15s, box-shadow 0.15s; box-shadow: 0 4px 16px rgba(0,0,0,0.15); }
.cta-btn:hover { background: #fff7ed; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.18); }

/* Responsive */
@media (max-width: 900px) {
  .type-toggle { grid-template-columns: 1fr; max-width: 100%; }
  .package-grid { grid-template-columns: 1fr; max-width: 480px; margin-left: auto; margin-right: auto; }
  .package-popular { transform: none; }
  .package-popular:hover { transform: translateY(-4px); }
  .addon-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 480px) {
  .addon-grid { grid-template-columns: 1fr; }
  .package-grid { max-width: 100%; }
}
</style>
