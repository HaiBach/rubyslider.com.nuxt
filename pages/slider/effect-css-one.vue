<script setup>
const sliderOptions = {
  fx: 'cssOne',
  speed: 600,
  width: 1880,
  height: 550
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

onMounted(() => {
  setTimeout(() => {
    const $slider = jQuery('#effect-cssone__slider')
    let code

    if ($slider.length) {
      code = $slider.rubyslider( sliderOptions )
    }

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
  }, 400)
})
</script>


<template>
  <div>
    <div id="effect-cssone" class="wrapper">
      <div class="container">
        <TitleHead title="CSS ONE EFFECTS">
          <div class="title-desc">Slider Preview</div>
        </TitleHead>

        <div id="effect-cssone__slider" class="slider-preview rs01">
          <a class="rs01imgback" href="/img/vietnam-large1.jpg">Việt Nam 1</a>
          <a class="rs01imgback" href="/img/vietnam-large2.jpg">Việt Nam 2</a>
          <a class="rs01imgback" href="/img/vietnam-large3.jpg">Việt Nam 3</a>
          <a class="rs01imgback" href="/img/vietnam-large4.jpg">Việt Nam 4</a>
          <a class="rs01imgback" href="/img/vietnam-large5.jpg">Việt Nam 5</a>
          <a class="rs01imgback" href="/img/vietnam-large6.jpg">Việt Nam 6</a>
        </div> <!-- /.rs01 -->
      </div>
    </div>

    <div class="cssone">
      <div class="container">
        <div class="hr circle"></div>
        <div class="cssone__title">
          <h2>EXAMPLES OF LIVE EFFECT</h2>
        </div>
      </div>

      <div class="cssone__table row">
        <template
          v-for="(fx, index) in aFx"
          :key="index"
          >
          <div
            v-if="fx != 'br'"
            class="col3 col-xxs-6"
            >
            <div class="cssone__item" :data-fx="fx">
              <div class="cssone__preview">
                <div class="cssone__slide cssone--slide-1">
                  <div class="cssone__name">
                    <span class="cssone__num">{{ index }}</span>{{ fx }}
                  </div>
                </div>
                <div class="cssone__slide cssone--slide-2">
                  <div class="cssone__name">
                    <span class="cssone__num">{{ index }}</span>{{ fx }}
                  </div>
                </div>
              </div>
              <div class="cssone__item_footer">
                <div class="cssone__select">
                  <span class="cssone__one">one</span>
                </div>
              </div>
            </div>

          </div>
          <div v-else class="cssone__br"></div>
        </template>

      </div> <!-- /.cssone__table -->
    </div>
  </div>
</template>


<style lang="scss">
.cssone {
  background-color: #f0f0f0;
  padding-bottom: 100px;
  .hr {
    margin-top: 50px;
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
  &__name {
    position: absolute;
    width: 100%;
    padding-top: 28px;
    text-align: center;
    color: #fff;
  }
  &__preview {
    position: relative;
    height: 140px;
    cursor: pointer;
  }
  &__slide {
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    box-sizing: border-box;
  }
  &--slide-1 {
    background-color: #00c0dc;
  }
  &--slide-2 {
    background-color: #c05;
  }
  &__item_footer {
    margin-top: 10px;
  }
  // Select button
  &__select {
    // position: absolute;
    // top: 0;
    // right: 0;
    z-index: 99;
    span {
      display: block;
      float: left;
      width: 20px;
      height: 12px;
      padding: 5px;
      margin-left: 2px;
      background-color: hsla(0,0%,100%,.1);
      border-radius: 0 4px 0 0;
      color: hsla(0,0%,0%,.4);
      font-size: 11px;
      line-height: 12px;
      cursor: pointer;
      box-sizing: content-box;
    }
  }
  &__one {
    &.cssone--actived {
      background-color: #0cf;
      color: #fff;
    }
  }
  &__br {
    float: left;
    width: 100%;
    height: 80px;
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
 