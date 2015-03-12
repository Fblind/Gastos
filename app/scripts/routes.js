angular
  .module('gastos-routes', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider'];
function config($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/gastos.html',
      controller: 'GastosCtrl',
      controllerAs: 'gasto',
      resolve:{
        gastosActuales: getGastos
      }
    })
    .when('/gastos/nuevo', {
      templateUrl: 'views/nuevogasto.html',
      controller: 'GastosnuevoCtrl',
      controllerAs: 'gasto',
      resolve:{
        quienes: getQuienes
      }
    })
    .when('/gastos/:id',{
      templateUrl: 'views/editargasto.html',
      controller: 'GastoseditarCtrl',
      controllerAs: 'gasto',
      resolve:{
        gastoActual: getGasto,
        productosActuales: getProductosByGasto,
        quienes: getQuienes
      }
    })
    .otherwise({
      redirectTo: '/'
    });
};

//TODO: hacer un objeto que contenga esto
getGastos.$inject = ['gasto'];
function getGastos(gasto) {
  return gasto.getGastos();
}
getQuienes.$inject = ['gasto'];
function getQuienes(gasto) {
  return gasto.quienes();
}

getGasto.$inject = ['gasto', '$route'];
function getGasto(gasto, $route) {
  return gasto.getGasto($route.current.params.id);
}

getProductosByGasto.$inject = ['producto', '$route'];
function getProductosByGasto(producto, $route){
  return producto.getProductosByGasto($route.current.params.id);
}

