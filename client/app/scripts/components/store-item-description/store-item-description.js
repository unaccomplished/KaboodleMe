(function() {
  var storeItemDescription = {
    templateUrl: 'client/scripts/components/store-item-description/store-item-description.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: storeItemDescriptionCtrl
  }

  function storeItemDescriptionCtrl($rootScope) {
    var $ctrl = this;

    // $rootScope.$on('character.update', function() {
    // });
  }

  angular
      .module('kaboodleme')
      .component('storeItemDescription', storeItemDescription);
})();
