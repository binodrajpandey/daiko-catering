<script setup lang="ts">
const WHATSAPP_NUMBER = '977980000000'
const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I would like to get a catering quote.')}`
</script>

<template>
  <a :href="waUrl" target="_blank" rel="noopener noreferrer" class="wa-float" aria-label="Chat on WhatsApp">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#fff">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.43 12.38c-.23.64-.67 1.17-1.23 1.51-.38.23-.8.35-1.23.35-.24 0-.49-.03-.73-.1-.94-.26-1.84-.73-2.62-1.38-.72-.6-1.33-1.32-1.79-2.12-.28-.49-.44-1.01-.46-1.54-.02-.55.14-1.1.48-1.54.24-.31.55-.48.89-.48h.25c.2 0 .4.01.57.4.21.48.67 1.6.73 1.72.06.12.1.26.03.41-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.22.23-.1.45.13.22.57.94 1.22 1.52.84.75 1.55.98 1.77 1.09.22.11.35.09.48-.05.13-.14.55-.64.7-.86.15-.22.29-.18.49-.11.2.07 1.27.6 1.49.71.22.11.37.16.42.25.06.09.06.52-.17 1.02z"/>
    </svg>
    <span class="wa-label">Book Now</span>
  </a>
</template>

<style scoped>
.wa-float {
  position: fixed;
  bottom: 1.75rem;
  right: 1.75rem;
  z-index: 200;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #25d366;
  color: #fff;
  padding: 0.75rem 1.25rem 0.75rem 1rem;
  border-radius: 3rem;
  font-weight: 700;
  font-size: 0.875rem;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.45);
  transition: transform 0.2s, box-shadow 0.2s;
}

.wa-float:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 28px rgba(37, 211, 102, 0.55);
}

@media (max-width: 480px) {
  .wa-label { display: none; }
  .wa-float { padding: 0.85rem; border-radius: 50%; }
}
</style>
