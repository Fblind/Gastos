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

productoService.$inject = ['Restangular', '$q']
function productoService(Restangular, $q) {
  var producto = {};
  var productos = Restangular.all('productos');

  function getProductosByGasto(id){
    return productos.getList({gasto_id: id});
  }

  function agregarProducto(producto){
    //TODO: Que se actualice el id del producto en el controller, ver como manejar errores, tal vez un service de errores ?
    var deferred = $q.defer();

    productos.post(producto).then(function(productoGuardado){
      deferred.resolve(productoGuardado);
    });

    return deferred.promise;
  }

  function modificarProducto(producto){
    productos.get(producto.id).then(function(productoAModificar){
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
