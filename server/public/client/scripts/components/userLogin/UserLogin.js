(function() {
  var userLogin = {
    templateUrl: '../scripts/components/userLogin/user-login.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: userLoginCtrl
  }

  function userLoginCtrl($scope, $auth) {
    function $scope.handleBtnClick() {
      $auth.authenticate('facebook')
        .then(function(resp) {
          // handle success
        })
        .catch(function(resp) {
          // handle errors
        });
    };

    function $scope.handleBtnClick() {
      $auth.authenticate('google')
        .then(function(resp) {
          // handle success
        })
        .catch(function(resp) {
          // handle errors
        });
    };

    function $scope.handleBtnClick() {
      $auth.authenticate('twitter')
        .then(function(resp) {
          // handle success
        })
        .catch(function(resp) {
          // handle errors
        });
    };

    function $scope.handleLoginBtnClick() {
      $auth.submitLogin($scope.loginForm)
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
      .component('userLogin', userLogin);
})();
