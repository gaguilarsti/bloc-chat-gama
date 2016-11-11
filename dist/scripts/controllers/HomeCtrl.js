(function () {
    function HomeCtrl(Room, Message) {
        this.rooms = Room.all;
        $scope = this;
        this.selectRoom = function (room) {
            console.log("selectRoom function was called!");
            $scope.selectedRoom = room;
            $scope.messages = Message.getByRoomId(this.selectedRoom.$id);
        };
        
        this.sendMessage = function () {
            Message.send(this.newMessage, this.selectedRoom.$id);
            this.newMessage = '';
        }
    }
    
    
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();