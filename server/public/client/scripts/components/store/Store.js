(function() {
  var store = {
    templateUrl: 'client/scripts/components/store/store.html',
    bindings: {
      onToggle: '&?'
    },
    controller: storeCtrl
  }

  function storeCtrl() {
    var $ctrl = this;

  }

  angular
      .module('kaboodleme')
      .component('store', store);
})();
