(function() {
  var storeCart = {
    templateUrl: 'client/scripts/components/store-cart/store-cart.html',
    bindings: {},
    controller: storeCartCtrl
  }

  function storeCartCtrl() {
    var $ctrl = this;

  }

  angular
      .module('kaboodleme')
      .component('storeCart', storeCart);
})();
