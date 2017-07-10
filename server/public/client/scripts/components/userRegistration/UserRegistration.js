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

  function userRegistrationCtrl($auth) {
    var $ctrl = this;

    $ctrl.$onInit = onInit;
    $ctrl.submit = submit;

    function onInit() {
      $ctrl.registrationForm = {};

    }

    // function handleBtnClick() {
    //   $auth.authenticate('facebook')
    //     .then(function(resp) {
    //       // handle success
    //     })
    //     .catch(function(resp) {
    //       // handle errors
    //     });
    // };
    //
    // function handleBtnClick() {
    //   $auth.authenticate('google')
    //     .then(function(resp) {
    //       // handle success
    //     })
    //     .catch(function(resp) {
    //       // handle errors
    //     });
    // };
    //
    // function handleBtnClick() {
    //   $auth.authenticate('twitter')
    //     .then(function(resp) {
    //       // handle success
    //     })
    //     .catch(function(resp) {
    //       // handle errors
    //     });
    // };

    function submit() {
      $auth.submitRegistration($ctrl.registrationForm)
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
      .component('userRegistration', userRegistration);
})();
