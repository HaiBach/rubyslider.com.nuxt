<template>
<div class="typoslider">
  <div class="container">
    <h1 class="typoslider__h1">
      <span class="typoslider__text_1">SLIDER</span>
      <span class="typoslider__text_2">LIST</span>
      <span class="typoslider__text_3">TEMPLATES</span>
      <span class="typoslider__text_4">OVER 30+ SLIDER STARTER TEMPLATES</span>
    </h1>
  </div>
</div>
</template>


<style lang="scss">
.typoslider {
  &__h1 {
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
    font-size: .875em;
  }
  &__text_1, &__text_2, &__text_3 {
    padding-right: 20px;
    font-size: 5em;
  }

  /** MEDIA */
  @media (min-width: 768px) {
    &__h1 {
      width: 768px;
      padding-top: 100px;
      padding-bottom: 100px;
      margin: 0 auto;
      text-align: center;
    }
    &__text_1, &__text_2, &__text_3 {
      display: block;
      padding-right: 0;
    }
    &__text_1 {
      float: left;
      margin-bottom: 20px;
      color: #000;
      font-size: 11.5em;
      font-weight: 100;
      line-height: .8em;
    }
    &__text_2 {
      float: left;
      margin-bottom: 10px;
      color: #999;
      font-size: 7em;
      font-weight: 700;
      line-height: .85em;
      margin-bottom: 10px;
    }
    &__text_3 {
      float: left;
      margin-bottom: 20px;
      color: #666;
      font-size: 2.5em;
      font-weight: 300;
      line-height: 1em;
    }
    &__text_4 {
      clear: both;
      display: inline-block;
      padding-top: 20px;
      margin-bottom: 0;
      border-top: 1px solid #ddd;
      color: #000;
      font-size: 1.46em;
      font-weight: 300;
      line-height: 1em;
      letter-spacing: 11px;
    }
  }
  @media (max-width: 767px) {
    display: none;
    &__h1 {
      padding-top: 50px; padding-bottom: 50px;
      text-align: left;
    }
    &__text_1, &__text_2, &__text_3 {
      display: inline-block;
      padding-right: 20px;
      font-size: 4.6em;
      line-height: .9em;
    }
    &__text_1 {
      font-weight: 700;
    }
    &__text_4 {
      display: inline-block;
      padding-top: 10px;
      margin-top: 10px;
      border-top: 1px solid #aaa;
      font-size: 1.4em;
      line-height: 1.3;
      font-weight: 300;
    }
  }
  @media (max-width: 575px) {
    &__text_1, &__text_2, &__text_3 {
      font-size: 3.5em;
    }
  }
}
</style>