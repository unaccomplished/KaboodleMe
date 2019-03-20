(function() {
  var career = {
    templateUrl: 'client/scripts/components/career/career.html',
    bindings: {},
    controller: careerCtrl
  }

  function careerCtrl() {
    var $ctrl = this;

    $ctrl.showOption = showOption;
    $ctrl.visibleOptions = null;

    $ctrl.allOptions = {
      career: [
        {
          name: 'Factory Worker'
        },
        {
          name: 'Farmer'
        },
        {
          name: 'Engineer'
        },
        {
          name: 'Ministry of LAWLZ'
        },
        {
          name: 'Ministry of BFFs'
        },
        {
          name: 'Homemaker'
        }
      ]
    }

    function showOption(category) {
      $ctrl.visibleOptions = $ctrl.allOptions[category];
    }
  }

  angular
      .module('kaboodleme')
      .component('career', career);
})();
