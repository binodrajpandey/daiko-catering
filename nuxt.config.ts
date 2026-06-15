// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
        },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
      style: [
        {
          children: `
            *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
            html { scroll-behavior: smooth; }
            body { font-family: 'Inter', system-ui, sans-serif; color: #0f172a; background: #fff; -webkit-font-smoothing: antialiased; }
            a { text-decoration: none; color: inherit; }
            img { max-width: 100%; display: block; }
            button { font-family: inherit; }
            ul { list-style: none; }
          `,
        },
      ],
    },
  },

  nitro: {
    prerender: {
      routes: ['/', '/menu', '/gallery', '/about', '/contact'],
      crawlLinks: true,
    },
  },
})
