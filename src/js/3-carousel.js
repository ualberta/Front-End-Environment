// Carousel
// Displays a series of panels inside of a frame
// with navigation controls and auto rotate functionality

(function($){
    $.carousel = function(el, options){

        var base = this;
        
        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;
        
        // Add a reverse reference to the DOM object
        base.$el.data("carousel", base);

        base.currentSlide = 0;

        // goes to the carousel panel at the given index
        base.goToSlide = function(index) {
          base.$el.find('.current').removeClass('current');
          base.$el.find('.toggles li').eq(index).addClass('current');
          base.$el.find('.slide').eq(index).addClass('current');
        };
        
        // initializing the carousel 
        // adds toggles, prev / next, auto rotate, and click events
        base.init = function(){
            
            base.options = $.extend({},$.carousel.defaultOptions, options);

            var numSlides = base.$el.find('.slide').length;

            // remove toggles if there is only one slide
            if(numSlides > 1) {
                var toggleEl = $('<ul class="toggles"></ul>');
                for(var i = 0; i < numSlides; i++) {
                    toggleEl.append('<li>'+i+'</li>');
                }
                base.$el.append(toggleEl);
                base.$el.append('
                    <ul class="prev-next">
                        <li class="prev"><i class="icon-chevron-left"></i></li>
                        <li class="next"><i class="icon-chevron-right"></i></li> 
                    </ul>
                ');
            }

            // set auto rotation if specified
            var autoRotate;
            if(base.options.autoRotate) {
              autoRotate = setInterval(function () {
                // if the next slide doesn't exist, restart
                if((base.currentSlide+1) >= base.$el.find('.slide').length)
                    base.currentSlide = -1;
                base.goToSlide(base.currentSlide++);
              }, base.options.switchTime);
            };

            // go to the first slide on load
            base.goToSlide(0);

            // EVENTS

            // Bottom toggles click event
            base.$el.on({ 
                click: function() {
                  base.currentSlide = $(this).index();
                  base.goToSlide(base.currentSlide);
                  clearInterval(autoRotate);
                }
            },'.toggles li:not(.current)');

            // Previous / Next click event
            base.$el.on({ 
                click: function() {
                    // if previous
                    if($(this).index()==0) {
                        base.currentSlide--;
                    } else {
                        base.currentSlide++;
                    }
                  base.goToSlide(base.currentSlide);
                  clearInterval(autoRotate);
                }
            },'.prev-next li');

        };

        base.init();
    };

    $.carousel.defaultOptions = {
        switchTime: 8000,
        autoRotate: true
    };
    
    $.fn.carousel = function(options){
        return this.each(function(){
            (new $.carousel(this, options));
        });
    };
    
})(jQuery); 
