(function() {
  var character = {
    templateUrl: 'client/scripts/components/character/character.html',
    bindings: {},
    controller: characterCtrl
  }

  function characterCtrl(characterCreator) {
    var $ctrl = this;

    $ctrl.visibleOptions = null;

    characterCreator.fetchOptions()
      .then(function(data){
        $ctrl.allOptions = data;
        console.log($ctrl.allOptions);
      });
  }

  angular
      .module('kaboodleme')
      .component('character', character);
})();
