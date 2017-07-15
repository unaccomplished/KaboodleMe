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

    $ctrl.handlePwdResetBtnClick = handlePwdResetBtnClick;

    function handlePwdResetBtnClick() {
      $auth.requestPasswordReset($scope.pwdResetForm)
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
