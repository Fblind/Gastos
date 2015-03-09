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
    .otherwise({
      redirectTo: '/'
    });
};

getGastos.$inject = ['gasto'];
function getGastos(gasto) {
  return gasto.getGastos();
}
getQuienes.$inject = ['gasto'];
function getQuienes(gasto) {
  return gasto.quienes();
}


