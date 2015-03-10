'use strict';

describe('Service: gasto', function () {

  // load the service's module
  beforeEach(module('gastosApp'));

  // instantiate service
  //TODO: ver https://docs.angularjs.org/api/ngMock/service/$httpBackend
  var gasto;
  beforeEach(inject(function (_gasto_) {
    gasto = _gasto_;
    //TODO: Armar fixture
    gasto.agregarGasto({
        nombreProducto: 'Producto',
        fecha: new Date(),
        lugar: 'el chino',
        precio: 13.2,
        quien: 'Facu'
      });
    gasto.agregarGasto({
        nombreProducto: 'AProducto1',
        fecha: new Date(),
        lugar: 'changomas',
        precio: 45.2,
        quien: 'Vale'
      })
    gasto.agregarGasto({
      nombreProducto: 'Coca',
      fecha: new Date(),
      lugar: 'Petrobras',
      precio: 15,
      quien: 'Facu'
    });
  }));

  it('should get 3 gastos', function () {
    expect(gasto.getGastos().length).toBe(3);
  });

  it('should get 2 quienes', function () {
    expect(gasto.quienes().length).toBe(2);
  });

});
