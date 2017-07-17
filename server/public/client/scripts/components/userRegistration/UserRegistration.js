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
    $ctrl.submit = submit;
    $ctrl.registerSocial = registerSocial;

    function onInit() {
      $ctrl.registrationForm = {};
    }

    function registerSocial(type) {
      $auth.authenticate(type)
        .then(function(resp) {
        })
        .catch(function(resp) {
          // handle errors
        });
    };

    function submit() {
      $auth.submitRegistration($ctrl.registrationForm)
        .then(function(resp) {
          console.log('hello')
          $state.go('dashboard');
        })
        .catch(function(resp) {
          // handle error response
        });
    };
  }

  angular
      .module('kaboodleme')
      .component('userRegistration', userRegistration);
})();
