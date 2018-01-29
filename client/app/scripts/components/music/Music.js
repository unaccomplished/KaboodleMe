(function() {
  var music = {
    templateUrl: 'client/scripts/components/music/music.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: musicCtrl
  }

  function musicCtrl() {
    var $ctrl = this;

  }

  angular
      .module('kaboodleme')
      .component('music', music);
})();
