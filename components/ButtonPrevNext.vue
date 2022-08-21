<script setup>
const props = defineProps(['prev-name', 'prev-to', 'next-name', 'next-to'])
console.log(props.prevName)
</script>


<template>
<div class="btn btn--btns btn--left">
  <NuxtLink v-if="props.prevTo" :to="props.prevTo" class="">
    <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16"><path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/></svg></i>
    <span>{{ props.prevName }}</span>
  </NuxtLink>
  <NuxtLink v-if="props.nextTo" :to="props.nextTo" class="btn--primary">
    <span>{{ props.nextName }}</span>
    <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16"><path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/></svg></i>
  </NuxtLink>
</div>
</template>
