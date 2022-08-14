<script setup>
const props = defineProps({
  title: String
})
</script>


<template>
  <div class="title-head">
    <div class="title-head__inner">
      <div class="title-head__title">
        <slot name="title"></slot>
      </div>
      <div v-if="this.$slots.desc" class="title-head__desc">
        <slot name="desc"></slot>
      </div>
    </div>
  </div>
</template>
