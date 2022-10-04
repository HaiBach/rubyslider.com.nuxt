import { defineNuxtConfig } from 'nuxt'
// const config = useRuntimeConfig()

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'RubySlider | Nguyễn Văn Thy',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      meta: [
        { name: 'description', content: 'Plugin jQuery với nhiều hiệu ứng dành cho Slider và Tabs' },
        { name: 'og:title', content: 'RubySlider | Nguyễn Văn Thy' },
        { name: 'og:description', content: 'Plugin jQuery với nhiều hiệu ứng dành cho Slider và Tabs' },
        { name: 'og:image', content: 'https://haibach.github.io/img/screenshoot.jpg' },
        { name: 'og:url', content: 'https://haibach.github.io/' },
        { name: 'og:type', content: 'article' },
        { name: 'og:locale', content: 'vi' },
      ],
      link: [
        { rel: 'icon', href: "/favicon.ico" },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        // { rel: 'stylesheet preload', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&family=Raleway:wght@100;200;300;400;700&family=Source+Code+Pro:wght@400;500;700&display=swap', as: 'font', type: 'font/woff2', crossorigin: '' },
      ],
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-K64BJL8XGL', async: true },
        { src: '/js/jquery.min.js' },
        { src: '/js/rubyanimate.js' },
        { src: '/js/rubyslider.js' },
      ]
    }
  },
  css: [
    '@/assets/main.scss'
  ],
  // modules: [
  //   '@nuxtjs/google-gtag',
  // ],
  // 'google-gtag': {
  //   id: 'G-K64BJL8XGL', // required
  // }
  // env: {
  //   baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  // }
  // ssr: false
})
