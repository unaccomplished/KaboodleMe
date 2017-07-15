(function() {
    function HomeCtrl() {
      var $ctrl = this;

      $ctrl.openUserRegistration = openUserRegistration;

      function openUserRegistration() {
        $ctrl.userRegistration;
      }
    }

    angular
        .module('kaboodleme')
        .controller('HomeCtrl', [HomeCtrl]);
})();
