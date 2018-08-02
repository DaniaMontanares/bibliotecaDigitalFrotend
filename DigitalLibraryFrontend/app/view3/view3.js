'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope', '$http', '$location','$routeParams' ,function($scope, $http, $location, $routeParams) {
	console.log("Estoy en la vista de subir documento");

	var base_url = "http://localhost:3000/";
	
	$scope.guardarDocumento = function(){
		console.log("Estoy en la función guardar documento");


	}

}]);