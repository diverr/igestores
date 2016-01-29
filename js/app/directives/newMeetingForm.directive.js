angular.module('inspinia')
.directive('newMeetingForm', newMeetingForm);

function newMeetingForm() {
    return {

        scope: {},
        controller: function(Clients) {
            var vm = this;

            vm.clients = [];
            vm.search = {};
            vm.search.client = null;

            Clients.getAll(function(data) {
                vm.clients = data;
            });
        },
        controllerAs: 'vm',
        templateUrl: '/views/templates/newMeetingForm.html'

    };
}