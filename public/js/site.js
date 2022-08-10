/**
 * SECTION WITH POSITION FIXED WHEN SCROLL
 * Hỗ trợ header khi scroll sẽ ở vị trí fixed
 * Thêm class `scroll-fixed` vào header.
 * Phần Scroll Inner sẽ là element chuyển đổi vị trí `position` chính
 * Thêm class `.scroll-inner` element bên dưới để tính toán vị trí
 * Hỗ trợ element holder để giữ vị trí chiều cao giống header --> hỗ trợ hiệu ứng mượt hơn
 * Thêm elemnt với class `.scroll-holder` để thiết lập holder
 * Thêm data `fixed-bottomin` để trở tới vị trí chỉ định, khi scroll tới ví trí đó thì header sẽ chuyển sang vị trí fixed
 */
 (function ($) {
  $(document).on('ready', function() {
    var $scrollFixed = $('.scrollfixed');
    var actived = 'scrollfixed--actived';
    var enabled = 'scrollfixed--enabled';
    var inViewport = 'fixed-in-viewport';
    var hChenhlenh = 10;
  
    $scrollFixed.each(function() {
      var $fixed = $(this);
      // var targetBottomIn = $fixed.data('fixed-bottomin');
      // var targetBottomOut = $fixed.data('fixed-bottomout');
      // var targetBottomOut = $fixed.data('fixed-bottomout');
  
  
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
        var $inner = $fixed.find('.scrollfixed__inner');
        var $holder = $fixed.find('.scrollfixed__holder');
        var target = $fixed.data(dataTarget);
        var $target = $(target);
  
        // Điều kiện thực hiện
        if ( !($inner.length && $target.length) ) return
        // Setup chiều cao cho $holder
        $fixed.addClass(enabled)
        $holder.css('min-height', $inner.innerHeight())
  
  
        // Tiếp tục thiết lập
        var rectFixed = $fixed[0].getBoundingClientRect();
        var rectTarget = $target[0].getBoundingClientRect();
        var rectInner = $inner[0].getBoundingClientRect();
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
          // $fixed.addClass(dataTarget)
        }
        else {
          $fixed.removeClass(actived +' '+ dataTarget)
          // $fixed.removeClass(dataTarget)
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
        if ($holder.length) {
          $holder.css('min-height', Math.round(rectInner.height))
        }
      }
    })
  })
  })(jQuery);
  