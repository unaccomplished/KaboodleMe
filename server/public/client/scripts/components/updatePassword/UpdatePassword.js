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

  function updatePasswordCtrl($auth) {
    var $ctrl = this;

    $ctrl.$onInit = onInit;
    $ctrl.handleUpdatePasswordBtnClick = handleUpdatePasswordBtnClick;

    function onInit() {
      $ctrl.updatePasswordForm = {};
    }

    function handleUpdatePasswordBtnClick() {
      $auth.updatePassword($ctrl.updatePasswordForm)
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
