(function(root) {
  
  var Sprite = (function() {
    
    var Sprite = function() {
      this.angle = 0.0;
      this.frame = {
        current: 0,
        width: 0,
        height: 0
      };
      
      //Should be Object.defineProperty...
      this.position = {
        x: 0,
        y: 0
      };
    };
    
    Sprite.prototype.rotate = function(delta) {
      this.angle += delta;
    };
    
    Sprite.prototype.animate = function(property, target, easing, callback) {
      
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
