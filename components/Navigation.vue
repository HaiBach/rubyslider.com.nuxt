<script setup>
const MENUS = ref({
  'Slider': {
    key: '1',
    menus: [
      {
        key: '1.1',
        name: 'List templates',
        to: '/slider'
      },
      {
        key: '1.2',
        name: 'Layout',
        menus:
        [
          { key: '1.2.1', name: 'Basic', to: '/slider/layout-basic' },
          { key: '1.2.2', name: 'Classic 1', to: '/slider/layout-classic1' },
          { key: '1.2.3', name: 'Classic 2', to: '/slider/layout-classic2' },
          { key: '1.2.4', name: 'Center', to: '/slider/layout-center' },
          { key: '1.2.5', name: 'Carousel', to: '/slider/layout-carousel' },
          { key: '1.2.6', name: 'Outbox', to: '/slider/layout-outbox' },
          { key: '1.2.7', name: 'Device', to: '/slider/layout-device' },
          { key: '1.2.8', name: 'Coverscreen', to: '/slider/layout-coverscreen' },
          { key: '1.2.9', name: 'Fullwidth', to: '/slider/layout-fullwidth' },
          { key: '1.2.10', name: 'Fullwidth Range', to: '/slider/layout-fullwidthRange' },
          { key: '1.2.11', name: 'Vertical Thumbnail', to: '/slider/layout-verticalThumb' },
          { key: '1.2.12', name: 'Nested', to: '/slider/layout-nested' },
          { key: '1.2.13', name: 'Multi', to: '/slider/layout-multi' },
          { key: '1.2.14', name: 'Caption', to: '/slider/layout-caption' },
          { key: '1.2.15', name: 'Height Auto', to: '/slider/layout-heightAuto' },
          { key: '1.2.16', name: 'Height Fixed', to: '/slider/layout-heightFixed' },
        ]
      },
      {
        key: '1.3',
        name: 'Effect',
        menus:
        [
          { key: '1.3.1', name: 'Line Effect', to: '/slider/effect-lin' },
          { key: '1.3.2', name: 'Fade Effect', to: '/slider/effect-fade' },
          { key: '1.3.3', name: 'Math Effect', to: '/slider/effect-math' },
          { key: '1.3.4', name: 'CSS One', to: '/slider/effect-cssOne' },
          { key: '1.3.5', name: 'CSS Two', to: '/slider/effect-cssTwo' },
          { key: '1.3.6', name: 'CSS Four', to: '/slider/effect-cssFour' },
          { key: '1.3.7', name: 'Coverflow3D', to: '/slider/effect-coverflow3D' },
          { key: '1.3.8', name: 'Effect Random', to: '/slider/effect-random' },
          { key: '1.3.9', name: 'Effect Control', to: '/slider/effect-control' },
        ]
      },
      {
        key: '1.4',
        name: 'Slideshow',
        menus:
        [
          { key: '1.4.1', name: 'Arc Timer', to: '/slider/slideshow-timerArc' },
          { key: '1.4.2', name: 'Line Timer', to: '/slider/slideshow-timerLine' },
          { key: '1.4.3', name: 'Timer Only', to: '/slider/slideshow-timerOnly' },
          { key: '1.4.4', name: 'Slideshow Random', to: '/slider/slideshow-random' },
        ]
      },
      {
        key: '1.5',
        name: 'API',
        menus:
        [
          { key: '1.5.1', name: 'Add-Remove Tabs', to: '/slider/api-addremove' },
          { key: '1.5.2', name: 'Callback Event', to: '/slider/api-callback' },
          { key: '1.5.3', name: 'Show By Device', to: '/slider/api-showByDevic' },
          { key: '1.5.4', name: 'Show In Range', to: '/slider/api-showInRange' },
          { key: '1.5.5', name: 'Deep Linking', to: '/slider/api-deeplinking' },
          { key: '1.5.6', name: 'Deep Linking Multi', to: '/slider/api-deeplinkingMulti' },
          { key: '1.5.7', name: 'Cookie', to: '/slider/api-cookie' },
        ]
      }
    ],
  },

  'Tabs': {
    key: '2',
    menus: [
      {
        key: '2.1',
        name: 'List templates',
        to: '/tabs/list-templates',
      },
      {
        key: '2.2',
        name: 'Layout',
        menus: [
          { key: '2.2.1', name: 'Device', to: '/tabs/layout-device' },
          { key: '2.2.2', name: 'Vertical', to: '/tabs/layout-vertical' },
          { key: '2.2.3', name: 'Nested', to: '/tabs/layout-nested' },
          { key: '2.2.4', name: 'Bullet', to: '/tabs/layout-bullet' },
          { key: '2.2.5', name: 'Fullwidth', to: '/tabs/layout-fullwidth' },
          { key: '2.2.6', name: 'Page', to: '/tabs/layout-page' },
        ]
      },
      {
        key: '2.3',
        name: 'Effect',
        menus: [
          { key: '2.3.1', name: 'Line', to: '/tabs/effect-line' },
          { key: '2.3.2', name: 'Fade', to: '/tabs/effect-fade' },
          { key: '2.3.3', name: 'CSS One', to: '/tabs/effect-cssOne' },
          { key: '2.3.4', name: 'CSS Two', to: '/tabs/effect-cssTwo' },
          { key: '2.3.5', name: 'CSS Four', to: '/tabs/effect-cssFour' },
          { key: '2.3.6', name: 'None', to: '/tabs/effect-none' },
          { key: '2.3.7', name: 'Effect Random', to: '/tabs/effect-random' },
          { key: '2.3.8', name: 'Effect Control', to: '/tabs/effect-control' },
        ]
      },
      {
        key: '2.4',
        name: 'Style',
        menus: [
          { key: '2.4.1', name: 'Flat', to: '/tabs/style-flat' },
          { key: '2.4.2', name: 'Flatbox', to: '/tabs/style-flatbox' },
          { key: '2.4.3', name: 'Outline', to: '/tabs/style-round.' },
          { key: '2.4.4', name: 'Underline', to: '/tabs/style-underline' },
          { key: '2.4.5', name: 'Size Of Style', to: '/tabs/style-size' },
          { key: '2.4.6', name: 'Highlight Slide', to: '/tabs/style-highlight' },
        ]
      },
      {
        key: '2.5',
        name: 'Position',
        menus: [
          { key: '2.5.1', name: 'Hor Begin-Begin', to: '/tabs/pos-hor-beginBegin' },
          { key: '2.5.2', name: 'Hor Begin-Center', to: '/tabs/pos-hor-beginCenter' },
          { key: '2.5.3', name: 'Hor Begin-End', to: '/tabs/pos-hor-beginEnd' },
          { key: '2.5.4', name: 'Hor Begin-Justify', to: '/tabs/pos-hor-beginJustify' },
          { key: '2.5.5', name: 'Hor End-Begin', to: '/tabs/pos-hor-endBegin.' },
          { key: '2.5.6', name: 'Hor End-Center', to: '/tabs/pos-hor-endCenter' },
          { key: '2.5.7', name: 'Hor End-End', to: '/tabs/pos-hor-endEnd' },
          { key: '2.5.8', name: 'Hor End-Justify', to: '/tabs/pos-hor-endJustify' },
          { key: '2.5.9', name: 'Ver Begin-Begin', to: '/tabs/pos-ver-beginBegin' },
          { key: '2.5.10', name: 'Ver Begin-Center', to: '/tabs/pos-ver-beginCenter' },
          { key: '2.5.11', name: 'Ver Begin-End', to: '/tabs/pos-ver-beginEnd' },
          { key: '2.5.12', name: 'Ver End-Begin', to: '/tabs/pos-ver-endBegin' },
          { key: '2.5.13', name: 'Ver End-Center', to: '/tabs/pos-ver-endCenter' },
          { key: '2.5.14', name: 'Ver End-End', to: '/tabs/pos-ver-endEnd' },
        ]
      },
    ],
  },

  'Tools': {
    key: '3',
    menus: [
      {
        key: '3.1',
        name: 'Create CSS effect',
        to: '/tools/create-css-effect',
      },
      {
        key: '3.2',
        name: 'Preview CSS effect',
        to: '/tools/preview-css-effect',
      }
    ],
  },

  'Docs': {
    key: '4',
    to: '/documentation',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16"><path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/></svg>',
  },
  'Download': {
    key: '5',
    to: '/download',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg>',
  },
})

// Lifecycle mounted
onMounted(() => {
  const rubymenu = jQuery('.rm01').rubymenu()
})
</script>


<template>
<nav class="rm01">

  <ul class="rm01menu">
    <li v-for="(menuLevel1, keyLevel1) in MENUS" :key="menuLevel1.key">
      <NuxtLink :to="menuLevel1.to">
        <i class="menu-icon" v-if="menuLevel1.icon" v-html="menuLevel1.icon"></i>
        <span>{{ keyLevel1 }}</span>
      </NuxtLink>

      <ul class="rm01menu" v-if="menuLevel1.menus">
        <li v-for="menuLevel2 in menuLevel1.menus" :key="menuLevel2.key">
          <NuxtLink :to="menuLevel2.to">
            <i class="menu-icon" v-if="menuLevel2.icon" v-html="menuLevel2.icon"></i>
            <span>{{ menuLevel2.name }}</span>
          </NuxtLink>

          <ul class="rm01menu" v-if="!!menuLevel2.menus">
            <li v-for="menuLevel3 in menuLevel2.menus" :key="menuLevel3.key">
              <NuxtLink :to="menuLevel3.to">
                <i class="menu-icon" v-if="menuLevel3.icon" v-html="menuLevel3.icon"></i>
                <span>{{ menuLevel3.name }}</span>
              </NuxtLink>
            </li>
          </ul> <!-- /menu level 3 -->
        </li>
      </ul> <!-- /menu level 2 -->
    </li>
  </ul> <!-- /menu level 1 -->

</nav>
</template>