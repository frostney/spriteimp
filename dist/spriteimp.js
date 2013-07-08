(function(root) {
  
  var Sprite = (function() {
    
    var Sprite = function() {
      this.angle = 0.0;
    };
    
    Sprite.prototype.rotate = function(delta) {
      this.angle += delta;
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
