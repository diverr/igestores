angular.module('inspinia')
.directive('newMeetingForm', newMeetingForm);

function newMeetingForm() {
    return {

        scope: {},
        controller: function() {
            var vm = this;

            

        },
        controllerAs: 'vm',
        templateUrl: '/views/templates/newMeetingForm.html'

    };
}