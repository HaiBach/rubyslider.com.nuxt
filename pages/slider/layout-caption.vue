<script setup>
definePageMeta({
  middleware: ['init']
})
const sliderOptions = {
  name: 'sliderPreview',
  fx: 'cssOne',
  speed: 800,
  width: 1140,
  isCap: true
}
const initSetup = () => {
  jQuery('#main .rs01nav').remove()
  jQuery('#main .rs01pag').remove()
  jQuery('#main .rs01overlay-ghost').remove()
  jQuery('#main .rs01imgback').css({ width: '', height: '', left: '', top: '' })

  const rubyLayoutCaption = jQuery('.layout-caption__slider').rubyslider( sliderOptions )
}
onMounted(() => {
  setTimeout(initSetup, 400)
})
</script>


<template>
<main id="main">
  <section class="layout-caption wrapper">
    <div class="container">
      <TitleHead>
        <template #title>
          <h1>LAYOUT CÓ PHỤ ĐỀ</h1>
        </template>
      </TitleHead>

      <div class="row">
        <div class="col-12 col-sm-3">
            <div class="rs01cap" data-rubyslider-markup="sliderPreview"></div>
        </div>

        <div class="col-12 col-sm-9 layout-caption__slider slider-preview rs01 image-for-sp">
          <div>
            <a class="rs01imgback" href="/img/vietnam-1140-1.jpg">Việt Nam 1</a>
            <div class="rs01capitem">
              <h2>SOME PICTURES OF VIETNAM</h2>
              <p class="font-blokk">Excepturi ab delectus exercitationem incidunt eum reprehenderit necessitatibus asperiores eveniet animi sed quae voluptate quos eos assumenda soluta natus reiciendis.</p>
            </div>
          </div>

          <div>
            <a class="rs01imgback" href="/img/vietnam-1140-2.jpg">Việt Nam 2</a>
            <div class="rs01capitem">
              <h2>HA NOI</h2>
              <p class="font-blokk">Cupiditate dolore dolor nemo reprehenderit similique provident doloremque dolores labore quae ipsa et facilis impedit in minus. Minus, ab maxime sit!</p>
              <p class="font-blokk">Cupiditate dolore dolor nemo reprehenderit similique provident doloremque dolores labore quae ipsa et facilis impedit in minus. Minus, ab maxime sit!</p>
            </div>
          </div>
          
          <div>
            <a class="rs01imgback" href="/img/vietnam-1140-3.jpg">Việt Nam 3</a>
            <div class="rs01capitem">
              <h2>HA LONG BAY</h2>
              <p class="font-blokk">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, harum cupiditate ad iure quisquam dicta modi odit eligendi quas adipisci eaque.</p>
              <p class="font-blokk">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, harum cupiditate ad iure quisquam dicta modi odit eligendi quas adipisci eaque.</p>
            </div>
          </div>
          
          <div>
            <a class="rs01imgback" href="/img/vietnam-1140-4.jpg">Việt Nam 4</a>
            <div class="rs01capitem">
              <h2>NHA TRANG</h2>
              <p class="font-blokk">Ullam, sint animi numquam fugit molestiae sit. Accusantium, hic, voluptas nemo voluptatem molestias culpa repellendus voluptatum quae voluptatibus neque suscipit aspernatur earum!</p>
              <p class="font-blokk">Ullam, sint animi numquam fugit molestiae sit. Accusantium, hic, voluptas nemo voluptatem molestias culpa repellendus voluptatum quae voluptatibus neque suscipit aspernatur earum!</p>
            </div>
          </div>

          <div>
            <a class="rs01imgback" href="/img/vietnam-1140-5.jpg">Việt Nam 5</a>
            <div class="rs01capitem">
              <h2>HO CHI MINH</h2>
              <p class="font-blokk">Excepturi ab delectus exercitationem incidunt eum reprehenderit necessitatibus asperiores eveniet animi sed quae voluptate quos eos assumenda soluta natus reiciendis.</p>
              <p class="font-blokk">Excepturi ab delectus exercitationem incidunt eum reprehenderit necessitatibus asperiores eveniet animi sed quae voluptate quos eos assumenda soluta natus reiciendis.</p>
            </div>
          </div>

          <div>
            <a class="rs01imgback" href="/img/vietnam-1140-6.jpg">Việt Nam 6</a>
            <div class="rs01capitem">
              <h2>SON DOONG CAVE</h2>
              <p class="font-blokk">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, harum cupiditate ad iure quisquam dicta modi odit eligendi quas adipisci eaque.</p>
            </div>  
          </div>
        </div> <!-- /.rs01 -->
      </div>
    </div>
  </section>

  <Guide>
    <template #gioi-thieu>
      <p>...</p>
    </template>
    <template #thiet-lap>
      <pre class="codeprint">{{ sliderOptions }}</pre>
    </template>
    <template #nav>
      <ButtonPrevNext
        prev-name="Layout nhiều slider trên cùng 1 trang"
        prev-to="/slider/layout-multiple"
        next-name="Layout chiều cao tự động"
        next-to="/slider/layout-height-auto" />
    </template>
  </Guide>
</main>
</template>


<style lang="scss">
.layout-caption {
  overflow: hidden;
}
</style>
 