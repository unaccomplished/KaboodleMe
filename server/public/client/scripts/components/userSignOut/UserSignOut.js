(function() {
  var userLogin = {
    templateUrl: '../scripts/components/userSignOut/user-sign-out.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: userSignOutCtrl
  }

  function userSignOutCtrl($scope, $auth) {
    function $scope.handleSignOutBtnClick() {
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
      .component('userSignOut', userSignOut);
})();
