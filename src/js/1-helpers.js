Handlebars.registerHelper("each_with_index", function(array, fn) {
  
  var buffer = "";
  for (var i = 0, j = array.length; i < j; i++) {
    var item = array[i];
 
    // stick an index property onto the item, starting with 1, may make configurable later
    item.index = i+1;
 
    // show the inside of the block
    buffer += fn.fn(item);
  }
 
  // return the finished buffer
  return buffer;
 
});


Handlebars.registerHelper("each_level", function(context, options) {

  function assignLevels(object, lvl) {
    if(object.children.length == 0)
      return object;

    object.level = lvl+1;
    for(var i = 0; i < object.children.length; i++) {
      object.children[i] = assignLevels(object.children[i], object.level);
    }

    return object;

  };
  
  var buffer = "";
  for (var i = 0, j = context.length; i < j; i++) {
    var item = assignLevels(context[i],0);
    buffer += options.fn(item);
  }
  return buffer;
 
});
