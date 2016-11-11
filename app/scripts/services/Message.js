(function() {
    function Message ($firebaseArray, $cookies) {
        var ref = firebase.database().ref().child("Messages");
        var messages = $firebaseArray(ref);
        var getByRoomId = function (roomID) {
            return $firebaseArray(ref.orderByChild("roomID").equalTo(roomID));
        };
        var send = function (newMessage, roomID) {
          //send message logic here  
            var message = {
                username: $cookies.get('blocChatCurrentUser'),
                content: newMessage, 
                sentAt: timeFormat(),
                roomID: roomID
            };
            
            messages.$add(message);
            console.log("message added: " + message );
        };
        
        function timeFormat() {
			var date = new Date();
			var h = date.getHours();
			var m = date.getMinutes();
			var s = date.getSeconds();
			var dayNight = "AM";

			if (h > 12) {
				h -= 12;
				dayNight = "PM";
			}
			if (m < 10) {
				m = "0" + m;
			}
			if (s < 10) {
				s = "0" + s;
			}
			return h + ":" + m + " " + dayNight;
		}
        
        return {
            getByRoomId: getByRoomId, 
            send: send,
            all: messages
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();