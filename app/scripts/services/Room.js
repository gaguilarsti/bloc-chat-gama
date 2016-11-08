(function() {
    function Room ($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        //creating room objects with AngularFire
        var create = function(roomName) {
            console.log("create function called with " + roomName + "passed through.")
            rooms.$add({ chatRoomName: roomName }).then(function(ref){
                var id = ref.key;
                console.log("added record with id " + id);
                return rooms.$indexFor(id); //returns location in the array
            });
        };
        
        return {
            all: rooms,
            create: create
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();