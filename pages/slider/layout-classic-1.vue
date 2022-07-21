<script setup>
const sliderOptions = {
  fx: "line",
  speed: 600,
  width: 1140,
  height: 600,
  margin: 10,
  imagePosition: 'fill',
  pag: {
    type: "bullet",
    "isMark": true
  },
  isNav: true
}

onMounted(() => {
  setTimeout(() => {
    const $slider = jQuery('#layout-classic__slider')
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
          <h1>CLASSIC 1 LAYOUT</h1>
        </div>
      </div>

      <div id="layout-classic__slider" class="slider-preview rs01 ruby-mark">
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
.container {
  overflow: hidden;
}
.slider-preview .rs01pag {
  position: absolute;
  bottom: 0;
}

.slider-shadow img {
  display: block;
  width: 100%; height: auto;
}

.ruby-mark .rs01pagmark-item {
  background-color: #fff;
  border-color: #fff;
}
</style>
 