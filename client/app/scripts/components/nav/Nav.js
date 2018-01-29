(function() {
  var nav = {
    templateUrl: 'client/scripts/components/nav/nav.html',
    bindings: {},
    controller: navCtrl
  }

  function navCtrl($state) {
    var $ctrl = this;
    $ctrl.pageTitle = _.capitalize($state.current.name);
    $ctrl.showMenu = false;
    $ctrl.toggleMenu = toggleMenu;

    function toggleMenu() {
      $ctrl.showMenu = !$ctrl.showMenu;
    }
  }

  angular
      .module('kaboodleme')
      .component('nav', nav);
})();
