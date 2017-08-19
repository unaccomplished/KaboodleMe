(function() {
  var requestPasswordReset = {
    templateUrl: 'client/scripts/components/request-password-reset/request-password-reset.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: requestPasswordResetCtrl
  }

  function requestPasswordResetCtrl($auth, $state) {
    var $ctrl = this;

    $ctrl.$onInit = onInit;
    $ctrl.passwordResetButton = passwordResetButton;

    function onInit() {
      $ctrl.pwdResetForm = {};
    }

    function passwordResetButton() {
      $auth.requestPasswordReset($ctrl.pwdResetForm)
        .then(function(resp) {
          $state.go('update-password');
        })
        .catch(function(resp) {
          $ctrl.errorMessage = "There is a request password reset error. Please try again.";
        });
    };
  }

  angular
      .module('kaboodleme')
      .component('requestPasswordReset', requestPasswordReset);
})();
