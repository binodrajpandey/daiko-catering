<script setup lang="ts">
const WHATSAPP_NUMBER = '977980000000'
const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I would like to know more about your catering service.')}`

useHead({
  title: 'About Us — Daiko Catering Kathmandu',
  meta: [
    { name: 'description', content: 'Learn about Daiko Catering — Kathmandu\'s trusted catering service. Professional chefs, authentic Nepali cuisine, serving weddings and events across the Kathmandu Valley for over 8 years.' },
    { property: 'og:title', content: 'About Daiko Catering — Kathmandu\'s Trusted Catering Service' },
    { property: 'og:description', content: 'Professional catering with authentic Nepali cuisine, serving Kathmandu Valley for 8+ years.' },
    { property: 'og:url', content: 'https://daikocatering.com.np/about' },
  ],
  link: [{ rel: 'canonical', href: 'https://daikocatering.com.np/about' }],
})
</script>

<template>
  <div class="page">

    <!-- ── Hero ─────────────────────────────────────── -->
    <section class="hero">
      <div class="hero-inner">
        <span class="badge">About Us</span>
        <h1>Food Made with <span class="accent">Heart</span></h1>
        <p>
          Born in Kathmandu's rich culinary tradition, Daiko Catering has been bringing authentic Nepali
          flavours and professional service to weddings, corporate events, and celebrations for over 8 years.
        </p>
      </div>
    </section>

    <!-- ── Story ─────────────────────────────────────── -->
    <section class="section">
      <div class="inner">
        <div class="story-grid">
          <div class="story-text">
            <div class="section-label">Our Story</div>
            <h2 class="section-heading">From a family kitchen to Kathmandu's most trusted caterers</h2>
            <p>
              Daiko Catering started with a simple belief: great food brings people together. What began as a small
              family catering operation in Kathmandu grew into a full-service catering company trusted by hundreds
              of families, businesses, and organisations across the Kathmandu Valley.
            </p>
            <p>
              Our head chef brings decades of experience cooking authentic Nepali sadhya, Newari specialties, and
              fusion menus. Every event — from a 30-person birthday party to a 500-guest wedding — receives the
              same level of care, attention to detail, and passion for food.
            </p>
            <p>
              We are proudly based in Kathmandu and serve the entire valley including Lalitpur and Bhaktapur,
              with event catering available throughout Nepal.
            </p>
          </div>

          <div class="story-stats">
            <div class="stat-box">
              <strong>500+</strong>
              <span>Events successfully catered</span>
            </div>
            <div class="stat-box">
              <strong>20,000+</strong>
              <span>Guests served across Kathmandu</span>
            </div>
            <div class="stat-box">
              <strong>8+</strong>
              <span>Years of experience</span>
            </div>
            <div class="stat-box accent-box">
              <strong>4.9★</strong>
              <span>Average client rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Values ─────────────────────────────────────── -->
    <section class="section section-alt">
      <div class="inner">
        <div class="section-label">Our Values</div>
        <h2 class="section-heading">What we stand for</h2>
        <p class="section-sub">Three principles that guide every event we cater.</p>

        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">🌿</div>
            <h3>Fresh Ingredients</h3>
            <p>We source fresh, local ingredients every day — no frozen shortcuts. Quality ingredients are the foundation of exceptional food.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">🤝</div>
            <h3>Honest Pricing</h3>
            <p>Clear, itemised quotes in NRS with no hidden fees. What you see is what you pay. We respect your budget and your trust.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">⏰</div>
            <h3>Punctual & Professional</h3>
            <p>We arrive on time, set up efficiently, and maintain high service standards throughout your event. Every single time.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Team ──────────────────────────────────────── -->
    <section class="section">
      <div class="inner">
        <div class="section-label">Our Team</div>
        <h2 class="section-heading">The people behind the food</h2>
        <p class="section-sub">Experienced professionals dedicated to making your event extraordinary.</p>

        <div class="team-grid">
          <div class="team-card">
            <div class="team-avatar" style="background: linear-gradient(135deg, #f97316, #ea580c);">HC</div>
            <h4>Head Chef</h4>
            <p>20+ years of culinary experience, specialising in authentic Nepali sadhya and fusion cuisines.</p>
            <!-- TODO: Add real team member names and photos -->
          </div>
          <div class="team-card">
            <div class="team-avatar" style="background: linear-gradient(135deg, #0891b2, #0e7490);">EC</div>
            <h4>Event Coordinator</h4>
            <p>Handles logistics, timelines, and staff coordination to ensure your event runs perfectly from setup to cleanup.</p>
          </div>
          <div class="team-card">
            <div class="team-avatar" style="background: linear-gradient(135deg, #7c3aed, #5b21b6);">SM</div>
            <h4>Service Manager</h4>
            <p>Leads our serving staff and ensures every guest is attended to with warmth and professionalism.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA ───────────────────────────────────────── -->
    <section class="cta-strip">
      <div class="cta-content">
        <h3>Want to work with us?</h3>
        <p>Send us a WhatsApp message and let's plan your perfect Kathmandu event together.</p>
        <a :href="waUrl" target="_blank" rel="noopener noreferrer" class="cta-btn">
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
.section-heading { font-size: clamp(1.75rem, 3vw, 2.5rem); font-weight: 900; letter-spacing: -0.03em; color: #0f172a; margin-bottom: 1rem; line-height: 1.15; }
.section-sub { font-size: 0.975rem; color: #64748b; line-height: 1.65; margin-bottom: 2.75rem; }
.section { padding: 5rem 0; background: #fff; }
.section-alt { background: #f8fafc; }

/* Hero */
.hero { background: linear-gradient(150deg, #fff7ed 0%, #ffffff 55%, #fef3c7 100%); padding: 5rem 2rem 4.5rem; text-align: center; }
.hero-inner { max-width: 700px; margin: 0 auto; }
.badge { display: inline-flex; align-items: center; background: #fff; border: 1.5px solid #fed7aa; color: #c2410c; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; padding: 0.35rem 0.9rem; border-radius: 2rem; margin-bottom: 1.5rem; }
.hero h1 { font-size: clamp(2.25rem, 5vw, 3.5rem); font-weight: 900; letter-spacing: -0.03em; color: #0f172a; line-height: 1.1; margin-bottom: 1.25rem; }
.accent { background: linear-gradient(135deg, #f97316, #ea580c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.hero p { font-size: 1.05rem; color: #64748b; line-height: 1.75; max-width: 580px; margin: 0 auto; }

/* Story */
.story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }

.story-text p { font-size: 0.95rem; color: #334155; line-height: 1.75; margin-bottom: 1.25rem; }
.story-text p:last-child { margin-bottom: 0; }

.story-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

.stat-box { background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 1rem; padding: 1.5rem; text-align: center; }
.stat-box strong { display: block; font-size: 1.75rem; font-weight: 900; color: #0f172a; letter-spacing: -0.03em; margin-bottom: 0.25rem; }
.stat-box span { font-size: 0.82rem; color: #64748b; line-height: 1.4; }
.accent-box { background: #fff7ed; border-color: #fed7aa; }
.accent-box strong { color: #f97316; }

/* Values */
.values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }

.value-card { background: #fff; border-radius: 1.25rem; padding: 2rem; border: 1.5px solid #e2e8f0; text-align: center; transition: transform 0.2s, box-shadow 0.2s; }
.value-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.08); }
.value-icon { font-size: 2.25rem; margin-bottom: 1rem; }
.value-card h3 { font-size: 1.1rem; font-weight: 800; color: #0f172a; margin-bottom: 0.6rem; }
.value-card p { font-size: 0.9rem; color: #64748b; line-height: 1.65; }

/* Team */
.team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }

.team-card { background: #f8fafc; border-radius: 1.25rem; padding: 2rem; border: 1.5px solid #e2e8f0; text-align: center; }
.team-avatar { width: 72px; height: 72px; border-radius: 50%; color: #fff; font-size: 1.1rem; font-weight: 800; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; }
.team-card h4 { font-size: 1rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem; }
.team-card p { font-size: 0.875rem; color: #64748b; line-height: 1.65; }

/* CTA */
.cta-strip { background: linear-gradient(135deg, #c2410c 0%, #f97316 50%, #fb923c 100%); padding: 4rem 2rem; text-align: center; }
.cta-content { max-width: 600px; margin: 0 auto; }
.cta-strip h3 { font-size: clamp(1.5rem, 3vw, 2.25rem); font-weight: 900; letter-spacing: -0.03em; color: #fff; margin-bottom: 0.6rem; }
.cta-strip p { color: rgba(255,255,255,0.82); font-size: 1rem; margin-bottom: 2rem; }
.cta-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.85rem 2rem; background: #fff; color: #ea580c; border-radius: 2rem; font-weight: 700; font-size: 0.95rem; transition: background 0.15s, transform 0.15s; box-shadow: 0 4px 16px rgba(0,0,0,0.15); }
.cta-btn:hover { background: #fff7ed; transform: translateY(-2px); }

@media (max-width: 900px) {
  .story-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .values-grid { grid-template-columns: 1fr; }
  .team-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 480px) {
  .team-grid { grid-template-columns: 1fr; }
  .story-stats { grid-template-columns: 1fr; }
}
</style>
