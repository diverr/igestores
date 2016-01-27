angular.module('inspinia')
.service('Chats', serviceChats);

function serviceChats($http) {
    var items = null;

    var getData = function(callback) {
        if(items != null) {
            callback(items);
            return;
        }
        $http.get('/js/data/chats.json').success(function (data) {
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