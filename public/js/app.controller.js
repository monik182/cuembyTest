(function () {
    'use strict';
    angular.module('app')
    .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$scope', '$http'];

    function AppCtrl($scope, $http) {
        const vm = this;
        var name = 'Select a student';
        vm.students = [];
        $scope.isCollapsed = true;
        vm.name = name;
        vm.show = false;


        //Llamada a la bd para obtener la lista de los estudiantes
        $http.get('/students').then(function (res) {
            vm.students = res.data;
            //console.log("students", vm.students);
        }, function (err) {
            vm.error = err;
            vm.msg = 'There seems to be a problem. Please, reload the page.';

            console.log("Error", err);
        });


        //Funcion que Calcula el Promedio de las notas
        vm.calculate = function (item, collapsed) {
            if (!collapsed) {
                vm.average = 0;
                vm.class = item.color;
                angular.forEach(item.grades, function(item, index) {
                    vm.average += item;
                });
                vm.average = parseFloat((vm.average / item.grades.length).toFixed(2));
            } else {
                vm.average = '';
                vm.class = 'white';
            }

            vm.setStudent(item, collapsed);
        };


        //Funcion que actualiza el estudiante en la columna de promedios
        vm.setStudent = function(item, collapsed) {
            vm.differentName = item.name != vm.name;
            if (!collapsed) {
                vm.name = item.name;
            } else {
                vm.name = name;
            }
        };








    } //End of AppCtrl
})();
