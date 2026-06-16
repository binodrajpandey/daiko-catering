<script setup lang="ts">
const WHATSAPP_NUMBER = '977980000000'
const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I saw your gallery and would like to book catering for my event.')}`

const categories = ['All', 'Weddings', 'Corporate', 'Birthday', 'Social', 'Picnic']
const activeCategory = ref('All')

const items = [
  { id: 1, label: 'Grand Wedding Feast', category: 'Weddings', guests: '350 guests', color: 'from-orange-400 to-red-500', bg: 'linear-gradient(135deg, #f97316, #dc2626)', emoji: '💍' },
  { id: 2, label: 'Corporate Buffet', category: 'Corporate', guests: '120 guests', color: '', bg: 'linear-gradient(135deg, #0891b2, #0e7490)', emoji: '🏢' },
  { id: 3, label: 'Birthday Celebration', category: 'Birthday', guests: '80 guests', color: '', bg: 'linear-gradient(135deg, #7c3aed, #5b21b6)', emoji: '🎂' },
  { id: 4, label: 'Bratabandha Sadhya', category: 'Social', guests: '200 guests', color: '', bg: 'linear-gradient(135deg, #059669, #047857)', emoji: '🙏' },
  { id: 5, label: 'Wedding Reception', category: 'Weddings', guests: '500 guests', color: '', bg: 'linear-gradient(135deg, #ea580c, #c2410c)', emoji: '🌸' },
  { id: 6, label: 'Team Lunch', category: 'Corporate', guests: '60 guests', color: '', bg: 'linear-gradient(135deg, #1d4ed8, #1e40af)', emoji: '💼' },
  { id: 7, label: 'Pasni Ceremony', category: 'Social', guests: '150 guests', color: '', bg: 'linear-gradient(135deg, #d97706, #b45309)', emoji: '👶' },
  { id: 8, label: 'Sweet 16 Party', category: 'Birthday', guests: '45 guests', color: '', bg: 'linear-gradient(135deg, #db2777, #be185d)', emoji: '🎉' },
  { id: 9, label: 'Mehendi Ceremony', category: 'Weddings', guests: '100 guests', color: '', bg: 'linear-gradient(135deg, #16a34a, #15803d)', emoji: '🌿' },
  { id: 10, label: 'Conference Catering', category: 'Corporate', guests: '200 guests', color: '', bg: 'linear-gradient(135deg, #475569, #334155)', emoji: '🎤' },
  { id: 11, label: 'Anniversary Dinner', category: 'Social', guests: '70 guests', color: '', bg: 'linear-gradient(135deg, #f97316, #fb923c)', emoji: '❤️' },
  { id: 12, label: 'Kids Birthday', category: 'Birthday', guests: '35 guests', color: '', bg: 'linear-gradient(135deg, #ec4899, #f97316)', emoji: '🎈' },
  { id: 13, label: 'School Trip Picnic', category: 'Picnic', guests: '80 guests', color: '', bg: 'linear-gradient(135deg, #d97706, #b45309)', emoji: '🧺' },
  { id: 14, label: 'Corporate Outing', category: 'Picnic', guests: '60 guests', color: '', bg: 'linear-gradient(135deg, #65a30d, #4d7c0f)', emoji: '🏕️' },
  { id: 15, label: 'Family Picnic', category: 'Picnic', guests: '40 guests', color: '', bg: 'linear-gradient(135deg, #0891b2, #d97706)', emoji: '👨‍👩‍👧‍👦' },
]

const filtered = computed(() =>
  activeCategory.value === 'All' ? items : items.filter(i => i.category === activeCategory.value)
)

useHead({
  title: 'Gallery — Daiko Catering Kathmandu Events',
  meta: [
    { name: 'description', content: 'See our catering work in Kathmandu — weddings, corporate events, birthday parties, and social ceremonies. Professional catering across the Kathmandu Valley.' },
    { property: 'og:title', content: 'Gallery — Daiko Catering Kathmandu' },
    { property: 'og:description', content: 'View our event catering gallery from Kathmandu. Weddings, corporate events, parties and more.' },
    { property: 'og:url', content: 'https://daikocatering.com.np/gallery' },
  ],
  link: [{ rel: 'canonical', href: 'https://daikocatering.com.np/gallery' }],
})
</script>

<template>
  <div class="page">

    <!-- ── Hero ─────────────────────────────────────── -->
    <section class="hero">
      <div class="hero-inner">
        <span class="badge">Gallery</span>
        <h1>Events We've <span class="accent">Catered</span></h1>
        <p>From 30-person birthday parties to 500-guest weddings across Kathmandu Valley — every event, crafted with care.</p>
      </div>
    </section>

    <!-- ── Gallery ───────────────────────────────────── -->
    <section class="section">
      <div class="inner">

        <div class="filter-row">
          <button
            v-for="cat in categories"
            :key="cat"
            class="filter-btn"
            :class="{ active: activeCategory === cat }"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <div class="gallery-grid">
          <div
            v-for="item in filtered"
            :key="item.id"
            class="gallery-card"
          >
            <div class="gallery-img" :style="{ background: item.bg }">
              <span class="gallery-emoji">{{ item.emoji }}</span>
              <!-- TODO: Replace this div with an <img> tag when you add real photos -->
              <div class="photo-placeholder">Add photo here</div>
            </div>
            <div class="gallery-info">
              <h3>{{ item.label }}</h3>
              <span class="gallery-tag">{{ item.category }}</span>
              <span class="gallery-guests">{{ item.guests }}</span>
            </div>
          </div>
        </div>

        <div class="gallery-note">
          <p>📸 Real event photos coming soon. These placeholders show the event types we cater.</p>
        </div>
      </div>
    </section>

    <!-- ── CTA ───────────────────────────────────────── -->
    <section class="cta-strip">
      <div class="cta-content">
        <h3>Want your event to be our next showcase?</h3>
        <p>Book Daiko Catering for your Kathmandu event and let us create something memorable.</p>
        <a :href="waUrl" target="_blank" rel="noopener noreferrer" class="cta-btn">
          Book via WhatsApp
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </section>

  </div>
</template>

<style scoped>
.inner { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }
.section { padding: 5rem 0; background: #fff; }

/* Hero */
.hero { background: linear-gradient(150deg, #fff7ed 0%, #ffffff 55%, #fef3c7 100%); padding: 5rem 2rem 4.5rem; text-align: center; }
.hero-inner { max-width: 700px; margin: 0 auto; }
.badge { display: inline-flex; align-items: center; background: #fff; border: 1.5px solid #fed7aa; color: #c2410c; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; padding: 0.35rem 0.9rem; border-radius: 2rem; margin-bottom: 1.5rem; }
.hero h1 { font-size: clamp(2.25rem, 5vw, 3.5rem); font-weight: 900; letter-spacing: -0.03em; color: #0f172a; line-height: 1.1; margin-bottom: 1.25rem; }
.accent { background: linear-gradient(135deg, #f97316, #ea580c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.hero p { font-size: 1.05rem; color: #64748b; line-height: 1.75; }

/* Filter */
.filter-row { display: flex; gap: 0.5rem; margin-bottom: 2rem; flex-wrap: wrap; }
.filter-btn { padding: 0.5rem 1.1rem; background: #f1f5f9; border: 1.5px solid #e2e8f0; border-radius: 2rem; font-size: 0.875rem; font-weight: 600; color: #64748b; cursor: pointer; transition: all 0.15s; font-family: inherit; }
.filter-btn:hover { border-color: #f97316; color: #f97316; background: #fff7ed; }
.filter-btn.active { background: #f97316; color: #fff; border-color: #f97316; }

/* Gallery grid */
.gallery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }

.gallery-card { border-radius: 1.25rem; overflow: hidden; border: 1.5px solid #e2e8f0; transition: transform 0.2s, box-shadow 0.2s; }
.gallery-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.12); }

.gallery-img {
  position: relative;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.gallery-emoji { font-size: 3rem; position: relative; z-index: 1; }

.photo-placeholder {
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;
  font-size: 0.7rem;
  font-weight: 600;
  background: rgba(0,0,0,0.35);
  color: rgba(255,255,255,0.7);
  padding: 0.25rem 0.5rem;
  border-radius: 0.35rem;
  letter-spacing: 0.04em;
}

.gallery-info { padding: 1.25rem; background: #fff; }
.gallery-info h3 { font-size: 1rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem; }

.gallery-tag { display: inline-block; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; background: #fff7ed; color: #c2410c; padding: 0.2rem 0.6rem; border-radius: 2rem; margin-right: 0.5rem; }
.gallery-guests { font-size: 0.8rem; color: #94a3b8; font-weight: 500; }

.gallery-note { margin-top: 2rem; text-align: center; font-size: 0.875rem; color: #94a3b8; background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 1rem; padding: 1rem 1.5rem; }

/* CTA */
.cta-strip { background: linear-gradient(135deg, #c2410c 0%, #f97316 50%, #fb923c 100%); padding: 4rem 2rem; text-align: center; }
.cta-content { max-width: 600px; margin: 0 auto; }
.cta-strip h3 { font-size: clamp(1.5rem, 3vw, 2.25rem); font-weight: 900; letter-spacing: -0.03em; color: #fff; margin-bottom: 0.6rem; }
.cta-strip p { color: rgba(255,255,255,0.82); font-size: 1rem; margin-bottom: 2rem; }
.cta-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.85rem 2rem; background: #fff; color: #ea580c; border-radius: 2rem; font-weight: 700; font-size: 0.95rem; transition: background 0.15s, transform 0.15s; box-shadow: 0 4px 16px rgba(0,0,0,0.15); }
.cta-btn:hover { background: #fff7ed; transform: translateY(-2px); }

@media (max-width: 900px) { .gallery-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 480px) { .gallery-grid { grid-template-columns: 1fr; } }
</style>
