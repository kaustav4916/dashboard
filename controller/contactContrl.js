app.controller('contactContrl', ['$scope','$http', '$filter',  function ($scope,$http, $filter) {
              
        // JSON ARRAY TO POPULATE TABLE.
  $scope.movieArray =[];

 $scope.tgState = false;

  
  

$scope.editingData = {};

for (var i = 0, length = $scope.movieArray.length; i < length; i++) {
  $scope.editingData[$scope.movieArray[i].id] = false;
}

$scope.modify = function(movies){
    $scope.editingData[movies.id] = true;
};


$scope.update = function(movies){
    $scope.editingData[movies.id] = false;
};

$scope.movie  = $scope.currentPage;
$scope.pageSize=[5]
$scope.currentPage=[0];
$scope.movie=$scope.currentPage[$scope.movieArray.length + $scope.pageSize ];

  $scope.$watch(function(){
    return $scope.movieArray.indexOf($scope.movies);
  }, function(idx){
    $scope.showPrev = (idx === 0) ? false : true;
    $scope.showNext = (idx === $scope.movieArray.length - 1) ? false : true;
  });
  
  $scope.prev = function(arr){
    $scope.movie  = $scope.movieArray[$scope.movieArray.indexOf(arr) - 1];
  };
  
  $scope.next = function(arr){
    $scope.movie  = $scope.movieArray[$scope.movieArray.indexOf(arr) + 1 ] ;
  };



      
       
        $scope.removeRow = function () {

             

            var arrMovie = [];
            angular.forEach($scope.movieArray, function (value) {
                $http.delete('http://localhost:3000/api/v1/users/deleted')

              .then(function successCallback(success){
                    console.log(success)
                   
                    
                
                



              }, function errorCallback(response) {
                alert("some error occured")
              

        });
                if (!value.Remove) {
                    arrMovie.push(value);
                }
            });
            $scope.movieArray = arrMovie;
        };

        // FINALLY SUBMIT THE DATA.
        $scope.submit = function ($filter) {
            var arrMovie = [];
            var data = {
                    firstname: $scope.firstname,
                    lastname : $scope.lastname,
                    email:     $scope.email,
                    username : $scope.username,
                    phnnumber:   $scope.phnnumber,
                    
                }
            console.log("Data: ",data);
            
              $http.post('http://localhost:3000/api/v1/users/data',data)

              .then(function successCallback(success){
                    console.log("Object Added: ", success)
                    /*$scope.movieArray.push(success.data.data);*/
                    $scope.movieArray.push({
                        'username' : $scope.username,
                        'firstname': $scope.firstname,
                        'lastname': $scope.lastname,
                        'phnnumber' : $scope.phnnumber,
                        'email'   : $scope.email
                    });
              }, function errorCallback(response) {
                alert("some error occured")
        });



            if ($scope.username !=undefined && $scope.firstname != undefined && 
                $scope.phnnumber != undefined && $scope.lastname!=undefined && $scope.email!=undefined ) {
                var movie = {};
                movie.id=$scope.id;
                movie.username = $scope.username;
                movie.firstname=$scope.firstname;
                movie.lastname=$scope.lastname;
                movie.phnnumber = $scope.phnnumber;
                movie.email = $scope.email;
                movie.value=$scope.value;
                
              $scope.movieArray.push({
                        username: $scope.username ,
                      firstname:  $scope.firstname ,
                        lastname: $scope.lastname ,
                        phnnumber:  $scope.phnnumber ,
                        email:    $scope.email
                    });
                // CLEAR TEXTBOX.
                $scope.username=null;
                $scope.id=null;
                $scope.firstname = null;
                $scope.phnnumber = null;
                $scope.lastname=null;
                $scope.email = null;

            }

            getDetailsOfUsers();

        };

                
             
        function getDetailsOfUsers()
        {
            $http.get('http://localhost:3000/api/v1/users/movieArray')
                .then(function successCallback(success){
                    /* $scope.movieArray.push({
                        username: $scope.username ,
                        firstname: $scope.firstname ,
                        lastname: $scope.lastname ,
                        phnnumber: $scope.phnnumber ,
                        email:   $scope.email
                    });*/
                    console.log("Get Movie: ", success.data.data);
                    $scope.movieArray = success.data.data;
                }, function errorCallback(response) {
                alert("some error occured")  
            });
        }


        getDetailsOfUsers();

             //modal
           
              this.showModal = false;
                this.showView = false;
                this.counter = 1;
                this.toggleDialog = function () {
                    this.showModal = !this.showModal;
                }
                this.toggleView = function () {
                    this.showView = !this.showView;
                }
                this.changeDisplay = function () {
                    this.counter++;
                }

              $('.modal').on('hidden.bs.modal', function (e) {
  // do something...
              $('.modal-backdrop.in').hide();
          });











 }]);





