'use strict';

/**
 * @ngdoc function
 * @name gastosApp.controller:GastosnuevoCtrl
 * @description
 * # GastosnuevoCtrl
 * Controller of the gastosApp
 */
angular.module('gastosApp')
  .controller('GastosnuevoCtrl', gastoNuevoController);

gastoNuevoController.$inject = ['gasto', 'quienes', '$location'];
function gastoNuevoController(gasto, quienes, $location){

  var vm = this;
  vm.quienes = quienes;
  vm.crearNuevo = crearNuevo;

  function crearNuevo(gastoACrear){
    gasto.agregarGasto(gastoACrear).then(function(gastoCreado){
      $location.path('/gastos/' + gastoCreado.id);
    });
  }

}
