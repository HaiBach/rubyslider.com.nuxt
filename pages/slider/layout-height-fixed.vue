<script setup>
definePageMeta({
  middleware: ['init']
})
const sliderOptions = {
  fx: 'line',
  speed: 600,
  width: 1140,
  height: 450
}
const initSetup = () => {
  jQuery('#main .rs01nav').remove()
  jQuery('#main .rs01pag').remove()
  jQuery('#main .rs01overlay-ghost').remove()
  jQuery('#main .rs01imgback').css({ width: '', height: '', left: '', top: '' })

  const rubyLayoutHeightFixed = jQuery('.layout-fixed-height__slider').rubyslider( sliderOptions )
}
onMounted(() => {
  setTimeout(initSetup, 400)
})
</script>


<template>
<main id="main">
  <section class="wrapper">
    <div class="container">
      <TitleHead>
        <template #title>
          <h1>LAYOUT CÓ <br class="br--max-xs">CHIỀU CAO CỐ ĐỊNH</h1>
        </template>
      </TitleHead>

      <div class="layout-fixed-height__slider slider-preview rs01">
        <a class="rs01imgback" href="/img/animal-focus-free1.jpg">Animal 1</a>
        <a class="rs01imgback" href="/img/animal-focus-free2.jpg">Animal 2</a>
        <a class="rs01imgback" href="/img/animal-focus-free3.jpg">Animal 3</a>
        <a class="rs01imgback" href="/img/animal-focus-free4.jpg">Animal 4</a>
        <a class="rs01imgback" href="/img/animal-focus-free5.jpg">Animal 5</a>
        <a class="rs01imgback" href="/img/animal-focus-free6.jpg">Animal 6</a>
      </div> <!-- /.rs01 -->
    </div>
  </section>

  <Guide>
    <template #gioi-thieu>
      <p>...</p>
    </template>
    <template #thiet-lap>
      <pre class="codeprint">{{ sliderOptions }}</pre>
    </template>
    <template #nav>
      <ButtonPrevNext
        prev-name="Layout có chiều cao tự động"
        prev-to="/slider/layout-height-auto"
        next-name="Tất cả ví dụ"
        next-to="/slider" />
    </template>
  </Guide>
</main>
</template>
 