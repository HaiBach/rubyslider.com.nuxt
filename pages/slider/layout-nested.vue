<script setup>
definePageMeta({
  middleware: ['init']
})
const sliderOptions = {
  fx: 'cssOne',
  speed: 800,
  width: 1140,
  // height: 550,
  // imageback: {
  //   position: 'fill'
  // }
}
const sliderOptions2 = {
  fx: 'line',
  speed: 400,
  width: 940,
  // height: 550,
  margin: 5,
  imageback: {
    position: 'fill'
  },
  pag: {
    type: "bullet"
  }
}
const initSetup = () => {
  jQuery('#main .rs01nav').remove()
  jQuery('#main .rs01pag').remove()
  jQuery('#main .rs01overlay-ghost').remove()
  jQuery('#main .rs01imgback').css({ width: '', height: '', left: '', top: '' })

  const rubyLayoutNested1 = jQuery('.layout-nested__slider').rubyslider( sliderOptions )
  const rubyLayoutNested2 = jQuery('.layout-nested__slider2').rubyslider( sliderOptions2 )
}
onMounted(() => {
  setTimeout(initSetup, 400)
})
</script>


<template>
<main id="main">
  <section class="layout-nested wrapper">
    <div class="container">
      <TitleHead>
        <template #title>
          <h1>LAYOUT LỒNG NHAU</h1>
        </template>
      </TitleHead>

      <div class="layout-nested__slider slider-preview rs01">
        <div>
          <a class="rs01imgback" href="/img/vietnam-1140-1.jpg">Việt Nam 1</a>
          <div class="layout-nested__slider2 rs01">
            <a class="rs01imgback" href="/img/season-landscape2.jpg">Season 2</a>
            <a class="rs01imgback" href="/img/season-landscape4.jpg">Season 4</a>
            <a class="rs01imgback" href="/img/season-landscape6.jpg">Season 6</a>
            <a class="rs01imgback" href="/img/season-landscape7.jpg">Season 7</a>
          </div>
        </div>
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
      <p>Layout lồng nhau</p>
    </template>
    <template #thiet-lap>
      <pre class="codeprint">// Options của slider 1
{{ sliderOptions }}</pre>
      <pre class="codeprint">// Options của slider 2
{{ sliderOptions2 }}</pre>
    </template>
    <template #nav>
      <ButtonPrevNext
        prev-name="Layout thumbnail chiều dọc"
        prev-to="/slider/layout-vertical-thumbnail"
        next-name="Layout nhiều slider"
        next-to="/slider/layout-multiple" />
    </template>
  </Guide>
</main>
</template>


<style lang="scss">
.layout-nested {
  overflow: hidden;
  &__slider2 {
    position: absolute;
    left: 10px; top: 10px;
    width: 400px;
    padding: 5px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 1px 2px hsla(0,0%,0%,.25);
    .rs01slide {
      border-radius: 10px;
    }
  }
  /** Media */
  @media only screen and (max-width: 959px) {
    &__slider2 {
      width: 300px;
    }
  }
  @media only screen and (max-width: 575px) {
    &__slider2 {
      width: 180px;
      border-radius: 8px;
      .rs01slide {
        border-radius: 6px;
      }
      .rs01pag {
        padding-top: 5px;
        padding-bottom: 0;
      }
    }
  }
}
</style>
 