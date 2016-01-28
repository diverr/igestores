angular.module('inspinia')
.service('Data', serviceData);

function serviceData($http) {

    var items = {};
    var refresh = false;
    

    return {
        getAll: function(type, callback) {
            if(refresh || items[type] == null) {
                
                var url = '/js/app/data/' + type + '.json';

                $.get(url, function(data) {
                    items[type] = data;
                    callback(data);
                });

                /*$http.get(url).then(function (result) {
                    items[type] = result.data;
                    callback(result.data);
                }, function(error) {
                    console.log("ERROR");
                    console.log(error);
                });*/



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