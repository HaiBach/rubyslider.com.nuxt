<script setup>
definePageMeta({
  middleware: ['init']
})
const sliderOptions = {
  fx: 'cssOne',
  cssOne: 'fade',
  speed: 800,
  width: 1880,
}
const initSetup = () => {
  jQuery('#main .rs01nav').remove()
  jQuery('#main .rs01pag').remove()
  jQuery('#main .rs01overlay-ghost').remove()
  jQuery('#main .rs01imgback').css({ width: '', height: '', left: '', top: '' })

  const rubyEffectFade = jQuery('.effect-fade__slider').rubyslider( sliderOptions )
}
onMounted(() => {
  setTimeout(initSetup, 400)
})
</script>


<template>
<main id="main">
  <section class="effect-fade wrapper">
    <div class="container">
      <TitleHead>
        <template #title>
          <h1>HIỆU ỨNG FADE</h1>
        </template>
      </TitleHead>

      <div class="effect-fade__slider slider-preview rs01">
        <a class="rs01imgback" href="/img/vietnam-large1.jpg">Việt Nam 1</a>
        <a class="rs01imgback" href="/img/vietnam-large2.jpg">Việt Nam 2</a>
        <a class="rs01imgback" href="/img/vietnam-large4.jpg">Việt Nam 4</a>
        <a class="rs01imgback" href="/img/vietnam-large5.jpg">Việt Nam 5</a>
        <a class="rs01imgback" href="/img/vietnam-large6.jpg">Việt Nam 6</a>
      </div> <!-- /.rs01 -->
    </div>
  </section>
  <section class="guide">
    <div class="container">
      <div class="hr hr--circle"></div>
      <h2>❖ Giới thiệu</h2>
      <ul>
        <li>Hiệu ứng cơ bản và đơn giản nhất trong các hiệu ứng.</li>
        <li>Thuộc hệ thống hiệu ứng <b>"cssOne"</b>.</li>
      </ul>
      
      <LineSpace />

      <h2>❖ Thiết lập slider</h2>
      <p>Các bạn có thể được hướng dẫn thiết lập slider chi tiết ở trang <NuxtLink to="/docs/quick-start">hướng dẫn</NuxtLink> này.<br>Dưới đây là options hiện tại của slider phía trên:</p>
      <pre class="codeprint">{{ sliderOptions }}</pre>

      <ButtonPrevNext
        prev-name="Hiệu ứng Line"
        prev-to="/slider/effect-line"
        next-name="Hiệu ứng Math"
        next-to="/slider/effect-math" />
    </div>
  </section>
</main>
</template>
 