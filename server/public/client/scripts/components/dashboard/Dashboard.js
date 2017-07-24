(function() {
  var dashboard = {
    templateUrl: 'client/scripts/components/dashboard/dashboard.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: dashboardCtrl
  }

  function dashboardCtrl(user) {
    var $ctrl = this;

    $ctrl.$onInit = onInit;

    function onInit() {
      $ctrl.currentUser = user;
    }
  }

  angular
      .module('kaboodleme')
      .component('dashboard', dashboard);
})();
