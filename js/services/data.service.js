angular.module('inspinia')
.service('Data', serviceData);

function serviceData($http) {

    var items = {};
    var refresh = false;
    

    return {
        getAll: function(type, callback) {

            if(refresh || items[type] == null) {
                $http.get('/js/data/' + type + '.json').success(function (data) {
                    items[type] = data;
                    callback(data);
                });    
            } else {
                callback(items[type]);
            }
        },

        get: function(id, type, callback) {
            this.getAll(type, function(items) {
                for(var i = 0; i < items.length; i++) {
                    if(items[i].id == id) {
                        callback(items[i]);
                        return;
                    }
                }
            });
        }
    };

}