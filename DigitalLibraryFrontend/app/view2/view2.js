'use strict';
angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2/:idPdf', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$http', '$location','$routeParams', '$sce' ,
function($scope, $http, $location, $routeParams, $sce) {
	var id_pdf = $routeParams.idPdf;
	console.log("Estoy imprimiento el id del pdf desde la vista 2");
	console.log(id_pdf);

	$scope.condition=true;

	var base_url = "http://localhost:3000/";

	$http({
	   method : "GET",
       url: base_url + "files/document/" + id_pdf,
       responseType : 'arraybuffer',
       headers: {accept: 'application/pdf' },
       cache: true,
	}).then(function success(response){
		var file = new Blob([response.data], {type: 'application/pdf'});
		var fileURL = URL.createObjectURL(file);
		console.log(fileURL);
		$scope.content = $sce.trustAsResourceUrl(fileURL);
		$scope.condition=false;
	});

	

}]);