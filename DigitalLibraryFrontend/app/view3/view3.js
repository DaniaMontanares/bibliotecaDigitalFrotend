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


    // Si quieres, puedes hacer validaciones y wea
    
		const formdata = new FormData();
    if ($scope.tituloDoc != null) formdata.append( "title", $scope.tituloDoc );
		if ($scope.subtituloDoc != null) formdata.append( "subtitle", $scope.subtituloDoc );
		if ($scope.descripcionDoc != null) formdata.append( "description", $scope.descripcionDoc );
		if ($scope.autoresDoc != null) formdata.append( "authors", $scope.autoresDoc );
		if ($scope.palabrasClavesDoc != null) formdata.append( "keywords", $scope.palabrasClavesDoc );
		if ($scope.contribuidoresDoc != null) formdata.append( "contributors", $scope.contribuidoresDoc );
		if ($scope.organizacionDoc != null) formdata.append( "organization", $scope.organizacionDoc );
		if ($scope.myfile != null) formdata.append("file", $scope.myfile);

    $http.post( base_url + "files/upload", formdata, {
			headers: {'Content-Type':undefined},
			transformRequest: angular.identity
		})
		.then(function success(response) {
      // Aqui es cuando el archivo se subio. response.data deberia contener el archivo
			console.log(response.data)
		}, function error(response) {
      // Response.data.err tiene un mensaje de error que puedes desplegar
			console.log(response.data.err)
		});

    // Podrias mostrar una ventanita de espera que se cierre cuando success o error ocurran

	}

}]);
