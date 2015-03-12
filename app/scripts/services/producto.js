'use strict';

/**
 * @ngdoc service
 * @name gastosApp.producto
 * @description
 * # producto
 * Service in the gastosApp.
 */
angular.module('gastosApp')
  .service('producto', productoService);

productoService.$inject = ['Restangular']
function productoService(Restangular) {
  var producto = {};
  var productos = Restangular.all('productos');

  function getProductosByGasto(id){
    return productos.getList({gasto_id: id});
  }

  function agregarProducto(producto){
    //TODO: Hacerlo con promesas y que se actualice el id del producto en el controller
    return productos.post(producto);
  }

  function modificarProducto(id, producto){
    productos.get(id).then(function(productoAModificar){
      productoAModificar.put(producto);
    });
  }

  function eliminarProducto(id){
    productos.get(id).then(function(productoAModificar){
      productoAModificar.remove();
    });
  }

  producto.getProductosByGasto = getProductosByGasto;
  producto.agregarProducto = agregarProducto;
  producto.modificarProducto = modificarProducto;
  producto.eliminarProducto = eliminarProducto;
  return producto;
};
