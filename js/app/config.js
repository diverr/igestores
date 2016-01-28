function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider) {

    // Configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(120); // in seconds

    $urlRouterProvider.otherwise("/app/calendar");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider
        
        .state('app', {
            abstract: true,
            url: "/app",
            templateUrl: "views/common/content.html",
        })
        .state('app.calendar', {
            url: "/calendar",
            templateUrl: "views/calendar.html",
            data: { pageTitle: 'Calendario de Citas' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            insertBefore: '#loadBefore',
                            files: ['css/plugins/fullcalendar/fullcalendar.css','js/plugins/fullcalendar/fullcalendar.min.js','js/plugins/fullcalendar/gcal.js']
                        },
                        {
                            name: 'ui.calendar',
                            files: ['js/plugins/fullcalendar/calendar.js']
                        }
                    ]);
                }
            }
        })

        .state('chats', {
            abstract: true,
            url: "/chats",
            templateUrl: "views/common/content.html",
        })
        
        .state('chats.index', {
            url: "/index",
            templateUrl: "views/chats.html",
            data: { pageTitle: 'Conversaciones' }
        })

        .state('chats.view', {
            url: "/view/:id",
            templateUrl: "views/chat_view.html",
            data: { pageTitle: 'Conversaciones' }
        })

        .state('meetings', {
            abstract: true,
            url: "/meetings",
            templateUrl: "views/common/content.html",
        })
        .state('meetings.index', {
            url: "/index",
            templateUrl: "views/meetings.html",
            data: { pageTitle: 'Citas' }
        })
        .state('meetings.new', {
            url: "/new",
            templateUrl: "views/meetings_new.html",
            data: { pageTitle: 'Citas' }
        })

        .state('login', {
            url: "/login",
            templateUrl: "views/login.html",
            data: { pageTitle: 'Login', specialClass: 'gray-bg' }
        })
        .state('forgot_password', {
            url: "/forgot_password",
            templateUrl: "views/forgot_password.html",
            data: { pageTitle: 'Forgot password', specialClass: 'gray-bg' }
        })

}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });