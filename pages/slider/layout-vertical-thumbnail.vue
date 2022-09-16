<script setup>
definePageMeta({
  middleware: ['init']
})
const sliderOptions = {
  fx: 'rectRun',
  speed: 800,
  width: 1140,
  height: 550,
  pag: {
    direction: 'ver'
  }
}
const initSetup = () => {
  jQuery('#main .rs01nav').remove()
  jQuery('#main .rs01pag').remove()
  jQuery('#main .rs01overlay-ghost').remove()
  jQuery('#main .rs01imgback').css({ width: '', height: '', left: '', top: '' })
  
  const rubyLayoutVertical = jQuery('.layout-vertical__slider').rubyslider( sliderOptions )
}
onMounted(() => {
  setTimeout(initSetup, 400)
})
</script>


<template>
<main id="main">
  <section class="layout-vertical wrapper">
    <div class="container">
      <TitleHead>
        <template #title>
          <h1>VERTICAL <br class="br--max-xs">THUMBNAIL LAYOUT</h1>
        </template>
      </TitleHead>

      <div class="layout-vertical__slider slider-preview rs01">
        <a class="rs01imgback" href="/img/vietnam-1140-1.jpg">Việt Nam 1</a>
        <a class="rs01imgback" href="/img/vietnam-1140-2.jpg">Việt Nam 2</a>
        <a class="rs01imgback" href="/img/vietnam-1140-3.jpg">Việt Nam 3</a>
        <a class="rs01imgback" href="/img/vietnam-1140-4.jpg">Việt Nam 4</a>
        <a class="rs01imgback" href="/img/vietnam-1140-5.jpg">Việt Nam 5</a>
        <a class="rs01imgback" href="/img/vietnam-1140-6.jpg">Việt Nam 6</a>
      </div> <!-- /.rs01 -->
    </div>
  </section>

  <Guide>
    <template #gioi-thieu>
      <p>Layout cổ điển số 1 được thiết lập với hiệu ứng Line đơn giản.<br>Slider được hiển thị với navigation (button next/prev) và pagination kiểu bullet, đặc biệt kết hợp với shadow ở dưới slider để thể hiện các slider có phong cách cổ điển 1 thời.</p>
      <ul>
        <li>Hiệu ứng mặc định của plugin RubySlider là <b>Line</b>.</li>
      </ul>
    </template>
    <template #thiet-lap>
      <pre class="codeprint">{{ sliderOptions }}</pre>
    </template>
    <template #nav>
      <ButtonPrevNext
        prev-name="Layout toàn màn hình"
        prev-to="/slider/layout-coverscreen"
        next-name="Layout lồng nhau"
        next-to="/slider/layout-nested" />
    </template>
  </Guide>
</main>
</template>


<style lang="scss">
#layout-vertical__slider {
  .rs01viewport {
    overflow: hidden;
  }
}
</style>
 