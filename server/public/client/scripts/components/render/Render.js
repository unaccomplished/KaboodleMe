(function() {
  var render = {
    templateUrl: 'client/scripts/components/render/render.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: renderCtrl
  }

  function renderCtrl(user) {
    var $ctrl = this;
  }

  angular
      .module('kaboodleme')
      .component('render', render);
})();
