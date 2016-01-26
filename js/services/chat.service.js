angular.module('inspinia')
.service('Chats', serviceChats);

function serviceChats($http) {
    var items = null;

    var getData = function(success) {
        if(items != null) {
            success(items);
            return;
        }
        $http.get('/js/data/chats.json').success(function (data) {
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