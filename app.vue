<script setup>
import './assets/main.scss'

useHead({
  title: 'RubySlider | Nguyễn Văn Thy',
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  meta: [
    { name: 'description', content: 'Best slider and tabs jquery plugin' },
  ],
  link: [
    { rel: 'icon', href: "/favicon.ico" },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700;800&family=Raleway:wght@100;300&family=Source+Code+Pro:wght@400;500;700&display=swap' },
  ],
  script: [
    { src: './assets/js/jquery.min.js', mode: 'client' },
    { src: './assets/js/rubymenu2.js', mode: 'client' },
    { src: './assets/js/rubyanimate.js', mode: 'client' },
    { src: './assets/js/rubyslider.js', mode: 'client' },
  ]
})
</script>


<template>
  <Header />
  <main>
    <NuxtPage />
  </main>
  <Footer />
</template>