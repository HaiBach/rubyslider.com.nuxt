<script setup>
definePageMeta({
  key: route => route.fullPath
})

const sliderData = [
  {
    slug: 'effects',
    name: 'HIỆU ỨNG',
    header: {
      title: 'CÁC LOẠI HIỆU ỨNG',
      desc: 'Các loại hiệu ứng trong RubySlider. RubySlider hỗ trợ nhiều hiệu ứng, bao gồm các hiệu ứng đơn giản hiệu suất cao Fade, Line cho đến các hiệu ứng phức tạp và đẹp mắt như Math, CSS One, Coverflow3D. <br>Đồng thời các hiệu ứng đều hỗ trợ chức năng thay đổi trực tiếp khi kéo, rê các slide này sang các slide khác'
    },
    items: [
      {
        name: 'Hiệu ứng Line',
        link: '/slider/effect-line',
        thumbnail: '/img/template-fx-line.png',
      },
      {
        name: 'Hiệu ứng Fade',
        link: '/slider/effect-fade',
        thumbnail: '/img/template-fx-fade.png',
      },
      {
        name: 'Hiệu ứng Math',
        link: '/slider/effect-math',
        thumbnail: '/img/template-fx-math.png',
      },
      {
        name: 'Hiệu ứngCSS One',
        link: '/slider/effect-css-one',
        thumbnail: '/img/template-fx-cssOne.png',
      },
      {
        name: 'Hiệu ứng CSS Two',
        link: '/slider/effect-css-two',
        thumbnail: '/img/template-fx-cssTwo.png',
      },
      {
        name: 'Hiệu ứng CSS Four',
        link: '/slider/effect-css-four',
        thumbnail: '/img/template-fx-cssFour.png',
      },
      {
        name: 'Hiệu ứng Coverflow3D',
        link: '/slider/effect-coverflow3d',
        thumbnail: '/img/template-fx-coverflow3D.png',
      },
      {
        name: 'Tuỳ biến hiệu ứng',
        link: '/slider/effect-control',
        thumbnail: '/img/template-fx-control.png',
      },
    ],
  },
  
  {
    slug: 'layout',
    name: 'BỐ CỤC',
    header: {
      title: 'BỐ CỤC/LAYOUT DỰNG SẴN',
      desc: 'Hỗ trợ các layout dựng sẵn trong các trường hợp khác nhau. Đáp ứng đầy đủ cho nhu cầu cơ bản. Đồng thời hướng dẫn bạn bắt đầu sử dụng RubySlider dễ dàng hơn.',
    },
    items: [
      {
        name: 'Basic Layout',
        link: '/slider/layout-basic',
        thumbnail: '/img/template-layout-basic.png',
      },
      {
        name: 'Classic-1 Layout',
        link: '/slider/layout-classic-1',
        thumbnail: '/img/template-layout-classic1.png',
      },
      {
        name: 'Classic-2 Layout',
        link: '/slider/layout-classic-2',
        thumbnail: '/img/template-layout-classic2.png',
      },
      {
        name: 'Center Layout',
        link: '/slider/layout-center',
        thumbnail: '/img/template-layout-center.png',
      },
      {
        name: 'Carousel Layout',
        link: '/slider/layout-carousel',
        thumbnail: '/img/template-layout-carousel.png',
      },
      {
        name: 'Outbox Layout',
        link: '/slider/layout-outbox',
        thumbnail: '/img/template-layout-outbox.png',
      },
      {
        name: 'Device Layout',
        link: '/slider/layout-device',
        thumbnail: '/img/template-layout-device.png',
      },
      {
        name: 'Cover-screen Layout',
        link: '/slider/layout-coverscreen',
        thumbnail: '/img/template-layout-coverscreen.png',
      },
      {
        name: 'Fullwidth Layout',
        link: '/slider/layout-fullwidth',
        thumbnail: '/img/template-layout-fullwidth.png',
      },
      {
        name: 'Fullwidth-Range Layout',
        link: '/slider/layout-fullwidth-range',
        thumbnail: '/img/template-layout-fullwidthRange.png',
      },
      {
        name: 'Vertical Thumb Layout',
        link: '/slider/layout-vertical-thumbnail',
        thumbnail: '/img/template-layout-vertical.png',
      },
      {
        name: 'Nested Layout',
        link: '/slider/layout-nested',
        thumbnail: '/img/template-layout-nested.png',
      },
      {
        name: 'Multi Layout',
        link: '/slider/layout-multiple',
        thumbnail: '/img/template-layout-multi.png',
      },
      {
        name: 'Caption Layout',
        link: '/slider/layout-caption',
        thumbnail: '/img/template-layout-caption.png',
      },
      {
        name: 'Auto-Height Layout',
        link: '/slider/layout-height-auto',
        thumbnail: '/img/template-layout-heightAuto.png',
      },
      {
        name: 'Fixed-Height Layout',
        link: '/slider/layout-height-fixed',
        thumbnail: '/img/template-layout-heightFixed.png',
      },
    ]
  },

  {
    slug: 'slideshow',
    name: 'SLIDESHOW',
    header: {
      title: 'TỰ ĐỘNG SLIDESHOW',
      desc: 'RubySlider có hỗ trợ chức năng tự động slideshow nội dung, bạn có thể thiết lập thời gian hiệu ứng, loại timer, nút dừng slideshow...<br>Đặc biệt bạn có thể tuỳ biến timer dễ dàng bằng css, hoặc bạn có thể cho slideshow có thể chạy ngẫu nhiên.',
    },
    items: [
      {
        name: 'Arc Timer',
        link: '/slider/slideshow-timer-arc',
        thumbnail: '/img/template-timer-arc.png',
      },
      {
        name: 'Line Timer',
        link: '/slider/slideshow-timer-line',
        thumbnail: '/img/template-timer-line.png',
      },
      {
        name: 'Timer Only',
        link: '/slider/slideshow-timer-only',
        thumbnail: '/img/template-timer-only.png',
      },
      {
        name: 'Slideshow Random',
        link: '/slider/slideshow-random',
        thumbnail: '/img/template-random.png',
      },
    ]
  },

  {
    slug: 'api',
    name: 'API',
    header: {
      title: 'PHƯƠNG THỨC API',
      desc: 'Phương thức giao tiếp của RubySlider và người sử dụng, bạn có thể đều khiển và cập nhật hầu hết các tuỳ chọn của plugin thông qua các phương thức API đơn giản.',
    },
    items: [
      {
        name: 'Add-Remove Slider',
        link: '/slider/api-addremove',
        thumbnail: '/img/template-api-addremove.png',
      },
      {
        name: 'Callback Event',
        link: '/slider/api-callback',
        thumbnail: '/img/template-api-callback.png',
      },
      {
        name: 'Show By Device',
        link: '/slider/api-show-by-device',
        thumbnail: '/img/template-api-showByDevice.png',
      },
      {
        name: 'Show In Range',
        link: '/slider/api-show-in-range',
        thumbnail: '/img/template-api-showInRange.png',
      },
      {
        name: 'Deep Linking',
        link: '/slider/api-deeplinking',
        thumbnail: '/img/template-api-deeplinking.png',
      },
      {
        name: 'Deep Linking Multi',
        link: '/slider/api-deeplinking-multi',
        thumbnail: '/img/template-api-deeplinkingMulti.png',
      },
      {
        name: 'Cookie',
        link: '/slider/api-cookie',
        thumbnail: '/img/template-api-cookie.png',
      },
    ]
  }
]

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
const initSetup = () => {
  const sliderListTemplates = jQuery('.list-templates__slider').rubyslider( sliderOptions )
}
onMounted(() => {
  setTimeout(() => {
    initSetup()
  }, 200)
})
</script>


<template>
<main>
  <SliderTypography />
  <div class="hr cycle"></div>

  <!-- Slider List Templates -->
  <div class="list-templates">
    <div class="list-templates__slider rs01">
      <div class="rs01viewport">
        <div class="rs01canvas">
          <div
            v-for="slideData in sliderData"
            :id="'list-slider-' + slideData.slug.toLowerCase()"
            class="rs01slide">

            <div class="rs01pagitem">{{ slideData.name }}</div>
            <div class="container">
              <div v-if="slideData.header" class="list-templates__header">
                <h2><span>{{ slideData.header.title }}</span></h2>
                <p v-html="slideData.header.desc"></p>
              </div>
              <div class="row items showfull">
                <div
                  v-for="item in slideData.items"
                  class="showfull__items col-4 col-sm-3 col-xxs-6">

                  <div class="showfull__item">
                    <NuxtLink class="showfull__link linkto" :to="item.link">
                      <figure class="showfull__thumb">
                        <img :src="item.thumbnail" :alt="item.name">
                        <figcaption class="showfull__name">{{ item.name }}</figcaption>
                      </figure>
                    </NuxtLink>
                  </div>
                </div> <!-- /.item -->
              </div>
            </div>

          </div> <!-- /.rs01slide -->
        </div>
      </div>
    </div>
  </div>
</main>
</template>


<style lang="scss">
.list-templates {
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: rgba($color: #000, $alpha: .05);
  &__header {
    max-width: 768px;
    padding: 30px 40px;
    margin: 20px auto 50px;
    // background-color: rgba($color: #000, $alpha: .05);
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba($color: #000, $alpha: .2);
    h2 {
      margin-bottom: 20px;
      text-align: center;
      span {
        background: linear-gradient(0deg, rgba(204,0,85,0.2) 5%, rgba(204,0,85,0.2) 30%, transparent 31%);
      }
    }
  }
  &__slider {
    .rs01pag {
      .rs01pagitem {
        padding: 10px 25px !important;
        margin-left: 10px;
        margin-right: 10px;
        background-color: #fff;
        border-radius: 20px;
        color: #333;
        &:hover {
          background-color: rgba($color: #000, $alpha: .1);
          color: #000;
        }
        &.rs01cur {
          background-color: var(--color-primary);
          border-color: var(--color-primary);
          color: #fff;
        }
      }
    }
  }
}
.showfull {
  &__item {
    margin-bottom: 50px;
    background-color: #fff;
    border-radius: 8px;
    // border: 1px dashed transparent;
    // border-bottom-color: #ccc;
    // box-shadow: 0 1px 2px rgba($color: #000, $alpha: .2);
    &:hover {
      border-color: rgba($color: #000, $alpha: .35);
      border-radius: 6px;
      box-shadow: 0 1px 2px rgba($color: #000, $alpha: .2);
    }
  }
  &__thumb {
    position: relative;
    margin-bottom: 0;
    img {
      display: block;
      max-width: 100%;
      height: auto;
      margin: 0 auto;
      transition: transform .25s;
    }
  }
  &__name {
    padding-bottom: 10px;
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
    &:hover {
      color: var(--color-primary);
      &::before {
        visibility: visible;
        transform: scale(1);
      }
      &::after {
        background-color: rgba($color: #c05, $alpha: .08);
        transform: scale(.92);
      }
      .showfull__thumb {
        img {
          transform: translate3d(0,0,0) scale(.5);
        }
      }
      .showfull__name {
        font-weight: bold;
        transform: translate3d(0,-40px,0) scale(1.4);
      }
    }
  }
}
</style>
