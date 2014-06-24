/* 
 * Device image scaling
 * Appends a query string parameter to the URL of 
 * an image based on the provided size to scale to
 * if null is provided as the size, the image is 
 * displayed at its original size.
*/

(function ($) {
    $.fn.DeviceImageScaling = function (size) {

      var size = size;

      function getNewImageUrl(src) {
        var pattern = new RegExp("w=");
        var widthSet = pattern.test(src);
        // regex replaces "w" parameter with new size
        if(size !== null) {
          if(widthSet)
            return src.replace(/([?|&]w=)[^\&]+/, '$1' + size);
        } else {
          // serve the original size
          if(widthSet)
            return src.replace(/[?|&](w=[^\&]+)/, ''); 
        }
        return src+'?w='+size;
      }

      return this.each(function () {
          var newImageSrc = getNewImageUrl($(this).attr("src"));
          // only update if the new url is different
          if ($(this).attr("src") !== newImageSrc) {
              $(this).attr("src", newImageSrc);
          }
      });
    };
})(jQuery);
