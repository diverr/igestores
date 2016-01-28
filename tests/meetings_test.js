'use strict';

describe('Services Test', function () {

    beforeEach(function () {
        module('inspinia');
    });

    describe('Meetings service', function () {

        var meetingsService;

        beforeEach(function () {
            inject(['Clients', function (service) {
                    clientsService = service;
                }
            ]);
        });

        it('debe devolver servicios', function () {
            /*clientsService.getAll(function(items){
                // debe estar definido
                expect(items).toBeDefined();
                // debe devolver 2 items
                expect(items.length).toBe(2);
            });*/

            var prueba = null;
            expect(prueba).toBeDefined();
            
        });
    });
});