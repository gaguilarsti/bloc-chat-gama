(function() {
    function Room ($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        //creating room objects with AngularFire
        rooms.$add({ chatRoomName: "Chat Room Name" }).then(function(ref){
            var id = ref.key;
            console.log("added record with id " + id);
            list.$indexFor(id); //returns location in the array
        });
        return {
            all: rooms
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();