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

  function userLoginCtrl($auth, $state) {
    var $ctrl = this;

    $ctrl.$onInit = onInit;
    $ctrl.handleFBBtnClick = handleFBBtnClick;
    $ctrl.handleGBtnClick = handleGBtnClick;
    $ctrl.handleTBtnClick = handleTBtnClick;
    $ctrl.openUserLogin = openUserLogin;
    $ctrl.login = login;

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

    function login() {
      $auth.submitLogin($ctrl.loginForm)
        .then(function(resp) {
          $state.go('dashboard');
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
