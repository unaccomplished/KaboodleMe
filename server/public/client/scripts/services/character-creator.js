function characterCreator($rootScope, $http) {
  var service = {};
  var charInProgress = {};

  var characterOpts = function() {
    // return $http.get('/api/v1/traits')
    //   .then(function(resp) {
    //     return resp.data;
    //     console.log(resp.data);
    //   })
    // $http.get('/api/v1/traits')
    //   .then(function(resp) {
    //     return resp.data;
    //   })
    // should look like the above, follow what we did for Render


      // Traits index controller rails
    // return {
    //   body_type: [
    //     {name: 'norm'},
    //     {name: 'slim'}
    //   ],
    //   species: [
    //     {name: 'orange'},
    //     {name: 'gray'}
    //   ],
    //   eye_type: [
    //     {name: 'round'},
    //     {name: 'slit'}
    //   ],
    //   eye_color: [
    //     {name: 'green'},
    //     {name: 'blue'},
    //     {name: 'brown'}
    //   ],
    //   kissiepie: [
    //     {name: 'agape'},
    //     {name: 'tongue'}
    //   ],
    //   nose_color: [
    //     {name: 'black'},
    //     {name: 'pink'}
    //   ]
    // };
  };

  // var DEFAULT_BODY = characterOpts().body_type[0];
  // var DEFAULT_SPECIES = characterOpts().species[0];
  // var DEFAULT_EYE_TYPE = characterOpts().eye_type[0];
  // var DEFAULT_EYE_COLOR = characterOpts().eye_color[0];
  // var DEFAULT_KISSIEPIE = characterOpts().kissiepie[0];
  // var DEFAULT_NOSE_COLOR = characterOpts().nose_color[0];

  var charInProgress = {
    // $http.get('/api/v1/characters')
    //   .then(function(resp) {
    //     charInProgress = set_defaults(resp);
    //   })
    // body_type: DEFAULT_BODY,
    // species: DEFAULT_SPECIES,
    // eye_type: DEFAULT_EYE_TYPE,
    // eye_color: DEFAULT_EYE_COLOR,
    // kissiepie: DEFAULT_KISSIEPIE,
    // nose_color: DEFAULT_NOSE_COLOR
  };

  service.updateChar = updateChar;
  service.current = current;
  service.fetchOptions = fetchOptions;

  initCharacter();

  function initCharacter() {
    current();
  }

  function updateChar(character) {
    //Charcter controller needs update method
    charInProgress = _.extend(charInProgress, character);
    return $http.post('/api/v1/character', charInProgress)
      .then(function(data) {
        // data should be the entire character just like character GET/show
        console.log(data)
        charInProgress = data;
        $rootScope.$broadcast('character.update');
        return charInProgress;
      });
  }

  function formatCharProps(char) {
    console.log(char)
    char.body_type.src = 'assets/kitten_parts/bodies/'+char.body_type.name+'/'+char.species.name+'.png';
    char.eye_type.src = 'assets/kitten_parts/eyes/'+char.eye_color.name+'/'+char.body_type.name+'_'+char.eye_type.name+'.png';
    char.kissiepie.src = 'assets/kitten_parts/kissiepie/'+char.kissiepie.name+'/'+char.body_type.name+'_'+char.nose_color.name+'.png';
    return char;
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
