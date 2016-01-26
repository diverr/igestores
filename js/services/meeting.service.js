angular.module('inspinia')
.service('Meetings', serviceMeetings);

function serviceMeetings($http, $q) {
    var deferred = $q.defer(); 
    var items = [];
    
    $http.get('/js/data/clients.json').success(function (data) {
        deferred.resolve(data);
    });

    return {
        getAll: function() {
            return deferred.promise;
        }
    };
}