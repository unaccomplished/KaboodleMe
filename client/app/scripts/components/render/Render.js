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

    fetchCharacter();
    $rootScope.$on('character.update', function() {
      fetchCharacter();
    });
    function fetchCharacter() {
      characterCreator.current().then(function(data) {
        $ctrl.character = data;
        console.log($ctrl.character);
      })
    };
  }

  angular
      .module('kaboodleme')
      .component('render', render);
})();
