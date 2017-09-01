function characterCreator($rootScope) {
  var service = {};
  var charInProgress = {};

  var characterOpts = function() {
    return {
      body_type: [
        {
          name: 'normal',
          src: 'kk_charprep_app1_bodytype_normal_'+(charInProgress.species ? charInProgress.species.name :DEFAULT_SPECIES)+'.png'
        },
        {
          name: 'slim',
          src: 'kk_charprep_app1_bodytype_slim_'+(charInProgress.species ? charInProgress.species.name :DEFAULT_SPECIES)+'.png'
        }
      ],
    species: [
      {
        name: 'Orange',
        src: 'kk_charprep_app1_bodytype_'+(charInProgress.body_type ? charInProgress.body_type.name : DEFAULT_BODY)+'_orange.png'
      },
      {
        name: 'Gray',
        src: 'kk_charprep_app1_bodytype_'+(charInProgress.body_type ? charInProgress.body_type.name : DEFAULT_BODY)+'_gray.png'
      }
    ],
    eye_type: [
      {
        name: 'round',
        src: 'kk_charprep_app1_eyes_round_'+(charInProgress.eye_color ? charInProgress.eye_color.name : DEFAULT_EYE_COLOR)+'.png'
      },
      {
        name: 'slit',
        src: 'kk_charprep_app1_eyes_slit_'+(charInProgress.eye_color ? charInProgress.eye_color.name : DEFAULT_EYE_COLOR)+'.png'
      }
    ],
    eye_color: [
      {
        name: 'green',
        src: 'kk_charprep_app1_eyes_'+(charInProgress.eye_type ? charInProgress.eye_type.name : DEFAULT_EYE_TYPE)+'_green.png'
      },
      {
        name: 'blue',
        src: 'kk_charprep_app1_eyes_'+(charInProgress.eye_type ? charInProgress.eye_type.name : DEFAULT_EYE_TYPE)+'_blue.png'
      },
      {
        name: 'brown',
        src: 'kk_charprep_app1_eyes_'+(charInProgress.eye_type ? charInProgress.eye_type.name : DEFAULT_EYE_TYPE)+'_brown.png'
      }
    ],
    kissiepie: [
      {
        name: 'yeah! (open)',
        src: 'kk_charprep_app1_kissiepie_agape_'+(charInProgress.nose_color ? charInProgress.nose_color.name : DEFAULT_NOSE_COLOR)+'.png'
      },
      {
        name: 'runs out, tongues out',
        src: 'kk_charprep_app1_kissiepie_tongue_'+(charInProgress.nose_color ? charInProgress.nose_color.name : DEFAULT_NOSE_COLOR)+'.png'
      }
    ],
    nose_color: [
      {
        name: 'black',
        src: 'kk_charprep_app1_kissiepie_'+(charInProgress.kissiepie ? charInProgress.kissiepie.name : DEFAULT_KISSIEPIE)+'_black.png'
      },
      {
        name: 'pink',
        src: 'kk_charprep_app1_kissiepie_'+(charInProgress.kissiepie ? charInProgress.kissiepie.name : DEFAULT_KISSIEPIE)+'_pink.png'
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

  function current() {
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
