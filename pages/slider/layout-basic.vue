<script setup>
const sliderOptions = {
  fx: 'cssOne',
  speed: 800,
  width: 1140,
  height: 550,
  imagePosition: 'fill'
}

const initSetup = () => {
  const $slider = jQuery('.layout-basic__slider')
  if ($slider.length) {
    $slider.rubyslider( sliderOptions )
  }
}

onMounted(() => {
  setTimeout(initSetup, 400)
})
</script>


<template>
<main class="wrapper">
  <div class="container">
    <TitleHead title="LAYOUT CƠ BẢN" />

    <div class="layout-basic__slider rs01">
      <a class="rs01imgback" href="/img/vietnam-large1.jpg">Việt Nam 1</a>
      <a class="rs01imgback" href="/img/vietnam-large2.jpg">Việt Nam 2</a>
      <a class="rs01imgback" href="/img/vietnam-large3.jpg">Việt Nam 3</a>
      <a class="rs01imgback" href="/img/vietnam-large4.jpg">Việt Nam 4</a>
      <a class="rs01imgback" href="/img/vietnam-large5.jpg">Việt Nam 5</a>
      <a class="rs01imgback" href="/img/vietnam-large6.jpg">Việt Nam 6</a>
    </div>
  </div>
</main>
</template>
 