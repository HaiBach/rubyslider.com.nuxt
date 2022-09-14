<script setup>
definePageMeta({
  middleware: ['init']
})

const sliderOptions = {
  fx: 'cssOne',
  cssOne: 'roDeal',
  speed: 800,
  width: 1880,
  height: 520,
  isNav: true
}
const aFx = [
  'glueHor', 'glueVer', 'foldHor', 'foldVer', 'foldFromHor', 'foldFromVer', 'roomHor', 'roomVer', 'flitHor', 'flitVer',
  'hinge', 'roll', 'br',
  'moveHor', 'moveVer', 'fade', 'fadeHor', 'fadeVer', 'scaleInHor', 'scaleInVer', 'scaleOutHor', 'scaleOutVer', 'scalePulse',
  'scaleWave', 'roEdgeHor', 'roEdgeVer', 'newspaper', 'pushFromHor', 'pushFromVer', 'slide', 'br',
  'fall', 'pulseShort', 'roSoft', 'roDeal', 'wheelHor', 'wheelVer', 'snakeHor', 'snakeVer', 'shuffle', 'browseLeft', 'browseRight',
  'slideBehind', 'vacuumHor', 'vacuumVer', 'br',
  'scaleSoft', 'snapHor', 'snapVer', 'letInHor', 'letInVer', 'stickHor', 'stickVer', 'growthHor', 'growthVer', 'soEdgeHor', 'soEdgeVer', 'shake', 'tinHor', 'tinVer'
]
const aFxName = [
  'Glue Horizontal', 'Glue Vertical', 'Fold Horizontal', 'Fold Vertical', 'Fold From Horizontal', 'Fold From Vertical', 'Room Horizontal', 'Room Vertical', 'Flit Horizontal', 'Flit Vertical', 'Hinge', 'Roll', 'br',
  'Move Horizontal', 'Move Vertical', 'Fade', 'Fade Horizontal', 'Fade Vertical', 'Scale In Horizontal', 'Scale In Vertical', 'Scale Out Horizontal', 'Scale Out Vertical', 'Scale Pulse', 'Scale Wave', 'Rotate Edge Horizontal', 'Rotate Edge Vertical', 'Newspaper', 'Push From Horizontal', 'Push From Vertical', 'Slide', 'br',
  'Fall', 'Pulse Short', 'Rotate Soft', 'Rotate Deal', 'Wheel Horizontal', 'Wheel Vertical', 'Snake Horizontal', 'Snake Vertical', 'Shuffle', 'Browse Left', 'Browse Right', 'Slide Behind', 'Vacuum Horizontal', 'Vacuum Vertical', 'br',
  'Scale Soft', 'Snap Horizontal', 'Snap Vertical', 'Let In Horizontal', 'Let In Vertical', 'Stick Horizontal', 'Stick Vertical', 'Growth Horizontal', 'Growth Vertical', 'Soft Edge Horizontal', 'Soft Edge Vertical', 'Shake', 'Tin Horizontal', 'Tin Vertical'
]
let fxCount = 1

const initSetup = () => {
  jQuery('#main .rs01nav').remove()
  jQuery('#main .rs01pag').remove()
  jQuery('#main .rs01overlay-ghost').remove()
  jQuery('#main .rs01imgback').css({ width: '', height: '', left: '', top: '' })

  const $slider = jQuery('.effect-cssone__slider')
  let code = $slider.rubyslider( sliderOptions )

  /**
   * ***********************************************************
   * EFFECTS LIVE SHOW
   * ***********************************************************
   */
  const $fx = jQuery('.cssone__item')
  const actived = 'cssone--actived'

  const speed = 800
  const delay = 0
  const $effect = $('#effects')
  const $fxTable = $('.cssone__table')
  const fxNext = 'ruby-slideNext'
  const fxPrev = 'ruby-slidePrev'
  const fxIn = 'ruby-slideIn'
  const fxOut = 'ruby-slideOut'
  const fxAnim = 'ruby-animated'
  let $fxLast

  $fx.each(function() {
    const $el       = $(this)
    const $fxName   = $el.find('.cssone__name')
    const $fxLive   = $el.find('.cssone__preview')
    const $fxOne    = $el.find('.cssone__one')
    const $slide    = $el.find('.cssone__slide')
    const $slide1   = $el.find('.cssone--slide-1')
    const $slide2   = $el.find('.cssone--slide-2')
    const fxName    = $el.data('fx')
    const fxAdd     = 'rubyone-' + fxName
    const tween     = new RubyTween()
    const styleBegin1 = $slide.attr('style') || ''
    const styleBegin2 = $slide.attr('style') || ''

    /**
      * CHUYEN DOI TEN HIEU UNG ONE THANH TUNG TEN HIEU UNG RIENG LE
      */
    const nameOne = $.extend(true, {}, code.one.va.rubyAnimateOne[fxName]);
    // console.log(nameOne);

    /**
      * FUNCTION SETUP RUBYTWEEN CHO HIEU UNG
      *  + Ho tro setup tu RubyAnimate
      */
    function Tween(fxNameCur, $slCur) {
      /**
        * LAY TWEEN ANIMATE TUONG UNG TEN HIEU UNG
        */
      const anim = rs01MODULE.RUBYANIMATE.Tween(fxNameCur, speed, delay, null, code.one.va.rubyAnimateKeyframes);

      // Dieu kien thuc hien function
      if( !$.isArray(anim) ) return;


      /**
        * SETUP TUNG ANIMATE
        */
      for( var i = 0, len = anim.length ; i < len; i++ ) {
        var propCur = $.extend({}, anim[i]['prop'] || anim[i]);
        /**
          * TRUONG HOP TRANSFORM LUC DAU CHO LAYER
          */
        if( i == 0 ) {
          tween.css($slCur, propCur, { 'type': 'reset' });
        }

        /**
          * TRUONG HOP ANIMATE CHO LAYER
          */
        else {
          /**
            * CHEN THUOC TINH 'COMPLETE' VAO ANIMATE CUOI
            */
          var optsCur = $.extend({}, anim[i]['opts']);

          // Setup Tween Animate
          tween.animate($slCur, propCur, optsCur, false);
        }
      }
    }


    /**
      * FUNCTION SETUP NEXT SLIDE - PREV SLIDE
      */
    function NextSlide() {

      // Setup Tween cho cac Slide
      Tween(nameOne.next[0], $slide2);
      Tween(nameOne.next[1], $slide1);

      // Setup Mask cho hieu ung neu ton tai
      if( nameOne.isMask ) {
        $fxLive.addClass('rs01mask');
      }

      /**
        * SETUP SAU KHI KET THUC TWEEN
        */
      tween.eventComplete(function() {
        // Setup Tween cho truong hop Prev Slide
        PrevSlide();
      });

      // Bat dau Tween
      tween.restart();
    }

    function PrevSlide() {
      // Setup Tween cho cac Slide
      Tween(nameOne.prev[0], $slide1);
      Tween(nameOne.prev[1], $slide2);

      /**
        * SETUP SAU KHI KET THUC TWEEN
        */
      tween.eventComplete(function() {

        // Phuc hoi style ban dau cho doi tuong Slide
        $slide1.attr('style', styleBegin1);
        $slide2.attr('style', styleBegin2);

        // Loai bo class Actived tren Hieu ung
        $el.removeClass(actived);

        // Loai bo class Mask cho hieu ung
        $fxLive.removeClass('rs01mask');
      });

      // Bat dau Tween
      tween.restart();
    }


    /**
      * SETUP EVENTS CLICK CHO HIEU UNG
      */
    $fxLive.on('click', function(e) {
      /**
        * TRUONG HOP HIEU UNG CHUA ACTIVED
        */
      if( !$el.hasClass(actived) ) {
        // Them class Actived cho doi tuong hieu ung hien tai
        $el.addClass(actived);

        // Bau dau thuc hien hieu ung
        NextSlide();
      }
      return false;
    });


    /**
      * EVENTS CLICK CHO BUTTON TOGGLE ONE
      */
    $fxOne.on('click', function() {
      if( $fxOne.hasClass(actived) ) {
        $fxOne.removeClass(actived);
      }
      else {
        if( !!$fxLast ) $fxLast.removeClass(actived);
        $fxOne.addClass(actived);

        // Assign to varible fxlast
        $fxLast = $fxOne;

        // Update options
        code.update({ 'cssOne': fxName });
      }
    });
  })
}
onMounted(() => {
  setTimeout(initSetup, 400)
})
</script>


<template>
<main id="main">
  <section id="effect-cssone" class="effect-cssone wrapper">
    <div class="container">
      <TitleHead>
        <template #title>
          <h1>HIỆU ỨNG CSS ONE</h1>
        </template>
        <template #desc>
          <p>Main Slider</p>
        </template>
      </TitleHead>

      <div class="effect-cssone__slider slider-preview rs01">
        <a class="rs01imgback" href="/img/vietnam-large1.jpg">Việt Nam 1</a>
        <a class="rs01imgback" href="/img/vietnam-large2.jpg">Việt Nam 2</a>
        <a class="rs01imgback" href="/img/vietnam-large4.jpg">Việt Nam 4</a>
        <a class="rs01imgback" href="/img/vietnam-large5.jpg">Việt Nam 5</a>
        <a class="rs01imgback" href="/img/vietnam-large6.jpg">Việt Nam 6</a>
      </div> <!-- /.rs01 -->
    </div>
  </section>

  <section class="cssone">
    <div class="container">
      <div class="hr hr--circle"></div>
      <!-- <div class="cssone__title">
        <h2>DANH SÁCH HIỆU ỨNG CSS ONE</h2>
      </div> -->
      <TitleHead>
        <template #title>
          <h2>DANH SÁCH HIỆU ỨNG CSS ONE</h2>
        </template>
        <template #desc>
          <p>Có tất cả 57 hiệu ứng CssOne. Click vào đối tượng để xem từng hiệu ứng.</p>
        </template>
      </TitleHead>
    </div>

    <div class="cssone__table row">
      <template
        v-for="(fx, index) in aFx"
        :key="index">

        <div
          v-if="fx != 'br'"
          class="col-3 col-xxs-6"
          >
          <div class="cssone__item" :data-fx="fx">
            <div class="cssone__preview">
              <div class="cssone__slide cssone--slide-1">
                <div class="cssone__name">{{ aFxName[index] }}</div>
                <div class="cssone__slide_name">Back</div>
              </div>
              <div class="cssone__slide cssone--slide-2">
                <div class="cssone__name">{{ aFxName[index] }}</div>
                <div class="cssone__slide_name">Front</div>
              </div>
            </div>
            <div class="cssone__item_footer">
              <div class="cssone__tag">#{{ fxCount++ }}</div>
              <div class="cssone__select btn btn--small">
                <button class="cssone__one">
                  <span>Cập nhật main slider</span>
                  <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/></svg></i>
                </button>
              </div>
            </div>
          </div>

        </div>
        <div v-else class="cssone__br"></div>
      </template>

    </div> <!-- /.cssone__table -->
  </section>

  <Guide>
    <template #gioi-thieu>
      <p>Hiệu ứng CssOne là hiệu ứng dựa trên <NuxtLink to="https://www.w3schools.com/css/css3_animations.asp" target="_blank">CSS Animations</NuxtLink>, cho nên bạn sẽ thấy nó thân thiện và có rất nhiều hiệu ứng khác nhau. <br>
      Đặc biệt vì dựa trên CSS Animations cho nên bạn hoàn toàn có thể tuỳ biến hiệu ứng theo ý của bạn, dựa theo cấu trúc gần giống CSS Keyframes.<br>
      Bạn có thể thử nghiệm và tuỳ biến hiệu ứng ở trang <NuxtLink to="/tools/create-css-effect">công cụ</NuxtLink>.<br>
      Thực tế hiệu ứng CssOne là tên bao gồm 4 hiệu ứng css riêng lẻ kết hợp với nhau thành 1 hiệu ứng, do đó ra đời chữ <b>"One"</b> trong CssOne, để bạn dễ dàng thiết lập slider hơn trước hàng trăm hiệu ứng css khác nhau.</p>
      <ul>
        <li>Hiệu ứng hỗ trợ thời gian thực khi bạn đang kéo rê trên slider.</li>
        <li>RubySlider hiện tại hỗ trợ 57 hiệu ứng CssOne xây dựng sẵn.</li>
        <li>Bạn có thể cập nhật hiệu ứng ở phần danh sách sang <b>Slider Main</b> để xem hiệu ứng Math dễ dàng hơn.</li>
        <li>Hiệu ứng Fade thuộc hệ thống của hiệu ứng CssOne.</li>
      </ul>
      </template>
    <template #thiet-lap>
      <pre class="codeprint">{{ sliderOptions }}</pre>
    </template>
    <template #nav>
      <ButtonPrevNext
        prev-name="Hiệu ứng CssTwo"
        prev-to="/slider/effect-css-two"
        next-name="Hiệu ứng Coverflow3Dr"
        next-to="/slider/effect-coverflow3d" />
    </template>
  </Guide>
</main>
</template>


<style lang="scss">
.cssfour {
  padding-bottom: 60px;
  .hr {
    margin-top: 0;
    margin-bottom: 80px;
  }
  &__title {
    margin-bottom: 80px;
    h2 {
      font-size: 46px;
      text-align: center;
    }
  }
  &__table {
    padding-left: 100px;
    padding-right: 100px;
  }
  &__item {
    position: relative;
    margin-bottom: 50px;
  }
  &__slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: #fff;
  }
  &__slide_name {
    padding-top: 1px;
    margin-top: 5px;
    border-top: 1px dashed #fff;
    opacity: .7;
  }
  &__name {
    font-size: 16px;
    font-weight: bold;
  }
  /** Effect Preview */
  &__preview {
    position: relative;
    height: 160px;
    cursor: pointer;
  }
  &__slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    box-sizing: border-box;
  }
  &--slide-1 {
    background-color: #00aac4;
  }
  &--slide-2 {
    background-color: var(--color-primary);
  }
  &__item_footer {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  &__tag {
    position: absolute;
    left: 0;
    top: 0;
    font-size: .875em;
    color: #999;
  }
  // Select button
  &__select {
    button {
      &.cssone--actived {
        background-color: var(--color-primary);
        color: #fff;
      }
    }
  }
  &__br {
    float: left;
    width: 100%;
    height: 150px;
  }
  /* Effect number */
  &__num {
    display: inline-block;
    padding-right: 5px;
    margin-right: 10px;
    border-right: 1px dashed #fff;
    font-size: .6em;
    color: #fff;
  }

  /** Media */
  @media only screen and (max-width: 959px) {
    &__item {
      margin-bottom: 20px;
    }
  }
}
</style>
 