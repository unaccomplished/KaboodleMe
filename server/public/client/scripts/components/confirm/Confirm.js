(function() {
  var confirm = {
    templateUrl: 'client/scripts/components/confirm/confirm.html',
    bindings: {},
    controller: confirmCtrl
  }

  function confirmCtrl() {
    var $ctrl = this;
    $ctrl.showSave = false;
    $ctrl.toggleSave = toggleSave;

    function toggleSave() {
      $ctrl.showSave = !$ctrl.showSave;
    }
  }

  angular
      .module('kaboodleme')
      .component('confirm', confirm);
})();
