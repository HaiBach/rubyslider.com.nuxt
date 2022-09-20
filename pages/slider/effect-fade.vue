<script setup>
definePageMeta({
  middleware: ['init']
})
const sliderOptions = {
  fx: 'cssOne',
  cssOne: 'fade',
  speed: 800,
  width: 1140,
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

      <div class="effect-fade__slider slider-preview rs01 image-for-sp">
        <a class="rs01imgback" href="/img/vietnam-1140-1.jpg">Việt Nam 1</a>
        <a class="rs01imgback" href="/img/vietnam-1140-2.jpg">Việt Nam 2</a>
        <a class="rs01imgback" href="/img/vietnam-1140-4.jpg">Việt Nam 4</a>
        <a class="rs01imgback" href="/img/vietnam-1140-5.jpg">Việt Nam 5</a>
        <a class="rs01imgback" href="/img/vietnam-1140-6.jpg">Việt Nam 6</a>
      </div> <!-- /.rs01 -->
    </div>
  </section>
  <Guide>
    <template #gioi-thieu>
      <ul>
        <li>Hiệu ứng cơ bản và đơn giản nhất trong các hiệu ứng.</li>
        <li>Thuộc hệ thống hiệu ứng <b>"cssOne"</b>.</li>
      </ul>
    </template>
    <template #thiet-lap>
      <pre class="codeprint">{{ sliderOptions }}</pre>
    </template>
    <template #nav>
      <ButtonPrevNext
        prev-name="Hiệu ứng Line"
        prev-to="/slider/effect-line"
        next-name="Hiệu ứng Math"
        next-to="/slider/effect-math" />
    </template>
  </Guide>
</main>
</template>
 