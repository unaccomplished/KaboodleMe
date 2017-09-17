(function() {
  var storeItemRender = {
    templateUrl: 'client/scripts/components/store-item-render/store-item-render.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: storeItemRenderCtrl
  }

  function storeItemRenderCtrl($rootScope) {
    var $ctrl = this;

    // $rootScope.$on('character.update', function() {
    // });
  }

  angular
      .module('kaboodleme')
      .component('storeItemRender', storeItemRender);
})();
