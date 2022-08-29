<script setup>
definePageMeta({
  middleware: ['init']
})
const sliderOptions = {
  fx: 'line',
  speed: 600,
  widthSlide: 778,
  isPag: false,
  isLoop: false,
  isCenter: false,
  margin: 10,
}
const initSetup = () => {
  jQuery('#main .rs01nav').remove()
  jQuery('#main .rs01pag').remove()
  jQuery('#main .rs01overlay-ghost').remove()
  jQuery('#main .rs01imgback').css({ width: '', height: '', left: '', top: '' })
  
  const rubyLayoutOutbox = jQuery('.layout-outbox__slider').rubyslider( sliderOptions )
}
onMounted(() => {
  setTimeout(initSetup, 400)
})
</script>


<template>
<main id="main">
  <section class="layout-outbox wrapper">
    <div class="container">
      <TitleHead>
        <template #title>
          <h1>LAYOUT BÊN NGOÀI HỘP</h1>
        </template>
      </TitleHead>

      <div class="layout-outbox__slider slider-preview rs01">
        <a class="rs01imgback" href="/img/season-landscape2.jpg">Season 2</a>
        <a class="rs01imgback" href="/img/season-landscape3.jpg">Season 3</a>
        <a class="rs01imgback" href="/img/season-landscape4.jpg">Season 4</a>
        <a class="rs01imgback" href="/img/season-landscape5.jpg">Season 5</a>
        <a class="rs01imgback" href="/img/season-landscape6.jpg">Season 6</a>
        <a class="rs01imgback" href="/img/season-landscape7.jpg">Season 7</a>
        <a class="rs01imgback" href="/img/season-landscape8.jpg">Season 8</a>
      </div> <!-- /.rs01 -->
    </div>
  </section>

  <section class="guide">
    <div class="container">
      <div class="hr hr--circle"></div>
      <h2>❖ Giới thiệu</h2>
      <p>Layout bên ngoài hộp.</p>
      
      <LineSpace />

      <h2>❖ Thiết lập slider</h2>
      <p>Các bạn có thể được hướng dẫn thiết lập slider chi tiết ở trang <NuxtLink to="/documentation">hướng dẫn</NuxtLink> này.<br>Dưới đây là options hiện tại của slider phía trên:</p>
      <pre class="codeprint">{{ sliderOptions }}</pre>

      <ButtonPrevNext
        prev-name="Layout băng chuyền"
        prev-to="/slider/layout-carousel"
        next-name="Layout trên thiết bị"
        next-to="/slider/layout-device" />
    </div>
  </section>
</main>
</template>


<style lang="scss">
.layout-outbox {
  overflow: hidden;
  .rs01 {
    .rs01viewport {
      overflow: visible;
    }
  }
}
</style>
 