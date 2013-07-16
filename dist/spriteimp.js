(function(root) {

  var factory = function(root, $) {
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
        
        Object.defineProperty(this, 'x', {
          
        });

        this.$element = $('div');
      };

      Sprite.prototype.updateElement = function() {
        this.$element.css('transform', 'tranlateX(' + this.position.x + ') translateY(' + this.position.y + ') translateZ(0)');
      };

      Sprite.prototype.rotate = function(delta) {
        this.angle += delta;
      };

      Sprite.prototype.animate = function(property, target, easing, callback) {

      };

      return Sprite;

    })();
  };

  var deps = {
    'root': root,
    'jquery': root.jQuery
  };

  var applyVals = (function(arr) {
    var newArr = [];

    for (var i = 0, j = arr.length; i < j; i++) {
      newArr.push(deps[arr[i]]);
    }

    return newArr;
  })(Object.keys(deps));

  if ( typeof root.define === 'function') {
    define('imp/sprite', Object.keys(deps), factory);
  } else {
    root.Imp = root.Imp || {};
    root.Imp.Sprite = factory.apply(root, applyVals);
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
