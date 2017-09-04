function characterCreator($rootScope) {
  var service = {};
  var charInProgress = {};

  var characterOpts = function() {
    return {
      body_type: [
        {
          name: 'norm',
          src: 'kk_kmchar2_norm_'+(charInProgress.species ? charInProgress.species.name : 'orange')+'.png'
        },
        {
          name: 'slim',
          src: 'kk_kmchar2_slim_'+(charInProgress.species ? charInProgress.species.name : 'orange')+'.png'
        }
      ],
    species: [
      {
        name: 'orange',
        src: 'kk_kmchar2_'+(charInProgress.body_type ? charInProgress.body_type.name : 'norm')+'_orange.png'
      },
      {
        name: 'gray',
        src: 'kk_kmchar2_'+(charInProgress.body_type ? charInProgress.body_type.name : 'norm')+'_gray.png'
      }
    ],
    eye_type: [
      {
        name: 'round',
        src: 'kk_kmchar2_'+(charInProgress.body_type ? charInProgress.body_type.name : 'norm')+'_round_'+(charInProgress.eye_color ? charInProgress.eye_color.name : 'blue')+'.png'
      },
      {
        name: 'slit',
        src: 'kk_kmchar2_'+(charInProgress.body_type ? charInProgress.body_type.name : 'norm')+'_slit_'+(charInProgress.eye_color ? charInProgress.eye_color.name : 'blue')+'.png'
      }
    ],
    eye_color: [
      {
        name: 'green',
        src: 'kk_kmchar2_'+(charInProgress.body_type ? charInProgress.body_type.name : 'norm')+'_'+(charInProgress.eye_type ? charInProgress.eye_type.name : 'round')+'_green.png'
      },
      {
        name: 'blue',
        src: 'kk_kmchar2_'+(charInProgress.body_type ? charInProgress.body_type.name : 'norm')+'_'+(charInProgress.eye_type ? charInProgress.eye_type.name : 'round')+'_blue.png'
      },
      {
        name: 'brown',
        src: 'kk_kmchar2_'+(charInProgress.body_type ? charInProgress.body_type.name : 'norm')+'_'+(charInProgress.eye_type ? charInProgress.eye_type.name : 'round')+'_brown.png'
      }
    ],
    kissiepie: [
      {
        name: 'agape',
        src: 'kk_kmchar2_'+(charInProgress.body_type ? charInProgress.body_type.name : 'norm')+'_agape_'+(charInProgress.nose_color ? charInProgress.nose_color.name : 'black')+'.png'
      },
      {
        name: 'tongue',
        src: 'kk_kmchar2_'+(charInProgress.body_type ? charInProgress.body_type.name : 'norm')+'_tongue_'+(charInProgress.nose_color ? charInProgress.nose_color.name : 'black')+'.png'
      }
    ],
    nose_color: [
      {
        name: 'black',
        src: 'kk_kmchar2_'+(charInProgress.body_type ? charInProgress.body_type.name : 'norm')+'_'+(charInProgress.kissiepie ? charInProgress.kissiepie.name : 'agape')+'_black.png'
      },
      {
        name: 'pink',
        src: 'kk_kmchar2_'+(charInProgress.body_type ? charInProgress.body_type.name : 'norm')+'_'+(charInProgress.kissiepie ? charInProgress.kissiepie.name : 'agape')+'_pink.png'
      }
    ]
  };
};

  var DEFAULT_BODY = characterOpts().body_type[0];
  var DEFAULT_SPECIES = characterOpts().species[0];
  var DEFAULT_EYE_TYPE = characterOpts().eye_type[0];
  var DEFAULT_EYE_COLOR = characterOpts().eye_color[0];
  var DEFAULT_KISSIEPIE = characterOpts().kissiepie[0];
  var DEFAULT_NOSE_COLOR = characterOpts().nose_color[0];

  var charInProgress = {
    body_type: DEFAULT_BODY,
    species: DEFAULT_SPECIES,
    eye_type: DEFAULT_EYE_TYPE,
    eye_color: DEFAULT_EYE_COLOR,
    kissiepie: DEFAULT_KISSIEPIE,
    nose_color: DEFAULT_NOSE_COLOR,
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

  function formatEyeSrc() {
    charInProgress.eye_src = 'kk_kmchar2_' +
    (charInProgress.body_type ? charInProgress.body_type.name : 'norm') +
    '_' +
    (charInProgress.eye_type ? charInProgress.eye_type.name : 'round') +
    '_' +
    (charInProgress.eye_color ? charInProgress.eye_color.name : 'blue') +
    '.png';
  }

  function current() {
    formatEyeSrc();
    return charInProgress;
  }

  function fetchOptions() {
    // EVentually this will return this data from the server
    // via an ajax ($http) request
    return characterOpts();
  }

  return service;
}
angular
  .module('kaboodleme')
  .factory('characterCreator', characterCreator);
