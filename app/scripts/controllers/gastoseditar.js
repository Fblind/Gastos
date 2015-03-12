'use strict';

/**
 * @ngdoc function
 * @name gastosApp.controller:GastoseditarCtrl
 * @description
 * # GastoseditarCtrl
 * Controller of the gastosApp
 */
angular.module('gastosApp')
  .controller('GastoseditarCtrl', gastoEditarController);

gastoEditarController.$inject = ['gastoActual', 'productosActuales', 'producto', 'quienes', 'gasto', '$location']
function gastoEditarController(gastoActual, productosActuales, producto, quienes, gasto, $location) {
  var vm = this;
  vm.gasto = gastoActual;
  vm.productos = productosActuales;
  vm.quienes = quienes;
  vm.agregarProducto = agregarProducto;
  vm.guardarProducto = guardarProducto;
  vm.eliminarProducto = eliminarProducto;
  vm.eliminarGasto = eliminarGasto;
  vm.guardarGasto = guardarGasto;

  function guardarProducto(productoAGuardar, id){

    if(_.isUndefined(id)){
      productoAGuardar.gasto_id = vm.gasto.id;
      producto.agregarProducto(productoAGuardar).then(function(productoGuardado){
        productoAGuardar.id = productoGuardado.id;
      });
    }else{
      producto.modificarProducto(id, productoAGuardar);
    }
  }

  function eliminarProducto(index, id){
    //TODO: Que pregunte antes de eliminar
    if(!_.isUndefined(id)) {
      producto.eliminarProducto(id);
    }
    vm.productos.splice(index, 1);
  }

  function agregarProducto(){
    vm.productoAInsertar = {
      nombre: '',
      fecha: '',
      precio: ''
    };
    vm.productos.push(vm.productoAInsertar);
  }

  function eliminarGasto(id){
    gasto.eliminar(id).then(function(){
      $location.path('/gastos');
    });
  }

  function guardarGasto(gastoAGuardar){
    gastoAGuardar.id = vm.gasto.id;
    gasto.guardarGasto(gastoAGuardar);
  }
};
