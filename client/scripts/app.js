(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl',
                controllerAs: '$ctrl',
                templateUrl: 'scripts/views/home/home.html'
            });
    }

    angular
        .module('kaboodleme', ['ui.router'])
        .config(config);
})();
