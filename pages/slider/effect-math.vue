<script setup>
const aFx = [
  'rectMove',
  'rectRun',
  'rectSlice',
  'rubyFade',
  'rubyMove',
  'rubyRun',
  'rubyScale',
  'zigzagRun'
]
const sliderOptions = {
  fx: 'rectRun',
  speed: 800,
  width: 1880,
  height: 520,
}

onMounted(() => {
  setTimeout(() => {

    /** SLIDER PREVIEW */
    const $slider = jQuery('#effect-math__slider')
    const actived = 'fxmath--actived'
    let rubyPreview
    let fxDefault

    if ($slider.length) {
      rubyPreview = $slider.rubyslider( sliderOptions )
      fxDefault = rubyPreview.optsCur().fx
    }

    /** FX LIVE */
    const $fxmath = jQuery('.fxmath__slider')
    $fxmath.each(function() {
      const $fxSlider = $(this)
      const fxName = $fxSlider.data('fx')
      const options = {
        fx: fxName,
        speed: 800,
        width: 1880,
        isNav: false,
        pag: {
          type: 'bullet'
        }
      } 
      $fxSlider.rubyslider( options )

      // Actived button select at begin
      if (fxName == fxDefault) {
        $fxSlider.parent().find('.fxmath__select').addClass(actived)
      }
    })

    /** EVENT TAP ON FX SELECT BUTTON */
    const $fxSelect = $('.fxmath__select');
    $fxSelect.on('click', function() {
        const $selectCur = $(this)
        const fxName = $selectCur.data('fx')

        // Remove class Actived
        if( $selectCur.hasClass(actived) ) {
          $selectCur.removeClass(actived)
          fxName = fxDefault;
        }
        // Add class Actived
        else {
          $fxSelect.removeClass(actived)
          $selectCur.addClass(actived)
        }

        // Update For Slider Preview
        rubyPreview.update({ 'fx': fxName })
        return false;
    });
  }, 400)
})
</script>


<template>
  <div>
    <div class="wrapper effect-math">
      <div class="container">
        <TitleHead title="MATH EFFECTS">
          <div class="title-desc">Slider Preview</div>
        </TitleHead>

        <div id="effect-math__slider" class="slider-preview rs01">
          <a class="rs01imgback" href="/img/vietnam-large1.jpg">Việt Nam 1</a>
          <a class="rs01imgback" href="/img/vietnam-large2.jpg">Việt Nam 2</a>
          <a class="rs01imgback" href="/img/vietnam-large3.jpg">Việt Nam 3</a>
          <a class="rs01imgback" href="/img/vietnam-large4.jpg">Việt Nam 4</a>
          <a class="rs01imgback" href="/img/vietnam-large5.jpg">Việt Nam 5</a>
          <a class="rs01imgback" href="/img/vietnam-large6.jpg">Việt Nam 6</a>
        </div> <!-- /.rs01 -->
      </div>
    </div>

    <div class="fxmath">
      <div class="container">
        <div class="hr circle"></div>
        <div class="fxmath__title">
          <h2>EXAMPLES OF LIVE EFFECT</h2>
        </div>
      </div>

      <div class="fxmath__table">
        <div
          v-for="(fx, key) in aFx"
          :key="key"
          class="fxmath__item"
          >
          <div class="fxmath__item_inner">
            <div class="rs01 fxmath__slider" :data-fx="fx">
              <a class="rs01imgback" href="/img/vietnam-large2.jpg">Việt Nam 2</a>
              <a class="rs01imgback" href="/img/vietnam-large4.jpg">Việt Nam 4</a>
              <a class="rs01imgback" href="/img/vietnam-large6.jpg">Việt Nam 6</a>
            </div>
            <div class="fxmath__item_footer">
              <h3 class="fxmath__tag">#{{ (key + 1)  + ' - ' + fx }}</h3>
              <div class="fxmath__btn">
                <button class="fxmath__select" :data-fx="fx">
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
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.fxmath {
  padding-left: 50px;
  padding-right: 50px;
  background-color: #f0f0f0;
  .hr {
    margin-top: 80px;
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
  &__item_footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      margin-bottom: 0;
      background: rgb(204,0,85);
      background: linear-gradient(0deg, rgba(204,0,85,0.2) 5%, rgba(204,0,85,0.2) 35%, transparent 36%);
      text-transform: capitalize;
    }
  }

  /** Slider */
  &__slider {
    margin-bottom: 10px;
    .rs01viewport {
      border-radius: 8px;
    }
  }

  /** Button Select */
  &__select {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 13px 20px;
    background-color: #fff;
    background-color: rgba($color: #000, $alpha: .1);
    border-width: 0;
    border-radius: 6px;
    color: #333;
    text-align: center;
    cursor: pointer;
    outline: none;
    &:hover {
      background-color: rgba($color: #000, $alpha: .75);
      border-color: rgba($color: #000, $alpha: .5);
      color: #fff;
    }
    i {
      display: block;
      padding-left: 8px;
    }
    svg {
      display: block;
    }
    &.fxmath--actived {
      background-color: #cc0055;
      border-color: #cc0055;
      color: #fff;
    }
  }

  /** Media */
  @media (min-width: 1200px) {
    &__item {
      padding-left: 50px;
      padding-right: 50px;
    }
  }
  @media (min-width: 1400px) {
  }
  @media (min-width: 1600px) {
    padding-left: 150px;
    padding-right: 150px;
  }
  @media (max-width: 991px) {
    padding-left: 20px;
    padding-right: 20px;
    &__item {
      margin-bottom: 100px;
    }
    &__tag {
      font-size: 21px;
    }
    &__select {
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
    &__item {
      width: 100%;
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
 