<script setup>
definePageMeta({
  middleware: ['init']
})
const sliderOptions = {
  fx: 'cssOne',
  speed: 800,
  width: 1140,
}

const initSetup = () => {
  jQuery('#main .rs01nav').remove()
  jQuery('#main .rs01pag').remove()
  jQuery('#main .rs01overlay-ghost').remove()
  jQuery('#main .rs01imgback').css({ width: '', height: '', left: '', top: '' })

  const rubyLayoutBasic = jQuery('.layout-basic__slider').rubyslider(sliderOptions)
}
function randomNum() {
  return Math.round(Math.random() * 10000000)
}
onMounted(() => {
  setTimeout(initSetup, 400)
})
</script>


<template>
<main id="main">
  <section class="layout-basic wrapper">
    <div class="container">
      <TitleHead>
        <template #title>
          <h1>LAYOUT CƠ BẢN</h1>
        </template>
      </TitleHead>

      <div class="layout-basic__slider slider-preview rs01 image-for-sp">
        <a class="rs01imgback" href="/img/vietnam-1140-1.jpg">Việt Nam 1</a>
        <a class="rs01imgback" href="/img/vietnam-1140-2.jpg">Việt Nam 2</a>
        <a class="rs01imgback" href="/img/vietnam-1140-4.jpg">Việt Nam 4</a>
        <a class="rs01imgback" href="/img/vietnam-1140-5.jpg">Việt Nam 5</a>
        <a class="rs01imgback" href="/img/vietnam-1140-6.jpg">Việt Nam 6</a>
      </div>
    </div>
  </section>

  <Guide>
    <template #gioi-thieu>
      <p>Như tên gọi, là layout cơ bản và đơn giản nhất khi thiết lập RubySlider. Thiết lập hiệu ứng cssOne để slider có hiệu ứng ấn tượng hơn.<br>Mặc định thì navigation (button next/prev) được tắt đi, chỉ có pagination được hiển thị với các hình thumbnail nhỏ bên dưới.</p>
      <ul>
        <li>Hiệu ứng mặc định của plugin RubySlider là 'Line'.</li>
      </ul>
    </template>
    <template #thiet-lap>
      <pre class="codeprint">{{ sliderOptions }}</pre>
    </template>
    <template #nav>
      <ButtonPrevNext
        prev-name="Tất cả ví dụ"
        prev-to="/slider"
        next-name="Layout cổ điển 1"
        next-to="/slider/layout-classic-1" />
    </template>
  </Guide>
</main>
</template>


<style lang="scss">
.layout-basic {
  overflow: hidden;
}
</style>
 