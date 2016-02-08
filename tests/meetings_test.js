'use strict';

describe('Services Test', function () {

    beforeEach(function () {
        module('morabanc');
    });

    describe('Meetings service', function () {

        var Clients, Meetings, Chats;

        beforeEach(function () {
            
            inject(function($injector) {
                Clients = $injector.get('Clients');
                Meetings = $injector.get('Meetings');
                Chats = $injector.get('Chats');
            });

        });

        


        it('Clientes...', function (done) {
            
            Clients.prueba2(function(data) {
                expect(data).not.toBe(null);
                

                Clients.getAll(function(data) {
                    expect(data).not.toBe(null);
                    done();                    
                });
            });

            /*Clients.getAll(function(clients) {
                expect(clients.length).toBeGreatherThan(1);

                Clients.get(100, function(client) {
                    expect(client).not.toBe(null);

                    done();                    
                })
            });*/
            
            
            
        });
    });
});