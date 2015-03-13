'use strict';

describe('Controller: GastosCtrl', function () {

  // load the controller's module
  beforeEach(module('gastosApp'));

  var GastosCtrl,
    gastos;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    //TODO: Agarrarlo desde un fixture
    gastos = [{
      fecha: new Date(),
      lugar: 'Chango mas',
      precio: 20.5,
      quien: 'Facu'
    }, {
      fecha: new Date(),
      lugar: 'Carrefour',
      precio: 25,
      quien: 'Vale'
    }, {
      fecha: new Date(),
      lugar: 'Luz',
      precio: 90,
      quien: 'Facu'
    }];
    GastosCtrl = $controller('GastosCtrl', {
      gastosActuales: gastos
    });
  }));

  it('tiene que traer gastos', function () {
    expect(GastosCtrl.gastosActuales).toBe(gastos);
  });

  it('tiene que traer 3 gastos', function () {
    expect(GastosCtrl.gastosActuales.length).toBe(3);
  });

  it('todos los gastos deben tener los campos requeridos', function () {
    _.each(GastosCtrl.gastosActuales, function(gasto){
      expect(gasto.fecha).toBeDefined();
      expect(gasto.lugar).toBeDefined();
      expect(gasto.precio).toBeDefined();
      expect(gasto.quien).toBeDefined();
    });
  });

});
