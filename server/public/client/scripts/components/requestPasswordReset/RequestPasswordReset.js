(function() {
  var requestPasswordReset = {
    templateUrl: 'client/scripts/components/requestPasswordReset/request-password-reset.html',
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
          console.log('request password reset error');
        });
    };
  }

  angular
      .module('kaboodleme')
      .component('requestPasswordReset', requestPasswordReset);
})();
