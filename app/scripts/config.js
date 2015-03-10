angular
  .module('modules-config', ['restangular'])
  .config(config);

config.$inject = ['RestangularProvider', '$httpProvider'];
function config(RestangularProvider, $httpProvider){
  //TODO: Que lo saque de una variable de entorno.
  RestangularProvider.setBaseUrl('http://localhost:3000');
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
  //RestangularProvider.setDefaultHttpFields({withCredentials: true});


}
