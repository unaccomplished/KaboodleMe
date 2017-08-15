(function() {
  var bottomNav = {
    templateUrl: 'client/scripts/components/bottomNav/bottom-nav.html',
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

  }

  angular
      .module('kaboodleme')
      .component('bottomNav', bottomNav);
})();
