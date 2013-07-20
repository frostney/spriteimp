(function() {
  'use strict';
  var hasModule, _ref;

  Array.isArray || (Array.isArray = function(a) {
    return a.push === Array.prototype.push && (a.length != null);
  });

  hasModule = (typeof module !== "undefined" && module !== null) && module.exports;

  (function(root) {
    root.udefine = function(name, deps, factory) {
      var dep, globalsArr, requireArr, result, _ref1, _ref2;

      if (Array.isArray(name)) {
        _ref1 = [void 0, [], deps], name = _ref1[0], deps = _ref1[1], factory = _ref1[2];
      } else {
        if (typeof name === 'function') {
          _ref2 = [void 0, [], name], name = _ref2[0], deps = _ref2[1], factory = _ref2[2];
        }
      }
      if (typeof define !== "undefined" && define !== null) {
        if (define.amd || define.umd) {
          result = define.apply(this, arguments);
        }
      } else {
        if (hasModule) {
          requireArr = (function() {
            var _i, _len, _results;

            _results = [];
            for (_i = 0, _len = deps.length; _i < _len; _i++) {
              dep = deps[_i];
              _results.push(require(root.udefine.node[dep]));
            }
            return _results;
          })();
          result = module.exports = factory.apply(this);
        } else {
          globalsArr = (function() {
            var _i, _len, _results;

            _results = [];
            for (_i = 0, _len = deps.length; _i < _len; _i++) {
              dep = deps[_i];
              _results.push(root.udefine.globals[dep]);
            }
            return _results;
          })();
          result = factory.apply(this, globalsArr);
        }
      }
      return result;
    };
    root.udefine.globals = {};
    return root.udefine.node = {};
  })((_ref = typeof module !== "undefined" && module !== null ? module.exports : void 0) != null ? _ref : this);

}).call(this);

(function(root) {
  
  root.udefine.globals.root = root;
  root.udefine.globals.jquery = root.jQuery;
  root.udefine.globals.imp = (root.Imp = root.Imp || {});
  
  if (root.define != null) {
    define('root', function() {
      return root;
    });
    
    define('imp', function() {
      return {};
    });
  }
  
})(this);

udefine('imp/sprite', ['jquery', 'imp'], function($, imp) {
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

  imp.Sprite = Sprite;

  return Sprite;
}); 
udefine('imp/texture', ['imp'], function(imp) {
  var Texture = (function() {
    
    var Texture = function() {};
    
    return Texture;
    
  })();
  
  imp.Texture = Texture;
  
  return Texture;
});
