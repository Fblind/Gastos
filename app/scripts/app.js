'use strict';

/**
 * @ngdoc overview
 * @name gastosApp
 * @description
 * # gastosApp
 *
 * Main module of the application.
 */
//TODO: Config con la configuracion de los modulos y demas.
angular
  .module('gastosApp', [
    //'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    //'ui.bootstrap'
    'smart-table',
    'gastos-routes'
  ]);
