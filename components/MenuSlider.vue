<script setup>
const props = defineProps(['menu-items'])
const menuLevel1 = props.menuItems
const sliderName = 'megaslider-' + menuLevel1.slug

// Slider setup
const initSetup = function() {
  const sliderOptions = {
    name: sliderName,
    fx: 'cssOne',
    cssOne: 'fade',
    speed: 400,
    margin: 50,
    isNav: true,
    isLoop: false,
    isSwipe: false,
    pag: {
      type: 'list'
    }
  }
  const megaSlider = jQuery('.megamenu__slider.' + sliderName).rubyslider( sliderOptions )

  // Event on link level 2
  const $sliderPag = document.querySelector('.megamenu__links.' + sliderName)
  const $linkLevel2 = $sliderPag.querySelectorAll('.megamenu--link-lv2')
  $linkLevel2.forEach(($link) => {
    $link.addEventListener('mouseover', linkActived)
  })
  function linkActived(e) {
    const slideNum = this.dataset.slideNum
    megaSlider.goto( slideNum )
  }
}

// Lifecycle mounted
onMounted(() => {
  setTimeout(initSetup, 200)
})
</script>


<template>
<div :class="'megamenu__slider rs01 ' + sliderName">
  <div class="rs01viewport">
    <template
      v-for="(menuLevel2, indexLevel2) in menuLevel1.menus"
      :key="menuLevel2.key">

      <div class="megamenu__slide rs01slide">

        <div class="megamenu--link-lv2 rs01pagitem" :data-slide-num="indexLevel2">
          <i v-if="menuLevel2.icon" v-html="menuLevel2.icon "></i>
          <span>{{ menuLevel2.name }}</span>
          <span class="megamenu__caret" v-if="menuLevel2.menus"></span>
          <i class="megamenu__icon_arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
            </svg>
          </i>
        </div>

        <div v-if="menuLevel2.menus" class="megamenu__items">
          <div
            v-for="menuLevel3 in menuLevel2.menus"
            :key="menuLevel3.key"
            class="megamenu__item">

            <NuxtLink
              :to="menuLevel3.to"
              class="megamenu--link-lv3">
              <figure class="megamenu__thumb">
                <img :src="menuLevel3.thumbnail" :alt="menuLevel3.name">
              </figure>
              <span class="megamenu__figcaption">{{ menuLevel3.name }}</span>
            </NuxtLink>
          </div> <!-- ./megamenu__item -->
        </div> <!-- ./megamenu__items -->

        <div v-if="menuLevel2.to" class="megamenu__item_single">
          <NuxtLink
            v-if="menuLevel2.thumbnail"
            :to="menuLevel2.to"
            class="megamenu--link-lv3">
            <figure class="megamenu__thumb_single">
              <img :src="menuLevel2.thumbnail" :alt="menuLevel2.name">
            </figure>
          </NuxtLink>
          <div class="megamenu__btn">
            <NuxtLink :to="menuLevel2.to" class="megamenu--link-lv3">Đi đến trang</NuxtLink>
          </div>
        </div>
      </div>
    </template>
  </div>
  <div class="rs01nav"></div>
</div> <!-- ./megamenu__slider -->
</template>
