<script setup>
definePageMeta({
  middleware: ['init']
})
const sliderOptions = {
  fx: 'line',
  speed: 6000,
  fxEasing: 'linear',
  widthSlide: 360,
  height: 500,
  margin: 20,
  isSwipe: false,
  isSlideshow: true,
  slideshow: {
    delay: 0
  },
  isPag: false,
}
const initSetup = () => {
  jQuery('#main .rs01nav').remove()
  jQuery('#main .rs01pag').remove()
  jQuery('#main .rs01overlay-ghost').remove()
  jQuery('#main .rs01imgback').css({ width: '', height: '', left: '', top: '' })
  
  const rubyLayoutCarousel = jQuery('.layout-carousel__slider').rubyslider( sliderOptions )
}
onMounted(() => {
  setTimeout(initSetup, 400)
})
</script>


<template>
<main id="main">
  <section class="layout-carousel wrapper">
    <div class="container">
      <TitleHead>
        <template #title>
          <h1>LAYOUT BĂNG CHUYỀN</h1>
        </template>
      </TitleHead>

      <div class="layout-carousel__slider slider-preview rs01">
        <a class="rs01imgback" href="/img/season-landscape1.jpg">Season 1</a>
        <a class="rs01imgback" href="/img/season-landscape2.jpg">Season 2</a>
        <a class="rs01imgback" href="/img/season-landscape3.jpg">Season 3</a>
        <a class="rs01imgback" href="/img/season-landscape4.jpg">Season 4</a>
        <a class="rs01imgback" href="/img/season-landscape5.jpg">Season 5</a>
        <a class="rs01imgback" href="/img/season-landscape6.jpg">Season 6</a>
        <a class="rs01imgback" href="/img/season-landscape7.jpg">Season 7</a>
        <a class="rs01imgback" href="/img/season-landscape8.jpg">Season 8</a>
      </div>
    </div>
  </section>

  <Guide>
    <template #gioi-thieu>
      <p>Layout băng chuyền.</p>
      </template>
    <template #thiet-lap>
      <pre class="codeprint">{{ sliderOptions }}</pre>
    </template>
    <template #nav>
      <ButtonPrevNext
        prev-name="Layout chính giữa"
        prev-to="/slider/layout-center"
        next-name="Layout bên ngoài khung"
        next-to="/slider/layout-outbox" />
    </template>
  </Guide>
</main>
</template>


<style lang="scss">
.layout-carousel {
  overflow: hidden;
  .rs01 {
    .rs01viewport {
      overflow: visible;
    }
    .rs01ss-control {
      display: none;
    }
  }
}
</style>
 