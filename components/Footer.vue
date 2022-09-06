<script setup>
const date = new Date()
const year = date.getFullYear()
</script>


<template>
<footer id="footer" class="footer">
  <div class="container">
    <div class="footer__copyright">
      <p>&copy;{{ year }} Nguyễn Văn Thy. All Rights Reserved.</p>
    </div>
  </div>
</footer> 
</template>


<style lang="scss">
.footer {
  padding-top: 40px;
  padding-bottom: 40px;
  &__copyright {
    p {
      margin-bottom: 0;
      color: #666;
      font-size: .875em;
    }
  }
  /** Media **/
  @media (max-width: 767px) {
    &__copyright {
      p {
        font-size: .8125em;
      }
    }
  }
}
</style>