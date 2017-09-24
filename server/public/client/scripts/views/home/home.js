(function() {
    function homeCtrl() {
      var $ctrl = this;
      $ctrl.toggleAuthentication = toggleAuthentication;

      function toggleAuthentication() {
        $ctrl.showAuthentication = !$ctrl.showAuthentication;
      }
    }

    angular
        .module('kaboodleme')
        .controller('homeCtrl', [homeCtrl]);
})();
