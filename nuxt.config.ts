import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'RubySlider | Nguyễn Văn Thy',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      meta: [
        { name: 'description', content: 'Best slider and tabs jquery plugin' },
      ],
      link: [
        { rel: 'icon', href: "/favicon.ico" },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&family=Raleway:wght@100;200;300;700&family=Source+Code+Pro:wght@400;500;700&display=swap' },
      ],
      script: [
        { src: '/js/jquery.min.js' },
        { src: '/js/rubyanimate.js' },
        { src: '/js/rubyslider_17.js' },
      ]
    }
  },
  css: [
    '@/assets/main.scss'
  ],
  // ssr: false
})
