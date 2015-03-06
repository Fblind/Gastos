'use strict';

describe('Service: gasto', function () {

  // load the service's module
  beforeEach(module('gastosApp'));

  // instantiate service
  var gasto;
  beforeEach(inject(function (_gasto_) {
    gasto = _gasto_;
  }));

  it('should do something', function () {
    expect(!!gasto).toBe(true);
  });

});
