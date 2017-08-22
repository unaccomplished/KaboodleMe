function characterCreator($rootScope) {
  var service = {};
  var charInProgress = {};

  var characterOpts = function() {
    return {
    gender: [
      {
        name: 'male'
      },
      {
        name: 'female'
      },
      {
        name: 'royalty'
      }
    ],
    species: [
      {
        name: 'Siamese'
      },
      {
        name: 'Persian'
      },
      {
        name: 'Abyssinian'
      },
      {
        name: 'Ragamuffin'
      },
      {
        name: 'Main Coon'
      },
      {
        name: 'Ragdoll'
      },
      {
        name: 'American Shorthair'
      },
      {
        name: 'Tonkinese'
      },
      {
        name: 'Russian Blue'
      },
      {
        name: 'Bengal'
      },
      {
        name: 'Scottish Fold'
      },
      {
        name: 'British Shorthair'
      },
      {
        name: 'Siberian'
      },
      {
        name: 'Exotic'
      },
      {
        name: 'Himalayan'
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
    nose_color: [
      {
        name: 'grey'
      },
      {
        name: 'red'
      },
      {
        name: 'pink'
      },
      {
        name: 'copper'
      },
      {
        name: 'black'
      }
    ],
    kissiepie_mouth_nose: [
      {
        name: 'rest'
      },
      {
        name: 'smile'
      },
      {
        name: 'yeah! (open)'
      },
      {
        name: 'smile-cry'
      },
      {
        name: "m'lady/smirk"
      },
      {
        name: 'runs out, tongues out'
      },
      {
        name: 'o-face'
      },
      {
        name: 'jowls'
      }
    ],
    body_type: [
      {
        name: 'biskit',
        src: 'kk_charprep_app1_bodytype_evansGRAY.png'
      },
      {
        name: 'normal',
        src: 'kk_charprep_app1_bodytype_evansORANGE.png'
      },
      {
        name: 'slim',
        src: 'kk_charprep_app1_bodytype_kittyGRAY.png'
      },
      {
        name: 'tall',
        src: 'kk_charprep_app1_bodytype_kittyOyGRAY.png'
      },
      {
        name: 'roundy',
        src: 'kk_charprep_app1_bodytype_evansGRAY.png'
      },
      {
        name: 'bigboi',
        src: 'kk_charprep_app1_bodytype_evansORANGE.png'
      }
    ]
  };
};

  var DEFAULT_BODY = characterOpts().body_type[0];
  var DEFAULT_EYE_TYPE = characterOpts().eye_type[0];
  var DEFAULT_EYE_COLOR = characterOpts().eye_color[0];

  var charInProgress = {
    body_type: DEFAULT_BODY,
    eye_type: DEFAULT_EYE_TYPE,
    eye_color: DEFAULT_EYE_COLOR,
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
