(function() {
  var storeCartOption = {
    templateUrl: 'client/scripts/components/store-cart-option/store-cart-option.html',
    bindings: {},
    controller: storeCartOptionCtrl
  }

  function storeCartOptionCtrl() {
    var $ctrl = this;

  }

  angular
      .module('kaboodleme')
      .component('storeCartOption', storeCartOption);
})();
