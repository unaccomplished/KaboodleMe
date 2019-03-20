(function() {
  var storeBackButton = {
    templateUrl: 'client/scripts/components/store-back-button/store-back-button.html',
    bindings: {
      onClick: '&?'
    },
    controller: storeBackButtonCtrl
  }

  function storeBackButtonCtrl() {
    var $ctrl = this;

  }

  angular
      .module('kaboodleme')
      .component('storeBackButton', storeBackButton);
})();
