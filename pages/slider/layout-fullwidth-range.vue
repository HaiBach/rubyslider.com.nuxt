<script setup>
const sliderOptions = {
  fx: 'rectRun',
  speed: 800,
  width: 1140,
  // height: 620,
  // imagePosition: 'fill',
  widthRange: [
    [748, 768, 959],
    [940, 960, 1200],
  ],
  padding: [
    [10, 0, 479],
    [20, 480, 767]
  ]
}

onMounted(() => {
  setTimeout(() => {
    const $slider = jQuery('#layout-fullwidth__slider')
    if ($slider.length) {
      $slider.rubyslider( sliderOptions )
    }
  }, 400)
})
</script>``


<template>
  <div class="wrapper">
    <div class="container">
      <TitleHead title="FULLWIDTH RANGE LAYOUT" />
    </div>

    <div id="layout-fullwidth__slider" class="slider-preview rs01">
      <a class="rs01imgback" href="/img/vietnam-1920-600-1.jpg">Việt Nam 1</a>
      <a class="rs01imgback" href="/img/vietnam-1920-600-2.jpg">Việt Nam 2</a>
      <a class="rs01imgback" href="/img/vietnam-1920-600-3.jpg">Việt Nam 3</a>
      <a class="rs01imgback" href="/img/vietnam-1920-600-4.jpg">Việt Nam 4</a>
      <a class="rs01imgback" href="/img/vietnam-1920-600-5.jpg">Việt Nam 5</a>
      <a class="rs01imgback" href="/img/vietnam-1920-600-6.jpg">Việt Nam 6</a>
    </div> <!-- /.rs01 -->

    <div id="ruler">
      <div class="container">
        <div id="ruler__line"></div>
        <div id="ruler__note">Image always align when resize</div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
#layout-fullwidth__slider {
  .rs01slide {
    border-radius: 0;
  }
}

#ruler {
  position: fixed;
  left: 0; top: 0;
  width: 100%; height: 0;
  z-index: 99;
  transform: translateZ(0);
  .container {
    position: relative;
    height: 0;
  }
  &__line {
    width: 0; height: 10000px;
    border-left: 1px dashed #ccc;
    border-left-color: hsla(0,0%,0%,.75);
  }
  &__note {
    // display: none;
    position: absolute;
    left: 12px;
    top: 350px;
    padding: 7px 15px;
    background-color: #f5f5f5;
    border-radius: 6px;
    font-size: .85em;
    font-weight: bold;
    box-shadow: 2px 2px 0 hsla(0,0%,0%,.5);
    &::after {
      content: '';
      position: absolute;
      left: -12px;
      top: 50%;
      display: block;
      width: 0;
      height: 0;
      margin-top: -6px;
      border: 6px solid transparent;
      border-right-color: #f5f5f5;
    }
  }

  @media only screen and (max-width: 767px) {
    &__note {
      display: none;
    }
  }
}
</style>
 