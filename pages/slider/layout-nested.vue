<script setup>
const sliderOptions = {
  fx: 'cssOne',
  speed: 800,
  width: 1140,
  height: 550,
  imagePosition: 'fill'
}
const sliderOptions2 = {
  fx: 'line',
  speed: 400,
  width: 1140,
  height: 550,
  imagePosition: 'fill',
  margin: 5,
  pag: {
    type: "bullet",
    isMark: true
  }
}

onMounted(() => {
  setTimeout(() => {
    const $slider = jQuery('#layout-nested__slider')
    const $sliderNested = jQuery('#layout-nested__slider2')
    if ($slider.length) {
      $slider.rubyslider( sliderOptions )
    }
    if ($sliderNested.length) {
      $sliderNested.rubyslider( sliderOptions2 )
    }
  }, 400)
})
</script>


<template>
  <div class="wrapper">
    <div class="container">
      <TitleHead title="SLIDER NESTED LAYOUT" />

      <div id="layout-nested__slider" class="slider-preview rs01">
        <div>
          <a class="rs01imgback" href="/img/vietnam-large1.jpg">Việt Nam 1</a>
          <div id="layout-nested__slider2" class="rs01 ruby-mark">
            <a class="rs01imgback" href="/img/season-landscape2.jpg">Season 2</a>
            <a class="rs01imgback" href="/img/season-landscape4.jpg">Season 4</a>
            <a class="rs01imgback" href="/img/season-landscape6.jpg">Season 6</a>
            <a class="rs01imgback" href="/img/season-landscape7.jpg">Season 7</a>
          </div>
        </div>
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
#layout-nested__slider2 {
  position: absolute;
  left: 10px; top: 10px;
  width: 400px;
  padding: 5px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 2px hsla(0,0%,0%,.35);
  
  /** Media */
  @media only screen and (max-width: 959px) {
    width: 300px;
  }
  @media only screen and (max-width: 479px) {
    position: static;
    width: auto;
    margin-top: 5px;
    border: 1px solid #e5e5e5;
    box-shadow: none;
  }
}
</style>
 