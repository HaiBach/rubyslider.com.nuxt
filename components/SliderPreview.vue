<script setup>
onMounted(() => {
  const sliderPreview = jQuery('.slider-preview').rubyslider({
    fx: "coverflow3D",
    coverflow3D: {
      widthSlide: [0.8, [1040, 1200, 10000]],
      opacity: 0.3
    },
    speed: 800,
    width: 1140,
    imageback: {
      position: "fit"
    },
    isKeyboard: true,
    isSlideshow: true,
    slideshow: {
      delay: 5000,
      isAutoRun: false
    },
    timerArc: {
      stroke: "#cc0055"
    },
    video: {
      isPauseThenRemove: true
    }
  })
})
</script>


<template>
  <div class="wrapper">

    <div class="title-head">
      <div class="title-head-inner">
          <h1>PLUGIN PREVIEW</h1>
          <p>Best slider &amp; tabs premium jQuery plugin</p>
      </div>
    </div>


    <div class="container">
      <div class="slider-preview rs01 rs01timer-arcTop">
        <div class="rs01slide">
          <img class="rs01imgback" src="~/assets/img/vietnam-large1.jpg" alt="Viet Nam 1">
        </div>
        <div class="rs01slide">
          <img class="rs01imgback" src="~/assets/img/vietnam-large2.jpg" alt="Viet Nam 2">
        </div>
        <div class="rs01slide">
          <img class="rs01imgback" src="~/assets/img/vietnam-large3.jpg" alt="Viet Nam 3">
        </div>
        <div class="rs01slide">
          <img class="rs01imgback" src="~/assets/img/vietnam-large4.jpg" alt="Viet Nam 4">
        </div>
        <div class="rs01slide">
          <img class="rs01imgback" src="@/assets/img/video-preview.jpg" data-video-link="https://www.youtube.com/watch?v=2O0nz6o_oAE" alt=">Pictures of South East Asia">
        </div>
      </div>
    </div>

  </div>
</template>


<style scoped>
.wrapper {
  overflow: hidden;
  padding-bottom: 100px;
}
.title-head h1 {
  margin-bottom: 15px;
  font-size: 62px;
  letter-spacing: 4px;
}
.title-head p {
  font-size: 18px;
}
</style>

<style lang="scss">
.slider-preview {
  > .rs01viewport {
    overflow: visible;
  }
  .rs01slide {
    border-radius: 4px;
  }
  .rs01ss-control {
    right: 5px; top: 5px;
  }
  .rs01iframe {
    display: block;
    margin-bottom: 0;
  }
}
</style>