<script setup>
const sliderOptions = {
  fx: 'line',
  speed: 400,
  width: 1140,
}

onMounted(() => {
  setTimeout(() => {
    const $slider = jQuery('#layout-auto-height__slider')
    if ($slider.length) {
      $slider.rubyslider( sliderOptions )
    }
  }, 400)
})
</script>


<template>
  <div class="wrapper">
    <div class="container">
      <TitleHead title="AUTO-HEIGHT LAYOUT" />

      <div id="layout-auto-height__slider" class="slider-preview rs01">
        <a class="rs01imgback" href="/img/animal-focus-free1.jpg">Animal 1</a>
        <a class="rs01imgback" href="/img/animal-focus-free2.jpg">Animal 2</a>
        <a class="rs01imgback" href="/img/animal-focus-free3.jpg">Animal 3</a>
        <a class="rs01imgback" href="/img/animal-focus-free4.jpg">Animal 4</a>
        <a class="rs01imgback" href="/img/animal-focus-free5.jpg">Animal 5</a>
        <a class="rs01imgback" href="/img/animal-focus-free6.jpg">Animal 6</a>
      </div> <!-- /.rs01 -->
    </div>
  </div>
</template>
 