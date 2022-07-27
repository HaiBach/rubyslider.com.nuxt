<script setup>
const sliderOptions = {
  fx: 'line',
  speed: 600,
  width: 1140,
  height: 550,
  margin: 10,
  imagePosition: 'fill'
}

onMounted(() => {
  setTimeout(() => {
    const $slider = jQuery('#effect-line__slider')
    if ($slider.length) {
      $slider.rubyslider( sliderOptions )
    }
  }, 400)
})
</script>


<template>
  <div class="wrapper">
    <div class="container">
      <TitleHead title="LINE EFFECT" />

      <div id="effect-line__slider" class="slider-preview rs01">
        <a class="rs01imgback" href="/img/vietnam-large1.jpg">Việt Nam 1</a>
        <a class="rs01imgback" href="/img/vietnam-large2.jpg">Việt Nam 2</a>
        <a class="rs01imgback" href="/img/vietnam-large3.jpg">Việt Nam 3</a>
        <a class="rs01imgback" href="/img/vietnam-large4.jpg">Việt Nam 4</a>
        <a class="rs01imgback" href="/img/vietnam-large5.jpg">Việt Nam 5</a>
        <a class="rs01imgback" href="/img/vietnam-large6.jpg">Việt Nam 6</a>
      </div> <!-- /.rs01 -->
    </div>
  </div>
</template>


<style lang="scss">
#effect-line__slider {
  .rs01viewport {
    overflow: hidden;
  }
} 
</style>
 