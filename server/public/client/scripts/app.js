(function() {
    function config($locationProvider, $stateProvider, $urlRouterProvider) {
        // $locationProvider
        //     .html5Mode({
        //         enabled: true,
        //         requireBase: false
        //     });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl',
                controllerAs: '$ctrl',
                templateUrl: 'client/scripts/views/home/home.html'
            });


        $urlRouterProvider.otherwise('/');
    }

    angular
        .module('kaboodleme', ['ui.router'])
        .config(config);
})();
