<script setup>
definePageMeta({
  middleware: ['init']
})
const sliderOptions = {
  fx: 'line',
  speed: 600,
  width: 940,
  widthSlide: '80%',
  margin: 10,
  isPag: false,
  isLoop: false,
  isCenter: false,
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
          <h1>LAYOUT BÊN <br class="br--max-xs">NGOÀI KHUNG</h1>
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

  <Guide>
    <template #gioi-thieu>
      <p>Layout bên ngoài khung.</p>
      </template>
    <template #thiet-lap>
      <pre class="codeprint">{{ sliderOptions }}</pre>
    </template>
    <template #nav>
      <ButtonPrevNext
        prev-name="Layout băng chuyền"
        prev-to="/slider/layout-carousel"
        next-name="Layout trên thiết bị"
        next-to="/slider/layout-device" />
    </template>
  </Guide>
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
 