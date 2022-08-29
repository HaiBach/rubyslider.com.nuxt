<script setup>
const sliderOptions = {
  fx: 'cssOne',
  cssOne: 'scalePulse',
  speed: 800,
  width: 1140,
  margin: 5,
  pag: {
    type: 'tabs'
  },
  isKeyboard: true
}
const initSetup = () => {
  jQuery('#main .rs01nav').remove()
  jQuery('#main .rs01pag').remove()
  jQuery('#main .rs01overlay-ghost').remove()
  jQuery('#main .rs01imgback').css({ width: '', height: '', left: '', top: '' })
  jQuery('#main .rs01pagitem').css({ width: '', height: '', transform: 'none' })

  const rubyLayoutClassic2 = jQuery('.layout-classic2__slider').rubyslider( sliderOptions )
}
onMounted(() => {
  setTimeout(initSetup, 400)
})
</script>


<template>
<main id="main">
  <section class="layout-classic2 wrapper">
    <div class="container">
      <TitleHead>
        <template #title>
          <h1>LAYOUT CỔ ĐIỂN SỐ 2</h1>
        </template>
      </TitleHead>

      <div class="layout-classic2__slider slider-preview rs01">
        <div class="rs01viewport">
          <div class="rs01slide">
            <a class="rs01imgback" href="/img/vietnam-1140-1.jpg">Việt Nam 1</a>
            <div class="rs01pagitem">Ha Noi</div>
          </div>
          <div class="rs01slide">
            <a class="rs01imgback" href="/img/vietnam-1140-2.jpg">Việt Nam 2</a>
            <div class="rs01pagitem">Ha Long Bay</div>
          </div>
          <div class="rs01slide">
            <a class="rs01imgback" href="/img/vietnam-1140-3.jpg">Việt Nam 3</a>
            <div class="rs01pagitem">Nha Trang</div>
          </div>
          <div class="rs01slide">
            <a class="rs01imgback" href="/img/vietnam-1140-4.jpg">Việt Nam 4</a>
            <div class="rs01pagitem">Ho Chi Minh</div>
          </div>
          <div class="rs01slide">
            <a class="rs01imgback" href="/img/vietnam-1140-5.jpg">Việt Nam 5</a>
            <div class="rs01pagitem">Son Doong Cave</div>
          </div>
          <div class="rs01slide">
            <a class="rs01imgback" href="/img/vietnam-1140-6.jpg">Việt Nam 6</a>
            <div class="rs01pagitem">Viet Nam</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="guide">
    <div class="container">
      <div class="hr hr--circle"></div>
      <h2>❖ Giới thiệu</h2>
      <p>Layout cổ điển số 2. Bạn có thể di chuyển giữa các slide bằng phím mũi tên trái/phải.</p>
      
      <LineSpace />

      <h2>❖ Thiết lập slider</h2>
      <p>Các bạn có thể được hướng dẫn thiết lập slider chi tiết ở trang <NuxtLink to="/documentation">hướng dẫn</NuxtLink> này.<br>Dưới đây là options hiện tại của slider phía trên:</p>
      <pre class="codeprint">{{ sliderOptions }}</pre>

      <ButtonPrevNext
        prev-name="Layout cổ điển số 1"
        prev-to="/slider/layout-classic-1"
        next-name="Layout chính giữa"
        next-to="/slider/layout-center" />
    </div>
  </section>
</main>
</template>


<style lang="scss">
.layout-classic2 {
  .rs01 {
    padding: 10px 12px;
    border: 1px solid #ccc;
    border-radius: 16px;
    .rs01pag.rs01tabs {
      margin-top: 15px;
      margin-bottom: 5px;
    }
    .rs01pagitem {
      margin-left: 2px;
      margin-right: 2px;
      border-radius: 6px;
      color: #333;
      transition: background .2s;
      &:hover {
        background-color: rgba($color: #000, $alpha: .1);
      }
      &.rs01cur {
        background-color: var(--color-primary);
        color: #fff;
      }
    }
  }

  /** MEDIA */
  @media only screen and (max-width: 767px) {
    .rs01 {
      .rs01pagitem {
        padding: 15px !important;
      }
    }
  }
  @media only screen and (max-width: 575px) {
    .rs01 {
      padding: 0;
      border-width: 0;
    }
  }
}
</style>
 