<script setup>
definePageMeta({
  key: route => route.fullPath
})

const sliderData = {
  'LAYOUT': {
    'Basic Layout': {
      link: '/slider/layout-basic',
      thumbnail: '../assets/img/template-layout-basic.png',
    },
    'Classic-1 Layout': {
      link: '/slider/layout-classic-1',
      thumbnail: '../assets/img/template-layout-classic1.png',
    },
    'Classic-2 Layout': {
      link: '/slider/layout-classic-2',
      thumbnail: '../assets/img/template-layout-classic2.png',
    },
    'Center Layout': {
      link: '/slider/layout-center',
      thumbnail: '../assets/img/template-layout-center.png',
    },
    'Carousel Layout': {
      link: '/slider/layout-carousel',
      thumbnail: '../assets/img/template-layout-carousel.png',
    },
    'Outbox Layout': {
      link: '/slider/layout-outbox',
      thumbnail: '../assets/img/template-layout-outbox.png',
    },
    'Device Layout': {
      link: '/slider/layout-device',
      thumbnail: '../assets/img/template-layout-device.png',
    },
    'Cover-screen Layout': {
      link: '/slider/layout-coverscreen',
      thumbnail: '../assets/img/template-layout-coverscreen.png',
    },
    'Fullwidth Layout': {
      link: '/slider/layout-fullwidth',
      thumbnail: '../assets/img/template-layout-fullwidth.png',
    },
    'Fullwidth-Range Layout': {
      link: '/slider/layout-fullwidth-range',
      thumbnail: '../assets/img/template-layout-fullwidthRange.png',
    },
    'Vertical Thumb Layout': {
      link: '/slider/layout-vertical-thumbnail',
      thumbnail: '../assets/img/template-layout-vertical.png',
    },
    'Nested Layout': {
      link: '/slider/layout-nested',
      thumbnail: '../assets/img/template-layout-nested.png',
    },
    'Multi Layout': {
      link: '/slider/layout-multiple',
      thumbnail: '../assets/img/template-layout-multi.png',
    },
    'Caption Layout': {
      link: '/slider/layout-caption',
      thumbnail: '../assets/img/template-layout-caption.png',
    },
    'Height-Auto Layout': {
      link: '/slider/layout-height-auto',
      thumbnail: '../assets/img/template-layout-heightAuto.png',
    },
    'Height-Fixed Layout': {
      link: '/slider/layout-height-fixed',
      thumbnail: '../assets/img/template-layout-heightFixed.png',
    },
    'Slider in Box': {
      link: '/slider/layout-inbox',
      thumbnail: '../assets/img/template-layout-box.png',
    },
  },

  'EFFECT': {
    'Line Effect': {
      link: '/slider/effect-line',
      thumbnail: '../assets/img/template-fx-line.png',
    },
    'Fade Effect': {
      link: '/slider/effect-fade',
      thumbnail: '../assets/img/template-fx-fade.png',
    },
    'Math Effect': {
      link: '/slider/effect-math',
      thumbnail: '../assets/img/template-fx-math.png',
    },
    'CSS One Effect': {
      link: '/slider/effect-cssOne',
      thumbnail: '../assets/img/template-fx-cssOne.png',
    },
    'CSS Two Effect': {
      link: '/slider/effect-cssTwo',
      thumbnail: '../assets/img/template-fx-cssTwo.png',
    },
    'CSS Four Effect': {
      link: '/slider/effect-cssFour',
      thumbnail: '../assets/img/template-fx-cssFour.png',
    },
    'Coverflow3D Effect': {
      link: '/slider/effect-coverflow3D',
      thumbnail: '../assets/img/template-fx-coverflow3D.png',
    },
    'Effect Random': {
      link: '/slider/effect-random',
      thumbnail: '../assets/img/template-random.png',
    },
    'Effect Control': {
      link: '/slider/effect-control',
      thumbnail: '../assets/img/template-fx-control.png',
    },
  },

  'SLIDESHOW': {
    'Arc Timer': {
      link: '/slider/slideshow-timerArc',
      thumbnail: '../assets/img/template-timer-arc.png',
    },
    'Line Timer': {
      link: '/slider/slideshow-timerLine',
      thumbnail: '../assets/img/template-timer-line.png',
    },
    'Timer Only': {
      link: '/slider/slideshow-timerOnly',
      thumbnail: '../assets/img/template-timer-only.png',
    },
    'Slideshow Random': {
      link: '/slider/slideshow-random',
      thumbnail: '../assets/img/template-random.png',
    },
  },

  'API': {
    'Add-Remove Slider': {
      link: '/slider/api-addremove',
      thumbnail: '../assets/img/template-api-addremove.png',
    },
    'Callback Event': {
      link: '/slider/api-callback',
      thumbnail: '../assets/img/template-api-callback.png',
    },
    'Show By Device': {
      link: '/slider/api-showByDevice',
      thumbnail: '../assets/img/template-api-showByDevice.png',
    },
    'Show In Range': {
      link: '/slider/api-showInRange',
      thumbnail: '../assets/img/template-api-showInRange.png',
    },
    'Deep Linking': {
      link: '/slider/api-deeplinking',
      thumbnail: '../assets/img/template-api-deeplinking.png',
    },
    'Deep Linking Multi': {
      link: '/slider/api-deeplinkingMulti',
      thumbnail: '../assets/img/template-api-deeplinkingMulti.png',
    },
    'Cookie': {
      link: '/slider/api-cookie',
      thumbnail: '../assets/img/template-api-cookie.png',
    },
  }
}

// LifeCycle
const sliderOptions = {
  optionsPlus: "tabs",
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
  console.log( '#List template - begin mounted')

  setTimeout(() => {
    const $sliderListTemplates = jQuery('#list-templates__slider')
    if ($sliderListTemplates.length) {
      $sliderListTemplates.rubyslider( sliderOptions )
      console.log('#List template - setTimout - setup rubyslider')
    }
  }, 400)
  console.log('#List template - mounted end')
})
</script>


<template>
  <div>
    <SliderTypography />

    <!-- Slider List Templates -->
    <div class="list-templates">
      <div id="list-templates__slider" class="rs01">
        <div
          v-for="(items, tabName) in sliderData"
          :id="tabName.toLowerCase()"
          >

          <div class="rs01pagitem">{{ tabName }}</div>
          <div class="container">
            <div class="row-small row-mobile items show-full">
              <div
                v-for="(item, itemName) in items"
                class="col3 col-s-4 col-xxs-6"
                >
                <article>
                  <NuxtLink class="linkto" :to="item.link">
                    <figure class="thumbnail">
                      <img :src="item.thumbnail" :alt="itemName">
                      <figcaption>{{ itemName }}</figcaption>
                    </figure>
                  </NuxtLink>
                </article>
              </div> <!-- /.item -->
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
#list-templates__slider .rs01pagitem {
  padding: 10px 25px !important;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #f9f9f9;
  border-radius: 20px;
  color: #333;
}
#list-templates__slider .rs01pagitem:hover {
  background-color: #e5e5e5;
  color: #000;
}
#list-templates__slider .rs01pagitem.rs01cur {
  background-color: #cc0055;
  border-color: #cc0055;
  color: #fff;
}
</style>
