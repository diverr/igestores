angular.module('inspinia')
.service('Data', serviceData);

function serviceData($http) {

    var items = {};
    var refresh = true;
    
    function readJson(type, callback) {
        var url = '/js/app/data/' + type + '.json';

        $.get(url, function(data) {
            callback(data);
        });
    }

    function getId(type, callback) {
        getAll(type, function(items) {
            var id = 0;
            for(var i = 0; i < items.length; i++) {
                if(parseInt(items[i].id) > id) {
                    id = parseInt(items[i].id) + 1;
                }
            }
            callback(id);
        });
    }

    function save(type, data) {
        localStorage.setItem(type, JSON.stringify(data));
    }

    function getAll(type, callback) {
        
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
    }

    return {
        getAll: getAll,

        get: function(id, type, callback) {
            getAll(type, function(items) {
                for(var i = 0; i < items.length; i++) {
                    if(items[i].id == id) {
                        callback(items[i]);
                        return;
                    }
                }
            });
        }, 

        add : function(type, obj, callback) {
            getId(type, function(id) {
                obj.id = id;
                getAll(type, function(items) {
                    items.push(obj);
                    save(type, items);
                    callback(obj);
                });
            });
        },

        update: function(type, obj, callback) {
            getAll(type, function(items) {
                for(var i = 0; i < items.length; i++) {
                    if(items[i].id == obj.id) {
                        items[i] = obj;
                        save(type, items);
                        callback(obj);
                        return;
                    }
                }
            })
        }
    };

}