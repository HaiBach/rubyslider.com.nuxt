<script setup>
const sliderOptions = {
  fx: 'cssTwo',
  speed: 800,
  width: 1880,
  height: 500,
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

const initSetup = function() {
  var code     = $('.ruby-preview').data('rubyslider'),
            actived  = 'actived',
            $effect  = $('#effects'),
            $fxTable = $('.fx-table'),
            speed    = 800,
            delay    = 0,
            fxLast   = {},
            numFx    = 0;


        var aFx = {

            'title0' : 'Basic - Specials',
            'group0' : ['fadeOut', 'fadeIn', 'fadeSlowOut', 'fadeSlowIn',
                        'bounceOut', 'bounceIn', 'roSlit', 'newspaperOut', 'newspaperIn', 'holeOut', 'holeIn', 'br',
                        'flipXOut', 'flipYOut', 'flipXIn', 'flipYIn',
                        'lightSpeedOut', 'lightSpeedIn', 'br',
                        'hingeLeft', 'hingeRight', 'rollLeftOut', 'rollRightOut', 'rollLeftIn', 'rollRightIn',
                        'magic', 'swap', 'twistUpIn', 'twistDownIn', 'br',
                        'foolishOut', 'foolishIn', 'bombLeftOut', 'bombRightOut'],

            'title1' : 'Pull - Glue - Perspective',
            'group1' : ['pullOut', 'pullIn', 'pushOut', 'pushIn',
                        'swashOut', 'swashIn', 'br',
                        'pullBounceOut', 'pullBounceIn', 'pushBounceOut', 'pushBounceIn',
                        'pullSoftOut', 'pullSoftIn', 'pushSoftOut', 'pushSoftIn', 'br',
                        'glueLeftOut', 'glueRightOut', 'glueUpOut', 'glueDownOut',
                        'glueLeftIn', 'glueRightIn', 'glueUpIn', 'glueDownIn', 'br',
                        'perspectiveLeftOut', 'perspectiveRightOut', 'perspectiveUpOut', 'perspectiveDownOut',
                        'perspectiveLeftIn', 'perspectiveRightIn', 'perspectiveUpIn', 'perspectiveDownIn'],

            'title2' : 'Move - Fan - Scale',
            'group2' : ['moveLeftBehind', 'moveRightBehind', 'moveLeftFront', 'moveRightFront',
                        'moveShortLeftBehind', 'moveShortRightBehind', 'moveShortLeftFront', 'moveShortRightFront', 'br',
                        'fanBehindUp', 'fanBehindDown', 'fanFrontUp', 'fanFrontDown', 'br',
                        'soEdgeLeftOut', 'soEdgeRightOut', 'soEdgeUpOut', 'soEdgeDownOut',
                        'soEdgeLeftIn', 'soEdgeRightIn', 'soEdgeUpIn', 'soEdgeDownIn', 'br',
                        'soEdgeOneLeftOut', 'soEdgeOneRightOut', 'soEdgeOneUpOut', 'soEdgeOneDownOut',
                        'soEdgeOneLeftIn', 'soEdgeOneRightIn', 'soEdgeOneUpIn', 'soEdgeOneDownIn'],

            'title3' : 'Slide',
            'group3' : ['slideLeftOut', 'slideRightOut', 'slideUpOut', 'slideDownOut',
                        'slideLeftIn', 'slideRightIn', 'slideUpIn', 'slideDownIn', 'br',
                        'slideOneLeftOut', 'slideOneRightOut', 'slideOneUpOut', 'slideOneDownOut',
                        'slideOneLeftIn', 'slideOneRightIn', 'slideOneUpIn', 'slideOneDownIn', 'br',
                        'slideShortLeftOut', 'slideShortRightOut', 'slideShortUpOut', 'slideShortDownOut',
                        'slideShortLeftIn', 'slideShortRightIn', 'slideShortUpIn', 'slideShortDownIn', 'br',
                        'slideFadeLeftOut', 'slideFadeRightOut', 'slideFadeUpOut', 'slideFadeDownOut',
                        'slideFadeLeftIn', 'slideFadeRightIn', 'slideFadeUpIn', 'slideFadeDownIn', 'br',
                        'slideBounceLeftOut', 'slideBounceRightOut', 'slideBounceUpOut', 'slideBounceDownOut',
                        'slideBounceLeftIn', 'slideBounceRightIn', 'slideBounceUpIn', 'slideBounceDownIn', 'br',
                        'slideTinLeftOut', 'slideTinRightOut', 'slideTinUpOut', 'slideTinDownOut',
                        'slideTinLeftIn', 'slideTinRightIn', 'slideTinUpIn', 'slideTinDownIn', 'br',
                        'slideShakeLeftOut', 'slideShakeRightOut', 'slideShakeUpOut', 'slideShakeDownOut',
                        'slideShakeLeftIn', 'slideShakeRightIn', 'slideShakeUpIn', 'slideShakeDownIn', 'br',
                        'slideScaleLeftOut', 'slideScaleRightOut', 'slideScaleUpOut', 'slideScaleDownOut',
                        'slideScaleLeftIn', 'slideScaleRightIn', 'slideScaleUpIn', 'slideScaleDownIn', 'br',
                        'slidePullLeftOut', 'slidePullRightOut', 'slidePullUpOut', 'slidePullDownOut',
                        'slidePullLeftIn', 'slidePullRightIn', 'slidePullUpIn', 'slidePullDownIn'],

            'title4' : 'Rotate',
            'group4' : [
                        'rotateOut', 'rotateIn', 'br',
                        'roLeftOut', 'roRightOut', 'roUpOut', 'roDownOut',
                        'roLeftIn', 'roRightIn', 'roUpIn', 'roDownIn', 'br',
                        'roDownLeftOut', 'roDownRightOut', 'roUpLeftOut', 'roUpRightOut',
                        'roDownLeftIn', 'roDownRightIn', 'roUpLeftIn', 'roUpRightIn', 'br',
                        'roSoftLeftOut', 'roSoftRightOut', 'roSoftLeftIn', 'roSoftRightIn', 'br',
                        'roTwistLeftOut', 'roTwistRightOut', 'roTwistUpOut', 'roTwistDownOut',
                        'roTwistLeftIn', 'roTwistRightIn', 'roTwistUpIn', 'roTwistDownIn', 'br',
                        'roWheelLeftOut', 'roWheelRightOut', 'roWheelUpOut', 'roWheelDownOut',
                        'roWheelLeftIn', 'roWheelRightIn', 'roWheelUpIn', 'roWheelDownIn', 'br',
                        'roFlitLeftOut', 'roFlitRightOut', 'roFlitUpOut', 'roFlitDownOut',
                        'roFlitLeftIn', 'roFlitRightIn', 'roFlitUpIn', 'roFlitDownIn', 'br',
                        'roFoldLeftOut', 'roFoldRightOut', 'roFoldUpOut', 'roFoldDownOut',
                        'roFoldLeftIn', 'roFoldRightIn', 'roFoldUpIn', 'roFoldDownIn', 'br',
                        'roRoomLeftOut', 'roRoomRightOut', 'roRoomUpOut', 'roRoomDownOut',
                        'roRoomLeftIn', 'roRoomRightIn', 'roRoomUpIn', 'roRoomDownIn', 'br',
                        'roEdgeLeftOut', 'roEdgeRightOut', 'roEdgeUpOut', 'roEdgeDownOut',
                        'roEdgeLeftIn', 'roEdgeRightIn', 'roEdgeUpIn', 'roEdgeDownIn',
                        'roEdgeSoftLeftOut', 'roEdgeSoftRightOut', 'roEdgeSoftUpOut', 'roEdgeSoftDownOut', 'br',
                        'roShortPushLeftOut', 'roShortPushRightOut', 'roShortPushLeftIn', 'roShortPushRightIn',
                        'roShortPullLeftOut', 'roShortPullRightOut', 'roShortPullLeftIn', 'roShortPullRightIn'],

            'title5' : 'Attentions',
            'group5' : ['wave', 'juggle', 'flatten', 'bounce', 'flash', 'pulse', 'rubberBand', 'swing', 'tada', 'wobble', 'br',
                        'flip', 'bobUp', 'bobDown', 'bobLeft', 'bobRight', 'ringLeft', 'ringRight', 'ringUp', 'ringDown', 'br',
                        'shake', 'shakeSlow', 'shakeLittle', 'shakeHard', 'shakeHor', 'shakeVer', 'shakeRotate', 'shakeOpacity', 'shakeCrazy']
        },
        numGroup = 6;





        /**
         ***************************************************************
         * RENDER MARKUP
         ***************************************************************
         */
        var renderNewLine = function() {
                return '<div class="fx-br"></div>';
            },

            renderFxChild = function(fxCur) {
                numFx++;

                return     '<div class="col3 col-xxs-6">'
                        +  '<div class="fx" data-fx="'+ fxCur +'">'
                        +  '    <div class="fx-live">'
                        +  '        <div class="fx-name"><span class="fx-num">'+ numFx + '</span>' + fxCur +'</div>'
                        +  '    </div>'

                        +  '    <div class="fx-select">'
                        +  '        <span class="fx-out">out</span>'
                        +  '        <span class="fx-in">in</span>'
                        +  '    </div>'
                        +  '</div>'
                        +  '</div>';
            },

            renderFxIssue = function(title, strGroup, id) {

                return     '<div class="fx-issue fx-issue'+ id +'">'
                        +  '<div class="container">'
                        +  '    <h3>'+ title +'</h3>'
                        +  '    <div class="fx-list row">'+ strGroup +'</div>'
                        +  '</div>'
                        +  '</div>';
            };

        var strFxIssue = '', nCountFx = 0;
        for(var i = 0, lenI = numGroup - 1; i <= lenI; i++) {

            var strFxGroup = ''
                fxGroup    = aFx['group'+ i],
                fxTitle    = aFx['title'+ i];

            for(var j = 0, lenJ = fxGroup.length-1; j <= lenJ; j++) {
                var fxCur = fxGroup[j];

                // check new line
                if( fxCur == 'br' ) { strFxGroup += renderNewLine(); }
                else                { strFxGroup += renderFxChild(fxCur); nCountFx++; }
            }

            // Render fx issue
            strFxIssue += renderFxIssue(fxTitle, strFxGroup, i);
        }
        $fxTable.html(strFxIssue);






        /**
         ***************************************************************
         * EFFECTS LIVE SHOW
         ***************************************************************
         */
        var $fx = $('.fx');
        $fx.each(function() {

            var $fxCur     = $(this),
                $fxLive    = $fxCur.find('.fx-live'),
                $fxIn      = $fxCur.find('.fx-in'),
                $fxOut     = $fxCur.find('.fx-out'),
                fxName     = $fxCur.data('fx'),
                tween      = new RubyTween(),
                styleBegin = $fxLive.attr('style') || '';



            /**
             * FUNCTION SETUP RUBYTWEEN CHO HIEU UNG
             *  + Ho tro setup tu RubyAnimate
             */
            function Tween(anim) {

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
                        tween.css($fxLive, propCur, { 'type': 'reset' });
                    }


                    /**
                     * TRUONG HOP ANIMATE CHO LAYER
                     */
                    else {

                        /**
                         * CHEN THUOC TINH 'COMPLETE' VAO ANIMATE CUOI
                         */
                        var optsCur = $.extend({}, anim[i]['opts']);
                        if( i === len - 1 ) {

                            optsCur.complete = function() {

                                // Reset lai style luc ban dau
                                $fxLive.attr('style', styleBegin);

                                // Toggle class luc ket thuc Animate
                                $fxCur.removeClass(actived);
                            };
                        }

                        // Setup Tween Animate
                        tween.animate($fxLive, propCur, optsCur, false);
                    }
                }
            }




            /**
             * CHUYEN DOI TEN GOI HIEU UNG THANH TWEEN ANIMATE
             */
            var tweenAnimate = rs01MODULE.RUBYANIMATE.Tween(fxName, speed, delay, null, code.one.va.rubyAnimateKeyframes);





            /* FX LIVE EVENTS CLICK */
            $fxCur.on('click', function(e) {

                /**
                 * TRUONG HOP HIEU UNG CHUA ACTIVED
                 */
                if( !$fxCur.hasClass(actived) ) {

                    // Add class effect tren fxLive
                    $fxCur.addClass(actived);

                    // Chuyen doi TweenAnimate thanh RubyTween
                    Tween(tweenAnimate);
                }

                // Play Tween Animate cho doi tuong Fx Live
                tween.restart();
                return false;
            });




            /* FX SELECT EVENTS CLICK */
            function FxUpdate($fxCur, fxType) {

                var $fxLast = fxLast['$' + fxType],
                    opts    = {};


                /**
                 * TRUONG HOP DA ACTIVED
                 */
                if( $fxCur.hasClass(actived) ) {
                    $fxCur.removeClass(actived);
                }



                /**
                 * TRUONG HOP CHUA ACTIVED
                 */
                else {

                    // Loai bo select tren doi tuong cu
                    !!$fxLast && $fxLast.removeClass(actived);

                    // Add class vao doi tuong hien tai
                    $fxCur.addClass(actived);

                    // Update hieu ung len tabs
                    opts[fxType] = fxName;
                    code.update(opts);

                    // Luu tru doi tuong effect hien tai
                    // Khong the su dung $fxLast duoc
                    fxLast['$' + fxType] = $fxCur;
                }
            }

            $fxIn.on( 'click', function(e) { FxUpdate($(this), 'cssTwoIn'); return false; });
            $fxOut.on('click', function(e) { FxUpdate($(this), 'cssTwoOut'); return false; });
        });
}

onMounted(() => {
  setTimeout(() => {
    const $slider = jQuery('#effect-csstwo__slider')
    let code

    if ($slider.length) {
      code = $slider.rubyslider( sliderOptions )
    }

    /**
     * ***********************************************************
     * EFFECTS LIVE SHOW
     * ***********************************************************
     */
    const $fx = jQuery('.csstwo__item')
    const actived = 'csstwo--actived'

    const speed = 800
    const delay = 0
    const $effect = $('#effects')
    const $fxTable = $('.csstwo__table')
    const fxNext = 'ruby-slideNext'
    const fxPrev = 'ruby-slidePrev'
    const fxIn = 'ruby-slideIn'
    const fxOut = 'ruby-slideOut'
    const fxAnim = 'ruby-animated'
    let $fxLast

    $fx.each(function() {
      const $el       = $(this)
      const $fxName   = $el.find('.csstwo__name')
      const $fxLive   = $el.find('.csstwo__preview')
      const $fxOne    = $el.find('.csstwo__one')
      const $slide    = $el.find('.csstwo__slide')
      const $slide1   = $el.find('.csstwo--slide-1')
      const $slide2   = $el.find('.csstwo--slide-2')
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
          code.update({ 'csstwo': fxName });
        }
      });
    })
  }, 400)
})
</script>


<template>
  <div>
    <div id="effect-csstwo" class="wrapper">
      <div class="container">
        <TitleHead title="CSS TWO EFFECTS">
          <div class="title-desc">Slider Preview</div>
        </TitleHead>

        <div id="effect-csstwo__slider" class="slider-preview rs01">
          <a class="rs01imgback" href="/img/vietnam-large1.jpg">Việt Nam 1</a>
          <a class="rs01imgback" href="/img/vietnam-large2.jpg">Việt Nam 2</a>
          <a class="rs01imgback" href="/img/vietnam-large3.jpg">Việt Nam 3</a>
          <a class="rs01imgback" href="/img/vietnam-large4.jpg">Việt Nam 4</a>
          <a class="rs01imgback" href="/img/vietnam-large5.jpg">Việt Nam 5</a>
          <a class="rs01imgback" href="/img/vietnam-large6.jpg">Việt Nam 6</a>
        </div> <!-- /.rs01 -->
      </div>
    </div>

    <div class="csstwo">
      <div class="container">
        <div class="hr circle"></div>
        <div class="csstwo__title">
          <h2>EXAMPLES OF LIVE EFFECT</h2>
        </div>
      </div>

      <div class="csstwo__table row">
        <template
          v-for="(fx, index) in aFx"
          :key="index"
          >
          <div
            v-if="fx != 'br'"
            class="col3 col-xxs-6"
            >
            <div class="csstwo__item" :data-fx="fx">
              <div class="csstwo__preview">
                <div class="csstwo__slide csstwo--slide-1">
                  <div class="csstwo__name">{{ aFxName[index] }}</div>
                  <div class="csstwo__slide_name">Back</div>
                </div>
                <div class="csstwo__slide csstwo--slide-2">
                  <div class="csstwo__name">{{ aFxName[index] }}</div>
                  <div class="csstwo__slide_name">Front</div>
                </div>
              </div>
              <div class="csstwo__item_footer">
                <div class="csstwo__tag">#{{ fxCount++ }}</div>
                <div class="csstwo__select">
                  <button class="csstwo__one">
                    <span>Apply to Slider</span>
                    <i>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-magic" viewBox="0 0 16 16">
                        <path d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0v1.829Zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707L14 2.707ZM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707L7.293 4Zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1h1.829Zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1h1.829ZM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707L13.293 10ZM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0v1.829Zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0L8.354 9.06Z"/>
                      </svg>
                    </i>
                  </button>
                </div>
              </div>
            </div>

          </div>
          <div v-else class="csstwo__br"></div>
        </template>

      </div> <!-- /.csstwo__table -->
    </div>
  </div>
</template>


<style lang="scss">
.csstwo {
  padding-bottom: 100px;
  margin-top: 50px;
  background-color: #f0f0f0;
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
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 120px;
      padding: 5px;
      padding: 12px 20px;
      margin-left: 10px;
      margin-right: 10px;
      background-color: rgba($color: #000, $alpha: .1);
      border-width: 0;
      border-radius: 6px;
      color: #333;
      font-size: 12px;
      line-height: 1.2;
      text-align: center;
      box-sizing: content-box;
      outline: none;
      cursor: pointer;
      transition: all .2s;
      &:hover {
        background-color: rgba($color: #000, $alpha: .25);
        color: #000;
      }
      &.csstwo--actived {
        background-color: rgba($color: #000, $alpha: .85);
        color: #fff;
      }
    }
    i {
      padding-left: 5px;
      font-size: 0.8em;
    }
    svg {
      display: block;
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
 