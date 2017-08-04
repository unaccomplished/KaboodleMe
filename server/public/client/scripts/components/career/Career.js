(function() {
  var career = {
    templateUrl: 'client/scripts/components/career/career.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: careerCtrl
  }

  function careerCtrl() {
    var $ctrl = this;

  }

  angular
      .module('kaboodleme')
      .component('career', career);
})();
