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

  function requestPasswordResetCtrl($auth) {
    var $ctrl = this;

    $ctrl.$onInit = onInit;
    $ctrl.handlePwdResetBtnClick = handlePwdResetBtnClick;

    function onInit() {
      $ctrl.pwdResetForm;
    }

    function handlePwdResetBtnClick() {
      $auth.requestPasswordReset($ctrl.pwdResetForm)
        .then(function(resp) {
          // handle success response
        })
        .catch(function(resp) {
          // handle error response
        });
    };
  }

  angular
      .module('kaboodleme')
      .component('requestPasswordReset', requestPasswordReset);
})();
