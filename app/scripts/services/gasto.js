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

  //TODO: Que agreguen quienes en gastos
  function quienes(){
    //return gastos.getList('quienes');
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

  function getGasto(id){
    return gastos.get(id);
  }

  gasto.quienes = quienes;
  gasto.agregarGasto = agregarGasto;
  gasto.getGastos = getGastos;
  gasto.getGasto = getGasto;

  return gasto;
};
