app.controller('loginContrl', ['$scope', '$rootScope','$http',  
    function ($scope,$rootScope, $http) {
        if($rootScope.isLogged==true){
          window.location="#/contact";
        }

        $scope.userName;
        $scope.password;
        $scope.onSelect = function(userName, password){
            console.log("User Name: ", $scope.userName, "Password: ", $scope.password);
            /*if(!$scope.password && !$scope.password){
                console.log("Enter Valid User Name or Password");
                $http.post('/login').then(function(data){
                    console.log("Data from Backend: ", data);
                });*/

                var mydata = {
                    username : userName,
                    password : password
                }




              $http({
                async: true,
                method: 'POST',
                url: 'http://localhost:3000/api/v1/users/login',
                /*$window.sessionStorage.token = data.token;*/
                data : mydata
              }).then(function successCallback(response) {
                  // this callback will be called asynchronously
                  // when the response is available
                  console.log(response);
                  if(response.data.status==200){
                    $rootScope.isLogged=true;
                    window.location='#/contact'
                  }else{
                    alert('login password or username incorrect')
                  }
                  

                  

                }, function errorCallback(response) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
                  alert("some error occurred. Check the console.");
                  console.log(response);

                });
            
         }
   }

]);



app.controller('logoutCrl', ['$scope', '$rootScope','$http', 
    function ($scope,$rootScope, $http) {
        if($rootScope.isLogged==false){
          window.location="#/";
        }

       
        $scope.onSelect1 = function(){
           
           
          /* var mydata = {
                    
                }
*/

              $http({
                method: 'GET',
                url: 'http://localhost:3000/api/v1/users/logout',
                /*data : mydata*/
              }).then(function successCallback(response) {
                  // this callback will be called asynchronously
                  // when the response is available
                  console.log(response);
                  if(response.data.status==200){
                    $rootScope.isLogged=false;
                    console.log("isLogged out");
                    window.location='#/'
                  }else{
                    alert('You have successfully logout')
                  }
                  

                  

                }, function errorCallback(response) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
                  alert("some error occurred. Check the console.");
                  console.log(response);

                });
            
         }
   }

]);
     
       