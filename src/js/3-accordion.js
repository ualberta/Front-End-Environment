(function($){
    $.accordion = function(el, options){

        var base = this;
        
        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;
        
        // Add a reverse reference to the DOM object
        base.$el.data("accordion", base);
        
        base.init = function(){
            
            base.options = $.extend({},$.accordion.defaultOptions, options);

            // add expanded class to parent on click
            base.$el.on({
                click: function() {
                  $(this).parent().toggleClass('expanded'); 
                  return false;
                }
            }, '.accordion-toggle');
        };

        base.init();
    };
     
    $.accordion.defaultOptions = { };
    
    $.fn.accordion = function(options){
        return this.each(function(){
            (new $.accordion(this, options));
        });
    };
    
})(jQuery);
