angular.module('inspinia')
.service('Meetings', serviceMeetings);

function serviceMeetings($http) {
    var items = null;
    
    var getData = function(success) {
        if(items != null) {
            success(items);
            return;
        }
        $http.get('/js/data/meetings.json').success(function (data) {
            items = data;
            success(data);
        });
    };

    return {
        getAll: function(success) {
            getData(function(data) {
                success(data);
            });
        }
    };
}