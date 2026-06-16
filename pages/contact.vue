<script setup lang="ts">
const WHATSAPP_NUMBER = '977980000000'

const waGeneral = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I would like to enquire about your catering services.')}`
const waWedding = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I am looking for wedding catering in Kathmandu.')}`
const waCorporate = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I need catering for a corporate event in Kathmandu.')}`
const waEvent = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I need catering for a social event.')}`

const faqs = [
  {
    q: 'How far in advance should I book?',
    a: 'For weddings and large events (150+ guests), we recommend booking at least 4–6 weeks in advance. For smaller events, 1–2 weeks is usually sufficient. Contact us as early as possible to secure your date.'
  },
  {
    q: 'Do you cater outside Kathmandu Valley?',
    a: 'Our primary service area is the Kathmandu Valley (Kathmandu, Lalitpur, Bhaktapur). We can cater events outside the valley — travel fees and logistics apply. Contact us for a custom quote.'
  },
  {
    q: 'What is the minimum number of guests?',
    a: 'We cater events from as few as 20 guests. For very small gatherings under 20 people, contact us and we will do our best to accommodate you.'
  },
  {
    q: 'Can you accommodate dietary requirements?',
    a: 'Yes. We offer vegetarian, vegan, and Jain options. Please let us know your guests\' dietary requirements when booking and we will customise the menu accordingly.'
  },
  {
    q: 'Do you provide crockery, utensils, and serving equipment?',
    a: 'Our full catering packages include all necessary serving equipment. For half catering (where you supply ingredients), serving equipment is included. We can also discuss renting premium tableware if needed.'
  },
  {
    q: 'How do I pay?',
    a: 'We accept a 25% advance payment to confirm your booking, with the remainder due on or before the event day. Payment via bank transfer or eSewa is available.'
  },
]

const openFaq = ref<number | null>(null)
function toggleFaq(i: number) { openFaq.value = openFaq.value === i ? null : i }

useHead({
  title: 'Contact & Booking — Daiko Catering Kathmandu',
  meta: [
    { name: 'description', content: 'Book Daiko Catering in Kathmandu via WhatsApp. Professional catering for weddings, corporate events, and parties across the Kathmandu Valley. Get a free quote today.' },
    { name: 'keywords', content: 'book catering Kathmandu, catering booking Nepal, wedding catering contact, catering WhatsApp Nepal' },
    { property: 'og:title', content: 'Contact & Book — Daiko Catering Kathmandu' },
    { property: 'og:description', content: 'Book catering for your Kathmandu event via WhatsApp. Free quote, fast response.' },
  ],
})
</script>

<template>
  <div class="page">

    <!-- ── Hero ─────────────────────────────────────── -->
    <section class="hero">
      <div class="hero-inner">
        <span class="badge">Contact & Booking</span>
        <h1>Let's Plan Your <span class="accent">Perfect Event</span></h1>
        <p>Reach us on WhatsApp for the fastest response. We typically reply within 1–2 hours during business hours.</p>
      </div>
    </section>

    <!-- ── Quick book cards ───────────────────────── -->
    <section class="section">
      <div class="inner">
        <div class="section-label">Book via WhatsApp</div>
        <h2 class="section-heading">What type of event?</h2>
        <p class="section-sub">Tap the option that matches your event and we'll open a pre-filled WhatsApp chat.</p>

        <div class="book-grid">
          <a :href="waWedding" target="_blank" rel="noopener noreferrer" class="book-card book-wedding">
            <span class="book-emoji">💍</span>
            <h3>Wedding / Reception</h3>
            <p>Mehendi, reception, or full wedding catering</p>
            <span class="book-wa">Open in WhatsApp →</span>
          </a>

          <a :href="waCorporate" target="_blank" rel="noopener noreferrer" class="book-card book-corporate">
            <span class="book-emoji">🏢</span>
            <h3>Corporate Event</h3>
            <p>Office lunches, conferences, annual days</p>
            <span class="book-wa">Open in WhatsApp →</span>
          </a>

          <a :href="waEvent" target="_blank" rel="noopener noreferrer" class="book-card book-social">
            <span class="book-emoji">🎉</span>
            <h3>Social / Family Event</h3>
            <p>Birthday, bratabandha, pasni, anniversary</p>
            <span class="book-wa">Open in WhatsApp →</span>
          </a>

          <a :href="waGeneral" target="_blank" rel="noopener noreferrer" class="book-card book-general">
            <span class="book-emoji">💬</span>
            <h3>Something Else</h3>
            <p>Custom event or general enquiry</p>
            <span class="book-wa">Open in WhatsApp →</span>
          </a>
        </div>
      </div>
    </section>

    <!-- ── Info & location ────────────────────────── -->
    <section class="section section-alt">
      <div class="inner">
        <div class="info-grid">
          <div>
            <div class="section-label">Our Details</div>
            <h2 class="section-heading">Find us in Kathmandu</h2>

            <div class="contact-items">
              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <strong>Location</strong>
                  <!-- TODO: Replace with actual address -->
                  <p>Kathmandu, Bagmati Province, Nepal</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#25d366">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.43 12.38c-.23.64-.67 1.17-1.23 1.51-.38.23-.8.35-1.23.35-.24 0-.49-.03-.73-.1-.94-.26-1.84-.73-2.62-1.38-.72-.6-1.33-1.32-1.79-2.12-.28-.49-.44-1.01-.46-1.54-.02-.55.14-1.1.48-1.54.24-.31.55-.48.89-.48h.25c.2 0 .4.01.57.4.21.48.67 1.6.73 1.72.06.12.1.26.03.41-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.22.23-.1.45.13.22.57.94 1.22 1.52.84.75 1.55.98 1.77 1.09.22.11.35.09.48-.05.13-.14.55-.64.7-.86.15-.22.29-.18.49-.11.2.07 1.27.6 1.49.71.22.11.37.16.42.25.06.09.06.52-.17 1.02z"/>
                  </svg>
                </div>
                <div>
                  <strong>WhatsApp</strong>
                  <!-- TODO: Replace with actual number -->
                  <p><a :href="waGeneral" target="_blank" rel="noopener noreferrer">+977-98XXXXXXXX</a></p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </div>
                <div>
                  <strong>Business Hours</strong>
                  <p>Sunday–Friday: 9am–7pm<br>Saturday: 10am–5pm</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <strong>Response Time</strong>
                  <p>We typically reply within 1–2 hours on WhatsApp</p>
                </div>
              </div>
            </div>
          </div>

          <div class="service-area">
            <h3>Service Area</h3>
            <p>We primarily serve the <strong>Kathmandu Valley</strong>:</p>
            <ul>
              <li>✓ Kathmandu (all areas)</li>
              <li>✓ Lalitpur / Patan</li>
              <li>✓ Bhaktapur</li>
              <li>✓ Kirtipur</li>
              <li>✓ Budhanilkantha area</li>
            </ul>
            <p class="area-note">Events outside the valley available — <a :href="waGeneral" target="_blank" rel="noopener noreferrer">ask for a quote</a>.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FAQ ───────────────────────────────────────── -->
    <section class="section">
      <div class="inner">
        <div class="section-label">FAQ</div>
        <h2 class="section-heading">Frequently asked questions</h2>
        <p class="section-sub">Everything you need to know before booking.</p>

        <div class="faq-list">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-item">
            <button class="faq-q" @click="toggleFaq(i)" :aria-expanded="openFaq === i">
              <span>{{ faq.q }}</span>
              <svg class="faq-icon" :class="{ rotated: openFaq === i }" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-a" :class="{ open: openFaq === i }">
              <p>{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA ───────────────────────────────────────── -->
    <section class="cta-strip">
      <div class="cta-content">
        <h3>Ready to book your event?</h3>
        <p>Send us a WhatsApp message now — get a personalised quote from Kathmandu's trusted caterers.</p>
        <a :href="waGeneral" target="_blank" rel="noopener noreferrer" class="cta-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.43 12.38c-.23.64-.67 1.17-1.23 1.51-.38.23-.8.35-1.23.35-.24 0-.49-.03-.73-.1-.94-.26-1.84-.73-2.62-1.38-.72-.6-1.33-1.32-1.79-2.12-.28-.49-.44-1.01-.46-1.54-.02-.55.14-1.1.48-1.54.24-.31.55-.48.89-.48h.25c.2 0 .4.01.57.4.21.48.67 1.6.73 1.72.06.12.1.26.03.41-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.22.23-.1.45.13.22.57.94 1.22 1.52.84.75 1.55.98 1.77 1.09.22.11.35.09.48-.05.13-.14.55-.64.7-.86.15-.22.29-.18.49-.11.2.07 1.27.6 1.49.71.22.11.37.16.42.25.06.09.06.52-.17 1.02z"/>
          </svg>
          Chat on WhatsApp Now
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
.hero { background: linear-gradient(150deg, #fff7ed 0%, #ffffff 55%, #fef3c7 100%); padding: 5rem 2rem 4.5rem; text-align: center; }
.hero-inner { max-width: 700px; margin: 0 auto; }
.badge { display: inline-flex; background: #fff; border: 1.5px solid #fed7aa; color: #c2410c; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; padding: 0.35rem 0.9rem; border-radius: 2rem; margin-bottom: 1.5rem; }
.hero h1 { font-size: clamp(2.25rem, 5vw, 3.5rem); font-weight: 900; letter-spacing: -0.03em; color: #0f172a; line-height: 1.1; margin-bottom: 1.25rem; }
.accent { background: linear-gradient(135deg, #f97316, #ea580c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.hero p { font-size: 1.05rem; color: #64748b; line-height: 1.75; }

/* Book cards */
.book-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }

.book-card {
  background: #f8fafc;
  border-radius: 1.25rem;
  padding: 2rem;
  border: 1.5px solid #e2e8f0;
  display: block;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
}

.book-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.1); border-color: #f97316; }

.book-wedding { border-top: 3px solid #f97316; }
.book-corporate { border-top: 3px solid #0891b2; }
.book-social { border-top: 3px solid #7c3aed; }
.book-general { border-top: 3px solid #059669; }

.book-emoji { font-size: 2rem; display: block; margin-bottom: 0.75rem; }
.book-card h3 { font-size: 1.1rem; font-weight: 800; color: #0f172a; margin-bottom: 0.4rem; }
.book-card p { font-size: 0.875rem; color: #64748b; margin-bottom: 1rem; }
.book-wa { font-size: 0.875rem; font-weight: 700; color: #25d366; }

/* Contact info */
.info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }

.contact-items { display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1.5rem; }

.contact-item { display: flex; align-items: flex-start; gap: 1rem; }
.contact-icon { width: 40px; height: 40px; background: #fff7ed; border-radius: 0.875rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.contact-item strong { display: block; font-size: 0.875rem; font-weight: 700; color: #0f172a; margin-bottom: 0.25rem; }
.contact-item p { font-size: 0.875rem; color: #64748b; line-height: 1.55; margin: 0; }
.contact-item p a { color: #25d366; font-weight: 600; }

/* Service area */
.service-area { background: #fff; border-radius: 1.25rem; border: 1.5px solid #e2e8f0; padding: 2rem; margin-top: 2.5rem; }
.service-area h3 { font-size: 1.05rem; font-weight: 800; color: #0f172a; margin-bottom: 0.75rem; }
.service-area p { font-size: 0.9rem; color: #64748b; margin-bottom: 0.75rem; }
.service-area ul { margin-bottom: 1rem; }
.service-area li { font-size: 0.9rem; color: #334155; padding: 0.35rem 0; border-bottom: 1px solid #f1f5f9; }
.service-area li:last-child { border-bottom: none; }
.area-note { font-size: 0.82rem; color: #94a3b8; }
.area-note a { color: #f97316; font-weight: 600; }

/* FAQ */
.faq-list { max-width: 720px; }

.faq-item { border-bottom: 1px solid #f1f5f9; }
.faq-item:last-child { border-bottom: none; }

.faq-q {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  font-size: 0.975rem;
  font-weight: 600;
  color: #0f172a;
  transition: color 0.15s;
}

.faq-q:hover { color: #f97316; }

.faq-icon { flex-shrink: 0; color: #94a3b8; transition: transform 0.2s; }
.faq-icon.rotated { transform: rotate(180deg); }

.faq-a { overflow: hidden; max-height: 0; transition: max-height 0.25s ease; }
.faq-a.open { max-height: 200px; }
.faq-a p { font-size: 0.9rem; color: #64748b; line-height: 1.7; padding-bottom: 1.25rem; }

/* CTA */
.cta-strip { background: linear-gradient(135deg, #c2410c 0%, #f97316 50%, #fb923c 100%); padding: 4rem 2rem; text-align: center; }
.cta-content { max-width: 600px; margin: 0 auto; }
.cta-strip h3 { font-size: clamp(1.5rem, 3vw, 2.25rem); font-weight: 900; letter-spacing: -0.03em; color: #fff; margin-bottom: 0.6rem; }
.cta-strip p { color: rgba(255,255,255,0.82); font-size: 1rem; margin-bottom: 2rem; }
.cta-btn { display: inline-flex; align-items: center; gap: 0.6rem; padding: 0.9rem 2.25rem; background: #fff; color: #ea580c; border-radius: 2rem; font-weight: 800; font-size: 1rem; box-shadow: 0 4px 16px rgba(0,0,0,0.2); transition: background 0.15s, transform 0.15s; }
.cta-btn:hover { background: #fff7ed; transform: translateY(-2px); }

@media (max-width: 820px) {
  .book-grid { grid-template-columns: 1fr; }
  .info-grid { grid-template-columns: 1fr; gap: 2rem; }
}
</style>
