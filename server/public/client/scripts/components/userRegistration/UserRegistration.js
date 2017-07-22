(function() {
  var userRegistration = {
    templateUrl: 'client/scripts/components/userRegistration/user-registration.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: userRegistrationCtrl
  }

  function userRegistrationCtrl($auth, $state) {
    var $ctrl = this;

    $ctrl.$onInit = onInit;
    $ctrl.register = register;
    $ctrl.registerSocial = registerSocial;

    function onInit() {
      $ctrl.registrationForm = {};
    }

    function registerSocial(type) {
      $auth.authenticate(type)
        .then(function(resp) {
          $state.go('dashboard');
        })
        .catch(function(resp) {
          console.log('social registration error');
        });
    };

    function register() {
      $auth.submitRegistration($ctrl.registrationForm)
        .then(function(resp) {
          $state.go('dashboard');
        })
        .catch(function(resp) {
          console.log('email registration error');
        });
    };
  }

  angular
      .module('kaboodleme')
      .component('userRegistration', userRegistration);
})();
