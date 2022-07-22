<script setup>
const sliderOptions = {
  optionsPlus: 'carousel',
  widthSlide: 300,
  height: 450,
  imagePosition: 'fit'
}

onMounted(() => {
  setTimeout(() => {
    const $slider = jQuery('#layout-carousel__slider')
    if ($slider.length) {
      $slider.rubyslider( sliderOptions )
    }
  }, 400)
})
</script>


<template>
  <div class="wrapper">
    <div class="container">

      <div class="title-head">
        <div class="title-head-inner">
          <h1>CAROUSEL LAYOUT</h1>
        </div>
      </div>

      <div id="layout-carousel__slider" class="slider-preview rs01">
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
  </div>
</template>


<style>
.slider-preview > .rs01viewport {
  overflow: visible;
}
.slider-preview .rs01slide {
  border-radius: 8px;
}
</style>
 