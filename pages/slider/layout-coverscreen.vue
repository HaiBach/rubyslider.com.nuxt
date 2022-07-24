<script setup>
const sliderOptions = {
  fx: 'randomMath',
  speed: 6000,
  width: 940,
  imagePosition: 'fill',
  isSwipe: false,
  isPag: false,
  isFullscreen: true,
  offsetBy: '.header',
  isSlideshow: true,
  slideshow: {
    delay: 3000,
    timer: 'line',
    isPlayPause: true
  }
}

onMounted(() => {
  setTimeout(() => {
    const $slider = jQuery('#layout-coverscreen__slider')
    if ($slider.length) {
      $slider.rubyslider( sliderOptions )
    }
  }, 400)
})
</script>


<template>
  <div>
    <div class="layout-coverscreen">
      <div id="layout-coverscreen__slider" class="slider-preview rs01">
        <a class="rs01imgback" href="/img/vietnam-large1.jpg">Việt Nam 1</a>
        <a class="rs01imgback" href="/img/vietnam-large2.jpg">Việt Nam 2</a>
        <a class="rs01imgback" href="/img/vietnam-large3.jpg">Việt Nam 3</a>
        <a class="rs01imgback" href="/img/vietnam-large4.jpg">Việt Nam 4</a>
        <a class="rs01imgback" href="/img/vietnam-large5.jpg">Việt Nam 5</a>
        <a class="rs01imgback" href="/img/vietnam-large6.jpg">Việt Nam 6</a>
      </div> <!-- /.rs01 -->

      <div class="main-content">
          <div class="content-inner">
              <h1>COVER-SCREEN LAYOUT</h1>
          </div>
      </div>
    </div>

    <div class="wrapper">
      <div class="container">
        <h2 style="text-align: center;">OTHER CONTENT</h2>
        
        <div class="font-blokk">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt id incidunt officia facere nisi, molestias blanditiis explicabo placeat nemo eveniet sapiente excepturi repellat amet deleniti magni similique quaerat earum corporis?</p>
            <p>Placeat commodi, quod fugit adipisci consectetur voluptatum? Ex laudantium eum quisquam beatae illum velit nostrum, consectetur voluptatibus quis eligendi cum laboriosam aperiam odio necessitatibus suscipit ipsa tenetur, magni, harum ut!</p>
            <p>Dolor recusandae quae, quam fuga, illum natus, cumque vero placeat alias repellendus reiciendis aspernatur delectus magni odio optio nesciunt ipsa quos dolores odit enim blanditiis iste voluptatum consequatur at. Temporibus?</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.layout-coverscreen {
  overflow: hidden;
  position: relative;
  min-height: 600px;
  background-color: #f0f0f0;
  .slider-preview {
    .rs01slide {
      border-radius: 0;
    }
    .rs01ss-control {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
    }
    .rs01timeritem {
      background-color: #000;
    }
  }
  .main-content {
    position: absolute;
    left: 50%;
    top: 50%;
    padding: 30px;
    background-color: hsla(0,0%,100%,.80);
    border-radius: 8px;
    box-shadow: 0 0 2px hsla(0,0%,0%,.25);
    text-align: center;
    transform: translate(-50%, -50%);
    backdrop-filter: saturate(180%) blur(20px);
    h1 {
      margin-bottom: 0;
    }
  }
}
</style>
 