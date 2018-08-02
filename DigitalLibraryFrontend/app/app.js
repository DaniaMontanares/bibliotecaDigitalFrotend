'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

/*.config(function($routeProvider,$locationProvider){
	$routeProvider.when('/view1',{
		templateUrl: "app/view1/view1.html",
		controller: "view1.js"
	})
})*/