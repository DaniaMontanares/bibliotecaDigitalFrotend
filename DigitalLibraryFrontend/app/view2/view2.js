'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2/:idPdf', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$http', '$location','$routeParams' ,function($scope, $http, $location, $routeParams) {
	var id_pdf = $routeParams.idPdf;
	console.log("Estoy imprimiento el id del pdf desde la vista 2");
	//console.log($routeParams.idPdf);

	/*var base_url = "http://localhost:3000/";

	$http({
			method: 'GET',
			url: base_url + "files/document/" + id_pdf
		}).then(function success(response) {
			console.log(response.data);
			$scope.data_pdf = response.data;
		}, function error(response) {
			console.log(response.data.err)
		});*/

}]);