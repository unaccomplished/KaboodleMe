(function() {
  var userLogin = {
    templateUrl: '../scripts/components/requestPasswordReset/request-password-reset.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: requestPasswordResetCtrl
  }

  function requestPasswordResetCtrl($scope, $auth) {
    function $scope.handlePwdResetBtnClick() {
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
      .component('requirePasswordReset', requirePasswordReset);
})();
