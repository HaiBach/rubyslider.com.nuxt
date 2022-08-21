<script setup>
const sliderOptions = {
  fx: 'line',
  speed: 600,
  width: 1140,
  height: 550,
  margin: 10,
  imagePosition: 'fill'
}
const initSetup = () => {
  const rs01imgback = jQuery('.rs01imgback')
  rs01imgback.css({ width: '', height: '', left: '', top: '' })

  const rubyEffectLine = jQuery('.effect-line__slider').rubyslider( sliderOptions )
}
onMounted(() => {
  setTimeout(initSetup, 400)
})
</script>


<template>
<main class="">
  <section class="wrapper effect-line">
    <div class="container">
      <TitleHead>
        <template #title>
          <h1>HIỆU ỨNG LINE</h1>
        </template>
      </TitleHead>

      <div class="effect-line__slider rs01">
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
        <li>Là hiệu ứng đầu tiên của RubySlider phát triển.</li>
        <li>Là hiệu ứng cơ bản của RubySlider.</li>
        <li>Có tính ổn định và hiệu suất cao nhất trong các hiệu ứng của plugin.</li>
        <li>Bạn có thể kéo rê ra ngoài slider để di chuyển sang nhiều slide hơn.</li>
      </ul>
      
      <LineSpace />

      <h2>❖ Thiết lập slider</h2>
      <p>Các bạn có thể được hướng dẫn thiết lập slider chi tiết ở trang <NuxtLink to="/documentation">hướng dẫn</NuxtLink> này.<br>Dưới đây là options hiện tại của slider phía trên:</p>
      <pre class="codeprint">{{ sliderOptions }}</pre>
    </div>
  </section>
</main>
</template>


<style lang="scss">
.effect-line {
  &__slider {
    margin-bottom: 30px;
    .rs01viewport {
      // overflow: hidden;
    }
  }
}
</style>
 