<script setup>
const date = new Date()
const year = date.getFullYear()
</script>


<template>
<footer id="footer" class="footer">
  <div class="container">
    <div class="footer__copyright">
      <p>&copy;{{ year }} Nguyễn Văn Thy. All Rights Reserved.<br>
      Hình ảnh được sử dụng trên trang này thuộc bản quyền <a href="https://unsplash.com/" target="_blank">unsplash.com</a></p>
    </div>
  </div>
</footer> 
</template>


<style lang="scss">
@mixin sizeRem($size) {
  font-size: calc($size / 16) * 1rem;
}
.footer {
  padding-top: 40px;
  padding-bottom: 40px;
  &__copyright {
    p {
      margin-bottom: 0;
      color: #666;
      @include sizeRem(14);
    }
    a {
      color: #444;
      &:hover {
        color: var(--color-primary);
      }
    }
  }
  /** Media **/
  @media (max-width: 767px) {
    padding-top: 25px;
    padding-bottom: 25px;
    background-color: rgba($color: #000, $alpha: 0.05);
    &__copyright {
      p {
        color: #444;
        @include sizeRem(12);
        // text-align: center;
      }
    }
  }
}
</style>
