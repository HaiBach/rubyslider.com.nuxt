<script setup>
const sliderOptions = {
  fx: 'line',
  speed: 600,
  widthSlide: 778,
  isPag: false,
  isLoop: false,
  isCenter: false,
  margin: 10,
}

onMounted(() => {
  setTimeout(() => {
    const $slider = jQuery('#layout-outbox__slider')
    if ($slider.length) {
      $slider.rubyslider( sliderOptions )
    }
  }, 400)
})
</script>


<template>
  <div class="wrapper">
    <div class="container">
      <TitleHead title="OUTBOX LAYOUT" />

      <div id="layout-outbox__slider" class="slider-preview rs01">
        <a class="rs01imgback" href="/img/season-landscape2.jpg">Season 2</a>
        <a class="rs01imgback" href="/img/season-landscape3.jpg">Season 3</a>
        <a class="rs01imgback" href="/img/season-landscape4.jpg">Season 4</a>
        <a class="rs01imgback" href="/img/season-landscape5.jpg">Season 5</a>
        <a class="rs01imgback" href="/img/season-landscape6.jpg">Season 6</a>
        <a class="rs01imgback" href="/img/season-landscape7.jpg">Season 7</a>
        <a class="rs01imgback" href="/img/season-landscape8.jpg">Season 8</a>
      </div> <!-- /.rs01 -->
    </div>
  </div>
</template>
 