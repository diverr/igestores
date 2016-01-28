angular.module('inspinia')
.service('Clients', serviceClients);

function serviceClients($http, Data) {
    
    return {
        
        getAll: function(callback) {
            Data.getAll('clients', function(data) {
                callback(data);
            });
        },

        get: function(id, callback) {
            Data.get(id, 'clients', function(client) {
                callback(client);
                return;
            });
        }
    };
}