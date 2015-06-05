// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.lists', {
        url: '/lists',
        views: {
            'menuContent': {
                templateUrl: 'templates/lists.html',
                controller: 'ListsCtrl'
            }
        }
    })

    .state('app.ink', {
        url: '/ink',
        views: {
            'menuContent': {
                templateUrl: 'templates/ink.html',
                controller: 'InkCtrl'
            }
        }
    })
    .state('app.tips', {
        url: '/tips',
        views: {
            'menuContent': {
                templateUrl: 'templates/tips.html',
                controller: 'TipsCtrl'
            }
        }
    })
    .state('app.yoga1', {
        url: '/yoga1',
        views: {
            'menuContent': {
                templateUrl: 'templates/yoga1.html',
                controller: 'Yoga1Ctrl'
            }
        }
    })
    
    .state('app.friends', {
        url: '/friends',
        views: {
            'menuContent': {
                templateUrl: 'templates/friends.html',
                
            }
        }
    })
    .state('app.yogamain', {
        url: '/yogamain',
        views: {
            'menuContent': {
                templateUrl: 'templates/yogamain.html',
                
            }
        }
    })
    .state('app.chakrasana', {
        url: '/chakrasana',
        views: {
            'menuContent': {
                templateUrl: 'templates/chakrasana.html',
                
            }
        }
    })
    .state('app.utkatasana', {
        url: '/utkatasana',
        views: {
            'menuContent': {
                templateUrl: 'templates/utkatasana.html',
                
            }
        }
    })
    .state('app.csyoga', {
        url: '/csyoga',
        views: {
            'menuContent': {
                templateUrl: 'templates/csyoga.html',
                
            }
        }
    })
    .state('app.yoga', {
        url: '/yoga',
        views: {
            'menuContent': {
                templateUrl: 'templates/yoga.html',
                
            }
        }
    })
     .state('app.feedback', {
        url: '/feedback',
        views: {
            'menuContent': {
                templateUrl: 'templates/feedback.html',
                
            }
        }
    })
     .state('app.previous', {
        url: '/previous',
        views: {
            'menuContent': {
                templateUrl: 'templates/previous.html',
                
            }
        }
    })
     
    .state('app.motion', {
        url: '/motion',
        views: {
            'menuContent': {
                templateUrl: 'templates/motion.html',
                controller: 'MotionCtrl'
            }
        }
    })
    
    .state('app.components', {
        url: '/components',
        views: {
            'menuContent': {
                templateUrl: 'templates/components.html',
                controller: 'ComponentsCtrl'
            }
        }
    })

    .state('app.extensions', {
        url: '/extensions',
        views: {
            'menuContent': {
                templateUrl: 'templates/extensions.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/components');
});
