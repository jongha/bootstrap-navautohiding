(function() {
  var $;

  $ = jQuery;

  $.navautohiding = function(options) {
    var log, navbar, padding_obj, scrollpos, setted, settings;
    settings = {
      selector: ".navbar",
      selector_padding: "body",
      hide_position: 50,
      show_position: 10,
      fast_duration: 100,
      slow_duration: 300,
      debug: false
    };
    settings = $.extend(settings, options);
    scrollpos = function() {
      var docheight, winheight, wintop;
      wintop = $(window).scrollTop();
      docheight = $(document).height();
      winheight = $(window).height();
      return wintop / (docheight - winheight) * 100;
    };
    log = function(msg) {
      if (settings.debug) {
        return typeof console !== "undefined" && console !== null ? console.log(msg) : void 0;
      }
    };
    padding_obj = $(settings.selector_padding);
    navbar = $(settings.selector);
    setted = false;
    $(window).scroll(function() {
      if (scrollpos() >= settings.hide_position && !!!setted) {
        navbar.animate({
          opacity: "toggle"
        }, {
          duration: settings.slow_duration
        });
        padding_obj.animate({
          "paddingTop": "0px"
        }, {
          duration: settings.fast_duration
        });
        return setted = true;
      } else if (scrollpos() < settings.show_position && setted) {
        navbar.animate({
          opacity: "toggle"
        }, {
          duration: settings.fast_duration
        });
        padding_obj.animate({
          "paddingTop": "51px"
        }, {
          duration: settings.slow_duration
        });
        setted = false;
        return void 0;
      }
    });
    return void 0;
  };

}).call(this);
