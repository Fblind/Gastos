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

gastoService.$inject = ['Restangular', '$q'];
function gastoService(Restangular, $q) {
  var gasto = {};
  var gastos = Restangular.all('gastos');

  //TODO: Que agreguen quienes en gastos
  function quienes(){
    //return gastos.getList('quienes');
    return ['Vale', 'Facu'];
  }

  function agregarGasto(gasto){
    var deferred = $q.defer();
    gastos.post(gasto).then(function(gastoUpdateado){
      deferred.resolve(gastoUpdateado);
    });
    return deferred.promise;
  }

  function getGastos(){
    //TODO: Usar promises
    return gastos.getList();
  }

  function getGasto(id){
    return gastos.get(id);
  }

  function eliminar(id){
    var deferred = $q.defer();

    gastos.get(id).then(function(gasto){
      deferred.resolve(gasto.remove());
    });

    return deferred.promise;

  }

  function guardarGasto(gasto){
    gastos.get(gasto.id).then(function(gastoAGuardar){
      gastoAGuardar.put(gasto);
    });
  }


  gasto.quienes = quienes;
  gasto.agregarGasto = agregarGasto;
  gasto.getGastos = getGastos;
  gasto.getGasto = getGasto;
  gasto.eliminar = eliminar;
  gasto.guardarGasto = guardarGasto;

  return gasto;
};
