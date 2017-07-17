(function() {
    function config($locationProvider, $stateProvider, $urlRouterProvider, $authProvider) {
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
            })
            .state('dashboard', {
                url: '/dashboard',
                component: 'dashboard',
                resolve: {
                  auth: function($auth) {
                    return $auth.validateUser();
                  }
                }
            })
            .state('login', {
                url: '/login',
                component: 'userLogin'
            });


        $urlRouterProvider.otherwise('/');

        $authProvider
            .configure({
                apiUrl: '/api'
            });
    }

    angular
        .module('kaboodleme', ['ui.router', 'ng-token-auth'])
        .config(config);
})();
