(function() {
  var store = {
    templateUrl: 'client/scripts/components/store/store.html',
    bindings: {
      onBackButton: '&?',
      onShowCart: '&?'
    },
    controller: storeCtrl
  }

  function storeCtrl() {
    var $ctrl = this;

    $ctrl.allOptions = {
      outfits: [
        {
          name: 'cloak'
        },
        {
          name: 'trenchcoat'
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
      special_item: [
        {
          name: 'brown boots'
        },
        {
          name: 'red boots'
        }
      ]
    }

  }

  angular
      .module('kaboodleme')
      .component('store', store);
})();
