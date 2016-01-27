angular.module('inspinia')
.service('Meetings', serviceMeetings);

function serviceMeetings($http) {
    var items = null;
    
    var getData = function(callback) {
        if(items != null) {
            callback(items);
            return;
        }
        $http.get('/js/data/meetings.json').success(function (data) {
            items = data;
            callback(data);
        });
    };

    return {
        getAll: function(callback) {
            getData(function(data) {
                callback(data);
            });
        }
    };
}