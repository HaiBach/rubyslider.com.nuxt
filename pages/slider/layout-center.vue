<script setup>
const sliderOptions = {
  fx: 'line',
  speed: 600,
  width: 1140,
  height: 600,
  widthSlide: [
    0.7,
    [720, 768, 959],
    [940, 960, 10000]
  ],
  margin: [
    [5, 0, 479],
    10,
    [20, 960, 10000]
  ],
  imagePosition: 'fill',
}

onMounted(() => {
  setTimeout(() => {
    const $slider = jQuery('#layout-center__slider')
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
          <h1>CENTER LAYOUT</h1>
        </div>
      </div>

      <div id="layout-center__slider" class="slider-preview rs01">
        <a class="rs01imgback" href="/img/vietnam-large1.jpg">Việt Nam 1</a>
        <a class="rs01imgback" href="/img/vietnam-large2.jpg">Việt Nam 2</a>
        <a class="rs01imgback" href="/img/vietnam-large3.jpg">Việt Nam 3</a>
        <a class="rs01imgback" href="/img/vietnam-large4.jpg">Việt Nam 4</a>
        <a class="rs01imgback" href="/img/vietnam-large5.jpg">Việt Nam 5</a>
        <a class="rs01imgback" href="/img/vietnam-large6.jpg">Việt Nam 6</a>
      </div>

    </div>
  </div>
</template>


<style scoped>
.wrapper {
  overflow: hidden;
}
</style>
 