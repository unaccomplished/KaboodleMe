(function() {
  var updatePassword = {
    templateUrl: 'client/scripts/components/updatePassword/update-password.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
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
          console.log('update password error')
        });
    };
  }

  angular
      .module('kaboodleme')
      .component('updatePassword', updatePassword);
})();
