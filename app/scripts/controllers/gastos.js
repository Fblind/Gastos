'use strict';

/**
 * @ngdoc function
 * @name gastosApp.controller:GastosCtrl
 * @description
 * # GastosCtrl
 * Controller of the gastosApp
 */

angular.module('gastosApp')
  .controller('GastosCtrl', gastoController);

gastoController.$inject = ['gasto', 'gastosActuales'];

function gastoController(gasto, gastosActuales){
  var vm = this;

  //TODO: Quienes tendria que venir en el resolve
  vm.quienes = gasto.quienes();
  vm.crearNuevo = crearNuevo;
  //vm.gastosActuales = gastosActuales;

  //TODO: Hacer test con esto
  vm.gastosActuales = [
    {
      nombreProducto: 'Producto',
      fecha: new Date(),
      lugar: 'el chino',
      precio: 13.2,
      quien: 'Facu'
    },
    {
      nombreProducto: 'AProducto1',
      fecha: new Date(),
      lugar: 'changomas',
      precio: 45.2,
      quien: 'Vale'
    }
  ];

  function crearNuevo(gastoACrear){
    console.log('gasto', gastoACrear);
    gasto.agregarGasto(gastoACrear);
  }

}
