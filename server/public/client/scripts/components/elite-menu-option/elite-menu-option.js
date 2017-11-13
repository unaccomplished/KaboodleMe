(function() {
  var eliteMenuOption = {
    templateUrl: 'client/scripts/components/elite-menu-option/elite-menu-option.html',
    bindings: {
      option: '<'
    },
    controller: eliteMenuOptionCtrl
  }

  function eliteMenuOptionCtrl() {
    var $ctrl = this;

  }

  angular
      .module('kaboodleme')
      .component('eliteMenuOption', eliteMenuOption);
})();
