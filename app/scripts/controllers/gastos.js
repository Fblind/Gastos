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
  vm.gastosActuales = gastosActuales;
}
