'use strict';

describe('Controller: GastoseditarCtrl', function () {

  // load the controller's module
  beforeEach(module('gastosApp'));

  var GastoseditarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GastoseditarCtrl = $controller('GastoseditarCtrl', {
      $scope: scope
    });
  }));

  /*it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });*/
});
