(function() {
  var userSignOut = {
    templateUrl: 'client/scripts/components/userSignOut/user-sign-out.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: userSignOutCtrl
  }

  function userSignOutCtrl($auth) {
    var $ctrl = this;

    $ctrl.handleSignOutBtnClick = handleSignOutBtnClick;

    function handleSignOutBtnClick() {
      $auth.signOut()
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
      .component('userSignOut', userSignOut)
})();
