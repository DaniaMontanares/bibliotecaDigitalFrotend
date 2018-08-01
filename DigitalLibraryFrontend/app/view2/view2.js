'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2/:idPdf', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$http', '$location','$routeParams' ,function($scope, $http, $location, $routeParams) {
	$scope.id_pdf = $routeParams.idPdf;
	console.log("Estoy imprimiento el id del pdf desde la vista 2");
	console.log($routeParams.idPdf);
}]);