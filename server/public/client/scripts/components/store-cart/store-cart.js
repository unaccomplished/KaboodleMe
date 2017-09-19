(function() {
  var storeCart = {
    templateUrl: 'client/scripts/components/store-cart/store-cart.html',
    bindings: {
      onBackButton: '&?'
    },
    controller: storeCartCtrl
  }

  function storeCartCtrl() {
    var $ctrl = this;

  }

  angular
      .module('kaboodleme')
      .component('storeCart', storeCart);
})();
