<template>
<div style="margin-bottom: 100px;">

  <!-- Heading -->
  <div class="container">
  <div class="title-big-wrap">
      <h1 class="">Manual <span class="checkbox-wrap"><a class="manual-toggle rf01checkbox" data-value-last="1"></a></span></h1>
  </div>
  </div>


  <!-- MANUAL CONTENT - begin -->
  <div class="manual-wrap rubytoggle" data-toggle='{ "buttonToggle": ".manual-toggle" }'>

      <!-- Manual tabs -->
      <div id="manual" class="manual rs01 rs01round">

          <!-- CSS PROPERTIES -->
          <div id="manual-properties">
              <div class="rs01pagitem">CSS properties</div>

              <div class="container">
                  <h3>List properties of transform supported in each keyframe :</h3>
                  <ul class="list round expanded text-code">
                      <li><span class="error">"pos"</span>
                          <br>Determine the time to change the set of CSS styles. Unit is percent (%), type value is number.
                          <br>The "pos" property supported multiple value, it mean in many different times set of same CSS styles. Then type value is array[].
                          <br>
                          <br><span class="text-underline">Example:</span>
                          <br>Single value: "pos" : 30
                          <br>Multiple value: "pos" : [0, 10, 50]
                          <br>
                      </li>
                      <li><span id="perspectiveDirect" class="error">"perspectiveDirect"</span>
                          <br>Defines directly a perspective view to the current element. Type value is number.
                          <br>If the element set 3D transformation, the element need to have the "perspectiveDirect" property.
                          <br><span class="text-underline">Example:</span> "perspectiveDirect" : 400
                      </li>
                      <li><span class="error">"originTF"</span>
                          <br>Change the position X, Y, Z axis of transformed element. Type value is string.
                          <br><span class="text-underline">Example:</span> "originTF" : "50% 100%"
                      </li>


                      <li><span class="info">"x", "y"</span>
                          <br>Corresponding to defines the 2D translation along the X, Y axis. Unit is pixel (px), type value is number.
                          <br><span class="text-underline">Example:</span> "x" : 200
                          <br>
                          <br>"x", "y" properties supported the percent unit, depending on width/height of the element.
                          <br><span class="text-underline">Example:</span> "x" : "100%" <span class="text-comment">// width of element 300px -> "x" : 300</span>
                          <br>
                          <br>"x", "y" properties supported calculate in string.
                          <br><span class="text-underline">Example:</span> "x" : "(100% - 50) * 2"
                      </li>
                      <li><span class="info">"z"</span>
                          <br>Defines a 3D translation along Z-axis. The element need to have "perspectiveDirect" property. Unit is pixel (px), type value is number, not support string value.
                          <br><span class="text-underline">Example:</span> "z" : -1000
                      </li>


                      <li><span class="info">"scale"</span>
                          <br>Defines a 2D scale transformation. Type value is number, it mean set same value for X-axis and Y-asix of scale property.
                          <br><span class="text-underline">Example:</span> "scale" : 2
                          <br>
                          <br>Set value for X-axis different Y-axis, type value is array[], first-value for X-axis, last-value for Y-asix.
                          <br><span class="text-underline">Example:</span> "scale" : [0.5, 2]  <span class="text-comment">// "0.5" for X-axis, "2" for Y-axis</span>
                      </li>
                      <li><span class="info">"scaleX", "scaleY"</span>
                          <br>Corresponding to defines the 2D scale transformation along the X, Y axis.
                      </li>
                      <li><span class="info">"scaleZ"</span>
                          <br>Defines a 3D scale transformation along Z-axis. The element need to have "perspectiveDirect" property.
                      </li>



                      <li><span class="info">"rotate"</span>
                          <br>Defines a 2D rotate transformation. Unit is degrees(deg), type value is nummber.
                          <br><span class="text-underline">Example:</span> "rotate" : 90
                      </li>
                      <li><span class="info">"rotateX", "rotateY", "rotateZ"</span>
                          <br>Corresponding to defines the 3D rotate transformation along the X, Y, Z axis. The element need to have "perspectiveDirect" property.
                      </li>


                      <li><span class="info">"skew"</span>
                          <br>Defines a 2D skew transformation, supported X-axis and Y-axis. Unit is degrees(deg).
                          <br>Set value only for X-axis, type value is number.
                          <br><span class="text-underline">Example:</span> "skew" : 45
                          <br>
                          <br>Set value for X-axis and Y-axis, type value is array[], first-value for X-axis, last-value for Y-axis.
                          <br><span class="text-underline">Example:</span> "skew" : [30, 15]
                      </li>
                      <li><span class="info">"skewX", "skewY"</span>
                          <br>Corresponding to defines the 2D skew transformation along the X, Y axis.
                      </li>


                      <li><span class="success">"opacity"</span>
                          <br>Set the opacity level for an element. Type value is number.
                          <br><span class="text-underline">Example:</span> "opacity" : 0.5
                      </li>
                  </ul>
              </div>

          </div>


          <!-- MANUAL EDITOR -->
          <div id="manual-editor">
              <div class="rs01pagitem">Editor</div>

              <div class="container">
                  <p>Create your own effect easier than ever. You just need basic knowledge off CSS and JSON syntax, even you don't need to know Javascript.
                      <br>CSS effect is an animation include one or many transitions. CSS effect in Ruby-Slider have JSON array syntax (view JSON syntax <a href="http://www.w3schools.com/js/js_json_intro.asp" target="_blank">at here</a>).
                  </p>

                  <div class="hr circle ma-50"></div>

                  <p class="text-index">1. Create</p>
                  <p>The new effect is created by the empty content editor :
                      <br><img src="/img/create-css-effect/create-new-from-blank.png" alt="Create new from blank" />
                      <br>Or import content from the built-in effects :
                      <br><span class="image-box">
                          <img class="" src="/img/create-css-effect/create-new-from-import.png" alt="Create new from import" />
                      </span>
                  </p>

                  <div class="hr circle ma-50"></div>

                  <p class="text-index">2. Update</p>
                  <p>To update and preview the new effect with the content of editor, press "Update &amp; Play" button.
                      <br><img src="/img/create-css-effect/button-update-play.png" alt="Button update - play" />
                      <br>To restore the content in the last update, press 'Reset' button
                      <br><img src="/img/create-css-effect/button-reset.png" alt="Button reset" />
                  </p>

                  <div class="hr circle ma-50"></div>

                  <p>The default keyframe with position 100 :
                      <br><span class="info text-code">{ "pos": 100, "x": 0, "y": 0, "z": 0, "scale": 0, "skew": 0, "rotate": 0, "rotateX": 0, "rotateY": 0, "rotateZ": 0, "opacity": 1 }</span>
                      <br>
                      <br>The Ruby Animation automatically insert the default keyframe-100 into the animation if without keyframe-100 in the animation, to save size of "rubyanimate.js" file.
                  </p>
              </div>
          </div>


          <!-- MANUAL CONTROL -->
          <div id="manual-controls">
              <div class="rs01pagitem">Controls</div>

              <div class="container">
                  <p><strong>Direct control on effect-demo :</strong></p>
                  <ul class="list round expanded">
                      <li>Click on effect-demo when pause to <span class="info">play</span> the effect.
                          <br>
                          <img class="gif-small" src="/img/create-css-effect/control-on-effect-demo-to-play.gif" alt="Play effect">
                      </li>

                      <li>Click on effect-demo when play to <span class="info">pause</span> the effect
                          <br>
                          <img class="gif-small" src="/img/create-css-effect/control-on-effect-demo-to-pause.gif" alt="Pause effect">
                      </li>

                      <li>Click on effect-demo when pause at position-end to <span class="info">restart</span> the effect
                          <br>
                          <img class="gif-small" src="/img/create-css-effect/control-on-effect-demo-to-restart.gif" alt="Restart effect">
                      </li>
                  </ul>

                  <div class="hr circle ma-50"></div>

                  <p><strong>Control on the duration-track :</strong></p>
                  <ul class="list round expanded">
                      <li>Click on the track to change transformation of the effect-demo at that position.
                          <br>
                          <img class="gif-small" src="/img/create-css-effect/control-click-on-duration-track.gif" alt="Click on track">
                      </li>

                      <li>Drag thumbnail on the track to change transformation of the effect-demo.
                          <br>
                          <img class="gif-small" src="/img/create-css-effect/control-drag-on-duration-track.gif" alt="Drag on track">
                      </li>
                  </ul>

                  <div class="hr circle ma-50"></div>

                  <p><strong>Buttons control the demo-effect :</strong></p>
                  <img class="" src="/img/create-css-effect/button-control.png" alt="Button controls">
              </div>
          </div>


          <!-- MANUAL EXPORT -->
          <div id="manual-export">
              <div class="rs01pagitem">Export</div>

              <div class="container">
                  <p><span class="text-index">1. </span>The customized effect is tested and run successfully, select and copy the contents of effect on the editor.
                      <br><img src="/img/create-css-effect/editor-select-and-copy.png" alt="Select and copy" />
                  </p>
                  <br>

                  <p><span class="text-index">2a. </span>Open your text editor (SublimeText, Atom,..), named for the new customized effect (ex: "newEffect"), and past the contents of customized effect in about 21 line-numbers.
                      <br><img src="/img/create-css-effect/editor-past-rubyanimate.png" alt="Past on rubyAnimate" />
                      <br>The RubySlider will have new effect with name "newEffect". All RubySlider can use that effect.
                  </p>
                  <br>

                  <p><span class="text-index">2b. </span>If you only want the current RubySlider use the customized effect, you insert the customized effect in <span class="text-info">"rubyAnimateKeyframes"</span> object-option when setup options :
                  </p>
                  <pre class="prettyprint">$('.rs01').rubyslider({
...
rubyAnimateKeyframes : {
  newEffect : [
      { 'pos': 100, 'opacity': 0 }
  ]
}
});</pre>
              </div>
          </div>

      </div>
  </div>
  <!-- MANUAL CONTENT - end -->
  
</div>
</template>
