(function() {
    function config($locationProvider, $stateProvider, $urlRouterProvider, $authProvider, userProvider) {
        // $locationProvider
        //     .html5Mode({
        //         enabled: true,
        //         requireBase: false
        //     });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'homeCtrl',
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
            })
            .state('update-password', {
                url: '/updatepassword',
                component: 'updatePassword'
            })
            .state('career', {
                url: '/career',
                component: 'career'
            })
            .state('name', {
                url: '/name',
                component: 'name'
            })
            .state('menu', {
                url: '/menu',
                component: 'menu'
            })
            .state('items', {
                url: '/items',
                component: 'items'
            })
            .state('settings', {
                url: '/settings',
                component: 'settings'
            })
            .state('confirm', {
                url: '/confirm',
                component: 'confirm'
            })
            .state('terms', {
                url: '/terms',
                component: 'terms'
            });


        $urlRouterProvider.otherwise('/');

        $authProvider
            .configure({
                apiUrl: '/api',
                authProviderPaths: {
                  facebook: '/auth/facebook',
                  google: '/auth/google_oauth2',
                  twitter: '/auth/twitter'
                },
                storage: 'localStorage',
                handleLoginResponse: function(response) {
                  userProvider.$set(response.data);
                },
                handleAccountUpdateResponse: function(response) {
                  userProvider.$set(response.data);
                },
                handleTokenValidationResponse: function(response) {
                  userProvider.$set(response.data);
                }
            });
    }

    angular
        .module('kaboodleme', ['ui.router', 'ng-token-auth'])
        .config(config);
})();
