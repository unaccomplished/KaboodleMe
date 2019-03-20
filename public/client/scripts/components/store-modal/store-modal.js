(function() {
  var storeModal = {
    templateUrl: 'client/scripts/components/store-modal/store-modal.html',
    bindings: {
      onToggle: '&?'
    },
    controller: storeModalCtrl
  }

  function storeModalCtrl() {
    var $ctrl = this;
    $ctrl.isActive = isActive;
    $ctrl.setAsActive = setAsActive;
    var currentlyActiveView = 'store'; // to set store as default view

    function isActive(viewName) {
      return currentlyActiveView === viewName;
    }

    function setAsActive(viewName) {
      currentlyActiveView = viewName;
    }
  }

  angular
      .module('kaboodleme')
      .component('storeModal', storeModal);
})();
