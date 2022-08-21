<script setup>
const sliderOptions = {
  fx: 'line',
  speed: 600,
  width: 1140,
  height: 600,
  margin: 10,
  imagePosition: 'fill',
  pag: {
    type: 'tabs'
  }
}

onMounted(() => {
  setTimeout(() => {
    const $slider = jQuery('#layout-classic__slider')
    if ($slider.length) {
      $slider.rubyslider( sliderOptions )
    }
  }, 400)
})
</script>


<template>
  <div class="wrapper">
    <div class="container">

      <div class="title-head">
        <div class="title-head-inner">
          <h1>CLASSIC 2 LAYOUT</h1>
        </div>
      </div>

      <div id="layout-classic__slider" class="layout-classic__slider slider-preview rs01 ruby-mark">
        <div class="rs01viewport">
          <div class="rs01slide">
            <a class="rs01imgback" href="/img/vietnam-large1.jpg">Việt Nam 1</a>
            <div class="rs01pagitem">Ha Noi</div>
          </div>
          <div class="rs01slide">
            <a class="rs01imgback" href="/img/vietnam-large2.jpg">Việt Nam 2</a>
            <div class="rs01pagitem">Ha Long Bay</div>
          </div>
          <div class="rs01slide">
            <a class="rs01imgback" href="/img/vietnam-large3.jpg">Việt Nam 3</a>
            <div class="rs01pagitem">Nha Trang</div>
          </div>
          <div class="rs01slide">
            <a class="rs01imgback" href="/img/vietnam-large4.jpg">Việt Nam 4</a>
            <div class="rs01pagitem">Ho Chi Minh</div>
          </div>
          <div class="rs01slide">
            <a class="rs01imgback" href="/img/vietnam-large5.jpg">Việt Nam 5</a>
            <div class="rs01pagitem">Son Doong Cave</div>
          </div>
          <div class="rs01slide">
            <a class="rs01imgback" href="/img/vietnam-large6.jpg">Việt Nam 6</a>
            <div class="rs01pagitem">Viet Nam</div>
          </div>
        </div>
        <div class="rs01pag"></div>
      </div>

    </div>
  </div>
</template>


<style scoped>
.container {
  overflow: hidden;
}
.layout-classic__slider {
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 16px;
}
.layout-classic__slider .rs01pag.rs01pag-hor {
  margin-top: 10px;
}
.layout-classic__slider .rs01pagitem {
  border-radius: 4px;
  color: #333;
}
.layout-classic__slider .rs01pagitem:hover {
  color: #cc0055;
}
.layout-classic__slider .rs01pagitem.rs01cur {
  background-color: #cc0055;
  color: #fff;
}

@media only screen and (max-width: 767px) {
  .layout-classic__slider .rs01pagitem {
      padding: 15px !important;
  }
}
@media only screen and (max-width: 575px) {
  .layout-classic__slider {
      padding: 0;
      border-width: 0;
  }
}
</style>
 