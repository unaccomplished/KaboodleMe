(function() {
  var userLogin = {
    templateUrl: '../scripts/components/userLogout/user-signout.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: userSignoutCtrl
  }

  function userLogoutCtrl($scope, $auth) {
    function $scope.handleSignOutBtnClick() {
      $auth.signOut($scope.loginForm)
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
      .component('userSignout', userSignout);
})();
