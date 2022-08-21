<script setup>
const MENUS = [
  {
    status: true,
    key: '1',
    slug: 'slider',
    name: 'Slider',
    description: 'Các ví dụ cơ bản về slider. <br>Bao gồm các thể loại hiệu ứng, bố cục, slideshow và api khác nhau. <br>Hơn 50+ ví dụ để bạn có thể bắt đầu sử dụng RubySlider.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16"><path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/><path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/></svg>',
    menus: [
      {
        key: '1.1',
        // name: 'List All Examples',
        name: 'Tất cả ví dụ',
        to: '/slider',
        thumbnail: '/img/template-slider-list-all.svg',
      },
      {
        key: '1.3',
        // name: 'Effect',
        name: 'Hiệu ứng',
        menus:
        [
          {
            key: '1.3.1',
            name: 'Hiệu ứng Line',
            to: '/slider/effect-line',
            thumbnail: '/img/template-fx-line.png',
          },
          {
            key: '1.3.2',
            name: 'Hiệu ứng Fade',
            to: '/slider/effect-fade',
            thumbnail: '/img/template-fx-fade.png',
          },
          {
            key: '1.3.3',
            name: 'Hiệu ứng Math',
            to: '/slider/effect-math',
            thumbnail: '/img/template-fx-math.png',
          },
          {
            key: '1.3.4',
            name: 'Hiệu ứng CSS One',
            to: '/slider/effect-css-one',
            thumbnail: '/img/template-fx-cssOne.png',
          },
          // {
          //   key: '1.3.5',
          //   name: 'Hiệu ứng CSS Two',
          //   to: '/slider/effect-css-two',
          //   thumbnail: '/img/template-fx-cssTwo.png',
          // },
          {
            key: '1.3.6',
            name: 'Hiệu ứng CSS Four',
            to: '/slider/effect-css-four',
            thumbnail: '/img/template-fx-cssFour.png',
          },
          {
            key: '1.3.7',
            name: 'Hiệu ứng Coverflow3D',
            to: '/slider/effect-coverflow3d',
            thumbnail: '/img/template-fx-coverflow3D.png',
          },
          {
            key: '1.3.9',
            name: 'Tuỳ biến hiệu ứng',
            to: '/slider/effect-control',
            thumbnail: '/img/template-fx-control.png',
          },
        ]
      },
      {
        key: '1.2',
        // name: 'Layout',
        name: 'Bố cục',
        menus:
        [
          {
            key: '1.2.1',
            // name: 'Basic',
            name: 'Cơ bản',
            to: '/slider/layout-basic',
            thumbnail: '/img/template-layout-basic.png',
          },
          {
            key: '1.2.2',
            // name: 'Classic 1',
            name: 'Cổ điển 1',
            to: '/slider/layout-classic-1',
            thumbnail: '/img/template-layout-classic1.png',
          },
          {
            key: '1.2.3',
            // name: 'Classic 2',
            name: 'Cổ điển 2',
            to: '/slider/layout-classic-2',
            thumbnail: '/img/template-layout-classic2.png',
          },
          {
            key: '1.2.4',
            // name: 'Center',
            name: 'Chính giữa',
            to: '/slider/layout-center',
            thumbnail: '/img/template-layout-center.png',
          },
          { 
            key: '1.2.5',
            // name: 'Carousel',
            name: 'Băng chuyền',
            to: '/slider/layout-carousel',
            thumbnail: '/img/template-layout-carousel.png',
          },
          {
            key: '1.2.6',
            // name: 'Outbox',
            name: 'Bên ngoài cái hộp',
            to: '/slider/layout-outbox',
            thumbnail: '/img/template-layout-outbox.png',
          },
          {
            key: '1.2.7',
            // name: 'Device',
            name: 'iPad',
            to: '/slider/layout-device',
            thumbnail: '/img/template-layout-device.png',
          },
          {
            key: '1.2.8',
            // name: 'Coverscreen',
            name: 'Toàn màn hình',
            to: '/slider/layout-coverscreen',
            thumbnail: '/img/template-layout-coverscreen.png',
          },
          {
            key: '1.2.9',
            // name: 'Fullwidth',
            name: 'Toàn bộ chiều rộng',
            to: '/slider/layout-fullwidth',
            thumbnail: '/img/template-layout-fullwidth.png',
          },
          {
            key: '1.2.10',
            // name: 'Fullwidth Range',
            name: 'Toàn bộ chiều rộng 2',
            to: '/slider/layout-fullwidth-range',
            thumbnail: '/img/template-layout-fullwidthRange.png',
          },
          {
            key: '1.2.11',
            // name: 'Vertical Thumbnail',
            name: 'Hình thu nhỏ chiều dọc',
            to: '/slider/layout-vertical-thumbnail',
            thumbnail: '/img/template-layout-vertical.png',
          },
          {
            key: '1.2.12',
            // name: 'Nested',
            name: 'Lồng nhau',
            to: '/slider/layout-nested',
            thumbnail: '/img/template-layout-nested.png',
          },
          {
            key: '1.2.13',
            // name: 'Multi',
            name: 'Nhiều slider',
            to: '/slider/layout-multiple',
            thumbnail: '/img/template-layout-multi.png',
          },
          {
            key: '1.2.14',
            // name: 'Caption',
            name: 'Phụ đề',
            to: '/slider/layout-caption',
            thumbnail: '/img/template-layout-caption.png',
          },
          {
            key: '1.2.15',
            // name: 'Height Auto',
            name: 'Chiều cao tự động',
            to: '/slider/layout-height-auto',
            thumbnail: '/img/template-layout-heightAuto.png',
          },
          {
            key: '1.2.16',
            // name: 'Height Fixed',
            name: 'Chiều cao cố định',
            to: '/slider/layout-height-fixed',
            thumbnail: '/img/template-layout-heightFixed.png',
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

  {
    status: false,
    key: '2',
    name: 'Tabs',
    slug: 'tabs',
    name: 'Tabs',
    description: 'Dummy text',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-segmented-nav" viewBox="0 0 16 16"><path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm6 3h4V5H6v4zm9-1V6a1 1 0 0 0-1-1h-3v4h3a1 1 0 0 0 1-1z"/></svg>',
    menus: [
      {
        key: '2.1',
        name: 'List All Examples',
        to: '/tabs',
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
          { key: '2.3.3', name: 'CSS One', to: '/tabs/effect-css-one' },
          { key: '2.3.4', name: 'CSS Two', to: '/tabs/effect-css-two' },
          { key: '2.3.5', name: 'CSS Four', to: '/tabs/effect-css-four' },
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

  {
    status: true,
    key: '3',
    name: 'Công cụ',
    slug: 'tools',
    name: 'Công cụ',
    description: 'Trang này cho phép bạn tạo mới, kiểm tra hiệu ứng mới cũng như các hiệu ứng đã xây dựng sẵn trong plugin. Bằng những dòng code thân thiện (tương tự như css animation) tạo điều kiện dễ dàng cho các bạn mới tiếp xúc.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16"><path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z"/></svg>',
    menus: [
      {
        key: '3.1',
        name: 'Create CSS effect',
        to: '/tools/create-css-effect',
        thumbnail: '/img/create-css-effect/create-css-effect-01.svg'
      },
      {
        key: '3.2',
        name: 'Preview CSS effect',
        to: '/tools/preview-css-effect',
        thumbnail: '/img/create-css-effect/create-css-effect-01.svg'
      }
    ],
  },

  {
    status: true,
    key: '4',
    name: 'Hướng dẫn',
    slug: 'docs',
    to: '/documentation',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-text" viewBox="0 0 16 16"><path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/><path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/><path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/></svg>',
  },
  {
    status: true,
    key: '5',
    name: 'Github',
    slug: 'download',
    to: 'https://github.com/HaiBach/RubySlider',
    linkTarget: '_blank',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>',
  },
]


/**
 * MEGA MENU
 * Support hover / click active action of the mega menu.
 * Ghost menu support for close the current open menu.
 * 'hover' action feel not good, lag, does't give a sense of trust.
 * So, I choose 'click' action instead 
 **/
const megamenu = function() {
  const $linkLevel1 = document.querySelectorAll('.megamenu--link-lv1:not([href])')
  const $linkLevel3 = document.querySelectorAll('.megamenu--link-lv3, .megamenu--link-lv1[href]')
  const $ghost = document.querySelector('.megamenu__ghost')
  const open = 'megamenu--open'
  const actived = 'megamenu--actived'
  let $parentCurrent

  // Event mouse over on Ghost element
  $ghost.addEventListener('click', closeMenu)

  
  // Event on $link level 1
  $linkLevel1.forEach(($link) => {
    $link.addEventListener('click', () => { toggleMenu($link.parentNode) })
  })

  /**
   * Search parent with 'megamenu--li-lv1' class
   * This code like 'closest' func of jQuery
   * Mục đích: để đóng mega menu khi click vào link level 3
   */
  $linkLevel3.forEach(($link) => {
    let $listParent = null
    let $nodeCurrent = $link

    while (!$listParent) {
      const $parent = $nodeCurrent.parentNode
      const isTrueParent = $parent.classList.contains('megamenu--li-lv1')
      
      // End the loop when parent list not found
      if ($parent == document.body) {
        $listParent = null
        break
      }

      // Đường link phải có parent là list $li
      // Đường link phải có megamenu__board
      if (isTrueParent) {
        if ($parent.querySelector('.megamenu__board')) {
          $listParent = $parent
        }
        else {
          $listParent = null
        }
        break
      }
      // Tiếp tục vòng lặp
      else {
        $nodeCurrent = $parent
      }
    }
    // Add event click to Link level 3
    if ($listParent == null) {
      $link.addEventListener('click', closeMenu)
    }
    else {
      $link.addEventListener('click', () => { toggleMenu($listParent) })
    }
  })
  


  // Function Open Menu
  function toggleMenu($parent) {
    if ($parent == null) {
      $parent = $parentCurrent
    }

    // Menu open --> close
    if ( $parent.classList.contains(open) ) {
      $parent.classList.remove(open)
      $ghost.classList.remove(actived)
      document.body.classList.remove(actived)
    }

    // Menu close --> open
    else {
      $parentCurrent = $parent
      $linkLevel1.forEach( $el => $el.parentNode.classList.remove(open) )
      $parent.classList.add(open)
      $ghost.classList.add(actived)
      document.body.classList.add(actived)
    }
  }
  // Function Close Menu
  function closeMenu(e) {
    if (!$parentCurrent) return
    
    $parentCurrent.classList.remove(open)
    $ghost.classList.remove(actived)
    document.body.classList.remove(actived)
    return false
  }
}


// Lifecycle mounted
onMounted(() => {
  megamenu()
})
</script>


<template>
<nav class="megamenu">
  <div class="megamenu__ghost"></div>
  <div class="megamenu--ul-lv1">
    <div
      v-for="menuLevel1 in MENUS"
      class="megamenu--li-lv1">
      <template v-if="menuLevel1.status">

        <!-- Link level 1 -->
        <NuxtLink
          :to="menuLevel1.to"
          :target="menuLevel1.linkTarget"
          class="megamenu--link-lv1">
          <i v-if="menuLevel1.icon" v-html="menuLevel1.icon "></i>
          <span>{{ menuLevel1.name }}</span>
          <span class="megamenu__caret" v-if="menuLevel1.menus"></span>
        </NuxtLink>

        <!-- Board -->
        <div
          v-if="menuLevel1.menus"
          class="megamenu__board">

          <div class="megamenu__board_inner">
            <div class="megamenu__left">
              <div class="megamenu__title">
                <h2 class="megamenu__name">{{ menuLevel1.name }}</h2>
                <p class="megamenu__desc" v-html="menuLevel1.description"></p>
              </div>

              <!-- Rubyslider Pagination -->
              <div
                :class="'megamenu__links rs01pag megaslider-' + menuLevel1.slug"
                :data-rubyslider-markup="'megaslider-' + menuLevel1.slug">
              </div>
            </div> <!-- ./megamenu__left -->

            <div class="megamenu__right">
              <MenuSlider :menu-items="menuLevel1" />
            </div> <!-- ./megamenu__right -->
          </div>
        </div>
      </template>
    </div>
  </div> <!-- ./megamenu__menu -->
</nav>
</template>
