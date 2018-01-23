(function() {
  var traitMenuOption = {
    templateUrl: 'client/scripts/components/trait-menu-option/trait-menu-option.html',
    bindings: {
      category: '<',
      options: '<'
    },
    controller: traitMenuOptionCtrl
  }

  function traitMenuOptionCtrl(characterCreator) {
    var $ctrl = this;

    $ctrl.showPrev = showPrev;
    $ctrl.showNext = showNext;
    $ctrl.isCurrent = isCurrent;
    $ctrl.currentlyShowingIndex = 0;

    init();

    function init() {
      characterCreator.current()
        .then(function(character) {
          var trait = characterCreator.getTraitFromType($ctrl.category);
          var index = getTraitIndex(trait);
          $ctrl.currentlyShowingIndex = index;
        });
    }

    function getTraitIndex(trait) {
      return _.findIndex($ctrl.options, function(option) {
        return option.name === trait.name;
      });
    }

    function isCurrent(index) {
      return $ctrl.currentlyShowingIndex === index;
    }

    function showNext() {
      if($ctrl.currentlyShowingIndex >= $ctrl.options.length-1) {
        $ctrl.currentlyShowingIndex = 0;
      } else {
        $ctrl.currentlyShowingIndex++;
      }
      update();
    }

    function showPrev() {
      if($ctrl.currentlyShowingIndex <= 0) {
        $ctrl.currentlyShowingIndex = $ctrl.options.length -1;
      } else {
        $ctrl.currentlyShowingIndex--;
      }
      update();
    }

    function update()    {
      var trait = {
        trait_type: $ctrl.category,
        name: $ctrl.options[$ctrl.currentlyShowingIndex].name
      };
      console.log(trait);
      characterCreator.updateChar([trait]);
    }

  }

  angular
      .module('kaboodleme')
      .component('traitMenuOption', traitMenuOption);
})();
