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

    function isCurrent(index) {
      return $ctrl.currentlyShowingIndex === index;
    }

    function showNext() {
      if($ctrl.currentlyShowingIndex >= $ctrl.options.length-1) {
        $ctrl.currentlyShowingIndex = 0;
      } else {
        $ctrl.currentlyShowingIndex++;
      }
      var character = {};
      character[$ctrl.category] = $ctrl.options[$ctrl.currentlyShowingIndex];
      characterCreator.updateChar(character);
    }

    function showPrev() {
      if($ctrl.currentlyShowingIndex <= 0) {
        $ctrl.currentlyShowingIndex = $ctrl.options.length -1;
      } else {
        $ctrl.currentlyShowingIndex--;
      }
      var character = {};
      character[$ctrl.category] = $ctrl.options[$ctrl.currentlyShowingIndex];
      console.log(character);
      characterCreator.updateChar(character);
    }

  }

  angular
      .module('kaboodleme')
      .component('traitMenuOption', traitMenuOption);
})();
