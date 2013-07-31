(function() {
  'use strict';
  var hasModule;

  hasModule = (typeof module !== "undefined" && module !== null) && module.exports;

  (function(root) {
    var _base, _base1, _base2;

    root.udefine || (root.udefine = function(name, deps, factory) {
      var dep, globalsArr, requireArr, result, _ref;

      if (name == null) {
        throw new Error('A udefine module needs to have a name');
      }
      if (typeof deps === 'function') {
        _ref = [name, [], deps], name = _ref[0], deps = _ref[1], factory = _ref[2];
      }
      if (typeof define !== "undefined" && define !== null) {
        if (define.amd || define.umd) {
          udefine.env.amd = true;
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
          udefine.env.commonjs = true;
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
          udefine.env.browser = true;
          result = factory.apply(this, globalsArr);
        }
      }
      return result;
    });
    (_base = root.udefine).globals || (_base.globals = {});
    (_base1 = root.udefine).commonjs || (_base1.commonjs = {});
    (_base2 = root.udefine).env || (_base2.env = {
      amd: false,
      commonjs: false,
      browser: false
    });
    return null;
  })(hasModule ? global : this);

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
