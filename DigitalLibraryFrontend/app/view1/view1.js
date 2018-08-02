'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  }).when('/view2/:idPdf',{
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', '$location' ,function($scope, $http,$location) {

    var base_url = "http://localhost:3000/";

	$scope.filtrarDatos = function(){
		
        var datoBuscador = document.getElementById("miBuscador").value;
		console.log("Holi");
        console.log(datoBuscador);

        //var my_filter = "key1 key4"
        var my_filter = datoBuscador;
        $http({
             method: 'GET',
             url: base_url + "files/data",
             params: {
                filter : my_filter
             }
        }).then(function success(responseF) {
            $scope.datos = responseF.data;
            console.log(responseF.data)
        }, function error(responseF) {
            console.log(responseF.data.err)
        });
        

        //$scope.datos = data_falsa;
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
    $scope.seleccionarDocumento=function(id){
        var id_pdf=id;
        $http({
            method: 'GET',
            url: base_url + "files/data/" + id_pdf
        }).then(function success(response3) {
            $scope.tituloDoc = response3.data.metadata.title;
            console.log(response3.data.metadata.title);
            console.log("Estoy imprimiendo el id del pdf desde el metodo get");
            console.log(response3.data._id)
        }, function error(response3) {
            console.log(response3.data.err)
        });

        $location.url('/view2/'+id_pdf);

    }

    $scope.agregarDocumento=function(){
        $location.url('/view3');
    }

    /*var data_falsa = [{"metadata": {
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

    $scope.datos = data_falsa*/

    //Método get para mostrar la lista de documentos en la base de datos.
    $http({
             method: 'GET',
             url: base_url + "files/data"
        }).then(function success(response) {
            $scope.datos = response.data;
            console.log(response.data)
        }, function error(response) {
            console.log(response.data.err)
        });

}]);

