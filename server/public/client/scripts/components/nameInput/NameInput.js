(function() {
  var nameInput = {
    templateUrl: 'client/scripts/components/nameInput/name-input.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: nameInputCtrl
  }

  function nameInputCtrl() {
    var $ctrl = this;

  }

  angular
      .module('kaboodleme')
      .component('nameInput', nameInput);
})();
