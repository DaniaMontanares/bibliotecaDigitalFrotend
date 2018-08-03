'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope', '$http', '$location','$routeParams',
	function($scope, $http, $location, $routeParams  ) {

	console.log("Estoy en la vista de subir documento");

	var base_url = "http://localhost:3000/";


	$scope.guardarDocumento = function(){


		console.log($scope.myfile);

		/**
		var doc = new FormData();

		console.log($scope.tituloDoc);
		doc.append( "title", $scope.tituloDoc );
		doc.append( "subtitle", $scope.subtituloDoc );
		doc.append( "description", $scope.descripcionDoc );
		doc.append( "authors", $scope.autoresDoc );
		doc.append( "keywords", $scope.palabrasClavesDoc );
		doc.append( "contributors", $scope.contribuidoresDoc );
		doc.append( "organization", $scope.organizacionDoc );
		doc.append( "file", $scope.myfile );

		var url = base_url + "files/upload/";

		console.log(doc);
		**/

		const formdata = new FormData();

		formdata.append("file", $scope.myfile);
		formdata.append("title", "titulo prueba");

		$http.post( base_url + "files/upload", formdata, {
			withCredentials: true,
			headers: {'Content-Type':undefined},
			transformRequest: angular.identity
		})
		.then(function success(response) {
			console.log("Success")
		}, function error(response) {
			console.log("Error")
		});

	   console.log("Estoy en la función guardar documento");

		
	}

}]);