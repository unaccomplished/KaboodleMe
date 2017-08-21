(function() {
  var elite = {
    templateUrl: 'client/scripts/components/elite/elite.html',
    bindings: {},
    controller: eliteCtrl
  }

  function eliteCtrl() {
    var $ctrl = this;

    $ctrl.showElite = false;
    $ctrl.toggleElite = toggleElite;
    $ctrl.showOption = showOption;
    $ctrl.visibleOptions = null;

    $ctrl.allOptions = {
      outfits: [
        {
          name: 'cowboy'
        },
        {
          name: 'business suit'
        },
        {
          name: 'dunce cap'
        },
        {
          name: 'maid'
        },
        {
          name: 'big big muscles'
        },
        {
          name: 'dress'
        },
        {
          name: 'jumpers'
        },
        {
          name: 'mariachi'
        },
        {
          name: 'pirate'
        },
        {
          name: 'ninja'
        }
      ],
      left_hand: [
        {
          name: 'briefcase'
        },
        {
          name: 'ID'
        },
        {
          name: 'ice cream cone'
        },
        {
          name: 'slingshot'
        },
        {
          name: 'pencil'
        },
        {
          name: 'ball'
        },
        {
          name: 'sign'
        }
      ],
      right_hand: [
        {
          name: 'briefcase'
        },
        {
          name: 'ID'
        },
        {
          name: 'ice cream cone'
        },
        {
          name: 'slingshot'
        },
        {
          name: 'pencil'
        },
        {
          name: 'ball'
        },
        {
          name: 'sign'
        }
      ],
      hover_companion: [
        {
          name: 'mouse'
        },
        {
          name: 'mini-biskit'
        },
        {
          name: 'drone'
        },
        {
          name: 'kite'
        },
        {
          name: 'butterfly'
        },
        {
          name: 'bee'
        },
        {
          name: 'tail bow'
        }
      ]
    }

    function showOption(category) {
      toggleElite();
      $ctrl.visibleOptions = $ctrl.allOptions[category];
      console.log(category, $ctrl.visibleOptions)
    }

    function toggleElite() {
      $ctrl.showElite = !$ctrl.showElite;
    }

  }

  angular
      .module('kaboodleme')
      .component('elite', elite);
})();
