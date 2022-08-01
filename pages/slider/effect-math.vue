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
              <h3>#{{ (key + 1)  + ' - ' + fx }}</h3>
              <div class="fxmath__btn">
                <button class="fxmath__select" :data-fx="fx">Apply to Slider Preview</button>
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
  padding-left: 150px;
  padding-right: 150px;
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
    padding-left: 50px;
    padding-right: 50px;
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
    &.fxmath--actived {
      background-color: #cc0055;
      border-color: #cc0055;
      color: #fff;
    }
  }
}
</style>
 