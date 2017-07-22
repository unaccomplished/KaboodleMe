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
    $ctrl.openUserLogin = openUserLogin;
    $ctrl.login = login;
    $ctrl.loginSocial = loginSocial;

    function onInit() {
      $ctrl.loginForm = {};
    }

    function loginSocial(type) {
      $auth.authenticate(type)
        .then(function(resp) {
          $state.go('dashboard');
        })
        .catch(function(resp) {
          console.log('social login error');
        });
    };

    function login() {
      $auth.submitLogin($ctrl.loginForm)
        .then(function(resp) {
          $state.go('dashboard');
        })
        .catch(function(resp) {
          console.log('email login error');
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
