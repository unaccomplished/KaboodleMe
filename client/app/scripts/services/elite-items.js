function eliteItems($rootScope) {
  var service = {};

  service.fetchItems = fetchItems;
  service.buyItems = buyItems;

  function fetchItems() {
    return {
      cloak: {
          purchased: true,
          price: '99'
      },
      trenchcoat: {
          purchased: false,
          price: '33'
        }
    };
  }

  function fetchUserItems() {
    return {
      cloak: {
          purchased: true,
          price: '99'
        }
    };
  }

  function buyItem(names) {
    //Call to server
  }


  return service;
}
angular
  .module('kaboodleme')
  .factory('eliteItems', eliteItems);
