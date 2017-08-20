(function() {
  var terms = {
    templateUrl: 'client/scripts/components/terms/terms.html',
    bindings: {},
    controller: termsCtrl
  }

  function termsCtrl() {
    var $ctrl = this;

  }

  angular
      .module('kaboodleme')
      .component('terms', terms);
})();
