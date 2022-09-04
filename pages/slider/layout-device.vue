<script setup>
definePageMeta({
  middleware: ['init']
})
const sliderOptions = {
  fx: 'cssOne',
  cssOne: 'wheelHor',
  speed: 800,
  width: 1140,
  height: 580,
  imageback: {
    position: 'fill'
  },
  pag: {
    type: 'bullet'
  }
}
const initSetup = () => {
  jQuery('#main .rs01nav').remove()
  jQuery('#main .rs01pag').remove()
  jQuery('#main .rs01overlay-ghost').remove()
  jQuery('#main .rs01imgback').css({ width: '', height: '', left: '', top: '' })
  
  const rubyLayoutDevice = jQuery('.layout-device__slider').rubyslider( sliderOptions )
}
onMounted(() => {
  setTimeout(initSetup, 400)
})
</script>


<template>
<main id="main">
  <section class="layout-device wrapper">
    <div class="container">
      <TitleHead>
        <template #title>
          <h1>LAYOUT TRÊN THIẾT BỊ</h1>
        </template>
      </TitleHead>
  
      <div class="layout-device__device">
        <div class="device layout-device__bg">
          <img src="/img/ipad-landscape.png" alt="iPad device">
        </div>
        <div class="layout-device__slider rs01">
          <a class="rs01imgback" href="/img/vietnam-1140-1.jpg">Việt Nam 1</a>
          <a class="rs01imgback" href="/img/vietnam-1140-2.jpg">Việt Nam 2</a>
          <a class="rs01imgback" href="/img/vietnam-1140-4.jpg">Việt Nam 4</a>
          <a class="rs01imgback" href="/img/vietnam-1140-5.jpg">Việt Nam 5</a>
          <a class="rs01imgback" href="/img/vietnam-1140-6.jpg">Việt Nam 6</a>
        </div> <!-- /.rs01 -->
      </div>
    </div>
  </section>

  <section class="guide">
    <div class="container">
      <div class="hr hr--circle"></div>
      <h2>❖ Giới thiệu</h2>
      <p>Layout slider trên mockup thiết bị.</p>
      
      <LineSpace />

      <h2>❖ Thiết lập slider</h2>
      <p>Các bạn có thể được hướng dẫn thiết lập slider chi tiết ở trang <NuxtLink to="/docs">hướng dẫn</NuxtLink> này.<br>Dưới đây là options hiện tại của slider phía trên:</p>
      <pre class="codeprint">{{ sliderOptions }}</pre>

      <ButtonPrevNext
        prev-name="Layout bên ngoài khung"
        prev-to="/slider/layout-outbox"
        next-name="Layout toàn màn hình"
        next-to="/slider/layout-coverscreen" />
    </div>
  </section>
</main>
</template>


<style lang="scss">
.layout-device {
  &__device {
    position: relative;
    margin-bottom: 100px;
  }
  &__bg {
    position: relative;
    overflow: hidden;
    height: 630px;
    box-shadow: inset 0 -10px 25px -20px rgba($color: #000, $alpha: .75);
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($color: #000, $alpha: .1);
      border-radius: 55px;
      z-index: -1;
    }
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  .rs01 {
    position: absolute;
    left: 115px;
    top: 44px;
    width: 882px;
    .rs01thumbnail {
      .rs01pagitem {
        width: 100px;
        height: 70px;
      }
    }
    .rs01pag.rs01bullet {
      position: absolute;
      bottom: 0;
      margin-bottom: 10px;
      .rs01paginner {
        &::before {
          content: '';
          position: absolute;
          top: -6px;
          left: -6px;
          width: calc(100% + 12px);
          padding: 10px;
          background-color: #fff;
          border-radius: 100px;
        }
      }
    }
  }

  /** MEDIA */
  @media only screen and (max-width: 1199px) {
    .layout-device__slider {
      left: 92px;
      top: 33px;
      width: 754px;
      .rs01thumbnail {
        .rs01pagitem {
          width: 80px;
          height: 60px;
        }
      }
    }
  }
  @media only screen and (max-width: 959px) {
    &__bg {
      height: 440px;
    }
    .rs01 {
      left: 73px;
      top: 26px;
      width: 600px;
      .rs01thumbnail {
        .rs01pagitem {
          width: 70px;
          height: 50px;
        }
      }
    }
  }
  @media only screen and (max-width: 767px) {
    &__bg {
      display: none;
    }
    .rs01 {
      position: static;
      width: auto;
    }
  }
}
</style>
 