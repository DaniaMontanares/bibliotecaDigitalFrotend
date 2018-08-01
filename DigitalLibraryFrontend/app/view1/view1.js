'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {

	$scope.obtenerDatos = function(){
		

		console.log("Holi");

        $scope.datos = data_falsa;
		/**
		$http({
		     method: 'GET',
		     url: "http://localhost:3000/files/data",
		     contentType: "application/x-www-form-urlencoded"
		}).then(function success(response) {
			console.log(response.data)
		}, function error(response) {
			console.log("error")
		});
**/

	}

    var data_falsa = [{"metadata": {
            "title": "Mi nuevo titulo 1",
            "subtitle": "Mi nuevo subtitulo 1",
            "description": "Mi nueva descripción 1",
            "keywords": [
                "nkey1",
                "nkey2",
                "nkey3"
            ],
            "authors": [
                "Mi nuevo autor 1"
            ],
            "contributors": null,
            "organization": null
        }
    },
        {"metadata": {
            "title": "Mi nuevo titulo 2",
            "subtitle": "Mi nuevo subtitulo 2",
            "description": "Mi nueva descripción 2",
            "keywords": [
                "nkey1",
                "nkey2",
                "nkey3"
            ],
            "authors": [
                "Mi nuevo autor 2"
            ],
            "contributors": null,
            "organization": null
        }
    },
    {"metadata": {
            "title": "Mi nuevo titulo 3",
            "subtitle": "Mi nuevo subtitulo 3",
            "description": "Mi nueva descripción 3",
            "keywords": [
                "nkey1",
                "nkey2",
                "nkey3"
            ],
            "authors": [
                "Mi nuevo autor 3"
            ],
            "contributors": null,
            "organization": null
        }
    }
    ]

    $scope.datos = data_falsa

}]);

