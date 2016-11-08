(function() {
    function Message ($firebaseArray) {
        var ref = firebase.database().ref().child("Messages");
        var messages = $firebaseArray(ref);
        var getByRoomId = function (roomID) {
            return $firebaseArray(ref.orderByChild("roomID").equalTo(roomID));
        };
        
        return {
            getByRoomId: getByRoomId, 
            all: messages
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();