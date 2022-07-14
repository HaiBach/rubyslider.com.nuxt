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
    { rel: 'icon', href: "/favicon.ico" }
  ],
  script: [
    { src: './assets/js/jquery.min.js', mode: 'client' },
    { src: './assets/js/rubymenu2.js', mode: 'client' },
  ]
})
</script>


<template>
  <Header></Header>
  <NuxtPage />
  <!-- <Footer /> -->
</template>