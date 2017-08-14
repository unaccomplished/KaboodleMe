(function() {
  var confirm = {
    templateUrl: 'client/scripts/components/confirm/confirm.html',
    bindings: {},
    controller: confirmCtrl
  }

  function confirmCtrl() {
    var $ctrl = this;
  }

  angular
      .module('kaboodleme')
      .component('confirm', confirm);
})();
