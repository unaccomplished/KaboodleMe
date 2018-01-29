(function() {
  var storeOption = {
    templateUrl: 'client/scripts/components/store-option/store-option.html',
    bindings: {
      category: '<',
      option: '<'
    },
    controller: storeOptionCtrl
  }

  function storeOptionCtrl() {
    var $ctrl = this;

  }

  angular
      .module('kaboodleme')
      .component('storeOption', storeOption);
})();
