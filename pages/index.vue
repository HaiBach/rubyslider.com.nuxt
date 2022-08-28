<script setup>
definePageMeta({
  key: route => route.fullPath,
  middleware: ['init'] 
})
onMounted(() => {
  // window.scrollTo({ top: 0, behavior: 'instant' })
})
</script>


<template>
<main id="main">
  <MV />
  <OtherLayoutsEffects />
</main>
</template>
