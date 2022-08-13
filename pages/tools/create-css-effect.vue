<script setup>
import '../../assets/_scss/create-css-effect.scss'
useHead({
  script: [
    { src: '/js/rubytoggle.js' },
    { src: '/js/rubyruler.js' },
    { src: '/js/rubyform.js' },
    { src: '/js/prettify.min.js' },
    { src: '/js/codemirror/codemirror.js' },
    { src: '/js/create-css-effect.js' },
  ]
})

onMounted(() => {
})
</script>


<template>
  <div class="purewrap">
    <div class="container">
      <!-- <TitleHead title="TẠO MỚI HIỆU ỨNG CSS" /> -->
      <MVTypography></MVTypography>
    </div>

    <!-- LIVE EFFECT - begin
    ======================================================================== -->
    <div class="fxdemo">
      <!-- RUBY RULER -->
      <div class="rubyruler"></div>

      <div class="container">
        <!-- EFFECT PREVIEW - begin -->
        <div class="fxdemo__preview">
          <div class="fxdemo__outer">
            <div class="fxdemo__item">
              <img src="/img/create-css-effect/image-full-color.svg" atl="Effect preview">
            </div>
          </div>
        </div>
        <!-- EFFECT PREVIEW - end -->
      </div>
    </div>
    <!-- LIVE EFFECT - end
    ======================================================================== -->



    <!-- EDITOR - begin
    ======================================================================== -->
    <div class="control-wrap">
      <div class="container">

        <!-- Button controls -->
        <div class="control">

          <!-- RUBY RANGER -->
          <div class="control-track rr01">
            <input class="rr01value" type="text">
          </div>

          <a class="btn-play btn-icon" data-description="Play" title="Play"></a>
          <a class="btn-pause btn-icon" data-description="Pause" title="Pause"></a>
          <a class="btn-restart btn-icon" data-description="Restart" title="Restart"></a>

          <div class="control-duration rf01input-updown" data-options='{ "plus": 100, "unit": "ms" }' data-value-last="5000">
            <input class="rf01input-updown-value" type="text">
          </div>
        </div>

        <!-- Editor textarea -->
        <textarea id="editor" style="display: none;"></textarea>

        <!-- Editor controls -->
        <div class="editor-controls">
          <a class="editor-update editor-btn">Update &amp; Play</a>
          <a class="editor-reset editor-btn">Reset</a>
        </div>

      </div>
    </div>
    <!-- EDITOR - end
    ======================================================================== -->


    <!-- Line space -->
    <div class="container">
      <div class="line-space"></div>
    </div>


    <!-- LIST FX CSS - begin
    ======================================================================== -->
    <div class="">

        <!-- Heading -->
        <div class="container">
          <div class="title-big-wrap">
            <h1 class="">Import from built-in effects <span class="checkbox-wrap"><a class="rf01checkbox fxtable-toggle" data-value-last="0"></a></span></h1>
          </div>
        </div>

        <!-- List fx css -->
        <div class="rubytoggle" data-toggle='{ "buttonToggle": ".fxtable-toggle" }' style="display: none;">
          <div class="fxtable rs01 rs01round"></div>
        </div>
    </div>
    <!-- LIST FX CSS - end
    ======================================================================== -->


    <!-- Line space -->
    <div class="container">
      <div class="line-space"></div>
    </div>

    <!-- Manual -->
    <!-- <CssEffectManual /> -->
  </div>
</template>
 