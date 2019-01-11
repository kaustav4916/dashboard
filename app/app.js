var app = angular.module('myApp',['ngRoute'],);

app.run(function($rootScope,$http){
    $rootScope.isLogged = false;
    var reload = function(){
            
              $http({
                method: 'POST',
                url: 'http://localhost:3000/api/v1/users/getDetails',
              }).then(function successCallback(response) {
                  console.log(response.data)
                  if(response.data.loginStatus===false || response.data.error==true){
                    $rootScope.isLogged=false;
                    window.location= '#/'
                  }else{
                    $rootScope.isLogged=true;
                    window.location='#/contact'
                  }
                  

                  

                }, function errorCallback(response) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
                  alert("some error occurred. Check the console.");
                  console.log(response);

                });
            
         }
         reload();

    
});

app.config(function($routeProvider,$locationProvider) {
     $locationProvider.hashPrefix('');
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'views/login.html', // its template file path 
                controller:'loginContrl' // its registered controller name not controller file path 
            })
            .when('/contact', {
                templateUrl : 'views/contact.html', // its template file path 
                controller:'contactContrl' // its registered controller name not controller file path 
            }).when('/meetings', {
                templateUrl : 'views/meetings.html',
                controller:'meetingController'
            }).when('/sales', {
                templateUrl : 'views/sales.html',
                controller:'serviceController'
            }).when('/gift', {
                templateUrl : 'views/Reimbursement.html',
                controller:'ReimbursementController'
            }).when('/score', {
                templateUrl : 'views/scorecard.html',
                controller:'scorecardController'
            }).otherwise({
                redirectTo: '/'

            });
    });




