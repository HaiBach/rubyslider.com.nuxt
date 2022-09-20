<script setup>
/**
 * SECTION WITH POSITION FIXED WHEN SCROLL
 * Hỗ trợ header khi scroll sẽ ở vị trí fixed
 * Thêm class `scrollfixed` vào header.
 * Phần Scroll Inner sẽ là element chuyển đổi vị trí `position` chính
 * Thêm class `.scrollfixed__inner` element bên dưới để tính toán vị trí
 * Hỗ trợ element holder để giữ vị trí chiều cao giống header --> hỗ trợ hiệu ứng mượt hơn
 * Thêm elemnt với class `.scrollfixed__holder` để thiết lập holder
 * Thêm data `bottomedge-scrollto-bottom` để trở tới vị trí chỉ định, khi scroll tới ví trí đó thì header sẽ chuyển sang vị trí fixed
 * 
 * Các hướng scroll to:
 * "bottomedge-scrollto-top": cạnh đáy của section di chuyển đến vị trí top của window browser.
 * "bottomedge-scrollto-bottom": cạnh đáy của section di chuyển đến vị trí bottom của window browser.
 * "topedge-scrollto-top": cạnh trên của section di chuyển đến vị trí top của window browser.
 * "topedge-scrollto-bottom": cạnh trên của section di chuyển đến vị trí bottom của window browser.
 */
const scrollfixed = function() {
  var $scrollFixed = $('.scrollfixed');
  var actived = 'scrollfixed--actived';
  var bodyActived = 'scrollfixed--body-actived';
  var enabled = 'scrollfixed--enabled';
  var inViewport = 'scrollfixed--in-viewport';
  var hChenhlenh = 10;

  $scrollFixed.each(function() {
    var $fixed = $(this);

    // THỰC HIỆN LÚC BAN ĐẦU
    toggleActiveWhenGotoTarget($fixed)

    // THIẾT LẬP EVENT SCROLL
    $(document).on('scroll', function(e) {
      toggleActiveWhenGotoTarget($fixed)
    })

    // THIẾT LẬP EVENT RESIZE
    var timer2;
    $(window).on('resize', function() {
      clearTimeout(timer2)
      timer2 = setTimeout(function() {
        toggleActiveWhenGotoTarget($fixed)
      }, 200)
    })
    

    /**
     * FUNCTION THIẾT LẬP CHÍNH
     */
    function toggleActiveWhenGotoTarget($fixed) {
      const dataTargets = [
        'bottomedge-scrollto-top',
        'bottomedge-scrollto-bottom',
        'topedge-scrollto-top',
        'topedge-scrollto-bottom',
      ]
      dataTargets.forEach((dataTarget) => {

        // var $inner = $fixed.find('.scrollfixed__inner');
        // var $holder = $fixed.find('.scrollfixed__holder');
        var target = $fixed.data(dataTarget);
        var $target = $(target).eq(0);

        // Điều kiện thực hiện
        if ( !$target.length ) return
        // Setup chiều cao cho $holder
        $fixed.addClass(enabled)
        // $holder.css('min-height', $inner.outerHeight())


        // Tiếp tục thiết lập
        var rectFixed = $fixed[0].getBoundingClientRect();
        var rectTarget = $target[0].getBoundingClientRect();
        // var rectInner = $inner[0].getBoundingClientRect();
        var hWin = $(window).height();
        var fixedTopInViewport = Math.round(rectFixed.top - hWin);

        /**
         * CLASS `ACTIVED`
         * Thêm class `actived` vào $scroll khi vượt qua đối tượng $target
         */
        var boundaryToShow;
        if (dataTarget == 'bottomedge-scrollto-top') {
          boundaryToShow = Math.round(rectTarget.bottom);
        }
        else if (dataTarget == 'bottomedge-scrollto-bottom') {
          boundaryToShow = Math.round(rectTarget.bottom - hWin);
        }
        else if (dataTarget == 'topedge-scrollto-top') {
          boundaryToShow = Math.round(rectTarget.y);
        }
        else if (dataTarget == 'topedge-scrollto-bottom') {
          boundaryToShow = Math.round(rectTarget.y - hWin);
        }
        
        // So sánh
        const $body = $('body')
        if (boundaryToShow < 0) {
          $fixed.addClass(actived +' '+ dataTarget)
          $body.addClass(bodyActived)
        }
        else {
          $fixed.removeClass(actived +' '+ dataTarget)
          $body.removeClass(bodyActived)
        }


        /**
         * PHỤC HỒI VỊ TRÍ
         * Khi $fixed trong Viewport thì phục hồi vị trí
         */
        if (fixedTopInViewport < 0 && rectFixed.bottom > 0) {
          $fixed.addClass(inViewport)
        }
        else {
          $fixed.removeClass(inViewport)
        }

        // Cập nhật lại kích thước của holder
        // if ($holder.length) {
        //   $holder.css('min-height', Math.round(rectInner.height))
        // }
      })
    }
  })
}
onMounted(() => {
  scrollfixed()
})
</script>


<template>
<header id="header" class="header scrollfixed" data-topedge-scrollto-top=".anchor-first">
  <div class="header__inner">
    <!-- Logo -->
    <Logo />

    <!-- Navigation Mega -->
    <MegaMenu />
  </div>
</header>
</template>


<style lang="scss">
.header {
  &__inner {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 90px;
    padding: 20px 40px;
  }
  /** MEDIA */
  @media (max-width: 991px) {
    &__inner {
      padding-left: 20px;
      padding-right: 10px;
    }
  }
  @media (max-width: 767px) {
    &__inner {
      justify-content: center;
      min-height: 70px;
      padding: 15px 10px 15px 20px;
    }
  }
}

/** SCROLL FIXED **/
.scrollfixed {
  background-color: var(--color-primary);
  // background-color: rgba($color: #000, $alpha: .8);
  z-index: 99;

  /** FIXED ENABLE - ĐỦ ĐIỀU KIỆN ĐỂ SCROLL FIXED HOẠT ĐỘNG **/
  &--enabled {}
 
  /** FIXED ACTIVED - KHI SCROLL FIXED KÍCH HOẠT **/
  &--actived {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    box-shadow: 0 1px 2px rgba($color: #000, $alpha: 0.2);
    animation: headerMoveDown .2s both;
    .header__inner {
      min-height: 60px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .megamenu__board {
      top: calc(100% + 1px);
    }
  }

  /** MEDIA */
  @media (max-width: 991px) {
    &--actived {
      .header__inner {
        min-height: 54px;
      }
    }
  }
}

/** KEYFRAMES */
@keyframes headerMoveUp {
  0% {
    transform: translate3d(0,0,0);
  }
  100% {
    transform: translate3d(0,-100%,0);
  }
}
@keyframes headerMoveDown {
  0% {
    transform: translate3d(0,-100%,0);
  }
  100% {
    transform: translate3d(0,0,0);
  }
}
</style>