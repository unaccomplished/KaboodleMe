(function() {
  var menu = {
    templateUrl: 'client/scripts/components/menu/menu.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: menuCtrl
  }

  function menuCtrl() {
    var $ctrl = this;

  }

  angular
      .module('kaboodleme')
      .component('menu', menu);
})();
