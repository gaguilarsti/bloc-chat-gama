(function () {
    function HomeCtrl() {
        //I don't know what to do here.  :( 
        //I believe this is where I'm supposed to assign the array of objects retrieved by the all method to a $scope variable. 
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();