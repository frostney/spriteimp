(function(root) {
  
  root.udefine.globals.jquery = root.jQuery;
  
  root.udefine.globals['imp/sprite'] = undefined;
  root.udefine.globals['imp/texture'] = undefined;
  
  var impObj = root.Imp = root.Imp || {};
  
  root.udefine.inject['imp/sprite'] = {
    root: impObj,
    name: 'Sprite'
  };
  
  root.udefine.inject['imp/texture'] = {
    root: impObj,
    name: 'Texture'
  };
  
})(this);

udefine('imp/sprite', ['jquery'], function($) {
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

  return Sprite;
}); 
udefine('imp/texture', function() {
  var Texture = (function() {
    
    var Texture = function() {};
    
    return Texture;
    
  })();
  
  return Texture;
});
