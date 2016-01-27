'use strict';

describe('Services Test', function () {

    beforeEach(function () {
        module('inspinia');
    });

    describe('Meetings service', function () {

        var meetingsService;

        beforeEach(function () {
            inject(['Meetings', function (service) {
                    meetingsService = service;
                }
            ]);
        });

        it('debe devolver servicios', function () {
            meetingsService.getAll(function(items){
                // debe estar definido
                expect(items).toBeDefined();
                // debe devolver 2 items
                expect(items.length).toBe(2);
            });
            
        });
    });
});