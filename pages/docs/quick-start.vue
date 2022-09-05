<template>
<section id="quick-start" class="docs__section">
  <h1 class="title ma-b-50">CÀI ĐẶT NHANH</h1>

  <p>Trang này cung cấp cài đặt nhanh RubySlider.</p>
  
  <p><b>Cài đặt CSS</b></p>
  <p>Plugin bao gồm 1 file css chính, hãy chèn nó vào thẻ <code>&lt;header&gt;</code></p>
  <pre><code>&lt;!-- Main css of rubytabs, including styles, skins --&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;ruby/rubyslider.css&quot;&gt;</code></pre>



  <p><span class="text-success">Quick guide</span> to set up most basic for active rubytabs. The other section will provide detailed options.</p>

  <p class="ma-b-10"><b>1. HOSTING : </b> upload <span class="label code">ruby</span> folder to your hosting, this folder includes main script, css and other parts of rubytabs.</p>
  <ul class="list text-code ma-l-20">
      <li>ruby</li>
  </ul>

  <p class="ma-b-10">Other folders included : </p>
  <ul class="list text-code condensed ma-l-20">
      <li>documentation <span class="muted">| documentation used in rubytabs</span></li>
      <li>templates <span class="muted">| including the entire pure HTML templates</span></li>
      <li>libs <span class="muted">| including components used in theme</span></li>
  </ul>
  <br><br>




        <p><b>2. RUBYTABS FILES : </b> insert main script, css of rubytabs on site :</p>

        <pre class="prettyprint">&lt;!-- Main css of rubytabs, including styles, skins --&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;ruby/rubytabs.css&quot;&gt;

&lt;!-- jQuery 1.9+ required --&gt;
&lt;script src=&quot;//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js&quot;&gt;&lt;/script&gt;

&lt;!-- Main script of rubytabs --&gt;
&lt;script src=&quot;ruby/rubytabs.js&quot;&gt;&lt;/script&gt;

&lt;!-- CSS effects (CSS One - Two - Four effects) in rubytabs --&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;ruby/rubyanimate.js&quot;&gt;</pre>
        <br><br>




        <p class="ma-b-10"><b>3. MARKUP HTML : </b> insert rubytabs html on site :</p>
        <ul class="list disc condensed">
            <li>Namespace of RubyTabs used to distinguish with other plugins, no change. <span class="label error text-code">rt01</span></li>
            <li>Class <span class="label success text-code">.rt01</span> &rarr; core css of rubytabs.</li>
        </ul>

        <pre class="prettyprint">&lt;div class=&quot;rt01&quot;&gt;
&lt;!-- Slide 1 --&gt;
&lt;div&gt;
&lt;!-- Slide title --&gt;
&lt;div class=&quot;rt01pagitem&quot;&gt;Slide title&lt;/div&gt;

&lt;!-- Slide content --&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit...&lt;/p&gt;
&lt;/div&gt;

&lt;!-- Slide others same Slide 1 --&gt;
&lt;div&gt;...&lt;/div&gt;
&lt;/div&gt;</pre>
        <br><br>





        <p><b>4. SETTING OPTIONS : </b> initialize the rubytabs</p>

        <div class="rt01 rt01round rt01size-s" data-tabs='{ "fx": "line", "speed": 200, "isSwipe": false }'>


            <!-- TAB HTML data - begin
            .......................................................... -->
            <div>
                <div class="rt01pagitem text-mini">HTML5 DATA</div>
                <div>
                    <ul class="list disc condensed">
                        <li>Setting options directly on the markup by HTML5 data</li>
                    </ul>

                    <pre class="prettyprint">&lt;div class=&quot;rt01&quot;
data-tabs='{
&quot;fx&quot;    : &quot;cssOne&quot;,
&quot;speed&quot; : 800,
&quot;pag&quot;   : { &quot;align&quot; : &quot;center&quot; }
}'&gt;
...
&lt;/div&gt;</pre>
                </div>
            </div>
            <!-- TAB HTML data - end
            .......................................................... -->



            <!-- TAB JAVASCRIPT - begin
            .......................................................... -->
            <div>
                <div class="rt01pagitem text-mini">JAVASCRIPT</div>
                <div>
                    <p>Setting options by javascript like other jQuery plugins</p>
                    <pre class="prettyprint">&lt;script&gt;
jQuery(document).ready(function($) {
$(".rt01").rubytabs({
    "fx"     : "cssOne",
    "speed"  : 800,
    "pag"    : { "align" : "center" }
});
});
&lt;/script&gt;</pre>
                </div>
            </div>
            <!-- TAB JAVASCRIPT - end
            .......................................................... -->

        </div>

        <div class="alert success text-center no-icon">
            <h5>With a few simple steps, rubytabs ready to work!</h5>
            <a class="success" href="../templates/tabs-layout-simplest.html" style="text-decoration: underline"><h3>View example</h3></a>
        </div>
</section>
</template>
