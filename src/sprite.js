(function(root) {
  
  var Sprite = (function() {
    
    var Sprite = function() {
      this.angle = 0.0;
      this.frame = {
        current: 0,
        width: 0,
        height: 0
      };
    };
    
    Sprite.prototype.rotate = function(delta) {
      this.angle += delta;
    };
    
    Sprite.prototype.animate = function() {
      
    };
    
    return Sprite;
    
  })();
  
  if (typeof root.define === 'function') {
    define('imp/sprite', function() {
      return Sprite;
    });
  } else {
    root.Imp = root.Imp || {};
    root.Imp.Sprite = Sprite;
  }
  
})(this);
