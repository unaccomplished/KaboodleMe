(function() {
  var userLogin = {
    templateUrl: '../scripts/components/updatePassword/update-password.html'
      bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: updatePasswordCtrl
  }

  function updatePasswordCtrl($scope, $auth) {
    function $scope.handleUpdatePasswordBtnClick() {
      $auth.updatePassword($scope.updatePasswordForm)
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
      .component('updatePassword', updatePassword);
})();
