(function() {
  var bottomNav = {
    templateUrl: 'client/scripts/components/bottom-nav/bottom-nav.html',
    bindings: {
      backSref: '@',
      backTitle: '@',
      nextSref: '@',
      nextOnClick: '&?',
      nextTitle: '@'
    },
    controller: bottomNavCtrl
  }

  function bottomNavCtrl() {
    var $ctrl = this;
    $ctrl.toggleStore = toggleStore;

    function toggleStore() {
      $ctrl.showStore = !$ctrl.showStore;
    }
  }

  angular
      .module('kaboodleme')
      .component('bottomNav', bottomNav);
})();
