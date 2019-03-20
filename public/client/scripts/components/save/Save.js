(function() {
  var save = {
    templateUrl: 'client/scripts/components/save/save.html',
    bindings: {
      onToggleSave: '&?'
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
