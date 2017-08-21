(function() {
    function homeCtrl() {
      var $ctrl = this;

      $ctrl.openReg = openReg;
      $ctrl.toggleLogin = toggleLogin;

      function openReg() {
        $ctrl.showReg = !$ctrl.showReg;
      }

      function toggleLogin() {
        $ctrl.showLogin =!$ctrl.showLogin;
      }
    }

    angular
        .module('kaboodleme')
        .controller('homeCtrl', [homeCtrl]);
})();
