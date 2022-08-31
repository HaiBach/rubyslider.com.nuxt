<script setup>
const MENUS = useMenu()

/**
 * MEGA MENU
 * Support hover/click active action of the mega menu.
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
