<script setup>
const aFx = [
  'rectMove',
  'rectRun',
  'rectSlice',
  'rubyFade',
  'rubyMove',
  'rubyRun',
  'rubyScale',
  'zigzagRun',
  'randomMath'
]
let sliderOptions = {
  fx: 'rectRun',
  speed: 1000,
  width: 1880,
  // height: 520,
}

const initSetup = () => {
  jQuery('#main .rs01nav').remove()
  jQuery('#main .rs01pag').remove()
  jQuery('#main .rs01overlay-ghost').remove()
  jQuery('#main .rs01imgback').css({ width: '', height: '', left: '', top: '' })

  /** SLIDER PREVIEW */
  const $slider = jQuery('.effect-math__slider')
  const actived = 'fxmath--actived'
  let rubyPreview
  let fxPreview

  if ($slider.length) {
    rubyPreview = $slider.rubyslider( sliderOptions )
    fxPreview = rubyPreview.optsCur().fx
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
    if (fxName == fxPreview) {
      $fxSlider.parent().find('.fxmath__select').addClass(actived)
    }
  })

  /** EVENT TAP ON FX SELECT BUTTON */
  const $fxSelect = $('.fxmath__select');
  $fxSelect.on('click', function() {
      const $selectCur = $(this)
      let fxName = $selectCur.data('fx')

      // Remove class Actived
      if( $selectCur.hasClass(actived) ) {
        $selectCur.removeClass(actived)
        fxName = fxPreview;
      }
      // Add class Actived
      else {
        $fxSelect.removeClass(actived)
        $selectCur.addClass(actived)
      }

      // Update For Slider Preview
      rubyPreview.update({ fx: fxName })
      sliderOptions = jQuery.extend( true, {}, sliderOptions, { fx: fxName })
      return false;
  })
}
onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
  setTimeout(initSetup, 400)
})
</script>


<template>
<main id="main">
  <section class="effect-math wrapper">
    <div class="container">
      <TitleHead>
        <template #title>
          <h1>HIỆU ỨNG MATH</h1>
        </template>
        <template #desc>
          <p>Slider Main</p>
        </template>
      </TitleHead>

      <div class="effect-math__slider slider-preview rs01">
        <a class="rs01imgback" href="/img/vietnam-large1.jpg">Việt Nam 1</a>
        <a class="rs01imgback" href="/img/vietnam-large2.jpg">Việt Nam 2</a>
        <a class="rs01imgback" href="/img/vietnam-large4.jpg">Việt Nam 4</a>
        <a class="rs01imgback" href="/img/vietnam-large5.jpg">Việt Nam 5</a>
        <a class="rs01imgback" href="/img/vietnam-large6.jpg">Việt Nam 6</a>
      </div> <!-- /.rs01 -->
    </div>
  </section>

  <section class="fxmath">
    <div class="container">
      <div class="hr hr--circle"></div>
      <div class="fxmath__title">
        <h2>DANH SÁCH HIỆU ỨNG MATH</h2>
      </div>
    </div>

    <div class="fxmath__table grid-custom">
      <div
        v-for="(fx, key) in aFx"
        :key="key"
        class="fxmath__item grid-custom__item"
        >
        <div class="fxmath__item_inner">
          <div class="rs01 fxmath__slider" :data-fx="fx">
            <a class="rs01imgback" href="/img/vietnam-large2.jpg">Việt Nam 2</a>
            <a class="rs01imgback" href="/img/vietnam-large4.jpg">Việt Nam 4</a>
            <a class="rs01imgback" href="/img/vietnam-large6.jpg">Việt Nam 6</a>
          </div>
          <div class="fxmath__item_footer">
            <h3 class="fxmath__tag">#{{ (key + 1)  + ' - ' + fx }}</h3>
            <div class="fxmath__btn btn">
              <button class="fxmath__select" :data-fx="fx">
                <span>Cập nhật  Slider Main</span>
                <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/></svg></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Guide>
    <template #gioi-thieu>
      <p>Hiệu ứng Math sẽ tính toán kích thước của hình ảnh để phân chia thành nhiều phần khác nhau theo hình chữ nhật (rectangle) hoặc hình vuông (square).</p>
      <ul>
        <li>Hiệu ứng hỗ trợ thời gian thực khi bạn đang kéo rê trên slider.</li>
        <li>RubySlider hiện tại hỗ trợ 8 hiệu ứng Math khác nhau.</li>
        <li>Bạn có thể chọn chế độ <b>"randomMath"</b> để slider có thể chạy 8 hiệu ứng một cách ngẫu nhiên.</li>
        <li>Bạn có thể cập nhật hiệu ứng ở phần danh sách sang <b>Slider Main</b> để xem hiệu ứng Math dễ dàng hơn.</li>
      </ul>
      </template>
    <template #thiet-lap>
      <pre class="codeprint">{{ sliderOptions }}</pre>
    </template>
    <template #nav>
      <ButtonPrevNext
        prev-name="Hiệu ứng Fade"
        prev-to="/slider/effect-fade"
        next-name="Hiệu ứng CssOne"
        next-to="/slider/effect-css-one" />
    </template>
  </Guide>
</main>
</template>


<style lang="scss">
.fxmath {
  .hr {
    margin-bottom: 80px;
  }
  &__title {
    margin-bottom: 80px;
    text-align: center;
    h2 {
      font-size: 46px;
    }
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
    .rs01pag {
      &.rs01bullet {
        position: absolute;
        bottom: 0;
      }
    }
    .rs01bullet {
      .rs01pagitem {
        background-color: rgba($color: #000, $alpha: .75);
      }
    }
  }

  /** Button Select */
  &__btn {
    .fxmath--actived {
      background-color: var(--color-primary);
      color: #fff;
    }
  }

  /** Media */
  @media (min-width: 1200px) {
    .grid-custom__item {
      margin-bottom: 150px;
    }
  }
  @media (min-width: 1400px) {
  }
  @media (min-width: 1600px) {
  }
  @media (max-width: 991px) {
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
  }
  @media (max-width: 575px) {
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
  }
}
</style>
 