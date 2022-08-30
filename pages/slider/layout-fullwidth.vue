<script setup>
const sliderOptions = {
  fx: 'rectRun',
  speed: 800,
  width: 1140,
  height: 620,
  imageback: {
    position: 'fill'
  }
}

onMounted(() => {
  setTimeout(() => {
    const $slider = jQuery('#layout-fullwidth__slider')
    if ($slider.length) {
      $slider.rubyslider( sliderOptions )
    }
  }, 400)
})
</script>


<template>
  <div class="wrapper">
    <div class="container">
      <TitleHead title="FULLWIDTH LAYOUT" />
    </div>

    <div id="layout-fullwidth__slider" class="slider-preview rs01">
      <a class="rs01imgback" href="/img/vietnam-large1.jpg">Việt Nam 1</a>
      <a class="rs01imgback" href="/img/vietnam-large2.jpg">Việt Nam 2</a>
      <a class="rs01imgback" href="/img/vietnam-large3.jpg">Việt Nam 3</a>
      <a class="rs01imgback" href="/img/vietnam-large4.jpg">Việt Nam 4</a>
      <a class="rs01imgback" href="/img/vietnam-large5.jpg">Việt Nam 5</a>
      <a class="rs01imgback" href="/img/vietnam-large6.jpg">Việt Nam 6</a>
    </div> <!-- /.rs01 -->
  </div>
</template>


<style lang="scss">
#layout-fullwidth__slider {
  .rs01slide {
    border-radius: 0;
  }
}
</style>
 