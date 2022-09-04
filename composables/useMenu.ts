const MENUS = [
  {
    status: true,
    key: '1',
    name: 'Slider',
    slug: 'slider',
    description: 'Các ví dụ cơ bản về slider. <br>Bao gồm các thể loại hiệu ứng, bố cục, slideshow và api khác nhau. <br>Hơn 50+ ví dụ để bạn có thể bắt đầu sử dụng RubySlider.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16"><path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/><path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/></svg>',
    menus: [
      {
        status: true,
        key: '1.1',
        // name: 'List All Examples',
        name: 'Tất cả ví dụ',
        slug: 'all-samples',
        to: '/slider',
        thumbnail: '/img/template-slider-list-all.svg',
      },
      {
        status: true,
        key: '1.3',
        // name: 'Effect',
        name: 'Hiệu ứng',
        slug: 'effects',
        header: {
          title: 'CÁC LOẠI HIỆU ỨNG',
          desc: 'Các loại hiệu ứng trong RubySlider. RubySlider hỗ trợ nhiều hiệu ứng, bao gồm các hiệu ứng đơn giản có hiệu suất cao <b>Line</b>, <b>Fade</b> cho đến các hiệu ứng phức tạp và đẹp mắt như <b>Math</b>, <b>CSS One</b>, <b>Coverflow3D</b>. <br/>Đồng thời các hiệu ứng đều hỗ trợ chức năng thay đổi trực tiếp khi kéo, rê các slide này sang các slide khác'
        },
        menus:
        [
          {
            status: true,
            key: '1.3.1',
            name: 'Hiệu ứng Line',
            slug: 'effect-line',
            to: '/slider/effect-line',
            thumbnail: '/img/template-fx-line.png',
          },
          {
            status: true,
            key: '1.3.2',
            name: 'Hiệu ứng Fade',
            slug: 'effect-fade',
            to: '/slider/effect-fade',
            thumbnail: '/img/template-fx-fade.png',
          },
          {
            status: true,
            key: '1.3.3',
            name: 'Hiệu ứng Math',
            slug: 'effect-math',
            to: '/slider/effect-math',
            thumbnail: '/img/template-fx-math.png',
          },
          {
            status: true,
            key: '1.3.4',
            name: 'Hiệu ứng CSS One',
            slug: 'effect-css-one',
            to: '/slider/effect-css-one',
            thumbnail: '/img/template-fx-cssOne.png',
          },
          {
            status: false,
            key: '1.3.5',
            name: 'Hiệu ứng CSS Two',
            slug: 'effect-css-two',
            to: '/slider/effect-css-two',
            thumbnail: '/img/template-fx-cssTwo.png',
          },
          {
            status: false,
            key: '1.3.6',
            name: 'Hiệu ứng CSS Four',
            slug: 'effect-css-four',
            to: '/slider/effect-css-four',
            thumbnail: '/img/template-fx-cssFour.png',
          },
          {
            status: true,
            key: '1.3.7',
            name: 'Hiệu ứng Coverflow3D',
            slug: 'effect-coverflow3d',
            to: '/slider/effect-coverflow3d',
            thumbnail: '/img/template-fx-coverflow3D.png',
          },
          {
            status: false,
            key: '1.3.9',
            name: 'Tuỳ biến hiệu ứng',
            slug: 'effect-control',
            to: '/slider/effect-control',
            thumbnail: '/img/template-fx-control.png',
          },
        ]
      },
      {
        status: true,
        key: '1.2',
        // name: 'Layout',
        name: 'Bố cục',
        slug: 'layout',
        header: {
          title: 'BỐ CỤC/LAYOUT DỰNG SẴN',
          desc: 'Hỗ trợ các layout dựng sẵn trong các trường hợp khác nhau. Đáp ứng đầy đủ cho nhu cầu cơ bản. Đồng thời hướng dẫn bạn bắt đầu sử dụng RubySlider dễ dàng hơn.',
        },
        menus:
        [
          {
            status: true,
            key: '1.2.1',
            // name: 'Basic',
            name: 'Cơ bản',
            slug: 'laout-basic',
            to: '/slider/layout-basic',
            thumbnail: '/img/template-layout-basic.png',
          },
          {
            status: true,
            key: '1.2.2',
            // name: 'Classic 1',
            name: 'Cổ điển 1',
            slug: 'layout-classic-1',
            to: '/slider/layout-classic-1',
            thumbnail: '/img/template-layout-classic1.png',
          },
          {
            status: true,
            key: '1.2.3',
            // name: 'Classic 2',
            name: 'Cổ điển 2',
            slug: 'layout-classic-2',
            to: '/slider/layout-classic-2',
            thumbnail: '/img/template-layout-classic2.png',
          },
          {
            status: true,
            key: '1.2.4',
            // name: 'Center',
            name: 'Chính giữa',
            slug: 'layout-center',
            to: '/slider/layout-center',
            thumbnail: '/img/template-layout-center.png',
          },
          { 
            status: true,
            key: '1.2.5',
            // name: 'Carousel',
            name: 'Băng chuyền',
            slug: 'layout-carousel',
            to: '/slider/layout-carousel',
            thumbnail: '/img/template-layout-carousel.png',
          },
          {
            status: true,
            key: '1.2.6',
            // name: 'Outbox',
            name: 'Bên ngoài khung',
            slug: 'layout-outbox',
            to: '/slider/layout-outbox',
            thumbnail: '/img/template-layout-outbox.png',
          },
          {
            status: true,
            key: '1.2.7',
            // name: 'Device',
            name: 'Thiết bị',
            slug: 'layout-device',
            to: '/slider/layout-device',
            thumbnail: '/img/template-layout-device.png',
          },
          {
            status: true,
            key: '1.2.8',
            // name: 'Coverscreen',
            name: 'Toàn màn hình',
            slug: 'layout-coverscreen',
            to: '/slider/layout-coverscreen',
            thumbnail: '/img/template-layout-coverscreen.png',
          },
          {
            status: false,
            key: '1.2.9',
            // name: 'Fullwidth',
            name: 'Toàn bộ chiều rộng',
            slug: 'layout-fullwidth',
            to: '/slider/layout-fullwidth',
            thumbnail: '/img/template-layout-fullwidth.png',
          },
          {
            status: false,
            key: '1.2.10',
            // name: 'Fullwidth Range',
            name: 'Toàn bộ chiều rộng 2',
            slug: 'layout-fullwidth-2',
            to: '/slider/layout-fullwidth-range',
            thumbnail: '/img/template-layout-fullwidthRange.png',
          },
          {
            status: true,
            key: '1.2.11',
            // name: 'Vertical Thumbnail',
            name: 'Hình thu nhỏ chiều dọc',
            slug: 'layout-vertical-thumbnail',
            to: '/slider/layout-vertical-thumbnail',
            thumbnail: '/img/template-layout-vertical.png',
          },
          {
            status: true,
            key: '1.2.12',
            // name: 'Nested',
            name: 'Lồng nhau',
            slug: 'layout-nested',
            to: '/slider/layout-nested',
            thumbnail: '/img/template-layout-nested.png',
          },
          {
            status: true,
            key: '1.2.13',
            // name: 'Multi',
            name: 'Nhiều slider',
            slug: 'layout-multi',
            to: '/slider/layout-multiple',
            thumbnail: '/img/template-layout-multi.png',
          },
          {
            status: true,
            key: '1.2.14',
            // name: 'Caption',
            name: 'Phụ đề',
            slug: 'layout-caption',
            to: '/slider/layout-caption',
            thumbnail: '/img/template-layout-caption.png',
          },
          {
            status: true,
            key: '1.2.15',
            // name: 'Height Auto',
            name: 'Chiều cao tự động',
            slug: 'layout-height-auto',
            to: '/slider/layout-height-auto',
            thumbnail: '/img/template-layout-heightAuto.png',
          },
          {
            status: true,
            key: '1.2.16',
            // name: 'Height Fixed',
            name: 'Chiều cao cố định',
            slug: 'layout-height-fixed',
            to: '/slider/layout-height-fixed',
            thumbnail: '/img/template-layout-heightFixed.png',
          },
        ]
      },
      {
        status: false,
        key: '1.4',
        name: 'Slideshow',
        slug: 'slideshow',
        header: {
          title: 'TỰ ĐỘNG SLIDESHOW',
          desc: 'RubySlider có hỗ trợ chức năng tự động slideshow nội dung, bạn có thể thiết lập thời gian hiệu ứng, loại timer, nút dừng slideshow...<br>Đặc biệt bạn có thể tuỳ biến timer dễ dàng bằng css, hoặc bạn có thể cho slideshow có thể chạy ngẫu nhiên.',
        },
        menus:
        [
          {
            status: true,
            key: '1.4.1',
            name: 'Arc Timer',
            slug: 'slideshow-arc-timer',
            to: '/slider/slideshow-timer-arc',
            thumbnail: '/img/template-timer-arc.png',
          },
          {
            status: true,
            key: '1.4.2',
            name: 'Line Timer',
            slug: 'slideshow-line-timer',
            to: '/slider/slideshow-timer-line',
            thumbnail: '/img/template-timer-line.png',
          },
          {
            status: true,
            key: '1.4.3',
            name: 'Timer Only',
            slug: 'slideshow-timer',
            to: '/slider/slideshow-timer-only',
            thumbnail: '/img/template-timer-only.png',
          },
          {
            status: true,
            key: '1.4.4',
            name: 'Slideshow Random',
            slug: 'slideshow-random',
            to: '/slider/slideshow-random',
            thumbnail: '/img/template-random.png',
          },
        ]
      },
      {
        status: false,
        key: '1.5',
        name: 'API',
        slug: 'api',
        header: {
          title: 'PHƯƠNG THỨC API',
          desc: 'Phương thức giao tiếp của RubySlider và người sử dụng, bạn có thể đều khiển và cập nhật hầu hết các tuỳ chọn của plugin thông qua các phương thức API đơn giản.',
        },
        menus:
        [
          {
            status: true,
            key: '1.5.1',
            name: 'Add-Remove Tabs',
            slug: 'api-add-remove',
            to: '/slider/api-add-remove',
            thumbnail: '/img/template-api-addremove.png',
          },
          {
            status: true,
            key: '1.5.2',
            name: 'Callback Event',
            slug: 'api-callback-event',
            to: '/slider/api-callback',
            thumbnail: '/img/template-api-callback.png',
          },
          {
            status: true,
            key: '1.5.3',
            name: 'Show By Device',
            slug: 'api-show-device',
            to: '/slider/api-show-by-device',
            thumbnail: '/img/template-api-showByDevice.png',
          },
          {
            status: true,
            key: '1.5.4',
            name: 'Show In Range',
            slug: 'api-show-range',
            to: '/slider/api-show-in-range',
            thumbnail: '/img/template-api-showInRange.png',
          },
          {
            status: true,
            key: '1.5.5',
            name: 'Deep Linking',
            slug: 'api-deeplinking',
            to: '/slider/api-deeplinking',
            thumbnail: '/img/template-api-deeplinking.png',
          },
          {
            status: true,
            key: '1.5.6',
            name: 'Deep Linking Multi',
            slug: 'api-deeplinking-multi',
            to: '/slider/api-deeplinking-multi',
            thumbnail: '/img/template-api-deeplinkingMulti.png',
          },
          {
            status: true,
            key: '1.5.7',
            name: 'Cookie',
            slug: 'api-cookie',
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
    description: 'Dummy text',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-segmented-nav" viewBox="0 0 16 16"><path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm6 3h4V5H6v4zm9-1V6a1 1 0 0 0-1-1h-3v4h3a1 1 0 0 0 1-1z"/></svg>',
    menus: [
      {
        status: true,
        key: '2.1',
        name: 'List All Examples',
        to: '/tabs',
      },
      {
        status: true,
        key: '2.2',
        name: 'Layout',
        menus: [
          {
            status: true,
            key: '2.2.1',
            name: 'Device',
            to: '/tabs/layout-device'
          },
          {
            status: true,
            key: '2.2.2',
            name: 'Vertical',
            to: '/tabs/layout-vertical'
          },
          {
            status: true,
            key: '2.2.3',
            name: 'Nested',
            to: '/tabs/layout-nested'
          },
          {
            status: true,
            key: '2.2.4',
            name: 'Bullet',
            to: '/tabs/layout-bullet'
          },
          {
            status: true,
            key: '2.2.5',
            name: 'Fullwidth',
            to: '/tabs/layout-fullwidth'
          },
          {
            status: true,
            key: '2.2.6',
            name: 'Page',
            to: '/tabs/layout-page'
          },
        ]
      },
      {
        status: true,
        key: '2.3',
        name: 'Effect',
        menus: [
          {
            status: true,
            key: '2.3.1',
            name: 'Line',
            to: '/tabs/effect-line' },
          {
            status: true,
            key: '2.3.2',
            name: 'Fade',
            to: '/tabs/effect-fade'
          },
          {
            status: true,
            key: '2.3.3',
            name: 'CSS One',
            to: '/tabs/effect-css-one'
          },
          {
            status: true,
            key: '2.3.4',
            name: 'CSS Two',
            to: '/tabs/effect-css-two'
          },
          {
            status: true,
            key: '2.3.5',
            name: 'CSS Four',
            to: '/tabs/effect-css-four'
          },
          {
            status: true,
            key: '2.3.6',
            name: 'None',
            to: '/tabs/effect-none'
          },
          {
            status: true,
            key: '2.3.7',
            name: 'Effect Random',
            to: '/tabs/effect-random'
          },
          {
            status: true,
            key: '2.3.8',
            name: 'Effect Control',
            to: '/tabs/effect-control'
          },
        ]
      },
      {
        status: true,
        key: '2.4',
        name: 'Style',
        menus: [
          {
            status: true,
            key: '2.4.1',
            name: 'Flat',
            to: '/tabs/style-flat'
          },
          {
            status: true,
            key: '2.4.2',
            name: 'Flatbox',
            to: '/tabs/style-flatbox'
          },
          {
            status: true,
            key: '2.4.3',
            name: 'Outline',
            to: '/tabs/style-round.'
          },
          {
            status: true,
            key: '2.4.4',
            name: 'Underline',
            to: '/tabs/style-underline'
          },
          {
            status: true,
            key: '2.4.5',
            name: 'Size Of Style',
            to: '/tabs/style-size'
          },
          {
            status: true,
            key: '2.4.6',
            name: 'Highlight Slide',
            to: '/tabs/style-highlight'
          },
        ]
      },
      {
        status: true,
        key: '2.5',
        name: 'Position',
        menus: [
          {
            status: true,
            key: '2.5.1',
            name: 'Hor Begin-Begin',
            to: '/tabs/pos-hor-beginBegin'
          },
          {
            status: true,
            key: '2.5.2',
            name: 'Hor Begin-Center',
            to: '/tabs/pos-hor-beginCenter'
          },
          {
            status: true,
            key: '2.5.3',
            name: 'Hor Begin-End',
            to: '/tabs/pos-hor-beginEnd'
          },
          {
            status: true,
            key: '2.5.4',
            name: 'Hor Begin-Justify',
            to: '/tabs/pos-hor-beginJustify'
          },
          {
            status: true,
            key: '2.5.5',
            name: 'Hor End-Begin',
            to: '/tabs/pos-hor-endBegin.'
          },
          {
            status: true,
            key: '2.5.6',
            name: 'Hor End-Center',
            to: '/tabs/pos-hor-endCenter'
          },
          {
            status: true,
            key: '2.5.7',
            name: 'Hor End-End',
            to: '/tabs/pos-hor-endEnd'
          },
          {
            status: true,
            key: '2.5.8',
            name: 'Hor End-Justify',
            to: '/tabs/pos-hor-endJustify'
          },
          {
            status: true,
            key: '2.5.9',
            name: 'Ver Begin-Begin',
            to: '/tabs/pos-ver-beginBegin'
          },
          {
            status: true,
            key: '2.5.10',
            name: 'Ver Begin-Center',
            to: '/tabs/pos-ver-beginCenter'
          },
          {
            status: true,
            key: '2.5.11',
            name: 'Ver Begin-End',
            to: '/tabs/pos-ver-beginEnd'
          },
          {
            status: true,
            key: '2.5.12',
            name: 'Ver End-Begin',
            to: '/tabs/pos-ver-endBegin'
          },
          {
            status: true,
            key: '2.5.13',
            name: 'Ver End-Center',
            to: '/tabs/pos-ver-endCenter'
          },
          {
            status: true,
            key: '2.5.14',
            name: 'Ver End-End',
            to: '/tabs/pos-ver-endEnd'
          },
        ]
      },
    ],
  },

  {
    status: true,
    key: '3',
    name: 'Công cụ',
    slug: 'tools',
    description: 'Trang này cho phép bạn tạo mới, kiểm tra hiệu ứng mới cũng như các hiệu ứng đã xây dựng sẵn trong plugin. Bằng những dòng code thân thiện (tương tự như css animation) tạo điều kiện dễ dàng cho các bạn mới tiếp xúc.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16"><path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z"/></svg>',
    menus: [
      {
        status: true,
        key: '3.1',
        name: 'Create CSS effect',
        slug: 'tool-create-css-effect',
        to: '/tools/create-css-effect',
        thumbnail: '/img/create-css-effect/create-css-effect-01.svg'
      },
      {
        status: false,
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
    to: '/docs/quick-start',
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

export default function() {
  return useState('menu', () => MENUS)
  // return MENUS
}
