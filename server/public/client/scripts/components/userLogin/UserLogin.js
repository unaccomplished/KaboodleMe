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

    $ctrl.$onInit = onInit;
    $ctrl.handleLoginBtnClick = handleLoginBtnClick;
    $ctrl.handleFBBtnClick = handleFBBtnClick;
    $ctrl.handleGBtnClick = handleGBtnClick;
    $ctrl.handleTBtnClick = handleTBtnClick;
    $ctrl.openUserLogin = openUserLogin;

    function onInit() {
      $ctrl.loginForm = {};
    }

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
      $auth.submitLogin($ctrl.loginForm)
        .then(function(resp) {
          // handle success response
        })
        .catch(function(resp) {
          // handle error response
        });
    };

    function openUserLogin() {
      $ctrl.userLogin;
    }
  }

  angular
      .module('kaboodleme')
      .component('userLogin', userLogin);
})();
