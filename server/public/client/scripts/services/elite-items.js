function eliteItems($rootScope) {
  var service = {};
  var charInProgress = {};

  var itemOpts = function() {
    return {
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
    };
  };


  service.updateChar = updateChar;
  service.current = current;
  service.fetchOptions = fetchOptions;

  function updateChar(character) {
    charInProgress = _.extend(charInProgress, character);
    $rootScope.$broadcast('character.update');
    console.log(charInProgress)
    return current();
  }

  function current() {
    return charInProgress;
  }

  function fetchOptions() {
    // EVentually this will return this data from the server
    // via an ajax ($http) request
    return itemOpts();
  }

  return service;
}
angular
  .module('kaboodleme')
  .factory('eliteItems', eliteItems);