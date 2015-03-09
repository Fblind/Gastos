'use strict';

describe('Controller: GastosnuevoCtrl', function () {

  // load the controller's module
  beforeEach(module('gastosApp'));

  var GastosnuevoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GastosnuevoCtrl = $controller('GastosnuevoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
