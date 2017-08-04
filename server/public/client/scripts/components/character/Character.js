(function() {
  var character = {
    templateUrl: 'client/scripts/components/character/character.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: characterCtrl
  }

  function characterCtrl() {
    var $ctrl = this;

  }

  angular
      .module('kaboodleme')
      .component('character', character);
})();
