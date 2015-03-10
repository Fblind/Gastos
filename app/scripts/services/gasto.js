'use strict';

/**
 * @ngdoc service
 * @name gastosApp.gasto
 * @description
 * # gasto
 * Service in the gastosApp.
 */
angular.module('gastosApp')
  .service('gasto', gastoService);

gastoService.$inject = ['Restangular'];
function gastoService(Restangular) {
  var gasto = {};
  var gastos = Restangular.all('gastos');

  function quienes(){
    return ['Vale', 'Facu'];
  }

  function agregarGasto(gasto){
    gastos.post(gasto).then(function(gastoUpdateado){
      console.log(gastoUpdateado);
    });
  }

  function getGastos(){
    //TODO: Usar promises
    return gastos.getList();
  }

  gasto.quienes = quienes;
  gasto.agregarGasto = agregarGasto;
  gasto.getGastos = getGastos;

  return gasto;
};
