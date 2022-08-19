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
function randomNum() {
  return Math.round(Math.random() * 10000000)
}
onMounted(() => {
  // setTimeout(initSetup, 400)
  initSetup()
})
</script>


<template>
<main class="wrapper">
  <div class="container">
    <TitleHead title="LAYOUT CƠ BẢN" />

    <div class="layout-basic__slider rs01">
      <a class="rs01imgback" :href="'https://picsum.photos/1140/600?random=' + randomNum()">Lorem Picsum 1</a>
      <a class="rs01imgback" :href="'https://picsum.photos/1140/600?random=' + randomNum()">Lorem Picsum 2</a>
      <a class="rs01imgback" :href="'https://picsum.photos/1140/600?random=' + randomNum()">Lorem Picsum 3</a>
      <a class="rs01imgback" :href="'https://picsum.photos/1140/600?random=' + randomNum()">Lorem Picsum 4</a>
      <a class="rs01imgback" :href="'https://picsum.photos/1140/600?random=' + randomNum()">Lorem Picsum 5</a>
      <a class="rs01imgback" :href="'https://picsum.photos/1140/600?random=' + randomNum()">Lorem Picsum 6</a>
    </div>
  </div>
</main>
</template>
 