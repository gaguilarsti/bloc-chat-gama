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
        })
             .state('$ctrl', {
                url: '/',
                controller: 'ModalInstanceCtrl as $ctrl' , 
                templateUrl: '/templates/myModalContent.html'
        });
    }
    
    angular
        .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase'])
        .config(config);
})();