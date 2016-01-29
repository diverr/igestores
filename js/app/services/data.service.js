angular.module('inspinia')
.service('Data', serviceData);

function serviceData($http) {

    var items = {};
    var refresh = false;
    
    function readJson(type, callback) {
        var url = '/js/app/data/' + type + '.json';

        $.get(url, function(data) {
            callback(data);
        });
    }

    return {
        getAll: function(type, callback) {
            
            // si mandamos a refrescar cogemos del archivo json
            if(refresh) {
                console.log("Reiniciamos los valores, los obtenemos del archivo json");
                localStorage.removeItem(type);
                readJson(type, function(data) {
                    localStorage.setItem(type, JSON.stringify(data));
                    items[type] = data;
                    callback(data);
                })
            } else {
                
                if(items[type] && items[type] != null) {
                    console.log("Coge del objeto en memoria");
                    callback(items[type]);
                } else if(localStorage.getItem(type) && localStorage.getItem(type) != null) {
                    console.log("Coge del objeto en localStorage");
                    items[type] = JSON.parse(localStorage.getItem(type));
                    callback(items[type]);
                } else {
                    console.log("Coge los datos del archivo json");
                    readJson(type, function(data) {
                        localStorage.setItem(type, JSON.stringify(data));
                        items[type] = data;
                        callback(data);
                    })
                }

                
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