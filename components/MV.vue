<script setup>
const sliderOptions = {
  fx: 'coverflow3D',
  coverflow3D: {
    widthSlide: [1040, '85%'],
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
  jQuery('.mv__slider .rs01nav').remove()
  jQuery('.mv__slider .rs01pag').remove()
  jQuery('.mv__slider .rs01overlay-ghost').remove()
  jQuery('.mv__slider .rs01imgback').css({ width: '', height: '', left: '', top: '' })

  const sliderPreview = jQuery('.mv__slider').rubyslider( sliderOptions )
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
  <div class="container">
    <TitleHead>
      <template #title>
        <h1>RUBY SLIDER</h1>
      </template>
      <template #desc>
        <p>Plugin jQuery dành cho Slider & Tabs</p>
      </template>
    </TitleHead>
  
    <div class="mv__slider rs01 rs01timer-arcTop">
      <!-- <a class="rs01imgback" :href="'https://picsum.photos/1140/600?random=' + randomNum()">Lorem Picsum 1</a>
      <a class="rs01imgback" :href="'https://picsum.photos/1140/600?random=' + randomNum()">Lorem Picsum 2</a>
      <a class="rs01imgback" :href="'https://picsum.photos/1140/600?random=' + randomNum()">Lorem Picsum 3</a>
      <a class="rs01imgback" :href="'https://picsum.photos/1140/600?random=' + randomNum()">Lorem Picsum 4</a>
      <a class="rs01imgback" :href="'https://picsum.photos/1140/600?random=' + randomNum()">Lorem Picsum 5</a> -->
      <a class="rs01imgback" href="/img/vietnam-large1.jpg">Việt Nam 1</a>
      <a class="rs01imgback" href="/img/vietnam-large2.jpg">Việt Nam 2</a>
      <a class="rs01imgback" href="/img/vietnam-large4.jpg">Việt Nam 4</a>
      <a class="rs01imgback" href="/img/vietnam-large5.jpg">Việt Nam 5</a>
      <a class="rs01imgback" href="/img/vietnam-large6.jpg">Việt Nam 6</a>
    </div>

    <div class="mv__avatar">
      <figure>
        <svg width="350" height="392" viewBox="0 0 350 392" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M335.837 119.619C342.964 82.0121 351.462 16.5625 327.483 2.71292C312.041 -6.20253 285.268 8.18227 260.65 26.5614C235.313 10.5971 207.066 1.40756 174.941 1.30313C143.861 1.40756 114.635 10.5971 89.2981 26.5614C64.6794 8.18227 37.9722 -6.20253 22.5432 2.71292C-1.43588 16.5756 7.04882 82.0121 14.189 119.619C5.06471 143.206 0 169.156 0 196.451C0 209.087 1.10953 221.396 3.13281 233.379L107.39 376.418C127.479 386.064 148.821 391.521 174.941 391.599C200.643 391.521 222.482 386.064 242.558 376.418L346.854 233.379C348.864 221.396 350 209.087 350 196.451C350.013 169.156 344.948 143.206 335.837 119.619ZM106.855 200.811C90.8775 200.811 77.9286 187.862 77.9286 171.885C77.9286 168.412 78.6465 165.123 79.7691 162.042C98.0961 161.116 119.073 163.061 135.755 172.211C135.559 188.019 122.715 200.811 106.855 200.811ZM243.197 200.811C227.337 200.811 214.493 188.032 214.31 172.224C230.992 163.074 251.969 161.116 270.296 162.055C271.419 165.136 272.137 168.425 272.137 171.898C272.124 187.862 259.175 200.811 243.197 200.811Z" fill="#CC0055"/></svg>
      </figure>
      <p>Xin chờ 1 chút, đang load hình đầu tiên...</p>
    </div>
    <div class="mv__btns">
      <div class="btn btn--btns btn--large">
        <NuxtLink to="/slider" class="btn--primary">
          <span>CÁC HIỆU ỨNG<br><small><b>&</b></small> LAYOUT KHÁC</span>
        </NuxtLink>
        <NuxtLink to="/docs/quick-start" class="btn--alter">
          <span>HƯỚNG DẪN<br class="br--max-sm">SỬ DỤNG</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</section>
</template>


<style lang="scss">
.mv {
  position: relative;
  overflow: hidden;
  padding-top: 80px;
  padding-bottom: 100px;
  .title-head {
    margin-bottom: 80px;
    &__title {
      h1 {
        font-size: 60px;
        font-weight: 100;
        letter-spacing: 8px;
      }
    }
  }
  &__avatar {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    z-index: -1;
    transition: all .4s;
    transform: translate3d(0,180px,0) scale(.6);
    figure {
      display: block;
      perspective: 800px;
    }
    svg {
      display: block;
      animation: avatarRotate 6s 3s linear infinite both;
    }
    p {
      margin-top: 20px;
      font-size: 18px;
    }
  }
  &__btns {
    a {
      min-width: 350px;
    }
    small {
      font-size: .85em;
    }
  }
  
  /** Media **/
  @media (max-width: 991px) {
    .title-head {
      &__title {
        h1 {
          font-size: 48px;
        }
      }
    } 
    &__btns {
      .btn--btns {
        margin-left: 0;
        margin-right: 0;
      }
      a {
        min-width: 250px;
      }
    }
  }
  @media (max-width: 767px) {
    padding-top: 60px;
    padding-bottom: 40px;
    .title-head {
      margin-bottom: 60px;
      &__title {
        h1 {
          font-size: 38px;
          font-weight: 200;
          letter-spacing: 3px;
        }
      }
    }
    &__avatar {
      transform: translate3d(0,80px,0) scale(.45);
    }
    &__btns {
      a {
        min-width: 150px;
      }
    }
  }
}

.mv__slider {
  min-height: 320px;
  margin-bottom: 70px;
  opacity: 0;
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
    min-height: auto;
    .rs01imgback {
      visibility: visible;
    }
    + .mv__avatar {
      opacity: .25;
      transform: translate3d(0,-100px,0) scale(.32);
      p {
        visibility: hidden;
      }
    }
  }
  /** Media **/
  @media (max-width: 767px) {
    min-height: 210px;
    .rs01slide {
      border-radius: 8px;
    }
    &.rs01ready {
      + .mv__avatar {
        transform: translate3d(0,-125px,0) scale(.25);
      }
    }
  }
  @media (max-width: 575px) {
    margin-bottom: 50px;
    .rs01nav-prev {
      left: -15px;
    }
    .rs01nav-next {
      right: -15px;
    }
  }
}

@keyframes avatarRotate {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(180deg);
  }
}
</style>
