<script setup>
definePageMeta({
  middleware: ['init']
})

const sliderOptions = {
  fx: 'coverflow3D',
  coverflow3D: {
    widthSlide: [940, '80%'],
    opacity: .7
  },
  speed: 800,
  width: 1140,
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
  jQuery('#main .rs01nav').remove()
  jQuery('#main .rs01pag').remove()
  jQuery('#main .rs01overlay-ghost').remove()
  jQuery('#main .rs01imgback').css({ width: '', height: '', left: '', top: '' })

  const actived = 'coverflow3d--actived'
  const $fxTable = jQuery('.coverflow3d__table')
  // const fxDefault = code.optsCur().fx

  const $slider = jQuery('.effect-coverflow3d__slider')
  let code = $slider.rubyslider( sliderOptions )

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
<main id="main">
  <section class="effect-coverflow3d wrapper">
    <div class="container">
      <TitleHead>
        <template #title>
          <h1>HIỆU ỨNG <br class="br--max-xs">COVERFLOW 3D</h1>
        </template>
        <template #desc>
          <p>Main Slider</p>
        </template>
      </TitleHead>
    </div>

    <div class="effect-coverflow3d__slider slider-preview rs01">
      <a class="rs01imgback" href="/img/vietnam-1140-1.jpg">Việt Nam 1</a>
      <a class="rs01imgback" href="/img/vietnam-1140-2.jpg">Việt Nam 2</a>
      <a class="rs01imgback" href="/img/vietnam-1140-4.jpg">Việt Nam 4</a>
      <a class="rs01imgback" href="/img/vietnam-1140-5.jpg">Việt Nam 5</a>
      <a class="rs01imgback" href="/img/vietnam-1140-6.jpg">Việt Nam 6</a>
    </div> <!-- /.rs01 -->
  </section>

  <section class="coverflow3d">
    <div class="container">
      <div class="hr hr--circle"></div>
      <TitleHead>
        <template #title>
          <h2>TUỲ BIẾN<br class="br--max-xs">THAM SỐ HIỆU ỨNG</h2>
        </template>
        <template #desc>
          <p>Hiệu ứng có các options khác nhau, có thể tuỳ biến để thay đổi kiểu dáng.</p>
        </template>
      </TitleHead>
    </div>

    <!-- Templates gallery -->
    <div class="coverflow3d__table">
      <div
        v-for="(fx, index) in aFxCustom"
        :key="index"
        class="coverflow3d__item">

        <div class="coverflow3d__live">
          <div class="coverflow3d__slider rs01">
            <a class="rs01imgback" href="/img/vietnam2-1140-2.jpg">Việt Nam 2</a>
            <a class="rs01imgback" href="/img/vietnam2-1140-4.jpg">Việt Nam 4</a>
            <a class="rs01imgback" href="/img/vietnam2-1140-6.jpg">Việt Nam 6</a>
            <a class="rs01imgback" href="/img/vietnam2-1140-7.jpg">Việt Nam 7</a>
          </div>
        </div>
        <pre class="coverflow3d__option codeprint">{{ fx }}</pre>
        <div class="coverflow3d__item_footer">
          <h3 class="coverflow3d__tag">#{{ index + 1 }} - Style {{ index + 1 }}</h3>
          <div class="coverflow3d__btn btn">
            <button class="coverflow3d__select" :data-fx-index="index">
              <span>Cập nhật main slider</span>
              <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/></svg></i>
            </button>
          </div>
        </div>
      </div>
    </div> <!-- /.coverflow3d__table -->
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
        prev-name="Hiệu ứng CssOne"
        prev-to="/slider/effect-css-one"
        next-name="Tất cả ví dụ"
        next-to="/slider" />
    </template>
  </Guide>
</main>
</template>


<style lang="scss">
.effect-coverflow3d {
  &__slider {
    margin-bottom: 30px;
  }
}

.coverflow3d {
  padding-left: 40px;
  padding-right: 40px;
  .hr {
    margin-bottom: 80px;
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
  &__option.codeprint {
    background-color: rgba($color: #000, $alpha: .05);
    box-shadow: none;
  }
  /** Slider */
  &__slider {
    margin-bottom: 20px;
    .rs01slide {
      border-radius: 6px;
    }
    .rs01pag.rs01bullet {
      position: absolute;
      bottom: 0;
      .rs01pagitem {
        background-color: rgba($color: #000, $alpha: .75);
      }
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
    &.coverflow3d--actived {
      background-color: var(--color-primary);
      color: #fff;
    }
  }

  /** Media */
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
  }
  @media (max-width: 575px) {
    padding-left: 20px;
    padding-right: 20px;
    .hr {
      margin-bottom: 60px;
    }
    &__item {
      padding-left: 0;
      padding-right: 0;
      margin-bottom: 100px;
    }
    &__select {
      min-width: 80px;
      span {
        display: none;
      }
      i {
        padding-left: 0;
      }
    }
  }
}
</style>
 