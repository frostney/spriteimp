(function(root) {
  
  var Sprite = (function() {
    
    var Sprite = function() {
      this.angle = 0.0;
    };
    
    Sprite.prototype.rotate = function(delta) {
      this.angle += delta;
    }
    
    return Sprite;
    
  })();
  
  if (typeof root.define === 'function') {
    define('imp/sprite', function() {
      return Sprite;
    })
  } else {
    root.Imp = root.Imp || {};
    root.Imp.Sprite = Sprite;
  }
  
})(this);
