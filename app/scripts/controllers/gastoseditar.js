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

gastoEditarController.$inject = ['gastoActual', 'productosActuales', 'producto', 'quienes', 'gasto']
function gastoEditarController(gastoActual, productosActuales, producto, quienes, gasto) {
  var vm = this;
  vm.gasto = gastoActual;
  vm.productos = productosActuales;
  vm.quienes = quienes;
  vm.agregarProducto = agregarProducto;
  vm.guardarProducto = guardarProducto;
  vm.eliminarProducto = eliminarProducto;
  vm.eliminarGasto = eliminarGasto;
  vm.guardarGasto = guardarGasto;

  function guardarProducto(productoAGuardar){
    if(_.isUndefined(productoAGuardar.id)){
      productoAGuardar.gasto_id = vm.gasto.id;
      producto.agregarProducto(productoAGuardar).then(function(productoGuardado){
        productoAGuardar.id = productoGuardado.id;
      });
    }else{
      producto.modificarProducto(productoAGuardar);
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
    gasto.eliminar(id);
  }

  function guardarGasto(gastoAGuardar){
    gastoAGuardar.id = vm.gasto.id;
    gasto.guardarGasto(gastoAGuardar);
  }
};
