 /**
   * RUBY TOGGLE JQUERY PLUGIN
   * @package         RubyToggle
   * @author          HaiBach
   * @version         1.x
   * @lastUpdate      07-11-2016
   */
  
  
(function($) {
'use strict';


/**
 * INITIALIZE GLOBAL VARIABLES IN JAVASCRIPT
 */
if( !window.rubytoggleVA ) {

    window.rubytoggleVA = {
        "rubyName"  : "rubytoggle",
        "rubyData"  : "toggle",
        "namespace" : "rubytoggle",
        "$content"  : $()
    };

    /**
     * OPTIONS DEFAULTS
     *  + Upto 300 options
     */
    rubytoggleVA.optsDefault = {

        // Selector of button-toggle content
        "buttonToggle"  : null,

        // Status open - close content at first. The value included: "auto", "open", "close"
        "statusAtFirst" : "auto",

        // Speed of the animate height content
        "speed"         : 400,

        // Class control
        "classNone"    : "{ns}-none",
        "classActived" : "{ns}-actived",
        "classPreActived" : "{ns}-preactived"
    };
}










/**
 * MAIN RUBYTOGGLE PLUGIN
 */
$[rubytoggleVA.rubyName] = function($content, OptsJS) {

    /**
     * GLOBAL VARIABLES IN THE PLUGIN
     */
    var va = {
            rubykey : Math.ceil( Math.random()*1e9 ),       // Rubykey : prevent conflicts when initialize multiple rubytoggle
            ns      : rubytoggleVA.namespace,               // Namespace of the plugin
            data    : {}                                    // Stored all properties of the items
        },
        o   = {},
        cs  = {
            '$content' : $content
        },
        actived = va.ns + '-actived';




    /**
     * METHODS M
     */
    var M = {

        // Convert 'string' to 'json'
        StringToJson : function(str, messageError) {
            if( typeof str == 'string' ) {

                // Replace quotes to single quotes
                str = str.replace(/\u0027/g, '\u0022');


                /**
                 * PARSE 'STRING' TO 'JSON'
                 */
                try      { str = $.parseJSON(str) }
                catch(e) { !!console && console.warn(messageError) }
            }

            // Return value depending on each case
            return $.isPlainObject(str) ? $.extend(true, {}, str)
                                        : $.isArray(str) ? $.extend(true, [], str)
                                                            : {};
        },

        // Convert '{ns}' to namespace
        NS : function(str) {
            return (typeof str == 'string') ?  str.replace(/\{ns\}/g, va.ns)
                                            : '';
        }
    },










    /**
     * PROPERTIES
     */
    PROP = {

        /**
         * SETUP PROPERTIES & VARIABLES AT FIRST
         */
        FirstSetup : function() {

            /**
             * MERGE THE FUNCTION INTO GLOBAL VARIABLE
             *  + Combine api-base & api into 'cs'
             *  + Store 'cs' variable into ruby
             */
            cs = $.extend(true, cs, API);
            $.data($content[0], rubytoggleVA.rubyName, cs);


            // Suffix
            va.suffix = va.ns + va.rubykey;

            // Replace namespace for class controll
            va.classNone = M.NS(o.classNone);
            va.classActived = M.NS(o.classActived);
            va.classPreActived = M.NS(o.classPreActived);

            // Find Button-toggle
            va.$btnToggle = $(o.buttonToggle);
            if( va.$btnToggle.length ) va.isBtnToggle = true;

            // Check display content at first
            va.isDisplay = $content.css('display') !== 'none';
            if( !va.isDisplay ) $content.addClass(va.classNone).css('display', '');
        },

        /**
         * MERGE ALL OPTIONS TOGETHER
         */
        MergeAllOpts : function() {
            var optsDefault = rubytoggleVA.optsDefault;


            /**
             * GET DATA ON HTML5
             *  + Check option of 'data' is json
             *  + Make sure convert to json if it's object
             */
            var optsData = $content.data(rubytoggleVA.rubyData);
            optsData = M.StringToJson(optsData);


            /**
             * MERGE OPTIONS :
             *  + Merge all options on data html5 + data js into default options of ruby
             *  + Priority order: [optsData] > [OptsJS] > [default options]
             */
            o = $.extend(true, o, optsDefault, OptsJS, optsData);
        }
    },










    /**
     * RENDER
     */
    RENDER = {

        // Wrapper content to get height of content
        Wrapper : function() {
            var classWrap = va.ns + '-wrap';

            // Wrapper content
            $content.wrap( $('<div/>', { 'class': classWrap }) );

            // Store wrapper into global variable
            va.$wrap = $content.closest('.' + classWrap);
        }
    },










    /**
     * ANIMATE
     */
    ANIMATE = {

        // Animate height open for content
        HeightOpen : function() {

            $content
                // Height for content at first
                .stop(true).css('height', 0)

                // Remove class to display content
                .removeClass(va.ns + '-preactived')

                // Animate jQuery
                .animate({ 'height': va.height }, {
                    duration : o.speed,
                    complete : function() {

                        // Remove 'height' css-inline when complete
                        $content.css({ 'height': '', 'overflow': '' });
                    }
                });
        },

        // Animate height close for content
        HeightClose : function() {

            $content
                // Height for content at first
                .stop(true).css('height', va.height)

                // Animate jQuery
                .animate({ 'height': 0 }, {
                    duration : o.speed,
                    complete : function() {

                        // Add class to hidden content
                        $content
                            .addClass(va.ns + '-none')
                            .css({ 'height': '', 'overflow': '' })
                    }
                });
        }
    },










    /**
     * EVENTS
     */
    EVENTS = {

        ButtonToggle : function() {

            // Conditional execution
            if( !va.isBtnToggle ) return;

            // Check tagname of Button-toggle
            var tagName = va.$btnToggle[0].tagName.toLowerCase();
            if( tagName === 'input' ) {

                /**
                 * REGISTER EVENT 'CHANGE' FOR INPUT
                 */
                va.$btnToggle.on('rubychange.' + va.suffix, function() {
                    API.toggle();
                });
            }

            else {

                /**
                 * REGISTER EVENT 'CLICK' FOR BUTTON-TOGGLE
                 */
                va.$btnToggle.on('click.' + va.suffix, function() {
                    API.toggle();
                });
            }
        }
    },










    /**
     * API
     */
    API = {

        // Open content
        open : function() {

            // Update variables
            va.isDisplay = true;

            // Add class 'pre-actived' to get height of Content
            $content
                .addClass(va.classPreActived)
                .removeClass(va.classNone);

            // Class 'actived' for Button-toggle
            va.$btnToggle.addClass(va.classActived);

            // Get height of content
            va.height = $content.height();

            // Animate height open for content
            ANIMATE.HeightOpen();
        },

        // Close content
        close : function() {

            // Update variables
            va.isDisplay = false;

            // Remove class 'actived' for Button-toggle
            va.$btnToggle.removeClass(va.classActived);

            // Get height of content
            va.height = $content.height();

            // Animate height close for content
            ANIMATE.HeightClose();
        },

        // Toggle open or close content
        toggle : function() {
            // Toggle display content
            va.isDisplay ? API.close() : API.open();
        }
    };










    /**
     * BEGIN INITIALIZE RUBY
     */
    var INIT = function() {

        // Merge all options
        PROP.MergeAllOpts();

        // Properties & variable at first
        PROP.FirstSetup();

        // Check to execute continue
        if( !va.isBtnToggle ) return;

        // Register event 'click' for Button-toggle
        EVENTS.ButtonToggle();
    }();
}









/**
 * CREATE NEW RUBY BY JQUERY
 *  + Method: var ruby = $('...').rubytoggle();
 */
$.fn[rubytoggleVA.rubyName] = function() {

    var args     = arguments,               // args[0] : options, args[1]: value
        rubyName = rubytoggleVA.rubyName,
        rubyData = null;


    /**
     * SETUP EACH OBJECT
     */
    $(this).each(function() {
        var $ruby = $(this),
            ruby  = $ruby.data(rubyName);

        // Parameter 1 is allways object -> to easy check
        if( args[0] === undefined ) args[0] = {};


        /**
         * CASE: INITIALIZE OBJECT + UPDATE PROPERTIES
         */
        if( $.isPlainObject(args[0]) ) {

            // CREATE NEW RUBY
            if( !ruby ) new $[rubyName]($ruby, args[0]);

            // Store data of ruby
            rubyData = $ruby.data(rubyName);
        }
    });

    // Return data ruby
    return rubyData;
}

})(jQuery);