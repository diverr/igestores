angular.module('inspinia')
.directive('newMeetingForm', newMeetingForm);

function newMeetingForm() {
    return {

        scope: {},
        controller: function(Clients, Meetings) {
            var vm = this;

            vm.form = {};
            vm.clients = [];
            
            vm.submitForm = function() {
                vm.form.date = $("#date").val();
                vm.form.time = $("#time").val();
                Meetings.add(vm.form, function(obj) {
                    alert("Cita añadida!");
                    console.log("Objeto añadido...");    
                    console.log(obj);
                });
                
            }

            Clients.getAll(function(data) {
                vm.clients = data;
            });
        },
        controllerAs: 'vm',
        templateUrl: '/views/templates/newMeetingForm.html'

    };
}