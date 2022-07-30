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
    const actived = 'fxlive--actived'
    let rubyPreview
    let fxDefault

    if ($slider.length) {
      rubyPreview = $slider.rubyslider( sliderOptions )
      fxDefault = rubyPreview.optsCur().fx
      console.log(fxDefault)
    }

    /** FX LIVE */
    const $fxLive = jQuery('.fxlive__slider')
    $fxLive.each(function() {
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
      console.log(fxName == fxDefault)
      if (fxName == fxDefault) {
        $fxSlider.parent().find('.fxlive__select').addClass(actived)
      }
    })

    /** EVENT TAP ON FX SELECT BUTTON */
    const $fxSelect = $('.fxlive__select');
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

    <div class="fxlive">
      <div class="container">
        <div class="hr circle"></div>

        <div class="fxlive__title">
          <h2>EXAMPLES OF LIVE EFFECT</h2>
        </div>

        <div class="fxlive__table row">
          <div
            v-for="(fx, key) in aFx"
            :key="key"
            class="fxlive__item col6"
            >
            <div class="fxlive__item_inner">
              <div class="rs01 fxlive__slider" :data-fx="fx">
                <a class="rs01imgback" href="/img/vietnam-large2.jpg">Việt Nam 2</a>
                <a class="rs01imgback" href="/img/vietnam-large4.jpg">Việt Nam 4</a>
                <a class="rs01imgback" href="/img/vietnam-large6.jpg">Việt Nam 6</a>
              </div>
              <div class="fxlive__item_footer">
                <h3>#{{ (key + 1)  + ' - ' + fx }}</h3>
                <div class="fxlive__btn">
                  <a class="fxlive__select" :data-fx="fx">Apply to Slider Preview</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.fxlive {
  background-color: #f0f0f0;
  .hr {
    margin-top: 50px;
    margin-bottom: 80px;
  }
  &__title {
    h2 {
      font-size: 46px;
    }
  }
  &__item {
    margin-bottom: 100px;
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
  }

  /** Button select */
  &__select {
    display: block;
    padding: 9px 20px;
    background-color: #fff;
    border: 1px solid #999;
    border-radius: 4px;
    color: #333;
    text-align: center;
    cursor: pointer;
    &:hover {
      background-color: rgba($color: #000, $alpha: .75);
      border-color: rgba($color: #000, $alpha: .5);
      color: #fff;
    }
    &.fxlive--actived {
      background-color: #cc0055;
      border-color: #cc0055;
      color: #fff;
    }
  }
}
</style>
 