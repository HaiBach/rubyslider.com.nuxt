<script setup>
definePageMeta({
  key: route => route.fullPath,
  middleware: ['init']
})

const baseURL = (typeof window === 'undefined') ? 'http://localhost:3000' : window.location.origin 
useHead({
  bodyAttrs: {
    class: 'page-top'
  }
})
</script>


<template>
<main id="main">
  <MV />
  <OtherLayoutsEffects />
</main>
</template>
