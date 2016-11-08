(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
         });
        
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
        });
    }         
            
    
    function BlocChatCookies ($cookies) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        while (!currentUser || currentUser === '') {
            currentUser = prompt("Set a username!  This name will appear when you send a message.  Sorry, not choice but to set a username:");  
            //console.log(currentUser);
            $cookies.put('blocChatCurrentUser');
        }
        console.log(currentUser);
        return currentUser;
    }
    
    angular
        .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase', 'ngCookies'])
        .config(config)
        .run(['$cookies', BlocChatCookies]);
})();