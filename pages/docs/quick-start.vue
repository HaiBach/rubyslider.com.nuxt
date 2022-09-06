<template>
<section id="quick-start" class="docs__section">
  <h1 class="title ma-b-50">CÀI ĐẶT NHANH</h1>

  <p>Trang này cung cấp cài đặt nhanh RubySlider.</p>
  <div class="linespace-2"></div>
  
  <p><b>1. Cài đặt CSS</b></p>
  <p>Plugin bao gồm 1 file css chính, hãy chèn nó vào thẻ <code>&lt;header&gt;</code></p>
  <pre class="codeprint"><code>&lt;!-- Main css of rubytabs, including styles, skins --&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;ruby/rubyslider.css&quot;&gt;</code></pre>
  <div class="linespace-2"></div>
  
  <p><b>2. Cài đặt JS</b></p>
  <p>Plugin bao gồm 1 file <code>rubyslider.js</code> chính và 1 file <code>rubyanimate.js</code> hỗ trợ hiệu ứng CSS. <br>
    Nếu không sử dụng hiệu ứng CSS thì không cần chèn file <code>rubyanimate.js</code> vào trang web.</p>
  
    <pre class="codeprint"><code>&lt;!-- jQuery 1.9+ required --&gt;
&lt;script src=&quot;//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js&quot;&gt;&lt;/script&gt;

&lt;!-- File JS chính của RubySlider --&gt;
&lt;script src=&quot;ruby/rubyslider.js&quot;&gt;&lt;/script&gt;

&lt;!-- File JS chứa hiệu ứng CSS trong RubySlider --&gt;
&lt;script src=&quot;ruby/rubyanimate.js&quot;&gt;&lt;/script&gt;</code></pre>
  <div class="linespace-2"></div>
    
  <p><b>3. Thiết lập HTML</b></p>
  <p>Mặc định RubySlider sử dụng thẻ <code>&lt;a&gt;</code> để lazyload hình ảnh.<br>
  Chỉ cần thiết lập cấu trúc HTML đơn giản ở bên dưới.</p>

  <pre class="codeprint"><code>&lt;div class=&quot;rs01&quot;&gt;
  &lt;!-- Mỗi slide là mỗi thẻ &lt;a&gt; - sử dụng chức năng lazyload --&gt;
  &lt;a class="rs01imgback" href="/imgs/image-1.jpg"&gt;Hình thứ 1&lt;/a&gt;
  &lt;a class="rs01imgback" href="/imgs/image-2.jpg"&gt;Hình thứ 2&lt;/a&gt;
  &lt;a class="rs01imgback" href="/imgs/image-3.jpg"&gt;Hình thứ 3&lt;/a&gt;
  &lt;a class="rs01imgback" href="/imgs/image-n.jpg"&gt;Hình thứ n&lt;/a&gt;
&lt;/div&gt;</code></pre>
  <div class="linespace-2"></div>

  <p><b>4. Khởi tạo RubySlider</b></p>
  <p>Bên dưới là đoạn mã khởi tạo RubySlider trong function với các tuỳ chọn đơn giản kèm theo.</p>

  <pre class="codeprint"><code>(function($) {
  $('.rs01').rubyslider({
    fx: 'cssOne',
    speed: 800,
  })
})(jQuery)</code></pre>
  <div class="linespace-2"></div>

  <p>※RubySlider của bạn đã sẵn sàng hoạt động.<br>
    Chúc các bạn thiết lập RubySlider thành công.🎉🎉🎉</p>
</section>
</template>
