<script setup>
definePageMeta({
  middleware: ['init']
})
const sliderOptions = {
  // fx: 'coverflow3D',
  fx: 'line',
  speed: 800,
  width: 1140,
  widthSlide: [1140, 940, '70%'],
  margin: [10, 5, 5],
}
const initSetup = () => {
  jQuery('#main .rs01nav').remove()
  jQuery('#main .rs01pag').remove()
  jQuery('#main .rs01overlay-ghost').remove()
  jQuery('#main .rs01imgback').css({ width: '', height: '', left: '', top: '' })

  const rubyLayoutCenter = jQuery('.layout-center__slider').rubyslider( sliderOptions )
}
onMounted(() => {
  setTimeout(initSetup, 400)
})
</script>


<template>
<main id="main">
  <section class="layout-center wrapper">
    <div class="container">
      <TitleHead>
        <template #title>
          <h1>LAYOUT CHÍNH GIỮA</h1>
        </template>
      </TitleHead>
    </div>

    <div class="layout-center__slider slider-preview rs01">
      <a class="rs01imgback" href="/img/vietnam-1140-1.jpg">Việt Nam 1</a>
      <a class="rs01imgback" href="/img/vietnam-1140-2.jpg">Việt Nam 2</a>
      <a class="rs01imgback" href="/img/vietnam-1140-4.jpg">Việt Nam 4</a>
      <a class="rs01imgback" href="/img/vietnam-1140-5.jpg">Việt Nam 5</a>
      <a class="rs01imgback" href="/img/vietnam-1140-6.jpg">Việt Nam 6</a>
    </div>
  </section>

  <section class="guide">
    <div class="container">
      <div class="hr hr--circle"></div>
      <h2>❖ Giới thiệu</h2>
      <p>Hiệu ứng được sử dụng trong layout chính giữa là hiệu ứng <b>Line</b>, hoặc <b>Coverflow3D</b>. trong trường hợp này là hiệu ứng Line.<br>
      Layout chính giữa được sử dụng khi slider có chiều dài lớn hơn chiều dài của các slide.</p>
      <ul>
        <li>Cần ít nhất 3 slide để có layout chính giữa.</li>
      </ul>
      
      <LineSpace />

      <h2>❖ Thiết lập slider</h2>
      <p>Các bạn có thể được hướng dẫn thiết lập slider chi tiết ở trang <NuxtLink to="/documentation">hướng dẫn</NuxtLink> này.<br>Dưới đây là options hiện tại của slider phía trên:</p>
      <pre class="codeprint">{{ JSON.stringify(sliderOptions, null, 4) }}</pre>

      <ButtonPrevNext
        prev-name="Layout cổ điển số 2"
        prev-to="/slider/layout-classic-2"
        next-name="Layout băng chuyền"
        next-to="/slider/layout-carousel" />
    </div>
  </section>
</main>
</template>


<style lang="scss">
.layout-center {
  .rs01 {
    .rs01slide {
      background-color: #fff;
      img {
        transition: all .8s;
      }
      &.rs01deactived {
        img {
          filter: brightness(180%) grayscale(1);
        }
      }
    }
  }
}
</style>
 