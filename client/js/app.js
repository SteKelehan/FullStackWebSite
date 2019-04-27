// these are all the dependeses you need ng-route, ui.bootstrap etc(see in doc when you install pakage)
myApp = angular.module("myApp", [
    'ngRoute',
    'ui.bootstrap'
]).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    // when a user navigate to home it will render the page home.html and the html will be controlled by the controller
    $routeProvider.when('/home', { templateUrl: 'partials/home.html', controller: 'homeController' })
    $routeProvider.when('/about', { templateUrl: 'partials/about.html', controller: 'aboutController' })
    $routeProvider.when('/contact', { templateUrl: 'partials/contact.html', controller: 'contactController' })
    // if user goes anywhere else bring back to home
    $routeProvider.otherwise({ redirectTo: '/home' });

    // Make the URL's without the #
    $locationProvider.html5Mode({ enabled: true, requireBase: false })
}])