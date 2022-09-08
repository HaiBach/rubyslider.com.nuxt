<script setup>
definePageMeta({
  key: route => route.fullPath,
  middleware: ['init']
})

const MENUS = useMenu()
const sliderData = MENUS.value[0]['menus']

// LifeCycle
const sliderOptions = {
  type: 'tabs',
  fx: "line",
  speed: 600,
  pag: {
    align: "center"
  },
  isNav: true,
  isSwipe: false,
  isKeyboard: true,
  isDeeplinking: true,
  load: {
    isLazy: false
  }
}
const initSetup = () => {
  jQuery('#main .rs01nav').remove()
  jQuery('#main .rs01pag').remove()
  jQuery('#main .rs01overlay-ghost').remove()
  jQuery('#main .rs01imgback').css({ width: '', height: '', left: '', top: '' })

  const sliderListTemplates = jQuery('.list-templates__slider').rubyslider( sliderOptions )
}
onMounted(() => {
  setTimeout(initSetup, 200)
})
</script>


<template>
<main id="main">
  <SliderTypography />

  <!-- Slider List Templates -->
  <div class="list-templates">
    <div class="list-templates__slider rs01">
      <div class="rs01viewport">
        <div class="rs01canvas">
          <template
            v-for="slideData in sliderData"
            :key="slideData.key">

            <div
              v-if="slideData.status && slideData.menus"
              :id="'list-slider-' + slideData.slug.toLowerCase()"
              class="rs01slide">

              <div class="rs01pagitem">{{ slideData.name.toUpperCase() }}</div>
              <div class="container">
                <div v-if="slideData.header" class="list-templates__header">
                  <h2><span>{{ slideData.header.title }}</span></h2>
                  <p v-html="slideData.header.desc"></p>
                </div>
                <div class="showfull row">
                  <template
                    v-for="item in slideData.menus"
                    :key="item.key">

                    <div
                      v-if="item.status"
                      class="showfull__item col-4 col-sm-3 col-xxs-6">

                      <div class="showfull__item_inner">
                        <NuxtLink class="showfull__link linkto" :to="item.to">
                          <figure class="showfull__thumb">
                            <img :src="item.thumbnail" :alt="item.name">
                            <figcaption class="showfull__name">{{ item.name }}</figcaption>
                          </figure>
                        </NuxtLink>
                      </div>
                    </div> <!-- /.item -->

                  </template>
                </div>
              </div>

            </div>
          </template>
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
        display: flex;
        align-items: center;
        padding: 10px 25px;
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

  /** Media **/
  @media (max-width: 991px) {
    &__slider {
      .rs01pag {
        .rs01pagitem {
          padding: 8px 20px;
          margin-left: 7px;
          margin-right: 7px;
          font-size: 12px;
        }
      }
    }
  }
  @media (max-width: 767px) {
    padding-top: 40px;
    padding-bottom: 40px;

  }
  @media (max-width: 575px) {

  }
}

.showfull {
  &__item_inner {
    margin-bottom: 50px;
    background-color: #fff;
    border-radius: 8px;
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
      transition: transform .2s;
    }
  }
  &__name {
    padding-bottom: 10px;
    transition: all .2s;
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

  /** Media **/
  @media (max-width: 991px) {

  }
  @media (max-width: 767px) {

  }
  @media (max-width: 575px) {

  }
}
</style>
