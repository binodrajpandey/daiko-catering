<script setup lang="ts">
const WHATSAPP_NUMBER = '977980000000'
const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I would like to enquire about your catering services.')}`
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <NuxtLink to="/" class="footer-logo">
          <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="18" fill="rgba(249,115,22,0.15)"/>
            <path d="M18 6c0 0-8 6-8 12a8 8 0 0 0 16 0C26 12 18 6 18 6z" fill="#f97316"/>
            <path d="M18 14c0 0-4 3-4 6a4 4 0 0 0 8 0c0-3-4-6-4-6z" fill="#f97316" opacity="0.4"/>
          </svg>
          <!-- TODO: Replace with your actual business name -->
          <span>Swad Catering</span>
        </NuxtLink>
        <p class="footer-desc">
          Professional catering service in Kathmandu, Nepal. Authentic Nepali cuisine
          for weddings, corporate events, and celebrations of every size.
        </p>
        <a :href="waUrl" target="_blank" rel="noopener noreferrer" class="wa-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#25d366">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.43 12.38c-.23.64-.67 1.17-1.23 1.51-.38.23-.8.35-1.23.35-.24 0-.49-.03-.73-.1-.94-.26-1.84-.73-2.62-1.38-.72-.6-1.33-1.32-1.79-2.12-.28-.49-.44-1.01-.46-1.54-.02-.55.14-1.1.48-1.54.24-.31.55-.48.89-.48h.25c.2 0 .4.01.57.4.21.48.67 1.6.73 1.72.06.12.1.26.03.41-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.22.23-.1.45.13.22.57.94 1.22 1.52.84.75 1.55.98 1.77 1.09.22.11.35.09.48-.05.13-.14.55-.64.7-.86.15-.22.29-.18.49-.11.2.07 1.27.6 1.49.71.22.11.37.16.42.25.06.09.06.52-.17 1.02z"/>
          </svg>
          +977-98XXXXXXXX
        </a>
        <p class="footer-location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Kathmandu, Nepal
        </p>
      </div>

      <div class="footer-col">
        <h5>Pages</h5>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/menu">Menu & Packages</NuxtLink>
        <NuxtLink to="/gallery">Gallery</NuxtLink>
        <NuxtLink to="/about">About Us</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </div>

      <div class="footer-col">
        <h5>Services</h5>
        <span>Wedding Catering</span>
        <span>Corporate Events</span>
        <span>Birthday Parties</span>
        <span>Social Gatherings</span>
        <span>Full & Half Catering</span>
      </div>
    </div>

    <div class="footer-bar">
      <span>© {{ year }} Swad Catering. All rights reserved.</span>
      <span>Made with care in Kathmandu, Nepal 🇳🇵</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #0f172a;
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 3.5rem 2rem 3rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
}

.footer-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 800;
  font-size: 1rem;
  color: #fff;
  margin-bottom: 0.85rem;
}

.footer-desc {
  font-size: 0.875rem;
  color: #475569;
  line-height: 1.7;
  max-width: 280px;
  margin-bottom: 1rem;
}

.wa-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #94a3b8;
  margin-bottom: 0.5rem;
  transition: color 0.15s;
}

.wa-link:hover { color: #25d366; }

.footer-location {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  color: #64748b;
  margin-top: 0.25rem;
}

.footer-col h5 {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #64748b;
  margin-bottom: 1rem;
}

.footer-col a,
.footer-col span {
  display: block;
  font-size: 0.875rem;
  color: #94a3b8;
  margin-bottom: 0.6rem;
  transition: color 0.15s;
}

.footer-col a:hover { color: #f97316; }

.footer-bar {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;
  color: #475569;
}

@media (max-width: 820px) {
  .footer-inner {
    grid-template-columns: 1fr 1fr;
  }
  .footer-brand {
    grid-column: 1 / -1;
  }
  .footer-desc { max-width: 100%; }
}

@media (max-width: 480px) {
  .footer-inner { grid-template-columns: 1fr; gap: 2rem; }
  .footer-bar { flex-direction: column; text-align: center; }
}
</style>
