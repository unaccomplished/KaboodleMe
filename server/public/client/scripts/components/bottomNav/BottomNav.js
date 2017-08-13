(function() {
  var bottomNav = {
    templateUrl: 'client/scripts/components/bottomNav/bottom-nav.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: bottomNavCtrl
  }

  function bottomNavCtrl() {
    var $ctrl = this;
  }

  angular
      .module('kaboodleme')
      .component('bottomNav', bottomNav);
})();
