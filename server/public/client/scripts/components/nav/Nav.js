(function() {
  var nav = {
    templateUrl: 'client/scripts/components/nav/nav.html',
    bindings: {},
    controller: navCtrl
  }

  function navCtrl($state) {
    var $ctrl = this;
    $ctrl.pageTitle = _.capitalize($state.current.name);
  }

  angular
      .module('kaboodleme')
      .component('nav', nav);
})();
