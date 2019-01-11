




app.controller('ReimbursementController', function ($scope,$http, $filter) {
        // set the default sort order
            // set the default search/filter term
  
        // JSON ARRAY TO POPULATE TABLE.
        $scope.movieArray =
        [
            { 'name': 'Tom','gift': 'Rs 1234', 'phnnumber': '123456789','email': 'abc@gmail.com' },
            { 'name': 'kaustav', 'gift': 'Rs 1234','phnnumber': '12345678' ,'email': 'xyz@gmail.com' },
            { 'name': 'Nobita', 'gift': 'Rs 1234','phnnumber': '1234567' , 'email': 'mnc@gmail.com' }
        ];

        // GET VALUES FROM INPUT BOXES AND ADD A NEW ROW TO THE TABLE.
        $scope.addRow = function () {
            if ($scope.name != undefined && $scope.phnnumber != undefined) {
                var movie = {};
                movie.name = $scope.name;
                movie.phnnumber = $scope.phnnumber;
                movie.gift = $scope.gift;
                movie.email = $scope.email;
                $scope.movieArray.push(movie);

                // CLEAR TEXTBOX.
                $scope.name = null;
                $scope.phnnumber = null;
                 $scope.email = null;
                  $scope.gift = null;
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
                 let date= value.name;
                date = parseDate(name);

                arrMovie.push('Name:' + value.name + ' gift:' + value.gift+' phnnumber:' + value.phnnumber+' email:' + value.email,);
            });
            $scope.display = arrMovie;
        };
    });