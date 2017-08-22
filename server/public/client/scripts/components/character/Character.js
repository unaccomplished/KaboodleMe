(function() {
  var character = {
    templateUrl: 'client/scripts/components/character/character.html',
    bindings: {},
    controller: characterCtrl
  }

  function characterCtrl(characterCreator) {
    var $ctrl = this;

    $ctrl.visibleOptions = null;

    $ctrl.allOptions = characterCreator.fetchOptions();
  }

  angular
      .module('kaboodleme')
      .component('character', character);
})();
