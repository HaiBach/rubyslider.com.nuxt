<script setup>
const sliderOptions = {
  fx: 'cssOne',
  speed: 800,
  width: 1140,
  height: 636,
  imagePosition: 'fill'
}

onMounted(() => {
  setTimeout(() => {
    const $slider = jQuery('#layout-device__slider')
    if ($slider.length) {
      $slider.rubyslider( sliderOptions )
    }
  }, 400)
})
</script>


<template>
  <div class="wrapper">
    <div class="container">
      <TitleHead title="DEVICE LAYOUT" />
      
      <div class="layout-device">
        <div class="device">
          <img src="/img/ipad-landscape.png" alt="iPad device">
        </div>

        <div id="layout-device__slider" class="slider-preview rs01">
          <div class="rs01slide">
            <a class="rs01imgback" href="/img/vietnam-large1.jpg">Việt Nam 1</a>
          </div>
          <div class="rs01slide">
            <a class="rs01imgback" href="/img/vietnam-large2.jpg">Việt Nam 2</a>
          </div>
          <div class="rs01slide">
            <a class="rs01imgback" href="/img/vietnam-large3.jpg">Việt Nam 3</a>
          </div>
          <div class="rs01slide">
            <a class="rs01imgback" href="/img/vietnam-large4.jpg">Việt Nam 4</a>
          </div>
          <div class="rs01slide">
            <a class="rs01imgback" href="/img/vietnam-large5.jpg">Việt Nam 5</a>
          </div>
          <div class="rs01slide">
            <a class="rs01imgback" href="/img/vietnam-large6.jpg">Việt Nam 6</a>
          </div>
        </div> <!-- /.rs01 -->
      </div>
    </div>
  </div>
</template>


<style scoped>
.layout-device {
  position: relative;
  margin-bottom: 100px;
}
.device {
  overflow: hidden;
  height: 550px;
  box-shadow: inset 0 -10px 25px -20px hsla(0,0%,0%,.5);
  border-bottom: 1px solid #f9f9f9;
}
.device > img {
  display: block;
  width: 100%;
  height: auto;
}
/* SLIDER PREVIEW */
.slider-preview {
  position: absolute;
  left: 112px;
  top: 40px;
  width: 914px;
}
.slider-preview .rs01slide {
  border-radius: 0;
}
.slider-preview .rs01thumbnail .rs01pagitem {
  width: 100px;
  height: 70px;
}

/* MEDIA WIDTH */
@media only screen and (min-width: 768px) and (max-width: 959px) {
  .device {
    height: 440px;
  }
  .slider-preview {
    left: 73px;
    top: 26px;
    width: 600px;
  }
  .slider-preview .rs01thumbnail .rs01pagitem {
    width: 80px;
    height: 60px;
  }
}
@media only screen and (max-width: 767px) {
  .device {
    display: none;
  }
  .slider-preview {
    position: static;
    width: auto;
  }
}
</style>
 