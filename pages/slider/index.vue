<script setup>
definePageMeta({
  key: route => route.fullPath
})

const sliderData = {
  'LAYOUT': {
    'Basic Layout': {
      link: '/slider/layout-basic',
      thumbnail: '/img/template-layout-basic.png',
    },
    'Classic-1 Layout': {
      link: '/slider/layout-classic-1',
      thumbnail: '/img/template-layout-classic1.png',
    },
    'Classic-2 Layout': {
      link: '/slider/layout-classic-2',
      thumbnail: '/img/template-layout-classic2.png',
    },
    'Center Layout': {
      link: '/slider/layout-center',
      thumbnail: '/img/template-layout-center.png',
    },
    'Carousel Layout': {
      link: '/slider/layout-carousel',
      thumbnail: '/img/template-layout-carousel.png',
    },
    'Outbox Layout': {
      link: '/slider/layout-outbox',
      thumbnail: '/img/template-layout-outbox.png',
    },
    'Device Layout': {
      link: '/slider/layout-device',
      thumbnail: '/img/template-layout-device.png',
    },
    'Cover-screen Layout': {
      link: '/slider/layout-coverscreen',
      thumbnail: '/img/template-layout-coverscreen.png',
    },
    'Fullwidth Layout': {
      link: '/slider/layout-fullwidth',
      thumbnail: '/img/template-layout-fullwidth.png',
    },
    'Fullwidth-Range Layout': {
      link: '/slider/layout-fullwidth-range',
      thumbnail: '/img/template-layout-fullwidthRange.png',
    },
    'Vertical Thumb Layout': {
      link: '/slider/layout-vertical-thumbnail',
      thumbnail: '/img/template-layout-vertical.png',
    },
    'Nested Layout': {
      link: '/slider/layout-nested',
      thumbnail: '/img/template-layout-nested.png',
    },
    'Multi Layout': {
      link: '/slider/layout-multiple',
      thumbnail: '/img/template-layout-multi.png',
    },
    'Caption Layout': {
      link: '/slider/layout-caption',
      thumbnail: '/img/template-layout-caption.png',
    },
    'Auto-Height Layout': {
      link: '/slider/layout-height-auto',
      thumbnail: '/img/template-layout-heightAuto.png',
    },
    'Fixed-Height Layout': {
      link: '/slider/layout-height-fixed',
      thumbnail: '/img/template-layout-heightFixed.png',
    },
    // 'Slider in Box': {
    //   link: '/slider/layout-inbox',
    //   thumbnail: '/img/template-layout-box.png',
    // },
  },

  'EFFECT': {
    'Line Effect': {
      link: '/slider/effect-line',
      thumbnail: '/img/template-fx-line.png',
    },
    'Fade Effect': {
      link: '/slider/effect-fade',
      thumbnail: '/img/template-fx-fade.png',
    },
    'Math Effect': {
      link: '/slider/effect-math',
      thumbnail: '/img/template-fx-math.png',
    },
    'CSS One Effect': {
      link: '/slider/effect-css-one',
      thumbnail: '/img/template-fx-cssOne.png',
    },
    'CSS Two Effect': {
      link: '/slider/effect-css-two',
      thumbnail: '/img/template-fx-cssTwo.png',
    },
    'CSS Four Effect': {
      link: '/slider/effect-css-four',
      thumbnail: '/img/template-fx-cssFour.png',
    },
    'Coverflow3D Effect': {
      link: '/slider/effect-coverflow3d',
      thumbnail: '/img/template-fx-coverflow3D.png',
    },
    'Control Effect': {
      link: '/slider/effect-control',
      thumbnail: '/img/template-fx-control.png',
    },
  },

  'SLIDESHOW': {
    'Arc Timer': {
      link: '/slider/slideshow-timer-arc',
      thumbnail: '/img/template-timer-arc.png',
    },
    'Line Timer': {
      link: '/slider/slideshow-timer-line',
      thumbnail: '/img/template-timer-line.png',
    },
    'Timer Only': {
      link: '/slider/slideshow-timer-only',
      thumbnail: '/img/template-timer-only.png',
    },
    'Slideshow Random': {
      link: '/slider/slideshow-random',
      thumbnail: '/img/template-random.png',
    },
  },

  'API': {
    'Add-Remove Slider': {
      link: '/slider/api-addremove',
      thumbnail: '/img/template-api-addremove.png',
    },
    'Callback Event': {
      link: '/slider/api-callback',
      thumbnail: '/img/template-api-callback.png',
    },
    'Show By Device': {
      link: '/slider/api-show-by-device',
      thumbnail: '/img/template-api-showByDevice.png',
    },
    'Show In Range': {
      link: '/slider/api-show-in-range',
      thumbnail: '/img/template-api-showInRange.png',
    },
    'Deep Linking': {
      link: '/slider/api-deeplinking',
      thumbnail: '/img/template-api-deeplinking.png',
    },
    'Deep Linking Multi': {
      link: '/slider/api-deeplinking-multi',
      thumbnail: '/img/template-api-deeplinkingMulti.png',
    },
    'Cookie': {
      link: '/slider/api-cookie',
      thumbnail: '/img/template-api-cookie.png',
    },
  }
}

// LifeCycle
const sliderOptions = {
  type: 'tabs',
  fx: "line",
  speed: 600,
  pag: {
    align: "center"
  },
  isKeyboard: true,
  isDeeplinking: true,
  load: {
    isLazy: false
  }
}

onMounted(() => {
  setTimeout(() => {
    const $sliderListTemplates = jQuery('.list-templates__slider')
    if ($sliderListTemplates.length) {
      $sliderListTemplates.rubyslider( sliderOptions )
    }
  }, 400)
})
</script>


<template>
<div>
  <SliderTypography />

  <!-- Slider List Templates -->
  <div class="list-templates">
    <div class="list-templates__slider rs01">
      <div
        v-for="(items, tabName) in sliderData"
        :id="tabName.toLowerCase()">

        <div class="rs01pagitem">{{ tabName }}</div>
        <div class="container">
          <div class="row items showfull">
            <div
              v-for="(item, itemName) in items"
              class="showfull__items col-4 col-sm-3 col-xxs-6">

              <div class="showfull__item">
                <NuxtLink class="showfull__link linkto" :to="item.link">
                  <figure class="showfull__thumb">
                    <img :src="item.thumbnail" :alt="itemName">
                    <figcaption class="showfull__name">{{ itemName }}</figcaption>
                  </figure>
                </NuxtLink>
              </div>
            </div> <!-- /.item -->
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
</template>


<style scoped>
.list-templates__slider {
  margin-top: 50px;
}
.list-templates__slider .rs01pagitem {
  padding: 10px 25px !important;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #f9f9f9;
  border-radius: 20px;
  color: #333;
}
.list-templates__slider .rs01pagitem:hover {
  background-color: #e5e5e5;
  color: #000;
}
.list-templates__slider .rs01pagitem.rs01cur {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
}
</style>

<style lang="scss">
.showfull {
  &__item {
    margin-bottom: 50px;
    border: 1px dotted transparent;
    border-bottom-color: #ccc;
    &:hover {
      border-color: var(--color-primary);
      border-color: rgba($color: #000, $alpha: .35);
      border-radius: 6px;
    }
  }
  &__thumb {
    display: block;
    position: relative;
    img {
      display: block;
      max-width: 100%;
      height: auto;
      margin: 0 auto;
      transition: transform .25s;
    }
  }
  &__name {
    transition: all .25s;
  }
  &__link {
    display: block;
    position: relative;
    margin-bottom: 0;
    color: #000;
    text-align: center;
    text-decoration: none;
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: transparent;
      border: 1px solid transparent;
      border-radius: 8px;
      transition: all .25s;
    }
    &::before {
      visibility: hidden;
      display: block;
      position: absolute;
      width: 100%;
      left: 0;
      top: 50%;
      margin-top: -25px;
      color: #000;
      font-family: "fontello";
      font-style: normal;
      font-weight: normal;
      font-size: 50px;
      line-height: 1em;
      text-align: center;
      z-index: 2;
      transition: transform .15s .1s;
      transform: scale(0);
    }
    &:hover {
      color: var(--color-primary);
      &::before {
        visibility: visible;
        transform: scale(1);
      }
      &::after {
        background-color: rgba($color: #c05, $alpha: .05);
        transform: scale(.85);
      }
      .showfull__thumb {
        img {
          transform: translate3d(0,-25px,0) scale(.5);
        }
      }
      .showfull__name {
        font-weight: bold;
        transform: translate3d(0,-68px,0) scale(1.4);
      }
    }
  }
}
</style>
