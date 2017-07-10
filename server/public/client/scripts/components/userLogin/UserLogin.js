(function() {
  var userLogin = {
    templateUrl: 'client/scripts/components/userLogin/user-login.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: userLoginCtrl
  }

  function userLoginCtrl($auth) {
    var $ctrl = this;

    $ctrl.handleLoginBtnClick = handleLoginBtnClick;
    $ctrl.handleFBBtnClick = handleFBBtnClick;
    $ctrl.handleGBtnClick = handleGBtnClick;
    $ctrl.handleTBtnClick = handleTBtnClick;

    function handleFBBtnClick() {
      $auth.authenticate('facebook')
        .then(function(resp) {
          // handle success
        })
        .catch(function(resp) {
          // handle errors
        });
    };

    function handleGBtnClick() {
      $auth.authenticate('google')
        .then(function(resp) {
          // handle success
        })
        .catch(function(resp) {
          // handle errors
        });
    };

    function handleTBtnClick() {
      $auth.authenticate('twitter')
        .then(function(resp) {
          // handle success
        })
        .catch(function(resp) {
          // handle errors
        });
    };

    function handleLoginBtnClick() {
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
