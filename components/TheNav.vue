<script setup lang="ts">
// TODO: Replace WHATSAPP_NUMBER with your actual number (digits only, no spaces)
const WHATSAPP_NUMBER = '977980000000'
const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I would like to enquire about your catering services.')}`

const menuOpen = ref(false)
const route = useRoute()

watch(() => route.path, () => { menuOpen.value = false })
</script>

<template>
  <header class="nav">
    <div class="nav-inner">
      <NuxtLink to="/" class="logo">
        <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="18" fill="rgba(249,115,22,0.12)"/>
          <path d="M18 6c0 0-8 6-8 12a8 8 0 0 0 16 0C26 12 18 6 18 6z" fill="#f97316"/>
          <path d="M18 14c0 0-4 3-4 6a4 4 0 0 0 8 0c0-3-4-6-4-6z" fill="#f97316" opacity="0.4"/>
        </svg>
        <!-- TODO: Replace with your actual business name -->
        <span>Daiko Catering</span>
      </NuxtLink>

      <nav class="links" :class="{ open: menuOpen }">
        <NuxtLink to="/" exact-active-class="active">Home</NuxtLink>
        <NuxtLink to="/menu" active-class="active">Menu</NuxtLink>
        <NuxtLink to="/gallery" active-class="active">Gallery</NuxtLink>
        <NuxtLink to="/about" active-class="active">About</NuxtLink>
        <NuxtLink to="/contact" active-class="active">Contact</NuxtLink>
        <a :href="waUrl" target="_blank" rel="noopener noreferrer" class="wa-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.43 12.38c-.23.64-.67 1.17-1.23 1.51-.38.23-.8.35-1.23.35-.24 0-.49-.03-.73-.1-.94-.26-1.84-.73-2.62-1.38-.72-.6-1.33-1.32-1.79-2.12-.28-.49-.44-1.01-.46-1.54-.02-.55.14-1.1.48-1.54.24-.31.55-.48.89-.48h.25c.2 0 .4.01.57.4.21.48.67 1.6.73 1.72.06.12.1.26.03.41-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.22.23-.1.45.13.22.57.94 1.22 1.52.84.75 1.55 .98 1.77 1.09.22.11.35.09.48-.05.13-.14.55-.64.7-.86.15-.22.29-.18.49-.11.2.07 1.27.6 1.49.71.22.11.37.16.42.25.06.09.06.52-.17 1.02z"/>
          </svg>
          Book via WhatsApp
        </a>
      </nav>

      <button class="hamburger" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-label="Toggle menu">
        <span /><span /><span />
      </button>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #f1f5f9;
}

.nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 800;
  font-size: 1.05rem;
  color: #0f172a;
  flex-shrink: 0;
}

.links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.links a {
  font-size: 0.875rem;
  font-weight: 500;
  color: #64748b;
  padding: 0.45rem 0.75rem;
  border-radius: 0.5rem;
  transition: color 0.15s, background 0.15s;
}

.links a:hover,
.links a.active {
  color: #f97316;
  background: #fff7ed;
}

.wa-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin-left: 0.75rem;
  padding: 0.5rem 1.1rem;
  background: #25d366;
  color: #fff !important;
  font-weight: 700;
  font-size: 0.82rem;
  border-radius: 2rem;
  transition: background 0.15s, transform 0.15s;
}

.wa-btn:hover {
  background: #20bb5a;
  transform: translateY(-1px);
  background: #20bb5a !important;
  color: #fff !important;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: #0f172a;
  border-radius: 2px;
  transition: all 0.2s;
}

@media (max-width: 820px) {
  .hamburger { display: flex; }

  .links {
    display: none;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: #fff;
    border-bottom: 1px solid #f1f5f9;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem 1.5rem;
    gap: 0.25rem;
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  }

  .links.open { display: flex; }

  .links a { width: 100%; }

  .wa-btn {
    margin-left: 0;
    margin-top: 0.5rem;
    width: 100%;
    justify-content: center;
  }
}
</style>
