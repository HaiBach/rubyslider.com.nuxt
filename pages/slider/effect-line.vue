<script setup>
definePageMeta({
  middleware: ['init']
})
const sliderOptions = {
  fx: 'line',
  speed: 400,
  width: 1140,
  margin: 5,
}
const initSetup = () => {
  jQuery('#main .rs01nav').remove()
  jQuery('#main .rs01pag').remove()
  jQuery('#main .rs01overlay-ghost').remove()
  jQuery('#main .rs01imgback').css({ width: '', height: '', left: '', top: '' })

  const rubyEffectLine = jQuery('.effect-line__slider').rubyslider( sliderOptions )
}
onMounted(() => {
  setTimeout(initSetup, 400)
})
</script>


<template>
<main id="main">
  <section class="effect-line wrapper">
    <div class="container">
      <TitleHead>
        <template #title>
          <h1>HIỆU ỨNG LINE</h1>
        </template>
      </TitleHead>

      <div class="effect-line__slider slider-preview rs01">
        <a class="rs01imgback" href="/img/vietnam-1140-1.jpg">Việt Nam 1</a>
        <a class="rs01imgback" href="/img/vietnam-1140-2.jpg">Việt Nam 2</a>
        <a class="rs01imgback" href="/img/vietnam-1140-4.jpg">Việt Nam 4</a>
        <a class="rs01imgback" href="/img/vietnam-1140-5.jpg">Việt Nam 5</a>
        <a class="rs01imgback" href="/img/vietnam-1140-6.jpg">Việt Nam 6</a>
      </div> <!-- /.rs01 -->
    </div>
  </section>

  <section class="guide">
    <div class="container">
      <div class="hr hr--circle"></div>
      <h2>❖ Giới thiệu</h2>
      <p>Hiệu ứng Line là hiệu ứng truyền thống của slider cũng là hiệu ứng đàu tiên của RubySlider phát triển.</p>
      <ul>
        <li>Là hiệu ứng cơ bản của RubySlider.</li>
        <li>Có tính ổn định và hiệu suất cao nhất trong các hiệu ứng của plugin.</li>
        <li>Bạn có thể kéo rê ra ngoài slider để di chuyển sang nhiều slide hơn.</li>
      </ul>
      
      <LineSpace />

      <h2>❖ Thiết lập slider</h2>
      <p>Các bạn có thể được hướng dẫn thiết lập slider chi tiết ở trang <NuxtLink to="/docs/quick-start">hướng dẫn</NuxtLink> này.<br>Dưới đây là options hiện tại của slider phía trên:</p>
      <pre class="codeprint">{{ sliderOptions }}</pre>

      <ButtonPrevNext
        prev-name="Tất cả ví dụ"
        prev-to="/slider"
        next-name="Hiệu ứng Fade"
        next-to="/slider/effect-fade" />
    </div>
  </section>
</main>
</template>


<style lang="scss">
</style>
 