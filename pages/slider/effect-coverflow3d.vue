<script setup>
const sliderOptions = {
  fx: 'coverflow3D',
  coverflow3D: {
    widthSlide: [940, '80%'],
    opacity: .7
  },
  speed: 800,
  width: 1880,
  margin: 10
}
const optsDefault = {
  fx: 'coverflow3D',
  coverflow3D: {
    widthSlide: '70%'
  },
  speed: 800,
  width: 940,
  margin: 5,
  isNav: false,
  pag: {
    type: 'bullet'
  },
}
const aFxCustom = [
  {
    fx: 'coverflow3D',
    coverflow3D: {
      widthSlide: '70%',
      zDeep: 600,
      rotate: 30,
      opacity: 0.7
    },
  }, {
    fx: 'coverflow3D',
    coverflow3D: {
      widthSlide: '70%',
      zDeep: 0,
      rotate: 0,
      opacity: 0.25
    }
  }, {
    fx: 'coverflow3D',
    coverflow3D: {
      widthSlide: '70%',
      zDeep: 700,
      rotate: 0,
      opacity: 0.25
    }
  }, {
    fx: 'coverflow3D',
    coverflow3D: {
      widthSlide: '70%',
      zDeep: 400,
      rotate: -30,
      opacity: 0.25
    }
  }
]
const initSetup = function() {
  const actived = 'coverflow3d--actived'
  const $fxTable = jQuery('.coverflow3d__table')
  // const fxDefault = code.optsCur().fx

  const $slider = jQuery('#effect-coverflow3d__slider')
  let code
  if ($slider.length) {
    code = $slider.rubyslider( sliderOptions )
  }

  /**
   * ***********************************************************
   * INIT EFFECT LIVE
   * ***********************************************************
   */
  const $fx = jQuery('.coverflow3d__item')
  $fx.each(function(i) {
    const $fxCur = jQuery(this)
    const $sliderCur = $fxCur.find('.rs01')
    const optsCur = jQuery.extend( true, {}, optsDefault, aFxCustom[i] )

    // Khoi tao Slider
    $sliderCur.rubyslider(optsCur)
    
    // Actived fx custom first
    if( i === 0 ) {
      $fxCur.find('.fx-select').addClass(actived)
    }
  })


  /**
   * ***********************************************************
   * EVENT TAP ON FX SELECT
   * ***********************************************************
   */
  const $fxSelect = jQuery('.coverflow3d__select')
  const $fxSelectFirst = $fxSelect.eq(0)

  $fxSelect.on('click', function() {
    const $selectCur = jQuery(this)
    let fxCustom = aFxCustom[ $selectCur.data('fx-index') ]

    // Remove class Actived
    if( $selectCur.hasClass(actived) ) {
      $selectCur.removeClass(actived)

      // Reactived style first
      $fxSelectFirst.addClass(actived)
      fxCustom = aFxCustom[0]
    }
    // Add class Actived
    else {
      $fxSelect.removeClass(actived)
      $selectCur.addClass(actived)
    }

    // Update For Slider Preview
    code.update({ 'coverflow3D': fxCustom })
    return false
  })
}

onMounted(() => {
  setTimeout(initSetup, 600)
})
</script>


<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <TitleHead title="COVERFLOW 3D EFFECTS">
          <div class="title-desc">Slider Preview</div>
        </TitleHead>
      </div>

      <div id="effect-coverflow3d__slider" class="slider-preview rs01">
        <a class="rs01imgback" href="/img/vietnam-large1.jpg">Việt Nam 1</a>
        <a class="rs01imgback" href="/img/vietnam-large2.jpg">Việt Nam 2</a>
        <a class="rs01imgback" href="/img/vietnam-large3.jpg">Việt Nam 3</a>
        <a class="rs01imgback" href="/img/vietnam-large4.jpg">Việt Nam 4</a>
        <a class="rs01imgback" href="/img/vietnam-large5.jpg">Việt Nam 5</a>
        <a class="rs01imgback" href="/img/vietnam-large6.jpg">Việt Nam 6</a>
      </div> <!-- /.rs01 -->
    </div>

    <div class="coverflow3d">
      <div class="container">
        <div class="coverflow3d__hr hr circle"></div>
        <div class="coverflow3d__title">
          <h2>CUSTOM STYLE OF EFFECTS</h2>
        </div>
      </div>

      <!-- Templates gallery -->
      <div class="coverflow3d__table">
        <div
          v-for="(fx, index) in aFxCustom"
          :key="index"
          class="coverflow3d__item"
          >
          <div class="coverflow3d__live">
            <div class="coverflow3d__slider rs01">
              <a class="rs01imgback" href="/img/season-landscape2.jpg">Season 2</a>
              <a class="rs01imgback" href="/img/season-landscape4.jpg">Season 4</a>
              <a class="rs01imgback" href="/img/season-landscape6.jpg">Season 6</a>
              <a class="rs01imgback" href="/img/season-landscape7.jpg">Season 7</a>
            </div>
          </div>
          <pre class="coverflow3d__option prettyprint">{{ fx }}</pre>
          <div class="coverflow3d__item_footer">
            <h3 class="coverflow3d__tag">#{{ index + 1 }} - Style {{ index + 1 }}</h3>
            <div class="coverflow3d__btn">
              <button class="coverflow3d__select" :data-fx-index="index">
                <span>Apply to Slider Preview</span>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                    <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                  </svg>
                </i>
              </button>
            </div>
          </div>
        </div>
      </div> <!-- /.coverflow3d__table -->
    </div>
  </div>
</template>


<style lang="scss">
.coverflow3d {
  padding-left: 40px;
  padding-right: 40px;
  background-color: #f0f0f0;
  .hr {
    margin-top: 100px;
    margin-bottom: 100px;
  }
  &__title {
    margin-bottom: 100px;
    text-align: center;
    h2 {
      font-size: 46px;
    }
  }
  &__table {
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    width: 50%;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 150px;
    box-sizing: border-box;
  }
  &__option {
    padding-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-left: 1px dashed #999;
    font-size: 12px;
    line-height: 1.6em;
  }
  /** Slider */
  &__slider {
    margin-bottom: 20px;
    .rs01slide {
      border-radius: 6px;
    }
    .rs01pag {
      position: absolute;
      bottom: 0;
    }
  }
  &__item_footer {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  &__tag {
    margin-bottom: 0;
    background: rgb(204,0,85);
    background: linear-gradient(0deg, rgba(204,0,85,0.2) 5%, rgba(204,0,85,0.2) 35%, transparent 36%);
  }
  /** Button Select */
  &__btn {
    display: flex;
    justify-content: center;
  }
  &__select {
    display: flex;
    justify-content: center;
    min-width: 250px;
    padding: 13px 20px;
    background-color: rgba($color: #000, $alpha: .1);
    border-width: 0;
    border-radius: 6px;
    color: #333;
    text-align: center;
    font-size: 14px;
    line-height: 1.2;
    outline: none;
    cursor: pointer;
    &:hover {
      background-color: rgba($color: #000, $alpha: .75);
      color: #fff;
    }
    &.coverflow3d--actived {
      background-color: var(--color-primary);
      color: #fff;
    }
    i {
      display: block;
      padding-left: 8px;
    }
    svg {
      display: block;
    }
  }

  /** Media */
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
    &__item {
      padding-left: 50px;
      padding-right: 50px;
    }
  }
  @media (max-width: 991px) {
    &__item {
      width: 100%;
    }
    &__tag {
      font-size: 21px;
    }
    &__select {
      min-width: auto;
      padding: 10px 15px;
      font-size: 12px;
    }
  }
  @media (max-width: 767px) {
    .hr {
      margin-top: 80px;
      margin-bottom: 80px;
    }
    &__title {
      margin-bottom: 80px;
      h2 {
        font-size: 35px;
      }
    }
  }
  @media (max-width: 575px) {
    padding-left: 20px;
    padding-right: 20px;
    .hr {
      margin-top: 60px;
      margin-bottom: 60px;
    }
    &__title {
      margin-bottom: 60px;
      h2 {
        font-size: 28px;
      }
    }
    &__item {
      padding-left: 0;
      padding-right: 0;
      margin-bottom: 100px;
    }
  }
}
</style>
 