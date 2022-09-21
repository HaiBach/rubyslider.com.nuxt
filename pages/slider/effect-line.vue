<script setup>
definePageMeta({
  middleware: ['init'],
})
useHead({
  title: 'Hiệu ứng Line | RubySlider',
  meta: [
    { name: 'description', content: '' },
    { name: 'og:title', content: 'Hiệu ứng Line | RubySlider' },
    { name: 'og:description', content: '' },
    { name: 'og:image', content: '' },
    { name: 'og:type', content: 'article' }
  ],
  bodyAttrs: {
    class: 'page-effect-line'
  }
})
const sliderOptions = {
  fx: 'line',
  speed: 400,
  width: 1140,
  margin: 5,
  imageback: {
    position: 'fit'
  },
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
        <picture class="rs01imgback-wrap">
          <source media="(max-width: 767px)" srcset="/img/vietnam-500-1.jpg">
          <a class="rs01imgback" href="/img/vietnam-1140-1.jpg">Việt Nam 1</a>
        </picture>
        <picture class="rs01imgback-wrap">
          <source media="(max-width: 767px)" srcset="/img/vietnam-500-2.jpg">
          <a class="rs01imgback" href="/img/vietnam-1140-2.jpg">Việt Nam 2</a>
        </picture>
        <picture class="rs01imgback-wrap">
          <source media="(max-width: 767px)" srcset="/img/vietnam-500-3.jpg">
          <a class="rs01imgback" href="/img/vietnam-1140-3.jpg">Việt Nam 3</a>
        </picture>
        <picture class="rs01imgback-wrap">
          <source media="(max-width: 767px)" srcset="/img/vietnam-500-4.jpg">
          <a class="rs01imgback" href="/img/vietnam-1140-4.jpg">Việt Nam 4</a>
        </picture>
        <picture class="rs01imgback-wrap">
          <source media="(max-width: 767px)" srcset="/img/vietnam-500-5.jpg">
          <a class="rs01imgback" href="/img/vietnam-1140-5.jpg">Việt Nam 5</a>
        </picture>
      </div> <!-- /.rs01 -->
    </div>
  </section>

  <Guide>
    <template #gioi-thieu>
      <p>Hiệu ứng Line là hiệu ứng truyền thống của slider cũng là hiệu ứng đàu tiên của RubySlider phát triển.</p>
      <ul>
        <li>Là hiệu ứng cơ bản của RubySlider.</li>
        <li>Có tính ổn định và hiệu suất cao nhất trong các hiệu ứng của plugin.</li>
        <li>Bạn có thể kéo rê ra ngoài slider để di chuyển sang nhiều slide hơn.</li>
      </ul>
    </template>
    <template #thiet-lap>
      <pre class="codeprint">{{ sliderOptions }}</pre>
    </template>
    <template #nav>
      <ButtonPrevNext
        prev-name="Tất cả ví dụ"
        prev-to="/slider"
        next-name="Hiệu ứng Fade"
        next-to="/slider/effect-fade" />
    </template>
  </Guide>
</main>
</template>


<style lang="scss">
</style>
 