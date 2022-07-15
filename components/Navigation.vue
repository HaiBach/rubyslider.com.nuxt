<script setup>
const menus = ref({
  'Slider':
  [
    {
      name: 'List templates',
      to: 'slider-list-templates'
    },
    {
      name: 'Layout',
      menus:
      [
        { name: 'Basic', to: '/slider-layout-basic' },
        { name: 'Classic 1', to: '/slider-layout-classic1' },
        { name: 'Classic 2', to: '/slider-layout-classic2' },
        { name: 'Center', to: '/slider-layout-center' },
        { name: 'Carousel', to: '/slider-layout-carousel' },
        { name: 'Outbox', to: '/slider-layout-outbox' },
        { name: 'Device', to: '/slider-layout-device' },
        { name: 'Coverscreen', to: '/slider-layout-coverscreen' },
        { name: 'Fullwidth', to: '/slider-layout-fullwidth' },
        { name: 'Fullwidth Range', to: '/slider-layout-fullwidthRange' },
        { name: 'Vertical Thumbnail', to: '/slider-layout-verticalThumb' },
        { name: 'Nested', to: '/slider-layout-nested' },
        { name: 'Multi', to: '/slider-layout-multi' },
        { name: 'Caption', to: '/slider-layout-caption' },
        { name: 'Height Auto', to: '/slider-layout-heightAuto' },
        { name: 'Height Fixed', to: '/slider-layout-heightFixed' },
      ]
    },
    {
      name: 'Effect',
      menus:
      [
        { name: 'Line Effect', to: '/slider-effect-lin' },
        { name: 'Fade Effect', to: '/slider-effect-fade' },
        { name: 'Math Effect', to: '/slider-effect-math' },
        { name: 'CSS One', to: '/slider-effect-cssOne' },
        { name: 'CSS Two', to: '/slider-effect-cssTwo' },
        { name: 'CSS Four', to: '/slider-effect-cssFour' },
        { name: 'Coverflow3D', to: '/slider-effect-coverflow3D' },
        { name: 'Effect Random', to: '/lider-effect-random' },
        { name: 'Effect Control', to: '/slider-effect-control' },
      ]
    },
    {
      name: 'Slideshow',
      menus:
      [
        { name: 'Arc Timer', to: '/slider-slideshow-timerArc' },
        { name: 'Line Timer', to: '/slider-slideshow-timerLine' },
        { name: 'Timer Only', to: '/slider-slideshow-timerOnly' },
        { name: 'Slideshow Random', to: '/slider-slideshow-random' },
      ]
    },
    {
      name: 'API',
      menus:
      [
        { name: 'Add-Remove Tabs', to: '/slider-api-addremove' },
        { name: 'Callback Event', to: '/slider-api-callback' },
        { name: 'Show By Device', to: '/slider-api-showByDevic' },
        { name: 'Show In Range', to: '/slider-api-showInRange' },
        { name: 'Deep Linking', to: '/slider-api-deeplinking' },
        { name: 'Deep Linking Multi', to: '/slider-api-deeplinkingMulti' },
        { name: 'Cookie', to: '/slider-api-cookie' },
      ]
    }
  ],

  'Tabs':
  [
    {
      name: 'List templates',
      to: '/tabs-list-templates',
    },
    {
      name: 'Layout',
      menus: [
        { name: 'Device', to: '/tabs-layout-device' },
        { name: 'Vertical', to: '/tabs-layout-vertical' },
        { name: 'Nested', to: '/tabs-layout-nested' },
        { name: 'Bullet', to: '/tabs-layout-bullet' },
        { name: 'Fullwidth', to: '/tabs-layout-fullwidth' },
        { name: 'Page', to: '/tabs-layout-page' },
      ]
    },
    {
      name: 'Effect',
      menus: [
        { name: 'Line', to: '/tabs-effect-line' },
        { name: 'Fade', to: '/tabs-effect-fade' },
        { name: 'CSS One', to: '/tabs-effect-cssOne' },
        { name: 'CSS Two', to: '/tabs-effect-cssTwo' },
        { name: 'CSS Four', to: '/tabs-effect-cssFour' },
        { name: 'None', to: '/tabs-effect-none' },
        { name: 'Effect Random', to: '/tabs-effect-random' },
        { name: 'Effect Control', to: '/tabs-effect-control' },
      ]
    },
    {
      name: 'Style',
      menus: [
        { name: 'Flat', to: '/tabs-style-flat' },
        { name: 'Flatbox', to: '/tabs-style-flatbox' },
        { name: 'Outline', to: '/tabs-style-round.' },
        { name: 'Underline', to: '/tabs-style-underline' },
        { name: 'Size Of Style', to: '/tabs-style-size' },
        { name: 'Highlight Slide', to: '/tabs-style-highlight' },
      ]
    },
    {
      name: 'Position',
      menus: [
        { name: 'Hor Begin-Begin', to: '/tabs-pos-hor-beginBegin' },
        { name: 'Hor Begin-Center', to: '/__tabs-pos-hor-beginCente__' },
        { name: 'Hor Begin-End', to: '/tabs-pos-hor-beginEnd' },
        { name: 'Hor Begin-Justify', to: '/tabs-pos-hor-beginJustify' },
        { name: 'Hor End-Begin', to: '/tabs-pos-hor-endBegin.' },
        { name: 'Hor End-Center', to: '/tabs-pos-hor-endCenter' },
        { name: 'Hor End-End', to: '/tabs-pos-hor-endEnd' },
        { name: 'Hor End-Justify', to: '/tabs-pos-hor-endJustify' },
        { name: 'Ver Begin-Begin', to: '/tabs-pos-ver-beginBegin' },
        { name: 'Ver Begin-Center', to: '/tabs-pos-ver-beginCenter' },
        { name: 'Ver Begin-End', to: '/tabs-pos-ver-beginEnd' },
        { name: 'Ver End-Begin', to: '/tabs-pos-ver-endBegin' },
        { name: 'Ver End-Center', to: '/tabs-pos-ver-endCenter' },
        { name: 'Ver End-End', to: '/tabs-pos-ver-endEnd' },
      ]
    },
  ],

  'Tools':
  [
    {
      name: 'Create CSS effect',
      to: '/page-create-css-effect',
    },
    {
      name: 'Preview CSS effect',
      to: '/page-preview-css-effect',
    }
  ],

  'Docs':
  {
    to: '/documentation',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16"><path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/></svg>',
  },

  'Download':
  {
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
{{ menus }}
<nav class="rm01">
  <ul class="rm01menu">
    <li><a>Slider</a>
      <ul class="rm01menu">
        <li>
          <!-- <NuxtLink to="/slider-list-templates">List templates</NuxtLink> -->
        </li>
        <li><a>Layout</a>
          <ul class="rm01menu">
            <li><a href="slider-layout-basic.html">Basic</a></li>
            <li><a href="slider-layout-classic1.html">Classic-1</a></li>
            <li><a href="slider-layout-classic2.html">Classic-2</a></li>
            <li><a href="slider-layout-center.html">Center</a></li>
            <li><a href="slider-layout-carousel.html">Carousel</a></li>
            <li><a href="slider-layout-outbox.html">Outbox</a></li>
            <li><a href="slider-layout-device.html">Device</a></li>
            <li><a href="slider-layout-coverscreen.html">Coverscreen</a></li>
            <li><a href="slider-layout-fullwidth.html">Fullwidth</a></li>
            <li><a href="slider-layout-fullwidthRange.html">Fullwidth Range</a></li>
            <li><a href="slider-layout-verticalThumb.html">Vertical Thumbnail</a></li>
            <li><a href="slider-layout-nested.html">Nested</a></li>
            <li><a href="slider-layout-multi.html">Multi</a></li>
            <li><a href="slider-layout-caption.html">Caption</a></li>
            <li><a href="slider-layout-heightAuto.html">Height Auto</a></li>
            <li><a href="slider-layout-heightFixed.html">Height Fixed</a></li>
          </ul>
        </li>
        <li><a>Effect</a>
          <ul class="rm01menu">
            <li><a href="slider-effect-line.html">Line</a></li>
            <li><a href="slider-effect-fade.html">Fade</a></li>
            <li><a href="slider-effect-math.html">Math</a></li>
            <li><a href="slider-effect-cssOne.html">CSS One</a></li>
            <li><a href="slider-effect-cssTwo.html">CSS Two</a></li>
            <li><a href="slider-effect-cssFour.html">CSS Four</a></li>
            <li><a href="slider-effect-coverflow3D.html">Coverflow3D</a></li>
            <li><a href="slider-effect-random.html">Effect Random</a></li>
            <li><a href="slider-effect-control.html">Effect Control</a></li>
          </ul>
        </li>
        <li><a>Slideshow</a>
          <ul class="rm01menu">
            <li><a href="slider-slideshow-timerArc.html">Arc Timer</a></li>
            <li><a href="slider-slideshow-timerLine.html">Line Timer</a></li>
            <li><a href="slider-slideshow-timerOnly.html">Timer Only</a></li>
            <li><a href="slider-slideshow-random.html">Slideshow Random</a></li>
          </ul>
        </li>
        <li><a>API</a>
          <ul class="rm01menu">
            <li><a href="slider-api-addremove.html">Add-Remove Tabs</a></li>
            <li><a href="slider-api-callback.html">Callback Event</a></li>
            <li><a href="slider-api-showByDevice.html">Show By Device</a></li>
            <li><a href="slider-api-showInRange.html">Show In Range</a></li>
            <li><a href="slider-api-deeplinking.html">Deep Linking</a></li>
            <li><a href="slider-api-deeplinkingMulti.html">Deep Linking Multi</a></li>
            <li><a href="slider-api-cookie.html">Cookie</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a>Tabs</a>
      <ul class="rm01menu">
        <li><a href="page-templates-tabs.html">List templates</a></li>
        <li><a>Layout</a>
          <ul class="rm01menu">
            <li><a href="tabs-layout-device.html">Device</a></li>
            <li><a href="tabs-layout-vertical.html">Vertical</a></li>
            <li><a href="tabs-layout-nested.html">Nested</a></li>
            <li><a href="tabs-layout-bullet.html">Bullet</a></li>
            <li><a href="tabs-layout-fullwidth.html">Fullwidth</a></li>
            <li><a href="tabs-layout-page.html">Page</a></li>
          </ul>
        </li>
        <li><a>Effect</a>
          <ul class="rm01menu">
            <li><a href="tabs-effect-line.html">Line</a></li>
            <li><a href="tabs-effect-fade.html">Fade</a></li>
            <li><a href="tabs-effect-cssOne.html">CSS One</a></li>
            <li><a href="tabs-effect-cssTwo.html">CSS Two</a></li>
            <li><a href="tabs-effect-cssFour.html">CSS Four</a></li>
            <li><a href="tabs-effect-none.html">None</a></li>
            <li><a href="tabs-effect-random.html">Effect Random</a></li>
            <li><a href="tabs-effect-control.html">Effect Control</a></li>
          </ul>
        </li>
        <li><a>Style</a>
          <ul class="rm01menu">
            <li><a href="tabs-style-flat.html">Flat</a></li>
            <li><a href="tabs-style-flatbox.html">Flatbox</a></li>
            <li><a href="tabs-style-outline.html">Outline</a></li>
            <li><a href="tabs-style-round.html">Round</a></li>
            <li><a href="tabs-style-underline.html">Underline</a></li>
            <li><a href="tabs-style-size.html">Size Of Style</a></li>
            <li><a href="tabs-style-highlight.html">Highlight Slide</a></li>
          </ul>
        </li>
        <li><a>Position</a>
          <ul class="rm01menu">
            <li><a href="tabs-pos-hor-beginBegin.html">Hor Begin-Begin</a></li>
            <li><a href="tabs-pos-hor-beginCenter.html">Hor Begin-Center</a></li>
            <li><a href="tabs-pos-hor-beginEnd.html">Hor Begin-End</a></li>
            <li><a href="tabs-pos-hor-beginJustify.html">Hor Begin-Justify</a></li>
            <li><a href="tabs-pos-hor-endBegin.html">Hor End-Begin</a></li>
            <li><a href="tabs-pos-hor-endCenter.html">Hor End-Center</a></li>
            <li><a href="tabs-pos-hor-endEnd.html">Hor End-End</a></li>
            <li><a href="tabs-pos-hor-endJustify.html">Hor End-Justify</a></li>
            <li><a class="bo-t" href="tabs-pos-ver-beginBegin.html">Ver Begin-Begin</a></li>
            <li><a href="tabs-pos-ver-beginCenter.html">Ver Begin-Center</a></li>
            <li><a href="tabs-pos-ver-beginEnd.html">Ver Begin-End</a></li>
            <li><a href="tabs-pos-ver-endBegin.html">Ver End-Begin</a></li>
            <li><a href="tabs-pos-ver-endCenter.html">Ver End-Center</a></li>
            <li><a href="tabs-pos-ver-endEnd.html">Ver End-End</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a>Tools</a>
      <ul class="rm01menu">
        <li><a href="page-create-css-effect.html">Create CSS effect</a></li>
        <li><a href="page-preview-css-effect.html">Preview CSS effect</a></li>
      </ul>
    </li>
    <li>
      <a href="../documentation/index.html">
        <i class="menu-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
          </svg>
        </i>
        <span>Docs</span>
      </a>
    </li>
    <li>
      <a href="https://codecanyon.net/item/ruby-slider-live-touch-effect-slider/18240185?rel=haibach">
        <i class="menu-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
          </svg>
        </i>
        <span>Download</span>
      </a>
    </li>
  </ul>
</nav>
</template>