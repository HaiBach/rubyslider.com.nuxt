<script setup>
const sliderOptions = {
  name: 'sliderPreview',
  fx: 'cssOne',
  speed: 800,
  width: 1140,
  height: 650,
  imageback: {
    position: 'fill'
  },
  isCap: true
}

onMounted(() => {
  setTimeout(() => {
    const $slider = jQuery('#layout-caption__slider')
    if ($slider.length) {
      $slider.rubyslider( sliderOptions )
    }
  }, 400)
})
</script>


<template>
  <div class="wrapper">
    <div class="container">
      <TitleHead title="CAPTION LAYOUT" />

      <div class="row">
        <div class="col3">
            <div class="rs01cap" data-rubyslider-markup="sliderPreview"></div>
        </div>

        <div id="layout-caption__slider" class="slider-preview rs01 col9">
          <div>
            <a class="rs01imgback" href="/img/vietnam-large1.jpg">Việt Nam 1</a>
            <div class="rs01capitem">
              <h2>SOME PICTURES OF VIETNAM</h2>
              <p class="font-blokk">Excepturi ab delectus exercitationem incidunt eum reprehenderit necessitatibus asperiores eveniet animi sed quae voluptate quos eos assumenda soluta natus reiciendis.</p>
            </div>
          </div>

          <div>
            <a class="rs01imgback" href="/img/vietnam-large2.jpg">Việt Nam 2</a>
            <div class="rs01capitem">
              <h2>HA NOI</h2>
              <p class="font-blokk">Cupiditate dolore dolor nemo reprehenderit similique provident doloremque dolores labore quae ipsa et facilis impedit in minus. Minus, ab maxime sit!</p>
              <p class="font-blokk">Cupiditate dolore dolor nemo reprehenderit similique provident doloremque dolores labore quae ipsa et facilis impedit in minus. Minus, ab maxime sit!</p>
            </div>
          </div>
          
          <div>
            <a class="rs01imgback" href="/img/vietnam-large3.jpg">Việt Nam 3</a>
            <div class="rs01capitem">
              <h2>HA LONG BAY</h2>
              <p class="font-blokk">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, harum cupiditate ad iure quisquam dicta modi odit eligendi quas adipisci eaque.</p>
              <p class="font-blokk">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, harum cupiditate ad iure quisquam dicta modi odit eligendi quas adipisci eaque.</p>
            </div>
          </div>
          
          <div>
            <a class="rs01imgback" href="/img/vietnam-large4.jpg">Việt Nam 4</a>
            <div class="rs01capitem">
              <h2>NHA TRANG</h2>
              <p class="font-blokk">Ullam, sint animi numquam fugit molestiae sit. Accusantium, hic, voluptas nemo voluptatem molestias culpa repellendus voluptatum quae voluptatibus neque suscipit aspernatur earum!</p>
              <p class="font-blokk">Ullam, sint animi numquam fugit molestiae sit. Accusantium, hic, voluptas nemo voluptatem molestias culpa repellendus voluptatum quae voluptatibus neque suscipit aspernatur earum!</p>
            </div>
          </div>

          <div>
            <a class="rs01imgback" href="/img/vietnam-large5.jpg">Việt Nam 5</a>
            <div class="rs01capitem">
              <h2>HO CHI MINH</h2>
              <p class="font-blokk">Excepturi ab delectus exercitationem incidunt eum reprehenderit necessitatibus asperiores eveniet animi sed quae voluptate quos eos assumenda soluta natus reiciendis.</p>
              <p class="font-blokk">Excepturi ab delectus exercitationem incidunt eum reprehenderit necessitatibus asperiores eveniet animi sed quae voluptate quos eos assumenda soluta natus reiciendis.</p>
            </div>
          </div>

          <div>
            <a class="rs01imgback" href="/img/vietnam-large6.jpg">Việt Nam 6</a>
            <div class="rs01capitem">
              <h2>SON DOONG CAVE</h2>
              <p class="font-blokk">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, harum cupiditate ad iure quisquam dicta modi odit eligendi quas adipisci eaque.</p>
            </div>  
          </div>
        </div> <!-- /.rs01 -->
      </div>
    </div>
  </div>
</template>


<style scoped>
h2 {
  font-weight: 300;
}
</style>
 