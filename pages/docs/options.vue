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
        <td>fx</td>
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
        <td>cssOne</td>
        <td><code class="text-success">roDeal</code></td>
        <td>--</td>
        <td>Thiết lập tên hiệu ứng của loại hiệu ứng CssOne. Danh sách đầy đủ tên các hiệu ứng có thể xem ở trang này.</td>
      </tr>
      <tr>
        <td>cssTwoOut</td>
        <td><span class="text-success">"slideShortDownOut"</span></td>
        <td>--</td>
        <td>Setup name for Out effect of CSS Two effects</td>
      </tr>
      <tr>
        <td>cssTwoIn</td>
        <td><span class="text-success">"pushSoftIn"</span></td>
        <td>--</td>
        <td>Setup name for In effect of CSS Two effects</td>
      </tr>
      <tr>
        <td>cssFourPrevOut</td>
        <td><span class="text-success">"roEdgeRightOut"</span></td>
        <td>--</td>
        <td>Setup name for CSS Four effect when swap to previous slide out</td>
      </tr>
      <tr>
        <td>cssFourPrevIn</td>
        <td><span class="text-success">"roEdgeLeftIn"</span></td>
        <td>--</td>
        <td>Setup name for CSS Four effect when swap to previous slide in</td>
      </tr>
      <tr>
        <td>cssFourNextOut</td>
        <td><span class="text-success">"roEdgeLeftOut"</span></td>
        <td>--</td>
        <td>Setup name for CSS Four effect when swap to next slide out</td>
      </tr>
      <tr>
        <td>cssFourNextIn</td>
        <td><span class="text-success">"roEdgeRightIn"</span></td>
        <td>--</td>
        <td>Setup name for CSS Four effect when swap to next slide in</td>
      </tr>
      <tr>
        <td>fxEasing</td>
        <td><span class="text-success">"easeOutCubic"</span></td>
        <td>--</td>
        <td>Easing of main effect.</td>
      </tr>
      <tr>
        <td>cssEasing</td>
        <td><span class="text-success">null</span></td>
        <td>--</td>
        <td>Easing of effect in CSS One, Two, Four effects.</td>
      </tr>
      <tr>
        <td>speed</td>
        <td><span class="text-info">400</span></td>
        <td>--</td>
        <td>Duration of the effect. Unit millisecond.</td>
      </tr>
      <tr>
        <td>margin</td>
        <td><span class="text-info">30</span></td>
        <td>--</td>
        <td>Distance between slides. Unit is px and supports distances left and right. Example:
          <ul class="list disc condensed">
            <li>"margin": [10, 20] &rarr; 10px is left distance, 20px is right distance</li>
            <li>"margin": 30 &rarr; 30px is left and right distance</li>
          </ul>
        </td>
      </tr>
      <tr id="options-idBegin">
        <td>idBegin</td>
        <td><span class="bold">0</span></td>
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
        <td>showBy</td>
        <td><span class="text-success">"all"</span></td>
        <td>--</td>
        <td>Set rubytabs initialized only on the specified device. List of value: "desktop", "mobile" and "all".</td>
      </tr>
      <tr>
        <td>showFrom</td>
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
        <td>isAutoInit</td>
        <td><span class="text-error">true</span></td>
        <td>--</td>
        <td>Option exclusively for HTML5 data. RubyTabs is automatically initialized after markup have loaded.</td>
      </tr>
      <tr>
        <td>isSlideshow</td>
        <td><span class="text-error">false</span></td>
        <td>--</td>
        <td>Turn on/off slideshow.</td>
      </tr>
      <tr>
        <td>isNav</td>
        <td><span class="text-error">false</span></td>
        <td>--</td>
        <td>Turn on/off navigation tabs.</td>
      </tr>
      <tr>
        <td>isPag</td>
        <td><span class="text-error">true</span></td>
        <td>--</td>
        <td>Turn on/off pagination(tablist) tabs.</td>
      </tr>
      <tr>
        <td>isSwipe</td>
        <td><span class="text-error">true</span></td>
        <td>--</td>
        <td>Turn on/off swipe gestures on rubytabs.</td>
      </tr>
      <tr>
        <td>isKeyboard</td>
        <td><span class="text-error">false</span></td>
        <td>--</td>
        <td>Turn on/off keyboard navigation, left/right arrow on keyboard to go prev/next slide.</td>
      </tr>
      <tr>
        <td>isDeeplinking</td>
        <td><span class="text-error">false</span></td>
        <td>--</td>
        <td>Turn on/off <a class="btn-goto" href="#deeplinking">deep-linkinging</a> features.</td>
      </tr>
      <tr>
        <td>isCookie</td>
        <td><span class="text-error">false</span></td>
        <td>--</td>
        <td>Turn on/off <a class="btn-goto" href="#cookie">cookie</a> features.</td>
      </tr>
      <tr>
        <td>name</td>
        <td><span>null</span></td>
        <td>--</td>
        <td>The proper name for each rubytabs in the site. Used to link components markup outside with main markup of rubytabs.</td>
      </tr>
      <tr>
        <td>nameViewport</td>
        <td><span class="text-success">"viewport"</span></td>
        <td>--</td>
        <td>Set the name-class of the component "viewport".</td>
      </tr>
      <tr>
        <td>nameCanvas</td>
        <td><span class="text-success">"canvas"</span></td>
        <td>--</td>
        <td>Set the name-class of the component "canvas".</td>
      </tr>
      <tr>
        <td>nameSlide</td>
        <td><span class="text-success">"slide"</span></td>
        <td>--</td>
        <td>Set the name-class of the components "slides".</td>
      </tr>
      <tr>
        <td>nameDataLazy</td>
        <td><span class="text-success">"src"</span></td>
        <td>--</td>
        <td>Name to be replaced in "data-src" on &lt;img&gt; tag using image lazyload function.</td>
      </tr>
    </tbody>
  </table>
  <!-- TUY CHON CHUNG - end -->

  <!-- TUY CHON TRONG 'LOAD' OBJECT - begin -->
  <table class="table hover condensed tb-options ma-b-100">
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
  <table class="table hover condensed tb-options ma-b-100">
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
  <table class="table hover condensed tb-options ma-b-100">
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
          <pre class="prettyprint">&lt;div class=&quot;rt01&quot; data-tabs='{
&quot;fx&quot;    : &quot;line&quot;,
&quot;speed&quot;   : 400,
&quot;slideshow&quot; : {
&quot;delay&quot; : 5000,
&quot;timer&quot; : &quot;line&quot;
}
}'&gt; ... &lt;/div&gt;</pre>
        </div>

        <div>
          <span class="rt01pagitem text-mini">JAVASCRIPT</span>
          <pre class="prettyprint">// Setup options in javascript
$(&quot;.rt01&quot;).rubytabs({
&quot;fx&quot;    : &quot;line&quot;,
&quot;speed&quot;   : 400,
&quot;slideshow&quot; : {
&quot;delay&quot; : 5000,
&quot;timer&quot; : &quot;line&quot;
}
});</pre>
        </div>
      </div>
    </li>

    <li>
      <p>Options on each slide - is setup directly on each slide by <i class="text-success">"data-slide"</i> (HTML5 data attributes)</p>

      <p class="ma-b-10">RubyTabs will priority get the option on each slide compared with same name the general options.</p>

      <pre class="prettyprint">&lt;div class=&quot;rt01&quot; data-tabs='{ &quot;speed&quot;: 400, &quot;slideshow&quot;: { &quot;delay&quot;: 5000 } }'&gt;

&lt;!-- Slide custom setup --&gt;
&lt;div data-slide='{ &quot;speed&quot;: 600, &quot;slideshow&quot;: { &quot;delay&quot;: 8000 } }'&gt; ... &lt;/div&gt;
...
&lt;/div&gt;</pre>
    </li>
  </ul>
  <!-- DESCRIPTION - end -->

</section>
</template>
