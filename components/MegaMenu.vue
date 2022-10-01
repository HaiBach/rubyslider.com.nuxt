<script setup>
const MENUS = useMenu()

/**
 * MEGA MENU
 * Support hover/click active action of the mega menu.
 * Ghost menu support for close the current open menu.
 * 'hover' action feel not good, lag, does't give a sense of trust.
 * So, I choose 'click' action instead 
 **/
const open = 'megamenu--open'
const boardOpen = 'megamenu--board-open'
const actived = 'megamenu--actived'
const spBreakpoint = 992
let $menuParentCurrent, $ghost

const megamenu = function() {
  const $linkLevel1 = document.querySelectorAll('.megamenu--link-lv1:not([href])')
  const $linkLevel3 = document.querySelectorAll('.megamenu--link-lv3, .megamenu--link-lv1[href]')
  
  // Event mouse over on Ghost element
  $ghost = document.querySelector('.megamenu__ghost')
  $ghost.addEventListener('click', closeBoardByGhost)

  
  // Event on $link level 1
  $linkLevel1.forEach(($link) => {
    $link.addEventListener('click', () => { toggleMenuLevel1($link.parentNode) })
  })

  /**
   * Search parent with 'megamenu--li-lv1' class
   * This code like 'closest' func of jQuery
   * Mục đích: để đóng megamenu khi click vào link level 3
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
      $link.addEventListener('click', closeBoardbyMenuLevel3)
    }
    else {
      $link.addEventListener('click', () => { toggleMenuLevel3($listParent) })
    }
  })
  

  // Function Open Menu
  // Function chỉ hoạt động trên PC
  function toggleMenuLevel1($parent) {
    if (screen.width < spBreakpoint) return

    // Menu open --> close
    if ( $parent.classList.contains(boardOpen) ) {
      $parent.classList.remove(boardOpen)
      $ghost.classList.remove(actived)
      document.body.classList.remove(actived)
    }

    // Menu close --> open
    else {
      $menuParentCurrent = $parent
      $linkLevel1.forEach( $el => $el.parentNode.classList.remove(boardOpen) )
      $parent.classList.add(boardOpen)
      $ghost.classList.add(actived)
      document.body.classList.add(actived)
    }
    // console.log('toggle Menu Level 1')
  }

  function toggleMenuLevel3($parent) {
    if ($parent == null) {
      $parent = $menuParentCurrent
    }

    // Menu open --> close
    if ( $parent.classList.contains(boardOpen) ) {
      $parent.classList.remove(boardOpen)
      $ghost.classList.remove(actived)
      document.body.classList.remove(actived)
    }
    // Menu close --> open
    else {
      $menuParentCurrent = $parent
      $linkLevel1.forEach( $el => $el.parentNode.classList.remove(boardOpen) )
      $parent.classList.add(boardOpen)
      $ghost.classList.add(actived)
      document.body.classList.add(actived)
    }
    // document.body.classList.remove(open)
    hamburgerToggle()
    // console.log('toggle Menu Level 3')
  }
}

// Function Close Menu
function closeBoardByGhost(event) {
  if ($menuParentCurrent) {
    $menuParentCurrent.classList.remove(boardOpen)
    $menuParentCurrent = null
  }
  $ghost.classList.remove(actived)
  document.body.classList.remove(actived)
  document.body.classList.remove(open)
  // console.log('close board by ghost')
  return false
}
function closeBoardbyMenuLevel3(event) {
  if ($menuParentCurrent) {
    $menuParentCurrent.classList.remove(boardOpen)
    $menuParentCurrent = null
  }
  $ghost.classList.remove(actived)
  document.body.classList.remove(actived)
  document.body.classList.remove(open)
  // console.log('close board by menu level 3')
  return false
}

/** Event on Hamburger button */
function hamburgerToggle(event) {
  const $hamburger = document.querySelector('.hamburger')
  const hamburgerActived = 'is-active'

  if ($hamburger.classList.contains( hamburgerActived )) {
    $hamburger.classList.remove(hamburgerActived)
    document.body.classList.remove(open)
  }
  else {
    $hamburger.classList.add(hamburgerActived)
    document.body.classList.add(open)
  }
  // console.log('hamburger toggle')
}


// Lifecycle mounted
onMounted(() => {
  megamenu()
})
</script>


<template>
<nav id="nav" class="nav">
  <button class="hamburger hamburger--slider megamenu--sp" type="button" @click="hamburgerToggle">
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>

  <div class="megamenu">
    <div class="megamenu__ghost"></div>
    <div class="megamenu__header megamenu--sp">
      <Logo />
      <button class="hamburger hamburger--slider is-active" type="button" @click="hamburgerToggle">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
    <div class="megamenu--ul-lv1">
      <template
        v-for="menuLevel1 in MENUS"
        :key="menuLevel1.key">

        <div v-if="menuLevel1.status" class="megamenu--li-lv1">

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
        </div>
      </template>
    </div>
  </div>
</nav>
</template>


<style lang="scss">
#nav .hamburger {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate3d(0,-50%,0);
  padding-top: 5px;
  z-index: 102;
}
</style>
