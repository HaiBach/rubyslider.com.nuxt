<script setup>
const props = defineProps({
  title: String
})
</script>


<template>
  <div class="title-head">
    <div class="title-head-inner">
      <h1>{{ props.title }}</h1>
    </div>
  </div>
</template>
