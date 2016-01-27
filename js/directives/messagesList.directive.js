angular.module('inspinia')
.directive('messagesList', messagesList);

function messagesList() {
    return {

        scope: {},
        controller: function(Chats) {
            var vm = this;
            vm.chat = {};

            Chats.get(100, function(chat) {
                vm.chat = chat;
            });

        },
        controllerAs: 'vm',
        templateUrl: '/views/templates/messagesList.html'

    };
}