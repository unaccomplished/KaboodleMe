(function() {
  var welcome = {
    templateUrl: 'client/scripts/components/welcome/welcome.html',
    bindings: {},
    controller: welcomeCtrl
  }

  function welcomeCtrl($state) {
    var $ctrl = this;
    $ctrl.pageTitle = _.capitalize($state.current.name);
  }

  angular
      .module('kaboodleme')
      .component('welcome', welcome);
})();
