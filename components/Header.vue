<script setup>
/**
 * SECTION WITH POSITION FIXED WHEN SCROLL
 * Hỗ trợ header khi scroll sẽ ở vị trí fixed
 * Thêm class `scrollfixed` vào header.
 * Phần Scroll Inner sẽ là element chuyển đổi vị trí `position` chính
 * Thêm class `.scrollfixed__inner` element bên dưới để tính toán vị trí
 * Hỗ trợ element holder để giữ vị trí chiều cao giống header --> hỗ trợ hiệu ứng mượt hơn
 * Thêm elemnt với class `.scrollfixed__holder` để thiết lập holder
 * Thêm data `fixed-bottomin` để trở tới vị trí chỉ định, khi scroll tới ví trí đó thì header sẽ chuyển sang vị trí fixed
 */
const scrollfixed = function() {
  var $scrollFixed = $('.scrollfixed');
  var actived = 'scrollfixed--actived';
  var enabled = 'scrollfixed--enabled';
  var inViewport = 'scrollfixed--in-viewport';
  var hChenhlenh = 10;

  $scrollFixed.each(function() {
    var $fixed = $(this);

    // THỰC HIỆN LÚC BAN ĐẦU
    toggleActiveWhenGotoTarget($fixed, 'fixed-bottomin')
    toggleActiveWhenGotoTarget($fixed, 'fixed-bottomout')
    toggleActiveWhenGotoTarget($fixed, 'fixed-topin')

    // THIẾT LẬP EVENT SCROLL
    $(document).on('scroll', function(e) {
      toggleActiveWhenGotoTarget($fixed, 'fixed-bottomin')
      toggleActiveWhenGotoTarget($fixed, 'fixed-bottomout')
      toggleActiveWhenGotoTarget($fixed, 'fixed-topin')
    })

    // THIẾT LẬP EVENT RESIZE
    var timer2;
    $(window).resize(function() {
      clearTimeout(timer2)
      timer2 = setTimeout(function() {
        toggleActiveWhenGotoTarget($fixed, 'fixed-bottomin')
        toggleActiveWhenGotoTarget($fixed, 'fixed-bottomout')
        toggleActiveWhenGotoTarget($fixed, 'fixed-topin')
      }, 200)
    })
    

    /**
     * FUNCTION THIẾT LẬP CHÍNH
     */
    function toggleActiveWhenGotoTarget($fixed, dataTarget) {
      // var $inner = $fixed.find('.scrollfixed__inner');
      // var $holder = $fixed.find('.scrollfixed__holder');
      var target = $fixed.data(dataTarget);
      var $target = $(target);

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
      if (dataTarget == 'fixed-bottomin') {
        boundaryToShow = Math.round(rectTarget.bottom - hWin);
      }
      else if (dataTarget == 'fixed-bottomout') {
        boundaryToShow = Math.round(rectTarget.bottom);
      }
      else if (dataTarget == 'fixed-topin') {
        boundaryToShow = Math.round(rectTarget.y - hWin);
      }
      
      // So sánh
      if (boundaryToShow < 0) {
        $fixed.addClass(actived +' '+ dataTarget)
      }
      else {
        $fixed.removeClass(actived +' '+ dataTarget)
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
    }
  })
}
onMounted(() => {
  scrollfixed()
})
</script>


<template>
<header id="header" class="header scrollfixed" data-fixed-bottomout=".anchor-first">
  <div class="container">
    <div class="header__inner">
      <!-- Logo -->
      <Logo />

      <!-- Navigation Mega -->
      <MegaMenu />
    </div>
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
    padding-top: 20px;
    padding-bottom: 20px;
  }
}

/** SCROLL FIXED **/
.scrollfixed {
  background-color: var(--color-primary);
  z-index: 99;

  /** FIXED ENABLE - ĐỦ ĐIỀU KIỆN ĐỂ SCROLL FIXED HOẠT ĐỘNG **/
  &--enabled {}
 
  /** FIXED ACTIVED - KHI SCROLL FIXED KÍCH HOẠT **/
  &--actived {
    position: sticky;
    top: 0;
    box-shadow: 0 1px 2px rgba($color: #000, $alpha: 0.2);
    animation: headerMoveDown .2s both;
    .header__inner {
      min-height: 60px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .megamenu__board {
      top: calc(100% - 4px);
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