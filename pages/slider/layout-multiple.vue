<script setup>
definePageMeta({
  middleware: ['init']
})
const sliderOptions1 = {
  fx: 'cssOne',
  speed: 800,
  width: 1140,
}
const sliderOptions2 = {
  fx: 'rectMove',
  speed: 800,
  width: 1140,
}
const initSetup = () => {
  jQuery('#main .rs01nav').remove()
  jQuery('#main .rs01pag').remove()
  jQuery('#main .rs01overlay-ghost').remove()
  jQuery('#main .rs01imgback').css({ width: '', height: '', left: '', top: '' })

  const rubyLayoutNested1 = jQuery('.layout-multi__slider_1').rubyslider( sliderOptions1 )
  const rubyLayoutNested2 = jQuery('.layout-multi__slider_2').rubyslider( sliderOptions2 )
}
onMounted(() => {
  setTimeout(initSetup, 400)
})
</script>


<template>
<main id="main">
  <section class="layout-multi wrapper">
    <div class="container">
      <TitleHead>
        <template #title>
          <h1>NHIỀU SLIDER TRÊN CÙNG 1 TRANG</h1>
        </template>
      </TitleHead>

      <div class="row">
        <div class="col-12 col-sm-3">
          <h2>SLIDER SỐ 1</h2>
          <p class="font-blokk">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sunt eaque molestias corporis possimus dolorum consectetur voluptatem, ut, consequatur ipsam dicta soluta! Nobis dolorum ut ullam velit illum sunt, ipsum!</p>
        </div>
        <div class="col-12 col-sm-9">
          <div class="layout-multi__slider_1 slider-preview rs01">
            <a class="rs01imgback" href="/img/vietnam-1140-1.jpg">Việt Nam 1</a>
            <a class="rs01imgback" href="/img/vietnam-1140-2.jpg">Việt Nam 2</a>
            <a class="rs01imgback" href="/img/vietnam-1140-3.jpg">Việt Nam 3</a>
            <a class="rs01imgback" href="/img/vietnam-1140-4.jpg">Việt Nam 4</a>
            <a class="rs01imgback" href="/img/vietnam-1140-5.jpg">Việt Nam 5</a>
            <a class="rs01imgback" href="/img/vietnam-1140-6.jpg">Việt Nam 6</a>
          </div> <!-- /.rs01 -->
        </div>
      </div>

      <LineSpace />

      <div class="row">
        <div class="col-12 col-sm-9">
          <div class="layout-multi__slider_2 slider-preview rs01">
            <a class="rs01imgback" href="/img/vietnam2-1140-1.jpg">Việt Nam 1</a>
            <a class="rs01imgback" href="/img/vietnam2-1140-2.jpg">Việt Nam 2</a>
            <a class="rs01imgback" href="/img/vietnam2-1140-3.jpg">Việt Nam 3</a>
            <a class="rs01imgback" href="/img/vietnam2-1140-4.jpg">Việt Nam 4</a>
            <a class="rs01imgback" href="/img/vietnam2-1140-5.jpg">Việt Nam 5</a>
            <a class="rs01imgback" href="/img/vietnam2-1140-6.jpg">Việt Nam 6</a>
          </div> <!-- /.rs01 -->
        </div>
        <div class="col-12 col-sm-3">
          <h2>SLIDER SỐ 2</h2> 
          <p class="font-blokk">Reiciendis velit, corporis sequi enim non, vitae totam minus quidem hic ullam nihil unde id laudantium. Laudantium aperiam cupiditate omnis quaerat sequi autem deserunt nam enim, nostrum perspiciatis. Expedita, provident.</p>
        </div>
      </div>

    </div>
  </section>

  <Guide>
    <template #gioi-thieu>
      <p>...</p>
    </template>
    <template #thiet-lap>
      <pre class="codeprint">// Options của slider 1
{{ sliderOptions1 }}</pre>
      <pre class="codeprint">// Options của slider 2
{{ sliderOptions2 }}</pre>
    </template>
    <template #nav>
      <ButtonPrevNext
        prev-name="Layout lồng nhau"
        prev-to="/slider/layout-nested"
        next-name="Layout phụ đề"
        next-to="/slider/layout-caption" />
    </template>
  </Guide>
</main>
</template>
 

<style lang="scss">
.layout-multi {
  overflow: hidden;
  .linespace {
    text-align: center;
  }
}
.layout-multi__slider_1 {
  padding: 10px;
  border: 1px solid #999;
  border-radius: 12px;
  margin-bottom: 20px;
  .rs01pag.rs01pagdirs-hor {
    margin-top: 10px;
  }
  .rs01pagitem {
    &:hover {
      color: var(--color-primary);
    }
    &.rs01cur {
      color: #fff;
    }
  }

  /** Media */
  @media only screen and (max-width: 767px) {
    .rs01pagitem {
      // padding: 15px !important;
    }
  }
  @media only screen and (max-width: 575px) {
    // padding: 0;
    // border-width: 0;
  }
}
</style>
