(function() {
  var render = {
    templateUrl: 'client/scripts/components/render/render.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: renderCtrl
  }

  function renderCtrl(characterCreator, $rootScope) {
    var $ctrl = this;

    $ctrl.character = characterCreator.current();

    $rootScope.$on('character.update', function() {
      $ctrl.character = characterCreator.current();
    });
  }

  angular
      .module('kaboodleme')
      .component('render', render);
})();
