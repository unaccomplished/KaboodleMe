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

  function userSignOutCtrl($auth, $state) {
    var $ctrl = this;

    $ctrl.signOutButton = signOutButton;

    function signOutButton() {
      $auth.signOut()
        .then(function(resp) {
          $state.go('home');
        })
        .catch(function(resp) {
          console.log('sign out error');
        });
    };
  }

  angular
      .module('kaboodleme')
      .component('userSignOut', userSignOut)
})();
