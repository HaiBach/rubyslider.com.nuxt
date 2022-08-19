<script setup>
const sliderOptions = {
  fx: 'coverflow3D',
  coverflow3D: {
    widthSlide: [1040, '80%'],
    opacity: 0.3
  },
  speed: 800,
  width: 1140,
  imageback: {
    position: 'fit'
  },
  isNav: true,
  isKeyboard: true,
  // isSlideshow: true,
  slideshow: {
    delay: 4000,  
    isAutoRun: true
  },
  timerArc: {
    stroke: '#cc0055'
  },
  video: {
    isPauseThenRemove: true
  }
}

const initSetup = function() {
  const $sliderPreview = jQuery('.mv__slider')

  if ($sliderPreview.length) {
    $sliderPreview.rubyslider( sliderOptions )
  }
}
onMounted(() => {
  setTimeout(initSetup, 400)
})

function randomNum() {
  return Math.round(Math.random() * 10000000)
}
</script>


<template>
<section class="mv">
  <TitleHead>
    <template #title>
      <h1>RUBY SLIDER</h1>
    </template>
    <template #desc>
      <p>Plugin jQuery tốt nhất dành cho Slider & Tabs</p>
    </template>
  </TitleHead>


  <div class="container">
    <div class="mv__slider rs01 rs01timer-arcTop">
      <a class="rs01imgback" :href="'https://picsum.photos/1140/600?random=' + randomNum()">Lorem Picsum 1</a>
      <a class="rs01imgback" :href="'https://picsum.photos/1140/600?random=' + randomNum()">Lorem Picsum 2</a>
      <a class="rs01imgback" :href="'https://picsum.photos/1140/600?random=' + randomNum()">Lorem Picsum 3</a>
      <a class="rs01imgback" :href="'https://picsum.photos/1140/600?random=' + randomNum()">Lorem Picsum 4</a>
      <a class="rs01imgback" :href="'https://picsum.photos/1140/600?random=' + randomNum()">Lorem Picsum 5</a>
    </div>
  </div>
</section>
</template>


<style lang="scss">
.mv {
  overflow: hidden;
  padding-top: 60px;
  padding-bottom: 60px;
  .title-head {
    &__title {
      h1 {
        letter-spacing: 8px;
      }
    }
  }
}

.mv__slider {
  // max-height: 400px;
  > .rs01viewport {
    overflow: visible;
  }
  .rs01slide {
    border-radius: 12px;
  }
  .rs01imgback {
    visibility: hidden;
  }
  .rs01nav-prev {
    left: -30px;
  }
  .rs01nav-next {
    right: -30px;
  }
  &.rs01timer-arcTop {
    .rs01ss-control {
      right: -20px;
    }
  }
  .rs01iframe {
    display: block;
    margin-bottom: 0;
  }
  &.rs01ready {
    opacity: 1;
    max-height: none;
    filter: none;
    .rs01imgback {
      visibility: visible;
    }
  }
}
</style>
