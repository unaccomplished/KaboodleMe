(function() {
  var character = {
    templateUrl: 'client/scripts/components/character/character.html',
    bindings: {},
    controller: characterCtrl
  }

  function characterCtrl() {
    var $ctrl = this;

    $ctrl.showOption = showOption;
    $ctrl.visibleOptions = null;


    $ctrl.allOptions = {
      gender: [
        {
          name: 'male'
        },
        {
          name: 'female'
        }
      ],
      species: [
        {
          name: 'human'
        }
      ]
    }

    function showOption(category) {
      $ctrl.visibleOptions = $ctrl.allOptions[category];
    }
  }

  angular
      .module('kaboodleme')
      .component('character', character);
})();
