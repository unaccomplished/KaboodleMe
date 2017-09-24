(function() {
  var authenticationModal = {
    templateUrl: 'client/scripts/components/authentication-modal/authentication-modal.html',
    bindings: {
      onToggle: '&?'
    },
    controller: authenticationModalCtrl
  }

  function authenticationModalCtrl() {
    var $ctrl = this;
    $ctrl.isActive = isActive;
    $ctrl.setAsActive = setAsActive;
    var currentlyActiveView = 'registration'; // to set as default view

    function isActive(viewName) {
      return currentlyActiveView === viewName;
    }

    function setAsActive(viewName) {
      currentlyActiveView = viewName;
    }
  }

  angular
      .module('kaboodleme')
      .component('authenticationModal', authenticationModal);
})();
