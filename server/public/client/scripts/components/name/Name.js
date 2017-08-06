(function() {
  var name = {
    templateUrl: 'client/scripts/components/name/name.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: nameCtrl
  }

  function nameCtrl() {
    var $ctrl = this;

  }

  angular
      .module('kaboodleme')
      .component('name', name);
})();
