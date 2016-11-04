(function () {
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;
        
        //I don't know what to do here.  :( 
        //I believe this is where I'm supposed to assign the array of objects retrieved by the all method to a $scope variable. 
        this.open = function() {
            $uibModal.open({
                template: '<div>HELLO WORLD</div>'
            });
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();