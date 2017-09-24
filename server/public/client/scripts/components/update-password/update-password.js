(function() {
  var updatePassword = {
    templateUrl: 'client/scripts/components/update-password/update-password.html',
    bindings: {},
    controller: updatePasswordCtrl
  }

  function updatePasswordCtrl($auth, $state) {
    var $ctrl = this;

    $ctrl.$onInit = onInit;
    $ctrl.updatePasswordButton = updatePasswordButton;

    function onInit() {
      $ctrl.updatePasswordForm = {};
    }

    function updatePasswordButton() {
      $auth.updatePassword($ctrl.updatePasswordForm)
        .then(function(resp) {
          $state.go('login');
        })
        .catch(function(resp) {
          $ctrl.errorMessage = "There is an update password error. Please try again.";
        });
    };
  }

  angular
      .module('kaboodleme')
      .component('updatePassword', updatePassword);
})();
