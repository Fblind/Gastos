'use strict';

/**
 * @ngdoc overview
 * @name gastosApp
 * @description
 * # gastosApp
 *
 * Main module of the application.
 */
angular
  .module('gastosApp', [
    //'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    //'ui.bootstrap'
    'smart-table'
  ])
  .constant('routes', {
    NUEVOGASTO: '/gastos/nuevo'
  })
  //TODO: Crear archivo route con las routes. Y un config con la configuracion de los modulos y demas.
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/gastos', {
        templateUrl: 'views/gastos.html',
        controller: 'GastosCtrl',
        controllerAs: 'gasto',
        resolve:{
          gastosActuales: getGastos
        }
      })
      .when('/gastos/nuevo', {
        templateUrl: 'views/nuevogasto.html',
        controller: 'GastosCtrl',
        controllerAs: 'gasto',
        resolve:{
          gastosActuales: getGastos
        }
      })
      .otherwise({
        redirectTo: '/'
      });

    getGastos.$inject = ['gasto'];
    function getGastos(gasto) {
      return gasto.getGastos();
    }

  });
