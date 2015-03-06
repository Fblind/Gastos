'use strict';

/**
 * @ngdoc service
 * @name gastosApp.gasto
 * @description
 * # gasto
 * Service in the gastosApp.
 */
angular.module('gastosApp')
  .service('gasto', function () {
    var gasto = {};
    var gastos = [];

    function quienes(){
      return ['Vale', 'Facu'];
    }

    function agregarGasto(gasto){
      gastos.push(gasto);
    }

    function getGastos(){
      return gastos;
    }

    gasto.quienes = quienes;
    gasto.agregarGasto = agregarGasto;
    gasto.getGastos = getGastos;
    return gasto;

  });
