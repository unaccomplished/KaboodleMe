(function() {
  var settings = {
    templateUrl: 'client/scripts/components/settings/settings.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: settingsCtrl
  }

  function settingsCtrl(user) {
    var $ctrl = this;

    $ctrl.$onInit = onInit;

    function onInit() {
      $ctrl.currentUser = user;
    }
  }

  angular
      .module('kaboodleme')
      .component('settings', settings);
})();
