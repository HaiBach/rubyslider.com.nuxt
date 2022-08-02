<script setup>
const sliderOptions = {
  fx: 'cssOne',
  speed: 800,
  width: 1880,
}
const initSetup = function() {
  const code = $('.control-effect__slider').rubyslider( sliderOptions )
  const actived = 'actived'
  const speed = 1000
  const $effect = $('#effects')
  const $easing = $('#easing')
  const $speed = $('#speed')
  const $fxTable = $('.fx-table')

  const aFx = [
    'glueHor', 'glueVer', 'foldHor', 'foldVer', 'foldFromHor', 'foldFromVer', 'roomHor', 'roomVer', 'flitHor', 'flitVer', 'hinge', 'roll',
    'moveHor', 'moveVer', 'fade', 'fadeHor', 'fadeVer', 'scaleInHor', 'scaleInVer', 'scaleOutHor', 'scaleOutVer', 'scalePulse',
    'scaleWave', 'roEdgeHor', 'roEdgeVer', 'newspaper', 'pushFromHor', 'pushFromVer', 'slide',
    'fall', 'pulseShort', 'roSoft', 'roDeal', 'wheelHor', 'wheelVer', 'snakeHor', 'snakeVer', 'shuffle', 'browseLeft', 'browseRight',
    'slideBehind', 'vacuumHor', 'vacuumVer',
    'scaleSoft', 'snapHor', 'snapVer', 'letInHor', 'letInVer', 'stickHor', 'stickVer', 'growthHor', 'growthVer', 'soEdgeHor', 'soEdgeVer', 'shake', 'tinHor', 'tinVer'
  ]
  const aEasing = [
    null,
    'easeInSine',  'easeOutSine',  'easeInOutSine',
    'easeInQuad',  'easeOutQuad',  'easeInOutQuad',
    'easeInCubic', 'easeOutCubic', 'easeInOutCubic',
    'easeInQuart', 'easeOutQuart', 'easeInOutQuart',
    'easeInQuint', 'easeOutQuint', 'easeInOutQuint',
    'easeInCirc',  'easeOutCirc',  'easeInOutCirc',
    'easeInBack',  'easeOutBack',  'easeInOutBack'
  ]
  const aSpeed = [
    800,
    400,
    600,
    800,
    1000,
    1200,
    2000,
    5000
  ]


  /**
   * FUNCTION SETUP RENDER EFFECT ON INPUT
   */
  function Render($el, aName, isNumber, nameProp) {
    let strHTML = ''

    for(var i = 0, len = aName.length - 1; i <= len; i++) {
      let nameCur = (i == 0) ? 'Default'
                             : isNumber ? (i +'. '+ aName[i])
                                        : aName[i]
      // Markup form options
      strHTML += '<option value="'+ aName[i] + '">'+ nameCur +'</option>';
    }
    $el.html(strHTML);

    /* EVENTS SELECT */
    let opts = {}
    $el.change(function() {

      // Get Value current && Convert to Number
      let valueCur = $(this).val()
      valueCur = /\d+/g.test(valueCur) ? parseFloat(valueCur) : valueCur

      opts[nameProp] = valueCur
      code.update(opts)
      return false
    })
  }
  Render($effect, aFx, 1, 'cssOne')
  Render($easing, aEasing, 0, 'cssEasing')
  Render($speed, aSpeed, 0, 'speed')
}

onMounted(() => {
  setTimeout(initSetup, 400)
})
</script>


<template>
  <div class="wrapper control-effect">
    <div class="container">
      <TitleHead title="CONTROL EFFECT" />

      <!-- FORM EFFECT - begin -->
      <div class="fx-form ma-b-50 row">
        <form>
          <div class="col4 ma-b-20">
            <h4 class="">Effects select :</h4>
            <select id="effects" class="form-control"></select>
          </div>
          <div class="col4">
            <h4 class="">Easing select :</h4>
            <select id="easing" class="form-control"></select>
          </div>
          <div class="col4">
            <h4 class="">Speed select :</h4>
            <select id="speed" class="form-control"></select>
          </div>
        </form>
      </div>
      <!-- FORM EFFECT - end -->

      <div class="control-effect__slider slider-preview rs01">
        <a class="rs01imgback" href="/img/vietnam-large1.jpg">Việt Nam 1</a>
        <a class="rs01imgback" href="/img/vietnam-large2.jpg">Việt Nam 2</a>
        <a class="rs01imgback" href="/img/vietnam-large3.jpg">Việt Nam 3</a>
        <a class="rs01imgback" href="/img/vietnam-large4.jpg">Việt Nam 4</a>
        <a class="rs01imgback" href="/img/vietnam-large5.jpg">Việt Nam 5</a>
        <a class="rs01imgback" href="/img/vietnam-large6.jpg">Việt Nam 6</a>
      </div> <!-- /.rs01 -->
    </div>
  </div>
</template>


<style lang="scss">
.control-effect {
  .form-control {
    display: block;
    width: 100%;
  }
}
</style>
 