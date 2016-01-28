'use strict';

describe('Services Test', function () {

    beforeEach(function () {
        module('inspinia');
    });

    describe('Meetings service', function () {

        var clientsService;

        beforeEach(function () {
            inject(function($injector) {
                clientsService = $injector.get('Clients');
            });
        });

        it('debe devolver servicios', function () {
            
            var prueba = clientsService.prueba();
            expect(prueba).toBeDefined();
            expect(prueba).toEqual("hola");
            
        });
    });
});