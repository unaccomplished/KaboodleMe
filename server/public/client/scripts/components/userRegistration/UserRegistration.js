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
    $ctrl.handleFBBtnClick = handleFBBtnClick;
    $ctrl.handleGBtnClick = handleGBtnClick;
    $ctrl.handleTBtnClick = handleTBtnClick;

    function onInit() {
      $ctrl.registrationForm = {};

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
