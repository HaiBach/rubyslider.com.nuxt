<script setup>
const sliderOptions = {
  // name: 'layoutClassic1',
  fx: 'line',
  speed: 600,
  width: 1140,
  // height: 600,
  margin: 5,
  pag: {
    type: 'bullet',
  },
  isNav: true
}
const initSetup = () => {
  jQuery('#main .rs01nav').remove()
  jQuery('#main .rs01pag').remove()
  jQuery('#main .rs01overlay-ghost').remove()
  jQuery('#main .rs01imgback').css({ width: '', height: '', left: '', top: '' })

  const rubyLayoutClassic = jQuery('.layout-classic1__slider').rubyslider( sliderOptions )
}
onMounted(() => {
  setTimeout(initSetup, 400)
})
</script>


<template>
<main id="main">
  <section class="layout-classic1 wrapper">
    <div class="container">
      <TitleHead>
        <template #title>
          <h1>LAYOUT CỔ ĐIỂN SỐ 1</h1>
        </template>
      </TitleHead>
        
      <div class="layout-classic1__slider slider-preview rs01">
        <div class="rs01viewport">
          <a class="rs01imgback" href="/img/vietnam-1140-1.jpg">Việt Nam 1</a>
          <a class="rs01imgback" href="/img/vietnam-1140-2.jpg">Việt Nam 2</a>
          <a class="rs01imgback" href="/img/vietnam-1140-4.jpg">Việt Nam 4</a>
          <a class="rs01imgback" href="/img/vietnam-1140-5.jpg">Việt Nam 5</a>
          <a class="rs01imgback" href="/img/vietnam-1140-6.jpg">Việt Nam 6</a>
        </div>
        <div class="rs01shadow"></div>
      </div>
    </div>
  </section>

  <section class="guide">
    <div class="container">
      <div class="hr hr--circle"></div>
      <h2>❖ Giới thiệu</h2>
      <p>Layout cổ điển số 1 được thiết lập hiệu ứng Line đơn giản.<br>Slider được hiển thị với navigation (button next/prev) và pagination kiểu bullet, đặc biệt kết hợp với shadow ở dưới slider để thể hiện các slider có phong cách cổ điển 1 thời.</p>
      <ul>
        <li>Hiệu ứng mặc định của plugin RubySlider là <b>Line</b>.</li>
      </ul>

      <LineSpace />

      <h2>❖ Thiết lập slider</h2>
      <p>Các bạn có thể được hướng dẫn thiết lập slider chi tiết ở trang <NuxtLink to="/documentation">hướng dẫn
        </NuxtLink> này.<br>Dưới đây là options hiện tại của slider phía trên:</p>
      <pre class="codeprint">{{ sliderOptions }}</pre>

      <ButtonPrevNext
        prev-name="Layout cơ bản"
        prev-to="/slider/layout-basic"
        next-name="Layout cổ điển số 2"
        next-to="/slider/layout-classic-2" />
    </div>
  </section>
</main>
</template>


<style lang="scss">
.layout-classic1 {
  .rs01 {
    .rs01pag {
      position: absolute;
      bottom: 0;
      padding-bottom: 15px;
      .rs01pagmark-item {
        height: 10px;
      }
    }
    .rs01paginner {
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: -5px;
        width: 100%;
        height: 100%;
        padding: 10px;
        background-color: rgba($color: #fff, $alpha: .65);
        border-radius: 100px;
      }
    }
    .rs01pagitem {
      width: 10px;
      height: 10px;
      background-color: rgba($color: #000, $alpha: .75);
    }
    &.rs01ready {
      .rs01shadow {
        visibility: visible;
      }
    }
  }
  .rs01shadow {
    visibility: hidden;
    width: 100%;
    height: 46px;
    background: url(/img/shadow.png) no-repeat center center;
    background-size: cover;
  }
}
</style>
 