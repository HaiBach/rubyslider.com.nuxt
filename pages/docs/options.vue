<template>
<section id="options" class="docs__section">
  <h1 class="docs__title">DANH SÁCH OPTIONS</h1>
  <p>Dưới đây là danh sách các options của RubySlider.</p>
  <div class="linespace-2"></div>

  <!-- TUY CHON CHUNG - begin -->
  <table class="docs__table">
    <caption><h3>General options</h3></caption>
    <thead>
      <tr>
        <th>Tên</th>
        <th>Giá trị mặc định</th>
        <th>Danh sách giá trị</th>
        <th>Mô tả</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="docs__table_name">fx</span></td>
        <td><code class="text-success">line</code></td>
        <td>
          <ul>
            <li><code>line</code></li>
            <li><code>rectMove</code>, <code>rectRun</code>, <code>rectSlice</code><br><code>rubyFade</code>, <code>rubyMove</code>, <code>rubyRun</code>, <code>rubySlice</code><br><code>randomMath</code></li>
            <li><code>cssOne</code></li>
            <li><code>coverflow3D</code></li>
          </ul>
        </td>
        <td>Thiết lập tên loại hiệu ứng cho RubySlider.<br>
          RubySlider có tổng cộng 4 loại hiệu ứng chính, đặc biệt hiệu ứng CSS có nhiều hiệu ứng nhỏ khác nhau, tạo ra hàng trăm hiệu ứng đẹp mắt và ấn tượng.</td>
      </tr>
      <tr>
        <td><span class="docs__table_name">cssOne</span></td>
        <td><code class="text-success">roDeal</code></td>
        <td>--</td>
        <td>Thiết lập tên hiệu ứng của loại hiệu ứng CssOne. Danh sách đầy đủ tên các hiệu ứng có thể xem ở trang này.</td>
      </tr>
      <tr>
        <td><span class="docs__table_name">cssTwoOut</span></td>
        <td><code class="text-success">slideShortDownOut</code></td>
        <td>--</td>
        <td>Setup name for Out effect of CSS Two effects</td>
      </tr>
      <tr>
        <td><span class="docs__table_name">cssTwoIn</span></td>
        <td><code class="text-success">pushSoftIn</code></td>
        <td>--</td>
        <td>Setup name for In effect of CSS Two effects</td>
      </tr>
      <tr>
        <td><span class="docs__table_name">cssFourPrevOut</span></td>
        <td><code class="text-success">roEdgeRightOut</code></td>
        <td>--</td>
        <td>Setup name for CSS Four effect when swap to previous slide out</td>
      </tr>
      <tr>
        <td><span class="docs__table_name">cssFourPrevIn</span></td>
        <td><code class="text-success">roEdgeLeftIn</code></td>
        <td>--</td>
        <td>Setup name for CSS Four effect when swap to previous slide in</td>
      </tr>
      <tr>
        <td><span class="docs__table_name">cssFourNextOut</span></td>
        <td><code class="text-success">roEdgeLeftOut</code></td>
        <td>--</td>
        <td>Setup name for CSS Four effect when swap to next slide out</td>
      </tr>
      <tr>
        <td><span class="docs__table_name">cssFourNextIn</span></td>
        <td><code class="text-success">roEdgeRightIn</code></td>
        <td>--</td>
        <td>Setup name for CSS Four effect when swap to next slide in</td>
      </tr>
      <tr>
        <td><span class="docs__table_name">fxEasing</span></td>
        <td><code class="text-success">easeOutCubic</code></td>
        <td>--</td>
        <td>Easing of main effect.</td>
      </tr>
      <tr>
        <td><span class="docs__table_name">cssEasing</span></td>
        <td><code class="text-success">null</code></td>
        <td>--</td>
        <td>Easing of effect in CSS One, Two, Four effects.</td>
      </tr>
      <tr>
        <td><span class="docs__table_name">speed</span></td>
        <td><code class="text-info">400</code></td>
        <td>--</td>
        <td>Duration of the effect. Unit millisecond.</td>
      </tr>
      <tr>
        <td><span class="docs__table_name">margin</span></td>
        <td><code class="text-info">30</code></td>
        <td>--</td>
        <td>Distance between slides. Unit is px and supports distances left and right. Example:
          <ul class="list disc condensed">
            <li>"margin": [10, 20] &rarr; 10px is left distance, 20px is right distance</li>
            <li>"margin": 30 &rarr; 30px is left and right distance</li>
          </ul>
        </td>
      </tr>
      <tr id="options-idBegin">
        <td><span class="docs__table_name">idBegin</span></td>
        <td><code class="bold">0</code></td>
        <td>--</td>
        <td>Set the slide will appear as rubytabs initialization, ID of slides started with 0. List of value option: <br>
          <ul class="list disc condensed">
            <li><span class="text-success">"begin"</span>: begin position, equivalent to idBegin = 0</li>

            <li><span class="text-success">"center"</span>: center position. If the total number of slides is an even number, then the position will be located near the left side. Example: Num of slide is 6, value of idBegin is 2</li>

            <li><span class="text-success">"centerRight"</span>: similar "center" value, but located near the right side. Example: Num of slide is 6, value of idBegin is 3</li>

            <li><span class="text-success">"end"</span>: end position</li>

            <li><span class="text-info">0 1 2 ...</span>: specific value of the ID slide</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><span class="docs__table_name">showBy</span></td>
        <td><code class="text-success">all</code></td>
        <td>--</td>
        <td>Set rubytabs initialized only on the specified device. List of value: "desktop", "mobile" and "all".</td>
      </tr>
      <tr>
        <td><span class="docs__table_name">showFrom</span></td>
        <td><span class="text-info">0</span></td>
        <td>--</td>
        <td>Set rubytabs will appear in range width of the site. Range-width have 2 values "min-width" and "max-width"(optional).</td>
      </tr>


      <!-- table row blank -->
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td><span class="docs__table_name">isAutoInit</span></td>
        <td><code class="text-error">true</code></td>
        <td>--</td>
        <td>Option exclusively for HTML5 data. RubyTabs is automatically initialized after markup have loaded.</td>
      </tr>
      <tr>
        <td><span class="docs__table_name">isSlideshow</span></td>
        <td><code class="text-error">false</code></td>
        <td>--</td>
        <td>Turn on/off slideshow.</td>
      </tr>
      <tr>
        <td><span class="docs__table_name">isNav</span></td>
        <td><code class="text-error">false</code></td>
        <td>--</td>
        <td>Turn on/off navigation tabs.</td>
      </tr>
      <tr>
        <td><span class="docs__table_name">isPag</span></td>
        <td><code class="text-error">true</code></td>
        <td>--</td>
        <td>Turn on/off pagination(tablist) tabs.</td>
      </tr>
      <tr>
        <td><span class="docs__table_name">isSwipe</span></td>
        <td><code class="text-error">true</code></td>
        <td>--</td>
        <td>Turn on/off swipe gestures on rubytabs.</td>
      </tr>
      <tr>
        <td><span class="docs__table_name">isKeyboard</span></td>
        <td><code class="text-error">false</code></td>
        <td>--</td>
        <td>Turn on/off keyboard navigation, left/right arrow on keyboard to go prev/next slide.</td>
      </tr>
      <tr>
        <td><span class="docs__table_name">isDeeplinking</span></td>
        <td><code class="text-error">false</code></td>
        <td>--</td>
        <td>Turn on/off <a class="btn-goto" href="#deeplinking">deep-linkinging</a> features.</td>
      </tr>
      <tr>
        <td><span class="docs__table_name">isCookie</span></td>
        <td><code class="text-error">false</code></td>
        <td>--</td>
        <td>Turn on/off <a class="btn-goto" href="#cookie">cookie</a> features.</td>
      </tr>
      <tr>
        <td><span class="docs__table_name">name</span></td>
        <td><code>null</code></td>
        <td>--</td>
        <td>The proper name for each rubytabs in the site. Used to link components markup outside with main markup of rubytabs.</td>
      </tr>
      <tr>
        <td><span class="docs__table_name">nameViewport</span></td>
        <td><code class="text-success">viewport</code></td>
        <td>--</td>
        <td>Set the name-class of the component "viewport".</td>
      </tr>
      <tr>
        <td><span class="docs__table_name">nameCanvas</span></td>
        <td><code class="text-success">canvas</code></td>
        <td>--</td>
        <td>Set the name-class of the component "canvas".</td>
      </tr>
      <tr>
        <td><span class="docs__table_name">nameSlide</span></td>
        <td><code class="text-success">slide</code></td>
        <td>--</td>
        <td>Set the name-class of the components "slides".</td>
      </tr>
      <tr>
        <td><span class="docs__table_name">nameDataLazy</span></td>
        <td><code class="text-success">src</code></td>
        <td>--</td>
        <td>Name to be replaced in "data-src" on &lt;img&gt; tag using image lazyload function.</td>
      </tr>
    </tbody>
  </table>
  <!-- TUY CHON CHUNG - end -->

  <!-- TUY CHON TRONG 'LOAD' OBJECT - begin -->
  <table class="docs__table none">
    <caption><h3>Options in <span class="text-success">load</span> object</h3></caption>

    <thead>
      <tr>
        <th>Variable</th>
        <th>Default value</th>
        <th>Description</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>preload</td>
        <td><span class="text-info">1</span></td>
        <td>The number of slides(tabs) preloaded before the rubytabs appears.</td>
      </tr>

      <tr>
        <td>amountEachLoad</td>
        <td><span class="text-info">2</span></td>
        <td>The number next slides will load after rubytabs appears, the slides will load in parallel.</td>
      </tr>

      <tr>
        <td>isLazy</td>
        <td><span class="text-error">true</span></td>
        <td>Turn on/off only download the ImageLazy of selected slide.</td>
      </tr>
    </tbody>
  </table>
  <!-- TUY CHON TRONG 'LOAD' OBJECT - end -->

  <!-- TUY CHON TRONG 'PAG' OBJECT - begin -->
  <table class="docs__table none">
    <caption><h3>Options in <span class="text-success">pag</span> object</h3></caption>

    <thead>
      <tr>
        <th>Variable</th>
        <th>Default value</th>
        <th>Description</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>type</td>
        <td><span class="text-success">"tabs"</span></td>
        <td>Type of pagination(tablist). List of value : <span class="text-success">"thumbnail"</span>, <span class="text-success">"tabs"</span>, <span class="text-success">"bullet"</span>, <span class="text-success">"list"</span>.</td>
      </tr>

      <tr>
        <td>width</td>
        <td><span class="text-info">null</span></td>
        <td>Setup fixed width for pagItem. By default, the pagItem will get largest width in the pagItems.</td>
      </tr>

      <tr>
        <td>height</td>
        <td><span class="text-info">null</span></td>
        <td>Setup fixed height for pagItem. By default, the pagItem will get largest height in the pagItems.</td>
      </tr>

      <tr>
        <td>direction</td>
        <td><span class="text-success">"hor"</span></td>
        <td>Setup the direction of pagination. List of value: <span class="text-success">"hor"</span>, <span class="text-success">"ver"</span>.</td>
      </tr>

      <tr>
        <td>position</td>
        <td><span class="text-success">"begin"</span></td>
        <td>Setup the position of pagination compared to the content tabs. List of value: <span class="text-success">"begin"</span>, <span class="text-success">"end"</span>.</td>
      </tr>

      <tr>
        <td>align</td>
        <td><span class="text-success">"begin"</span></td>
        <td>Align of pagItems compared to pagination. List of value: <span class="text-success">"begin"</span>, <span class="text-success">"center"</span>, <span class="text-success">"end"</span>, <span class="text-success">"justify"</span>.</td>
      </tr>

      <tr>
        <td>speed</td>
        <td><span class="text-info">300</span></td>
        <td>Time to transition of pagItem current automatically move to the center position.</td>
      </tr>

      <tr>
        <td>ease</td>
        <td><span class="text-success">"easeOutCubic"</span></td>
        <td>Easing transition of pagItem current automatically move to the center position.</td>
      </tr>

      <tr>
        <td>sizeAuto</td>
        <td><span class="text-success">"full"</span></td>
        <td>Setup width(horizontal direction) / height(vertical direction) of pagination compared to width/height of rubytabs.

          <ul class="list disc condensed">
            <li><span class="text-success">"null"</span>: size of pagination depends on css.</li>

            <li><span class="text-success">"self"</span>: size pagination is equal to size all pagItems combined.</li>

            <li><span class="text-success">"full"</span>: size pagination is equal to size content of rubytabs.</li>
          </ul>
        </td>
      </tr>

      <tr>
        <td>typeSizeItem</td>
        <td><span class="text-success">"self"</span></td>
        <td>Get the size of each pagItem compared to the size of other pagItems. List of value: <span class="text-success">"self"</span>, <span class="text-success">"min"</span>, <span class="text-success">"max"</span>.</td>
      </tr>

      <tr>
        <td>moreClass</td>
        <td><span class="text-success">null</span></td>
        <td>Adding classes to the pagination markup.</td>
      </tr>

      <tr>
        <td>widthMinToHor</td>
        <td><span class="text-info">0</span></td>
        <td>Minimum width of RubyTabs to switch to horizontal direction.</td>
      </tr>

      <tr>
        <td>rangeMinToHor</td>
        <td><span class="text-info">0</span></td>
        <td>Minimum width of browser-document to switch to horizontal direction.</td>
      </tr>

      <tr>
        <td>isItemCurCenterWhenTap</td>
        <td><span class="text-error">true</span></td>
        <td>Turn on/off the current pagItem automatically moves into the center position of pagination.</td>
      </tr>

      <tr>
        <td>isArrow</td>
        <td><span class="text-error">true</span></td>
        <td>Turn on/off navigation next/previous of pagItem.</td>
      </tr>

      <tr>
        <td>isTapOnArrow</td>
        <td><span class="text-error">true</span></td>
        <td>Add tap event on navigation next/previous</td>
      </tr>

      <tr>
        <td>isMark</td>
        <td><span class="text-error">false</span></td>
        <td>Turn on/off mark of pagItem current. Supported animation.</td>
      </tr>

      <tr>
        <td>sizeMarkTo</td>
        <td><span class="text-success">"border"</span></td>
        <td>The size of mark depends on the size (can include "padding", "margin"..) pagItem current. List of value: <span class="text-success">"self"</span>, <span class="text-success">"padding"</span>, <span class="text-success">"border"</span>, <span class="text-success">"margin"</span>.</td>
      </tr>

    </tbody>
  </table>
  <!-- TUY CHON TRONG 'PAG' OBJECT - end -->

  <!-- TUY CHON TRONG 'SWIPE' OBJECT - begin -->
  <table class="docs__table none">
    <caption><h3>Options in <span class="text-success">swipe</span> object</h3></caption>

    <thead>
      <tr>
        <th>Variable</th>
        <th>Default value</th>
        <th>Description</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>isBody</td>
        <td><span class="text-error">false</span></td>
        <td>Turn on/off swipe gestures in body content of tabs.</td>
      </tr>

      <tr>
        <td>isAutoOnPag</td>
        <td><span class="text-error">true</span></td>
        <td>Turn on/off auto swipe gestures on pagination when the total size of pagItems larger size pagination.</td>
      </tr>
    </tbody>
  </table>
  <!-- TUY CHON TRONG 'SWIPE' OBJECT - end -->

  <!-- DESCRIPTION - begin -->
  <p class="ma-b-10"><span class="subtitle">Notes</span></p>
  <ul class="list expanded">
    <li>Distinguish value-type by color :
      <br><span class="text-info"><b>number</b></span> - <span class="text-success"><b>string</b></span> - <span class="text-error"><b>boolean</b></span> - <b>mixed value</b>
    </li>

    <li>
      Options have <span class="label code">is</span> prefix &rarr; <b>boolean</b> value.
    </li>

    <li>
      <p>HTML5 data - Easy setup options by Javascript Object Literal Notation as other plugins jQuery, same time support setup options by HTML5 data attributes.</p>
      <p>The structure options in HTML5 data similar as Javascript.</p>

      <!-- Code sample -->
      <div class="rt01 rt01round rt01size-s" data-tabs='{ "fx": "line", "speed": 200, "isSwipe": false }'>
        <div>
          <span class="rt01pagitem text-mini">HTML5 DATA</span>
          <pre>&lt;div class="rt01" data-tabs='{
"fx"    : "line",
"speed"   : 400,
"slideshow" : {
"delay" : 5000,
"timer" : "line"
}
}'&gt; ... &lt;/div&gt;</pre>
        </div>

        <div>
          <span class="rt01pagitem text-mini">JAVASCRIPT</span>
          <pre>// Setup options in javascript
$(".rt01").rubytabs({
"fx"    : "line",
"speed"   : 400,
"slideshow" : {
"delay" : 5000,
"timer" : "line"
}
});</pre>
        </div>
      </div>
    </li>

    <li>
      <p>Options on each slide - is setup directly on each slide by <i class="text-success">"data-slide"</i> (HTML5 data attributes)</p>

      <p class="ma-b-10">RubyTabs will priority get the option on each slide compared with same name the general options.</p>

      <pre class="codeprint"><code>&lt;div class="rs01" data-slider='{
    "speed": 400,
    "slideshow": {
      "delay": 5000
    }
  }'&gt;

&lt;!-- Slide custom setup --&gt;
&lt;div data-slide='{ "speed": 600, "slideshow": { "delay": 8000 } }'&gt; ... &lt;/div&gt;
...
&lt;/div&gt;</code></pre>
    </li>
  </ul>
  <!-- DESCRIPTION - end -->

</section>
</template>
