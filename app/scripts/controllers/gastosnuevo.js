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

gastoNuevoController.$inject = ['gasto', 'quienes'];
function gastoNuevoController(gasto, quienes){

  var vm = this;
  vm.quienes = quienes;
  vm.crearNuevo = crearNuevo;

  function crearNuevo(gastoACrear){
    console.log('gasto', gastoACrear);
    gasto.agregarGasto(gastoACrear);
  }

}


