function CreateCtrl(Room) {
    this.name = "Gama";
    this.roomName = '';
    
    //submitting the roomname to firebase and creating a new room
    this.create = function() {
        Room.create(this.roomName);
        this.roomName = '';
    };
    
    
}

angular
    .module('blocChat')
    .controller('CreateCtrl', ['Room', CreateCtrl]);