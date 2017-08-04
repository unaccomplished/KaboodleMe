(function() {
  var character = {
    templateUrl: 'client/scripts/components/character/character.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: characterCtrl
  }

  function characterCtrl(user) {
    var $ctrl = this;

    this.status = {
      isopen: false
    };

    this.toggled = function(open) {
      $log.log('Dropdown is now: ', open);
    };

    this.toggleDropdown = function(event) {
      $event.preventDefault();
      $event.stopPropagation();
      this.status.isopen = !this.status.isopen;
    };

  }

  angular
      .module('kaboodleme')
      .component('character', character);
})();
