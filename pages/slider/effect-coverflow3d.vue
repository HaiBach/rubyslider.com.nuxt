<script setup>
const sliderOptions = {
  fx: 'coverflow3D',
  coverflow3D: {
    widthSlide: [940, '80%'],
    opacity: .7
  },
  speed: 800,
  width: 1880,
  // height: 550,
  // margin: 10,
  // imagePosition: 'fill',
}

onMounted(() => {
  setTimeout(() => {
    const $slider = jQuery('#effect-line__slider')
    if ($slider.length) {
      $slider.rubyslider( sliderOptions )
    }
  }, 600)
})
</script>


<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <TitleHead title="COVERFLOW 3D EFFECT" />
      </div>

      <div id="effect-line__slider" class="slider-preview rs01">
        <a class="rs01imgback" href="/img/vietnam-large1.jpg">Việt Nam 1</a>
        <a class="rs01imgback" href="/img/vietnam-large2.jpg">Việt Nam 2</a>
        <a class="rs01imgback" href="/img/vietnam-large3.jpg">Việt Nam 3</a>
        <a class="rs01imgback" href="/img/vietnam-large4.jpg">Việt Nam 4</a>
        <a class="rs01imgback" href="/img/vietnam-large5.jpg">Việt Nam 5</a>
        <a class="rs01imgback" href="/img/vietnam-large6.jpg">Việt Nam 6</a>
      </div> <!-- /.rs01 -->
    </div>

    <div class="coverflow3d">
      <div class="container">
        <div class="hr circle"></div>
        <div class="coverflow3d__title">
          <h1 class="">CUSTOM STYLE OF EFFECT</h1>
        </div>

        <!-- Template gallery -->
        <div class="coverflow3d__table row">

        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.fx {
  margin-bottom: 70px;
}
.fx-live .rs01pag {
  position: absolute;
  bottom: 0;
}


/* FX OPTIONS */
.fx-option {
  padding-left: 20px;
  margin-top: 10px; margin-bottom: 10px;
  border-left: 1px dashed #999;
  font-size: 12px;
  line-height: 1.6em;
}


/* BUTTON SELECT */
.fx-select {
  display: block;
  padding: 15px 20px;
  border: 1px solid #999;
  border-radius: 4px;
  color: #999;
  text-align: center;
  font-size: 1.2em;
  letter-spacing: 2px;
  cursor: pointer;
}
.fx-select:hover {
  background-color: #666;
  border-color: #666;
  color: #fff;
}
.fx-select.actived {
  background-color: #cc0055;
  border-color: #cc0055;
  color: #fff;
}
</style>
 