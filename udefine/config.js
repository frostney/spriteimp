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
