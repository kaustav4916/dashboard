app.controller('scorecardController', function ($scope,$http, $filter) {
        // set the default sort order
            // set the default search/filter term
  
        // JSON ARRAY TO POPULATE TABLE.
        $scope.movieArray =
        [
            { 'name': 'Tom', 'last': 'Harry','email': 'tom@gmail.com','points': '85' },
            { 'name': 'Hari', 'last': 'Sharma','email': 'tom@gmail.com','points': '95' },
            { 'name': 'Jane', 'last': 'Joe','email': 'tom@gmail.com','points': '75' }
        ];

        // GET VALUES FROM INPUT BOXES AND ADD A NEW ROW TO THE TABLE.
        $scope.addRow = function () {
            if ($scope.name != undefined && $scope.last != undefined && $scope.email != undefined && 
                $scope.points != undefined ) {
                var movie = {};
                movie.name = $scope.name;
                movie.last = $scope.last;
                movie.email = $scope.email;
                movie.points = $scope.points;
                
                $scope.movieArray.push(movie);

                // CLEAR TEXTBOX.
                $scope.name = null;
                $scope.last = null;
                $scope.email = null;
                 $scope.points = null;
                 
            }
        };

        // REMOVE SELECTED ROW(s) FROM TABLE.
        $scope.removeRow = function () {
            var arrMovie = [];
            angular.forEach($scope.movieArray, function (value) {
                if (!value.Remove) {
                    arrMovie.push(value);
                }
            });
            $scope.movieArray = arrMovie;
        };

        // FINALLY SUBMIT THE DATA.
        $scope.submit = function () {
            var arrMovie = [];
            angular.forEach($scope.movieArray, function (value) {
             

                 arrMovie.push('Name:' + value.name + ',Last:' + value.last + ', email:' + value.email,' points:' + value.points,);
            });
            $scope.display = arrMovie;
        };
    });
