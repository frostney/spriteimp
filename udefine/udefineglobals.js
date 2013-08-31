(function(root) {
  
  root.udefine.globals.root = root;
  root.udefine.globals.jquery = root.jQuery;
  root.udefine.globals['imp/sprite'] = (function() {
    root.Imp = root.Imp || {};
    return root.Imp.Sprite;
  })();
  root.udefine.globals['imp/texture'] = (function() {
    root.Imp = root.Imp || {};
    return root.Imp.Texture;
  })();
  
})(this);
