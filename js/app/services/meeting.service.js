angular.module('inspinia')
.service('Meetings', serviceMeetings);

function serviceMeetings($http, $q, Data, Clients) {
    
    return {
        getAll: function(callback) {
            var result = [];

            Data.getAll('meetings', function(data) {
                var meetings = data;
                var requests = [];

                // recorremos las citas para asociar el cliente
                angular.forEach(meetings, function(meeting) {
                    var deferred = $q.defer();
                    requests.push(deferred.promise);

                    // le asociamos el cliente
                    Clients.get(meeting.client_id, function(client) {
                        
                        meeting.client = client;
                        result.push(meeting);
                        deferred.resolve();

                    });
                });

                // cuando haya terminado todas las llamadas asíncronas ejecutamos el callback
                $q.all(requests).then(function() {
                    callback(result);    
                });
            });
        },

        add: function(meeting, callback) {
            var obj = {
                client_id: meeting.client.id,
                manager_id: 100,
                subject: meeting.subject,
                description: meeting.description,
                date: meeting.date,
                time: meeting.time,
                location: meeting.location
            };

            Data.add('meetings', obj, function(data){
                callback(data);
            });
        }
    };
}