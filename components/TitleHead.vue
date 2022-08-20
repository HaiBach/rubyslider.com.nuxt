<script setup>
const props = defineProps({
  title: String
})
</script>


<template>
  <div class="title-head">
    <div class="title-head__inner">
      <div v-if="props.title" class="title-head__title">
        <h1 v-html="props.title"></h1>
      </div>
      <div v-if="this.$slots.title" class="title-head__title">
        <slot name="title"></slot>
      </div>
      <div v-if="this.$slots.desc" class="title-head__desc">
        <slot name="desc"></slot>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.title-head {
  text-align: center;
  margin-bottom: 60px;
  &__title {
    h1, h2, h3 {
      margin-bottom: 0;
      line-height: 1.1;
      letter-spacing: 1px;
    }
    h1 {
      // font-size: 62px;
    }
    h2 {
      font-size: 54px;
    }
  }
  &__desc {
    position: relative;
    margin-top: 10px;
    padding-top: 12px;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 100px;
      border-top: 1px dashed var(--color-primary);
      transform: translate3d(-50%,0,0);
    }
    p {
      font-size: 18px;
    }
  }
  /** MEDIA **/
  @media (max-width: 767px) {
    &__title {
      h1 {
        font-size: 35px;
      }
      h2 {
        font-size: 28px;
        font-weight: 200;
      }
    }
  }
  @media (max-width: 575px) {
    &__title {
      h1 {
        font-size: 28px;
        font-weight: 200;
      }
      h2 {
        font-size: 24px;
      }
    }
  }
}
</style>
