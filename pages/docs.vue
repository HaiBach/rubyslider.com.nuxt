<script setup>
definePageMeta({
  key: route => route.fullPath,
})
useHead({
  title: 'Hướng dẫn | RubySlider',
  meta: [
    { name: 'description', content: '' },
    { name: 'og:title', content: 'Hướng dẫn | RubySlider' },
    { name: 'og:description', content: '' },
    { name: 'og:image', content: '' },
    { name: 'og:type', content: 'article' }
  ],
  bodyAttrs: {
    class: 'page-docs'
  }
})
</script>


<template>
<main id="main">
  <section class="docs">
    <div class="docs__sidebar">
      <nav>
        <div class="docs--ul-lv1">
          <NuxtLink to="/docs/quick-start">Cài đặt nhanh</NuxtLink>
          <NuxtLink to="/docs/options">Options</NuxtLink>
        </div>
      </nav>
    </div>
    <div class="docs__content">
      <NuxtPage />
    </div>
  </section>
</main>
</template>


<style lang="scss">
</style>
