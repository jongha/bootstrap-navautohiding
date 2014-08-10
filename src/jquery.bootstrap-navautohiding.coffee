# Reference jQuery
$ = jQuery

# Adds plugin object to jQuery
$.navautohiding = (options) ->
  # Default settings
  settings =
    selector: ".navbar" # selector for navbar object
    selector_padding: "body" # selector for padding object (default body)
    hide_position: 50
    show_position: 10
    fast_duration: 100
    slow_duration: 300
    debug: false

  # Merge default settings with options.
  settings = $.extend settings, options

  # get scroll position
  scrollpos = () ->
    wintop = $(window).scrollTop()
    docheight = $(document).height()
    winheight = $(window).height()
    wintop / (docheight - winheight) * 100;

  # Simple logger.
  log = (msg) ->
    console?.log msg if settings.debug

  padding_obj = $(settings.selector_padding);
  navbar = $(settings.selector);
  setted = false;

  $(window).scroll(
    () ->
      if scrollpos() >= settings.hide_position and !!!setted
        navbar.animate({ opacity: "toggle" }, { duration: settings.slow_duration })
        padding_obj.animate({ "paddingTop": "0px" }, { duration: settings.fast_duration })
        setted = true

      else if scrollpos() < settings.show_position and setted
        navbar.animate({ opacity: "toggle" }, { duration: settings.fast_duration })
        padding_obj.animate({ "paddingTop": "51px" }, { duration: settings.slow_duration })
        setted = false
        undefined
  );

  undefined
  # _Insert magic here._
  #return @each ()->
  #  log "Preparing magic show."
  #  # You can use your settings in here now.
  #  log "Option 1 value: #{settings.option1}"