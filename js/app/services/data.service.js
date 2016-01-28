angular.module('inspinia')
.service('Data', serviceData);

function serviceData($http) {

    var items = {};
    var refresh = false;
    

    return {
        getAll: function(type, callback) {
            if(refresh || items[type] == null) {
                $http.get('/js/app/data/' + type + '.json').then(function (result) {
                    items[type] = result.data;
                    callback(result.data);
                }, function(error) {
                    console.log("ERROR");
                    console.log(error);
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