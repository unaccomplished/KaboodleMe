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

  function dashboardCtrl() {
    var $ctrl = this;

  }

  angular
      .module('kaboodleme')
      .component('dashboard', dashboard);
})();
