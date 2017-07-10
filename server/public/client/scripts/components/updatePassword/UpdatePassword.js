(function() {
  var userLogin = {
    templateUrl: 'client/scripts/components/updatePassword/update-password.html'
      bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: updatePasswordCtrl
  }

  function updatePasswordCtrl($auth) {
    var $ctrl = this;

    $ctrl.handleUpdatePasswordBtnClick = handleUpdatePasswordBtnClick;

    function handleUpdatePasswordBtnClick() {
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
