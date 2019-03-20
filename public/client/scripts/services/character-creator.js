function characterCreator($rootScope, $http) {
  var service = {};
  var character = {};

  service.updateChar = updateChar;
  service.current = current;
  service.fetchOptions = fetchOptions;
  service.getTraitFromType = getTraitFromType;

  initCharacter();

  function initCharacter() {
    current();
  }

  function getTraitFromType(type) {
    return _.find(character.traits, function(trait){return trait.trait_type === type});
  }

  function updateChar(traits) {
    //Charcter controller needs update method
    return $http.put('/api/v1/characters/'+character.id, { traits: traits })
      .then(function(data) {
        // data should be the entire character just like character GET/show
        console.log(data)
        character = data;
        $rootScope.$broadcast('character.update');
        return character;
      });
  }

  function current() {
    return $http.get('/api/v1/characters')
      .then(function(resp) {
        character = resp.data;
        //resp.data.sources.body_type => .png of the body type
        console.log(character);
        return character;
      })
  }

  function fetchOptions() {
    return $http.get('/api/v1/traits')
      .then(function(resp) {
        return resp.data;
        console.log(resp.data);
      })
  }

  return service;
}
angular
  .module('kaboodleme')
  .factory('characterCreator', characterCreator);
