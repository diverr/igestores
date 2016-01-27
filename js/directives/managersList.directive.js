angular.module('inspinia')
.directive('managersList', managersList);

function managersList() {
    return {

        scope: {},
        controller: function(Managers) {
            var vm = this;
            vm.items = [];

            Managers.getAll(function(data) {
                vm.items = data;
            });

        },
        controllerAs: 'vm',
        templateUrl: '/views/templates/managersList.html'

    };
}