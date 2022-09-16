<script setup>
definePageMeta({
  middleware: ['init']
})
const sliderOptions = {
  fx: 'line',
  speed: 60000,
  offsetBy: '#header',
  layout: 'fullscreen',
  // imageback: {
  //   // position: 'fill'
  // },
  isSwipe: false,
  isKeyboard: true,
  // isPag: false,
  pag: {
    type: 'bullet',
  },
  isSlideshow: true,
  slideshow: {
    delay: 3000,
    timer: 'arc',
    isPlayPause: true
  }
}
let rubyLayoutCoverscreen
const initSetup = () => {
  jQuery('#main .rs01nav').remove()
  jQuery('#main .rs01pag').remove()
  jQuery('#main .rs01overlay-ghost').remove()
  jQuery('#main .rs01imgback').css({ width: '', height: '', left: '', top: '' })

  rubyLayoutCoverscreen = jQuery('.layout-coverscreen__slider .rs01').rubyslider( sliderOptions )
  console.log(rubyLayoutCoverscreen)
}
const prev = () => {
  console.log('prev')
  rubyLayoutCoverscreen.prev()
}
const next = () => {
  console.log('next')
  rubyLayoutCoverscreen.next()
}
onMounted(() => {
  setTimeout(initSetup, 400)
})
</script>


<template>
<main id="main">
  <section class="layout-coverscreen">
    <div class="layout-coverscreen__slider">
      <div class="rs01">
        <a class="rs01imgback" href="/img/vietnam-large1.jpg">Việt Nam 1</a>
        <a class="rs01imgback" href="/img/vietnam-large2.jpg">Việt Nam 2</a>
        <a class="rs01imgback" href="/img/vietnam-large3.jpg">Việt Nam 3</a>
        <a class="rs01imgback" href="/img/vietnam-large4.jpg">Việt Nam 4</a>
        <a class="rs01imgback" href="/img/vietnam-large5.jpg">Việt Nam 5</a>
        <a class="rs01imgback" href="/img/vietnam-large6.jpg">Việt Nam 6</a>
      </div> <!-- /.rs01 -->
    </div>

    <div class="layout-coverscreen__content">
      <div class="layout-coverscreen__content_inner">
        <h1>LAYOUT<br>TOÀN MÀN HÌNH</h1>
        <div class="layout-coverscreen__content_p font-blokk">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt id incidunt officia facere nisi, molestias blanditiis explicabo placeat nemo eveniet sapiente excepturi repellat amet deleniti magni similique quaerat earum corporis?</p>
        </div>
        <div class="layout-coverscreen__btns">
          <div class="btn btn--btns">
            <button class="btn--primary" @click="prev()">
              <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16"><path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/></svg></i>
              <span>SLIDE PHÍA SAU</span>
            </button>
            <button class="btn--alter" @click="next()">
              <span>SLIDE KẾ TIẾP</span>
              <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16"><path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/></svg></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Guide>
    <template #gioi-thieu>
      <p>Layout toàn màn hình.</p>
    </template>
    <template #thiet-lap>
      <pre class="codeprint">{{ sliderOptions }}</pre>
    </template>
    <template #nav>
      <ButtonPrevNext
        prev-name="Layout trên thiết bị"
        prev-to="/slider/layout-device"
        next-name="Layout thumnail chiều dọc"
        next-to="/slider/layout-vertical-thumbnail" />
    </template>
  </Guide>
</main>
</template>


<style scoped>
.guide {
  padding-top: 60px;
}
</style>
<style lang="scss">
.layout-coverscreen {
  // overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 90px);
  // min-height: 700px;
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: rgba($color: #000, $alpha: .1);
  &__slider {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
  .rs01 {
    .rs01slide {
      border-radius: 0;
    }
    // .rs01ss-control {
    //   position: absolute;
    //   left: 0;
    //   top: 0;
    //   width: 100%;
    // }
    // .rs01timeritem {
    //   background-color: #000;
    // }
    .rs01paginner {
      &::before {
        content: '';
        position: absolute;
        left: -5px;
        top: -5px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        background-color: #fff;
        border-radius: 100px;
      }
    }
    .rs01ss-control {
      left: 50%;
      bottom: 0;
      background-color: #fff;
    }
  }
  &__content {
    // position: absolute;
    // left: 50%;
    // top: 50%;
    width: 700px;
    padding: 30px 30px 40px;
    text-align: center;
    // transform: translate(-50%, -50%);
    border-radius: 12px;
    background-color: rgba($color: #fff, $alpha: .95);
    box-shadow: 0 1px 2px rgba($color: #000, $alpha: .2);
    // backdrop-filter: saturate(180%) blur(20px);
    z-index: 2;
    h1 {
      margin-bottom: 20px;
    }
    &_p {
      margin-bottom: 30px;
    }
  }
}
</style>
 