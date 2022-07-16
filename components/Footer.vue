<script setup>
const date = new Date()
const year = date.getFullYear()
</script>


<template>
<footer id="footer" class="wrapper footer">
  <div class="container">
    <div class="copyright">
      <p>&copy;{{ year }} Nguyễn Văn Thy. All Rights Reserved.</p>
    </div>
  </div>
</footer> 
</template>