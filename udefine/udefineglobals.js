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
