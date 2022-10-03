<script setup>
const initSetup = function() {
  jQuery('.effect-others .rs01nav').remove()
  jQuery('.effect-others .rs01pag').remove()
  jQuery('.effect-others .rs01overlay-ghost').remove()
  jQuery('.effect-others .rs01imgback').css({ width: '', height: '', left: '', top: '' })

  const sliderMath = jQuery('.slider-math').rubyslider({
    fx: 'rectRun',
    speed: 800,
    width: 1140,
    idBegin: 0,
    pag: {
      type: 'bullet',
    }
  })
  const sliderOneEffect = jQuery('.slider-one-effect').rubyslider({
    fx: 'cssOne',
    speed: 800,
    width: 1140,
    idBegin: 1,
    pag: {
      type: 'bullet',
    }
  })
  const sliderLineEffect = jQuery('.slider-line-effect').rubyslider({
    fx: 'line',
    speed: 400,
    width: 1140,
    imageback: {
      position: 'fill'
    },
    idBegin: 2,
    widthSlide: '80%',
    margin: 1,
    pag: {
      type: 'bullet',
    }
  })
  const sliderTabs = jQuery('.slider-tabs').rubyslider({
    type: 'tabs',
    fx: 'cssOne',
    cssOne: 'scalePulse',
    speed: 800,
    pag: {
      align: 'begin'
    }
  })
}
onMounted(() => {
  setTimeout(initSetup, 400)
})

/** Random Number */
let randomNum = 1
function getRandomNum() {
  const num = Math.round( Math.random() * 1000000 )
  randomNum = num
  return num
}
</script>


<template>
<section class="effect-others anchor-first">
  <TitleHead>
    <template #title>
      <h2>CÁC HIỆU ỨNG<span>và</span>BỐ CỤC KHÁC</h2>
    </template>
    <template #desc>
      <p>RubySlider hỗ trợ nhiều hiệu ứng khác nhau, từ hiệu ứng đơn giản đến 3D nổi bật.<br>Đáp đứng gần như đầy đủ trong các thiết kế website thông thường.</p>
    </template>
  </TitleHead>


  <div class="effect-others__items grid-custom">

    <!-- MATH EFFECT - begin -->
    <div class="effect-others__item grid-custom__item">
      <div class="slider-math rs01">
        <a
          v-for="i in 4"
          class="rs01imgback"
          :href="'/img/vietnam2-1140-' + (i+1) + '.webp'"
          >Hình ảnh Việt Nam {{ i+1 }}</a>
      </div>
      <div class="effect-others__btn btn">
        <NuxtLink to="/slider/effect-math">8 hiệu ứng Math</NuxtLink>
      </div>
    </div>
    <!-- MATH EFFECT - end -->


    <!-- CSS ONE EFFECT - begin -->
    <div class="effect-others__item grid-custom__item">
      <div class="slider-one-effect rs01">
        <a
          v-for="i in 4"
          class="rs01imgback"
          :href="'/img/vietnam2-1140-' + (i+1) + '.webp'"
          >Hình ảnh Việt Nam {{ i+1 }}</a>
      </div>
      <div class="effect-others__btn btn">
        <NuxtLink to="/slider/effect-css-one">50+ hiệu ứng CSS One</NuxtLink>
      </div>
    </div>
    <!-- CSS ONE EFFECT - end -->


    <!-- CENTER LAYOUT - LINE EFFECT - begin -->
    <div class="effect-others__item grid-custom__item">
      <div class="slider-line-effect rs01">
        <a
          v-for="i in 4"
          class="rs01imgback"
          :href="'/img/vietnam2-1140-' + (i+1) + '.webp'"
          >Hình ảnh Việt Nam {{ i+1 }}</a>
      </div>
      <div class="effect-others__btn btn">
        <NuxtLink to="/slider/layout-center">Bố cục chính giữa</NuxtLink>  
      </div>
    </div>
    <!-- CENTER LAYOUT - LINE EFFECT - end -->


    <!-- TABS LAYOUT - begin -->
    <div class="effect-others__item grid-custom__item">
      <div class="slider-tabs rs01 rs01flat">
        <div>
          <div class="rs01pagitem">OVERVIEW</div>
          <div class="font-blokk">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis aspernatur repellendus, esse illum suscipit nihil, minima beatae quaerat labore nisi fugit, officiis dignissimos saepe ab facilis qui non quas!</p>
            <p>Nam facilis tempore maxime incidunt deserunt, ipsum pariatur, accusamus animi quidem velit tenetur eum nesciunt quos veniam architecto neque impedit! Sed accusamus commodi dignissimos dolorem distinctio, itaque dicta non maiores?</p>
          </div>
        </div>

        <div>
          <div class="rs01pagitem">LAYOUT</div>
          <!-- Dummy Content - begin -->
          <div class="row font-blokk">
            <div class="col-4">
              <p class="bo-l-h"><i>Consectetur adipisicing elit. Vel, sequi, quis, minima, dolor quisquam numquam quod in repudiandae officia.</i></p>
            </div>
            <div class="col-8">
              <p class="dropcap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, pariatur aliquam molestias aspernatur non. Facere, quibusdam, reiciendis, natus laudantium debitis suscipit consequatur voluptatibus mollitia temporibus quia ratione dignissimos magnam provident.</p>
              <p>Assumenda, repudiandae, iste magni labore culpa eum expedita eligendi odio molestiae temporibus id ab nihil ad sunt mollitia veritatis excepturi. Ullam, odit nesciunt doloribus natus non repudiandae error itaque vero?</p>
            </div>
          </div>
          <!-- Dummy Content - end -->
        </div>

        <div>
          <div class="rs01pagitem">SWIPE PREVENT</div>
          <form class="block">
            <input type="text" class="large" placeholder="Username">
            <input type="text" class="large" placeholder="Password">
            <input type="text" class="large" placeholder="Repeat Password">
            <input type="text" class="large" placeholder="Email">
            <textarea name="" cols="30" rows="5" placeholder="Your bio"></textarea>
            <label class="checkbox text-small muted pull-left" for="terms">
              <input id="terms" type="checkbox">I have read and I agree the Terms of Use
            </label>
            <input class="btn large pull-right no-ma" type="submit" value="Register">
          </form>
        </div>

        <div>
          <div class="rs01pagitem">IMAGE LAZYLOAD</div>
          <div class="row">
            <div class="col-4 col-xs-4">
              <img class="rs01img card-img" src="/img/food-thumbnail1.webp" alt="Food 1">
            </div>
            <div class="col-4 col-xs-4">
              <img class="rs01img card-img" src="/img/food-thumbnail2.webp" alt="Food 2">
            </div>
            <div class="col-4 col-xs-4">
              <img class="rs01img card-img" src="/img/food-thumbnail3.webp" alt="Food 3">
            </div>
            <div class="col-4 col-xs-4">
              <img class="rs01img card-img" src="/img/food-thumbnail4.webp" alt="Food 4">
            </div>
            <div class="col-4 col-xs-4">
              <img class="rs01img card-img" src="/img/food-thumbnail6.webp" alt="Food 6">
            </div>
            <div class="col-4 col-xs-4">
              <img class="rs01img card-img" src="/img/food-thumbnail7.webp" alt="Food 7">
            </div>
          </div>
        </div>

        <!-- <div>
          <div class="rs01pagitem">IFRAME</div>
          <div>
            <a class="rs01iframe" href="https://www.google.com/maps/embed/v1/place?key=AIzaSyCCdHNpkWq_yU8PbLAF_r6CnnGCfNWcfro&amp;q=Tour+Eiffel,Champ-de-Mars,5+Avenue+Anatole+France,75007+Paris&amp;zoom=17" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></a>
          </div>
        </div> -->
      </div>
      <!-- <div class="effect-others__btn btn">
        <NuxtLink to="/tabs">Bố cục Tabs</NuxtLink>
      </div> -->
    </div>
    <!-- TABS LAYOUT - end -->

  </div>
</section>
</template>


<style lang="scss">
.effect-others {
  padding-top: 80px;
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-width: 1px 0;
  text-align: center;
  .title-head {
    margin-bottom: 80px;
    h2 {
      font-weight: 200;
      span {
        display: inline-block;
        font-weight: 700;
        transform: scale(.5);
      }
    }
  }

  /* SLIDER */
  .rs01 {
    margin-bottom: 20px;
    text-align: left;
  }
  .rs01slide {
    border-radius: 8px;
  }
  .rs01pag {
    &.rs01bullet {
      position: absolute;
      bottom: 0;
    }
  }
  .rs01bullet {
    .rs01pagitem {
      background-color: rgba($color: #000, $alpha: .75);
    }
  }
  /** Form **/
  form {
    input[type="text"],
    input[type="password"],
    input[type="email"],
    textarea {
      width: 100%;
    }
    input[type="submit"] {
      margin-top: 10px;
    }
  }
  /** Button */
  &__btn {
    a {
      min-width: 250px;
    }
  }

  /** Media */
  @media (max-width: 767px) {
    display: none;
  }
}
</style>