(function() {
  var items = {
    templateUrl: 'client/scripts/components/items/items.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: itemsCtrl
  }

  function itemsCtrl() {
    var $ctrl = this;

  }

  angular
      .module('kaboodleme')
      .component('items', items);
})();
