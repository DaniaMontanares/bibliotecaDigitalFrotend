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
		var tituloDoc2 = $scope.tituloDoc;
		var subtituloDoc2 = $scope.subtituloDoc;
		var descripcionDoc2 = $scope.descripcionDoc;
		var autoresDoc2 = $scope.autoresDoc;
		var palabrasClavesDoc2 = $scope.palabrasClavesDoc;
		var contribuidoresDoc2 = $scope.contribuidoresDoc;
		var organizacionDoc2 = $scope.organizacionDoc;

		console.log([tituloDoc2,subtituloDoc2,descripcionDoc2,autoresDoc2,palabrasClavesDoc2,
			contribuidoresDoc2,organizacionDoc2]);

		console.log("Estoy en la función guardar documento");


	}

}]);