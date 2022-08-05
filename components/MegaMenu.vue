<script setup>
const MENUS = {
  'Slider': {
    key: '1',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16"><path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/><path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/></svg>',
    menus: [
      {
        key: '1.1',
        name: 'List All Examples',
        to: '/slider'
      },
      {
        key: '1.2',
        name: 'Layout',
        menus:
        [
          {
            key: '1.2.1',
            name: 'Basic',
            to: '/slider/layout-basic',
            thumbnail: '/img/template-layout-basic.png',
          },
          {
            key: '1.2.2',
            name: 'Classic 1',
            to: '/slider/layout-classic-1',
            thumbnail: '/img/template-layout-classic1.png',
          },
          {
            key: '1.2.3',
            name: 'Classic 2',
            to: '/slider/layout-classic-2',
            thumbnail: '/img/template-layout-classic2.png',
          },
          {
            key: '1.2.4',
            name: 'Center',
            to: '/slider/layout-center',
            thumbnail: '/img/template-layout-center.png',
          },
          { 
            key: '1.2.5',
            name: 'Carousel',
            to: '/slider/layout-carousel',
            thumbnail: '/img/template-layout-carousel.png',
          },
          {
            key: '1.2.6',
            name: 'Outbox',
            to: '/slider/layout-outbox',
            thumbnail: '/img/template-layout-outbox.png',
          },
          {
            key: '1.2.7',
            name: 'Device',
            to: '/slider/layout-device',
            thumbnail: '/img/template-layout-device.png',
          },
          {
            key: '1.2.8',
            name: 'Coverscreen',
            to: '/slider/layout-coverscreen',
            thumbnail: '/img/template-layout-coverscreen.png',
          },
          {
            key: '1.2.9',
            name: 'Fullwidth',
            to: '/slider/layout-fullwidth',
            thumbnail: '/img/template-layout-fullwidth.png',
          },
          {
            key: '1.2.10',
            name: 'Fullwidth Range',
            to: '/slider/layout-fullwidth-range',
            thumbnail: '/img/template-layout-fullwidthRange.png',
          },
          {
            key: '1.2.11',
            name: 'Vertical Thumbnail',
            to: '/slider/layout-vertical-thumbnail',
            thumbnail: '/img/template-layout-vertical.png',
          },
          {
            key: '1.2.12',
            name: 'Nested',
            to: '/slider/layout-nested',
            thumbnail: '/img/template-layout-nested.png',
          },
          {
            key: '1.2.13',
            name: 'Multi',
            to: '/slider/layout-multiple',
            thumbnail: '/img/template-layout-multi.png',
          },
          {
            key: '1.2.14',
            name: 'Caption',
            to: '/slider/layout-caption',
            thumbnail: '/img/template-layout-caption.png',
          },
          {
            key: '1.2.15',
            name: 'Height Auto',
            to: '/slider/layout-height-auto',
            thumbnail: '/img/template-layout-heightAuto.png',
          },
          {
            key: '1.2.16',
            name: 'Height Fixed',
            to: '/slider/layout-height-fixed',
            thumbnail: '/img/template-layout-heightFixed.png',
          },
        ]
      },
      {
        key: '1.3',
        name: 'Effect',
        menus:
        [
          {
            key: '1.3.1',
            name: 'Line Effect',
            to: '/slider/effect-line',
            thumbnail: '/img/template-fx-line.png',
          },
          {
            key: '1.3.2',
            name: 'Fade Effect',
            to: '/slider/effect-fade',
            thumbnail: '/img/template-fx-fade.png',
          },
          {
            key: '1.3.3',
            name: 'Math Effect',
            to: '/slider/effect-math',
            thumbnail: '/img/template-fx-math.png',
          },
          {
            key: '1.3.4',
            name: 'CSS One Effect',
            to: '/slider/effect-css-one',
            thumbnail: '/img/template-fx-cssOne.png',
          },
          {
            key: '1.3.5',
            name: 'CSS Two Effect',
            to: '/slider/effect-css-two',
            thumbnail: '/img/template-fx-cssTwo.png',
          },
          {
            key: '1.3.6',
            name: 'CSS Four Effect',
            to: '/slider/effect-css-four',
            thumbnail: '/img/template-fx-cssFour.png',
          },
          {
            key: '1.3.7',
            name: 'Coverflow3D Effect',
            to: '/slider/effect-coverflow3d',
            thumbnail: '/img/template-fx-coverflow3D.png',
          },
          {
            key: '1.3.9',
            name: 'Control Effect',
            to: '/slider/effect-control',
            thumbnail: '/img/template-fx-control.png',
          },
        ]
      },
      {
        key: '1.4',
        name: 'Slideshow',
        menus:
        [
          {
            key: '1.4.1',
            name: 'Arc Timer',
            to: '/slider/slideshow-timer-arc',
            thumbnail: '/img/template-timer-arc.png',
          },
          {
            key: '1.4.2',
            name: 'Line Timer',
            to: '/slider/slideshow-timer-line',
            thumbnail: '/img/template-timer-line.png',
          },
          {
            key: '1.4.3',
            name: 'Timer Only',
            to: '/slider/slideshow-timer-only',
            thumbnail: '/img/template-timer-only.png',
          },
          {
            key: '1.4.4',
            name: 'Slideshow Random',
            to: '/slider/slideshow-random',
            thumbnail: '/img/template-random.png',
          },
        ]
      },
      {
        key: '1.5',
        name: 'API',
        menus:
        [
          {
            key: '1.5.1',
            name: 'Add-Remove Tabs',
            to: '/slider/api-add-remove',
            thumbnail: '/img/template-api-addremove.png',
          },
          {
            key: '1.5.2',
            name: 'Callback Event',
            to: '/slider/api-callback',
            thumbnail: '/img/template-api-callback.png',
          },
          {
            key: '1.5.3',
            name: 'Show By Device',
            to: '/slider/api-show-by-device',
            thumbnail: '/img/template-api-showByDevice.png',
          },
          {
            key: '1.5.4',
            name: 'Show In Range',
            to: '/slider/api-show-in-range',
            thumbnail: '/img/template-api-showInRange.png',
          },
          {
            key: '1.5.5',
            name: 'Deep Linking',
            to: '/slider/api-deeplinking',
            thumbnail: '/img/template-api-deeplinking.png',
          },
          {
            key: '1.5.6',
            name: 'Deep Linking Multi',
            to: '/slider/api-deeplinking-multi',
            thumbnail: '/img/template-api-deeplinkingMulti.png',
          },
          {
            key: '1.5.7',
            name: 'Cookie',
            to: '/slider/api-cookie',
            thumbnail: '/img/template-api-cookie.png',
          },
        ]
      }
    ],
  },

  // 'Tabs': {
  //   key: '2',
  //   icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-segmented-nav" viewBox="0 0 16 16"><path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm6 3h4V5H6v4zm9-1V6a1 1 0 0 0-1-1h-3v4h3a1 1 0 0 0 1-1z"/></svg>',
  //   menus: [
  //     {
  //       key: '2.1',
  //       name: 'List All Examples',
  //       to: '/tabs',
  //     },
  //     {
  //       key: '2.2',
  //       name: 'Layout',
  //       menus: [
  //         { key: '2.2.1', name: 'Device', to: '/tabs/layout-device' },
  //         { key: '2.2.2', name: 'Vertical', to: '/tabs/layout-vertical' },
  //         { key: '2.2.3', name: 'Nested', to: '/tabs/layout-nested' },
  //         { key: '2.2.4', name: 'Bullet', to: '/tabs/layout-bullet' },
  //         { key: '2.2.5', name: 'Fullwidth', to: '/tabs/layout-fullwidth' },
  //         { key: '2.2.6', name: 'Page', to: '/tabs/layout-page' },
  //       ]
  //     },
  //     {
  //       key: '2.3',
  //       name: 'Effect',
  //       menus: [
  //         { key: '2.3.1', name: 'Line', to: '/tabs/effect-line' },
  //         { key: '2.3.2', name: 'Fade', to: '/tabs/effect-fade' },
  //         { key: '2.3.3', name: 'CSS One', to: '/tabs/effect-css-one' },
  //         { key: '2.3.4', name: 'CSS Two', to: '/tabs/effect-css-two' },
  //         { key: '2.3.5', name: 'CSS Four', to: '/tabs/effect-css-four' },
  //         { key: '2.3.6', name: 'None', to: '/tabs/effect-none' },
  //         { key: '2.3.7', name: 'Effect Random', to: '/tabs/effect-random' },
  //         { key: '2.3.8', name: 'Effect Control', to: '/tabs/effect-control' },
  //       ]
  //     },
  //     {
  //       key: '2.4',
  //       name: 'Style',
  //       menus: [
  //         { key: '2.4.1', name: 'Flat', to: '/tabs/style-flat' },
  //         { key: '2.4.2', name: 'Flatbox', to: '/tabs/style-flatbox' },
  //         { key: '2.4.3', name: 'Outline', to: '/tabs/style-round.' },
  //         { key: '2.4.4', name: 'Underline', to: '/tabs/style-underline' },
  //         { key: '2.4.5', name: 'Size Of Style', to: '/tabs/style-size' },
  //         { key: '2.4.6', name: 'Highlight Slide', to: '/tabs/style-highlight' },
  //       ]
  //     },
  //     {
  //       key: '2.5',
  //       name: 'Position',
  //       menus: [
  //         { key: '2.5.1', name: 'Hor Begin-Begin', to: '/tabs/pos-hor-beginBegin' },
  //         { key: '2.5.2', name: 'Hor Begin-Center', to: '/tabs/pos-hor-beginCenter' },
  //         { key: '2.5.3', name: 'Hor Begin-End', to: '/tabs/pos-hor-beginEnd' },
  //         { key: '2.5.4', name: 'Hor Begin-Justify', to: '/tabs/pos-hor-beginJustify' },
  //         { key: '2.5.5', name: 'Hor End-Begin', to: '/tabs/pos-hor-endBegin.' },
  //         { key: '2.5.6', name: 'Hor End-Center', to: '/tabs/pos-hor-endCenter' },
  //         { key: '2.5.7', name: 'Hor End-End', to: '/tabs/pos-hor-endEnd' },
  //         { key: '2.5.8', name: 'Hor End-Justify', to: '/tabs/pos-hor-endJustify' },
  //         { key: '2.5.9', name: 'Ver Begin-Begin', to: '/tabs/pos-ver-beginBegin' },
  //         { key: '2.5.10', name: 'Ver Begin-Center', to: '/tabs/pos-ver-beginCenter' },
  //         { key: '2.5.11', name: 'Ver Begin-End', to: '/tabs/pos-ver-beginEnd' },
  //         { key: '2.5.12', name: 'Ver End-Begin', to: '/tabs/pos-ver-endBegin' },
  //         { key: '2.5.13', name: 'Ver End-Center', to: '/tabs/pos-ver-endCenter' },
  //         { key: '2.5.14', name: 'Ver End-End', to: '/tabs/pos-ver-endEnd' },
  //       ]
  //     },
  //   ],
  // },

  // 'Tools': {
  //   key: '3',
  //   icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16"><path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z"/></svg>',
  //   menus: [
  //     {
  //       key: '3.1',
  //       name: 'Create CSS effect',
  //       to: '/tools/create-css-effect',
  //     },
  //     {
  //       key: '3.2',
  //       name: 'Preview CSS effect',
  //       to: '/tools/preview-css-effect',
  //     }
  //   ],
  // },

  'Docs': {
    key: '4',
    to: '/documentation',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-text" viewBox="0 0 16 16"><path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/><path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/><path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/></svg>',
  },
  'Download': {
    key: '5',
    to: '/download',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg>',
  },
}

const initSetup = function() {
  const $linkLevel1 = jQuery('.megamenu--link-lv1')
  $linkLevel1.on('click', function(e) {
    e.preventDefault()
    
  })
}

// Lifecycle mounted
onMounted(() => {
  initSetup()
})
</script>


<template>
<nav class="megamenu">
  <div class="megamenu__ul megamenu--ul-lv1">
    <div
      v-for="(menuLevel1, indexLevel1) in MENUS"
      class="megamenu--li-lv1">

      <!-- Link level 1 -->
        <NuxtLink
          :to="menuLevel1.to"
          class="megamenu--link-lv1">
          <i v-if="menuLevel1.icon" v-html="menuLevel1.icon "></i>
          <span>{{ indexLevel1 }}</span>
          <span class="megamenu__caret" v-if="menuLevel1.menus"></span>
        </NuxtLink>

      <!-- Board -->
      <div
        v-if="menuLevel1.menus"
        class="megamenu__board">

        <div class="megamenu__board_inner">
          <div class="megamenu__left">
            <div class="megamenu__title">
              <h2 class="megamenu__name">Slider</h2>
              <p class="megamenu__desc">Over 30+ Slider Starter Examples</p>
            </div>

            <!-- Rubyslider Pagination -->
            <div
              class="megamenu__links rs01pag"
              data-rubyslider-markup="megamenu-slider">

              <template
                v-for="menuLevel2 in menuLevel1.menus">

                <div v-if="menuLevel2.to" class="megamenu__link megamenu--link-lv2 rs01pagitem">
                  <NuxtLink :to="menuLevel2.to">
                    <i v-if="menuLevel2.icon" v-html="menuLevel2.icon "></i>
                    <span>{{ menuLevel2.name }}</span>
                    <span class="megamenu__caret" v-if="menuLevel2.menus"></span>
                  </NuxtLink>
                </div>
              </template>
            </div>
          </div> <!-- ./megamenu__left -->

          <div class="megamenu__right">
            <MegaMenuSlider :menu-items="menuLevel1" />
          </div> <!-- ./megamenu__right -->
        </div>
      </div>

    </div>
  </div> <!-- ./megamenu__menu -->
</nav>
</template>
