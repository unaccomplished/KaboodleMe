(function() {
  var save = {
    templateUrl: 'client/scripts/components/save/save.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: saveCtrl
  }

  function saveCtrl() {
    var $ctrl = this;

  }

  angular
      .module('kaboodleme')
      .component('save', save);
})();
