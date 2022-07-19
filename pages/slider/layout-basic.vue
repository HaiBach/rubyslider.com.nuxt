<script setup>
const sliderOptions = {
  fx: "cssOne",
  speed: 800,
  width: 940
}

onMounted(() => {
  setTimeout(() => {
    const $slider = jQuery('#layout-basic__slider')
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
          <h1>BASIC LAYOUT</h1>
        </div>
      </div>

      <div id="layout-basic__slider" class="slider-preview rs01">
        <a class="rs01imgback" href="/img/vietnam1.jpg">Việt Nam 1</a>
        <a class="rs01imgback" href="/img/vietnam2.jpg">Việt Nam 2</a>
        <a class="rs01imgback" href="/img/vietnam3.jpg">Việt Nam 3</a>
        <a class="rs01imgback" href="/img/vietnam4.jpg">Việt Nam 4</a>
        <a class="rs01imgback" href="/img/vietnam5.jpg">Việt Nam 5</a>
        <a class="rs01imgback" href="/img/vietnam6.jpg">Việt Nam 6</a>
      </div>

    </div>
  </div>
</template>
 