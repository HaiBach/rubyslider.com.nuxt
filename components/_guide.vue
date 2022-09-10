<script setup>
const props = defineProps(['slider-options'])
const sliderOptions = props['slider-options']
</script>


<template>
<section class="guide">
  <div class="container">
    <div class="hr hr--circle"></div>
    <h2>❖ Giới thiệu</h2>
    <slot name="gioi-thieu"></slot>
    
    <LineSpace />

    <h2>❖ Thiết lập slider</h2>
    <p>Các bạn có thể được hướng dẫn thiết lập slider chi tiết ở trang <NuxtLink to="/docs/quick-start">hướng dẫn</NuxtLink> này.<br>Dưới đây là options hiện tại của slider phía trên:</p>
    <slot name="thiet-lap"></slot>
    <!-- <pre class="codeprint">{{ sliderOptions }}</pre> -->

    <slot name="nav"></slot>
  </div>
</section>
</template>


<style lang="scss">
.guide {
  padding-bottom: 60px;
  background-color: rgba($color: #000, $alpha: .05);
  .hr {
    margin-bottom: 60px;
  }
  h2 {
    margin-bottom: 20px;
  }
  p {
    a {
      font-weight: bold;
    }
  }
  li {
    margin-bottom: 5px;
  }
  .btn {
    margin-bottom: 20px;
  }
}
</style>
