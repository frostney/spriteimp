(function(root) {
  
  var Texture = (function() {
    
    var Texture = function() {};
    
    return Texture;
    
  })();
  
  if (typeof root.define === 'function') {
    define('imp/texture', function() {
      return Texture;
    });
  } else {
    root.Imp = root.Imp || {};
    root.Imp.Texture = Texture;
  }
  
})(this);
