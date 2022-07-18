<script setup>
definePageMeta({
  key: route => route.fullPath
})

onMounted(() => {
  console.log('# page index mounted')
})
</script>


<template>
  <main>
    <SliderPreview />
  </main>
</template>
