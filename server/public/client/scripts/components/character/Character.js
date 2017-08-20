(function() {
  var character = {
    templateUrl: 'client/scripts/components/character/character.html',
    bindings: {},
    controller: characterCtrl
  }

  function characterCtrl() {
    var $ctrl = this;

    $ctrl.visibleOptions = null;

    $ctrl.allOptions = {
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
          name: 'yellow'
        },
        {
          name: 'green'
        },
        {
          name: 'blue'
        },
        {
          name: 'black'
        },
        {
          name: 'brown'
        },
        {
          name: 'orange'
        }
      ],
      eye_type: [
        {
          name: 'normal/smart'
        },
        {
          name: 'walleyed'
        },
        {
          name: 'crosseyed'
        },
        {
          name: 'evil/slitted'
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
          name: 'biskit'
        },
        {
          name: 'normal'
        },
        {
          name: 'slim'
        },
        {
          name: 'tall'
        },
        {
          name: 'roundy'
        },
        {
          name: 'bigboi'
        }
      ]
    }

  }

  angular
      .module('kaboodleme')
      .component('character', character);
})();
