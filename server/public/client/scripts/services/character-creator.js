function characterCreator($rootScope, $http) {
  var service = {};
  var charInProgress = {};

  service.updateChar = updateChar;
  service.current = current;
  service.fetchOptions = fetchOptions;

  initCharacter();

  function initCharacter() {
    current();
  }

  function updateChar(traits) {
    //Charcter controller needs update method
    return $http.put('/api/v1/characters/'+charInProgress.id, { traits: traits })
      .then(function(data) {
        // data should be the entire character just like character GET/show
        console.log(data)
        charInProgress = data;
        $rootScope.$broadcast('character.update');
        return charInProgress;
      });
  }

  function current() {
    return $http.get('/api/v1/characters')
      .then(function(resp) {
        charInProgress = resp.data;
        //resp.data.sources.body_type => .png of the body type
        console.log(charInProgress);
        return charInProgress;
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
