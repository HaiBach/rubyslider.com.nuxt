<script setup>
definePageMeta({
  middleware: ['init']
})
const sliderOptions = {
  fx: 'cssOne',
  speed: 800,
  width: 1140,
  // height: 636,
  imagePosition: 'fill'
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
      <p>Layout trên thiết bị.</p>
      
      <LineSpace />

      <h2>❖ Thiết lập slider</h2>
      <p>Các bạn có thể được hướng dẫn thiết lập slider chi tiết ở trang <NuxtLink to="/documentation">hướng dẫn</NuxtLink> này.<br>Dưới đây là options hiện tại của slider phía trên:</p>
      <pre class="codeprint">{{ sliderOptions }}</pre>

      <ButtonPrevNext
        prev-name="Layout bên ngoài hộp"
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
    overflow: hidden;
    height: 630px;
    box-shadow: inset 0 -10px 25px -20px hsla(0,0%,0%,.5);
    border-bottom: 1px solid #f9f9f9;
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  .rs01 {
    position: absolute;
    left: 109px;
    top: 39px;
    width: 896px;
    .rs01slide {
      border-radius: 0;
    }
    .rs01thumbnail {
      .rs01pagitem {
        width: 100px;
        height: 70px;
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
 