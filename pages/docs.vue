<script setup>
definePageMeta({
  key: route => route.fullPath
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
.docs {
  display: flex;
  padding: 50px 50px;
  &__sidebar {
    width: 300px;
    padding-right: 50px;
    margin-right: 50px;
    border-right: 1px solid rgba($color: #000, $alpha: .1);
  }
  &--ul-lv1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    a {
      margin-bottom: 15px;
      color: #666;
      font-size: 14px;
      text-decoration: none;
      &:hover {
        color: #000;
      }
      &.router-link-active {
        color: var(--color-primary);
        font-weight: 700;
        text-decoration: underline;
      }
    }
  }
}
</style>
  