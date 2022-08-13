<template>
<div class="mvtypo">
  <div class="mvtypo__inner">
    <h1 class="h1">TẠO MỚI<br>HIỆU ỨNG CSS</h1>
    <div class="desc">
      <p>Trang này cho phép bạn tạo mới, kiểm tra hiệu ứng mới cũng như các hiệu ứng đã xây dựng sẵn trong plugin. Bằng những dòng code thân thiện (tương tự như css animation) tạo điều kiện dễ dàng cho các bạn mới tiếp xúc.<br>Nào, hãy tạo riêng cho bạn những hiệu ứng css sáng tạo và độc đáo!</p>
    </div>
  </div>
</div>
</template>


<style lang="scss">
.mvtypo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;  
  padding-top: 50px;
  padding-bottom: 50px;
  min-height: 700px;
  // &__inner {
  //   padding: 30px 40px;
  //   border: 1px solid rgba(#000, .5);
  // }
  .h1 {
    font-size: 80px;
    line-height: 1.1;
  }
  .desc {
    max-width: 600px;
  }
  p {
    font-size: 18px;
    line-height: 1.6;
  }
}
</style>