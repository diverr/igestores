'use strict';

describe('Services Test', function () {

    beforeEach(function () {
        module('inspinia');
    });

    describe('Meetings service', function () {

        var clientsService, $httpBackend;

        beforeEach(function () {
            
            inject(function($injector) {
                clientsService = $injector.get('Clients');
                $httpBackend = $injector.get('$httpBackend');
            });

        });

        


        it('Prueba 1', function () {
            
            var prueba = clientsService.prueba();
            expect(prueba).toEqual("hola");
            
        });

        it('Prueba 2', function (done) {
            
            clientsService.prueba2(function(data) {
                console.log(data);
                done();
            });

        });
    });
});