'use strict';

describe('Controller: GastosnuevoCtrl', function () {

  // load the controller's module
  beforeEach(module('gastosApp'));

  var GastosnuevoCtrl,
    quienes,
    unGasto;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    unGasto = {
      fecha: new Date(),
      lugar: 'Chango mas',
      precio: 20.5,
      quien: 'Facu'
    };
    quienes = [
      'Facu',
      'Vale'
    ];
    GastosnuevoCtrl = $controller('GastosnuevoCtrl', {
      quienes: quienes
    });
  }));

  it('Debe traer 2 quienes', function () {
    expect(GastosnuevoCtrl.quienes.length).toBe(2);
  });

  it('Debe traer quienes', function () {
    expect(GastosnuevoCtrl.quienes).toBe(quienes);
  });

  it('Debe crearse un gasto correctamente', function () {
    //TODO: Implement it
  });


});
