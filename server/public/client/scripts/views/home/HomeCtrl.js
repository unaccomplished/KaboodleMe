(function() {
    function HomeCtrl() {
      var $ctrl = this;

      $ctrl.toggleReg = toggleReg;
      $ctrl.toggleLogin = toggleLogin;

      function toggleReg() {
        $ctrl.showReg = !$ctrl.showReg;
      }

      function toggleLogin() {
        $ctrl.showLogin =!$ctrl.showLogin;
      }
    }

    angular
        .module('kaboodleme')
        .controller('HomeCtrl', [HomeCtrl]);
})();
