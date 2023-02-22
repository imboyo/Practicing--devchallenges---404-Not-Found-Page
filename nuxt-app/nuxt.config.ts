// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/tailwind.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  app: {
    head: {
      link: [
        {
          rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'
        },
        {
          rel: 'preconnect', href: 'href="https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect', href: 'href="https://fonts.gstatic.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap'
        }
      ],
    }
  }
})
