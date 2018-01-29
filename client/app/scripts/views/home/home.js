(function() {
    function homeCtrl() {
      var $ctrl = this;
      $ctrl.toggleAuthentication = toggleAuthentication;

      function toggleAuthentication() {
        $ctrl.showAuthentication = !$ctrl.showAuthentication;
      }
      // $http.post('/api/character') // Createas a chracter
      //
      // function onClickCharacterUpdate() {
      //   $http.put('/api/character', $ctrl.character);
      // }
    }

    angular
        .module('kaboodleme')
        .controller('homeCtrl', [homeCtrl]);
})();
