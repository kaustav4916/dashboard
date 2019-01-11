



app.controller('serviceController', function ($scope,$http, $filter,$anchorScroll, $location) {

    
        // set the default sort order
            // set the default search/filter term
  
        // JSON ARRAY TO POPULATE TABLE.
        $scope.movieArray =
        [
            { 'name': 'Tom', 'meet': 'Harry','sale': 'Rs 1234','date': '16-1-2018','time': '16:40' },
            {  'name': 'kaustav','meet': 'Dinesh', 'sale': 'Rs 12345' ,'date': '17-1-2018','time': '17:40' },
            { 'name': 'Nobita', 'meet': 'Raju','sale': 'Rs 123456' , 'date': '18-1-2018','time': '18:40' }
        ];

        // GET VALUES FROM INPUT BOXES AND ADD A NEW ROW TO THE TABLE.
        $scope.addRow = function () {
        
            if ($scope.name != undefined && $scope.sale != undefined && $scope.date != undefined && 
                $scope.meet != undefined && $scope.time != undefined) {
                var movie = {};
                movie.name = $scope.name;
                movie.meet = $scope.meet;
                movie.sale = $scope.sale;
                movie.date = $scope.date;
                movie.time = $scope.time;
                $scope.movieArray.push(movie);

                // CLEAR TEXTBOX.
                $scope.name = null;
                $scope.meet = null;
                $scope.sale = null;
                $scope.date = null;
                $scope.time = null;
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
             let date= value.date;
                date = parseDate(date);

                 arrMovie.push('Name:' + value.name + ',Meet:' + value.meet + ', sale:' + value.sale,' Date:' + date,' Time:' + value.time);
                 
                
            });
            $scope.display = (arrMovie);

                 

        };
    });
