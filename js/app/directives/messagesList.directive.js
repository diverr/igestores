angular.module('inspinia')
.directive('messagesList', messagesList);

function messagesList() {
    return {

        scope: {},
        controller: function(Chats, $stateParams, $timeout) {
            var id = $stateParams.id;
            var vm = this;
            vm.chat = {};

            var eo = null;

            Chats.get(id, function(chat) {
                console.log(chat);
                vm.chat = chat;

                eo = chat;
            });

            $timeout(function() {
                vm.chat = eo;

            }, 2000);

        },
        controllerAs: 'vm',
        templateUrl: '/views/templates/messagesList.html'

    };
}