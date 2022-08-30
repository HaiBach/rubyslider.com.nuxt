<script setup>
const sliderOptions1 = {
  fx: 'cssOne',
  speed: 800,
  width: 1140,
  height: 550,
  imageback: {
    position: 'fill'
  }
}
const sliderOptions2 = {
  fx: 'rectMove',
  speed: 800,
  width: 1140,
  height: 550,
  imageback: {
    position: 'fill'
  }
}

onMounted(() => {
  setTimeout(() => {
    const $slider1 = jQuery('#layout-multi__slider_1')
    const $slider2 = jQuery('#layout-multi__slider_2')
    if ($slider1.length) {
      $slider1.rubyslider( sliderOptions1 )
    }
    if ($slider2.length) {
      $slider2.rubyslider( sliderOptions2 )
    }
  }, 400)
})
</script>


<template>
  <div id="layout-multi" class="wrapper">
    <div class="container">
      <TitleHead title="MULTIPLE SLIDERS ON LAYOUT" />

      <div class="row">
        <div class="col3">
          <h2>SLIDER NUMBER 1</h2>
          <p class="font-blokk">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sunt eaque molestias corporis possimus dolorum consectetur voluptatem, ut, consequatur ipsam dicta soluta! Nobis dolorum ut ullam velit illum sunt, ipsum!</p>
        </div>
        <div class="col9">
          <div id="layout-multi__slider_1" class="slider-preview rs01">
            <a class="rs01imgback" href="/img/vietnam-large1.jpg">Việt Nam 1</a>
            <a class="rs01imgback" href="/img/vietnam-large2.jpg">Việt Nam 2</a>
            <a class="rs01imgback" href="/img/vietnam-large3.jpg">Việt Nam 3</a>
            <a class="rs01imgback" href="/img/vietnam-large4.jpg">Việt Nam 4</a>
            <a class="rs01imgback" href="/img/vietnam-large5.jpg">Việt Nam 5</a>
            <a class="rs01imgback" href="/img/vietnam-large6.jpg">Việt Nam 6</a>
          </div> <!-- /.rs01 -->
        </div>
      </div>

      <div class="hr circle ma-100"></div>

      <div class="row">
        <div class="col9">
          <div id="layout-multi__slider_2" class="slider-preview rs01">
            <a class="rs01imgback" href="/img/season-landscape1.jpg">Season 1</a>
            <a class="rs01imgback" href="/img/season-landscape2.jpg">Season 2</a>
            <a class="rs01imgback" href="/img/season-landscape3.jpg">Season 3</a>
            <a class="rs01imgback" href="/img/season-landscape4.jpg">Season 4</a>
            <a class="rs01imgback" href="/img/season-landscape5.jpg">Season 5</a>
            <a class="rs01imgback" href="/img/season-landscape6.jpg">Season 6</a>
          </div> <!-- /.rs01 -->
        </div>
        <div class="col3">
          <h2>SLIDER NUMBER 2</h2> 
          <p class="font-blokk">Reiciendis velit, corporis sequi enim non, vitae totam minus quidem hic ullam nihil unde id laudantium. Laudantium aperiam cupiditate omnis quaerat sequi autem deserunt nam enim, nostrum perspiciatis. Expedita, provident.</p>
        </div>
      </div>

    </div>
  </div>
</template>
 

<style lang="scss">
#layout-multi {
  h2 {
    font-weight: 300;
  }
}
#layout-multi__slider_1 {
  padding: 10px;
  border: 1px solid #999;
  border-radius: 12px;
  margin-bottom: 20px;
  .rs01pag.rs01pag-hor {
    margin-top: 10px;
  }
  .rs01pagitem {
    border-radius: 3px;
    &:hover {
      color: var(--color-primary);
    }
    &.rs01cur {
      background-color: #cc0055;
      color: #fff;
    }
  }

  /** Media */
  @media only screen and (max-width: 767px) {
    .rs01pagitem {
      padding: 15px !important;
    }
  }
  @media only screen and (max-width: 575px) {
    padding: 0;
    border-width: 0;
  }
}
</style>
