(function($){
    $.tabs = function(el, options){

        var base = this;
        
        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;
        
        // Add a reverse reference to the DOM object
        base.$el.data("tabs", base);
        
        base.init = function(){
            
            base.options = $.extend({},$.tabs.defaultOptions, options);

            base.$el.find('.nav a').first().parent().addClass('active');
            base.$el.find('.tab-pane').first().addClass('active');
            base.$el.on({
                click: function(e) {
                  var tabId = $(this).attr('href');
                  base.$el.find('.active').removeClass('active');
                  base.$el.find(tabId).addClass('active');
                  $(this).parent().addClass('active');
                  return false;
                }
            }, '.nav a');
        };

        base.init();
    };
     
    $.tabs.defaultOptions = { };
    
    $.fn.tabs = function(options){
        return this.each(function(){
            (new $.tabs(this, options));
        });
    };
    
})(jQuery);
