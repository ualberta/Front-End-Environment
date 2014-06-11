
// adds breakpoint classes to the body element and 
// fires events based on the defined breakpoints

(function($) {

  var lastSize = 0;

  $.fn.setBreakpoints = function(settings) {
    var options = jQuery.extend({
              distinct: true,
              breakpoints: new Array(320,480,768,1024)
              },settings);

    var timer;

    var onResize = function() {
  
      var w = $(window).width();
      var done = false;
      
      for (var bp in options.breakpoints.sort(function(a,b) { return (b-a) })) {
      
        // fire onEnter when a browser expands into a new breakpoint
        // if in distinct mode, remove all other breakpoints first.
        if (!done && w >= options.breakpoints[bp] && lastSize < options.breakpoints[bp]) {
          if (options.distinct) {
            for (var x in options.breakpoints.sort(function(a,b) { return (b-a) })) {
              if ($('body').hasClass('bp-' + options.breakpoints[x])) {
                $('body').removeClass('bp-' + options.breakpoints[x]);
                $(window).trigger('exitBreakpoint' + options.breakpoints[x]);
              }
            }
            done = true;
          }
          $('body').addClass('bp-' + options.breakpoints[bp]);
          $(window).trigger('enterBreakpoint' + options.breakpoints[bp]);

        }       

        // fire onExit when browser contracts out of a larger breakpoint
        if (w < options.breakpoints[bp] && lastSize >= options.breakpoints[bp]) {
          $('body').removeClass('bp-' + options.breakpoints[bp]);
          $(window).trigger('exitBreakpoint' + options.breakpoints[bp]);

        }
        
        // if in distinct mode, fire onEnter when browser contracts into a smaller breakpoint
        if (
          options.distinct && // only one breakpoint at a time
          w >= options.breakpoints[bp] && // and we are in this one
          w < options.breakpoints[bp-1] && // and smaller than the bigger one
          lastSize > w && // and we contracted
          lastSize >0 &&  // and this is not the first time
          !$('body').hasClass('bp-' + options.breakpoints[bp]) // and we aren't already in this breakpoint
          ) {         
          $('body').addClass('bp-' + options.breakpoints[bp]);
          $(window).trigger('enterBreakpoint' + options.breakpoints[bp]);

        }           
      }
      
      // set up for next call
      if (lastSize != w) {
        lastSize = w;
      }
    };

    // call onResize when the user stops resizing for 250ms
    $(window).bind('resize', function() {
       timer && clearTimeout(timer);
       timer = setTimeout(onResize, 250);
    });

  };
  
})(jQuery);
