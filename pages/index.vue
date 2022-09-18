<script setup>
definePageMeta({
  key: route => route.fullPath,
  middleware: ['init']
})
onMounted(() => {
})
</script>


<template>
<main id="main">
  <MV />
  <OtherLayoutsEffects />
</main>
</template>
