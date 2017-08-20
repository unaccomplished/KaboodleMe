(function() {
    function HomeCtrl() {
      var $ctrl = this;

      // $ctrl.openUserRegistration = openUserRegistration;
      $ctrl.toggleReg = toggleReg;

      // function openUserRegistration() {
      //   $ctrl.userRegistration;
      // }

      function toggleReg() {
        $ctrl.showReg = !$ctrl.showReg;
      }
    }

    angular
        .module('kaboodleme')
        .controller('HomeCtrl', [HomeCtrl]);
})();
