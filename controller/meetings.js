



app.controller('meetingController', function ($scope,$http, $filter) {

    $scope.sortType     = 'name';
        // set the default sort order
            // set the default search/filter term
  
        // JSON ARRAY TO POPULATE TABLE.
        $scope.movieArray =
        [
            { 'name': 'Tom', 'meet': 'Harry','contact': '123456789','date': '16-1-2018','time': '16:40' },
            { 'name': 'kaustav','meet': 'Dinesh', 'contact': '12345678' ,'date': '17-1-2018','time': '17:40' },
            { 'name': 'Nobita', 'meet': 'Raju','contact': '1234567' , 'date': '18-1-2018','time': '18:40' }
        ];

        // GET VALUES FROM INPUT BOXES AND ADD A NEW ROW TO THE TABLE.
        $scope.addRow = function ($filter) {
            if ($scope.name != undefined && $scope.contact != undefined && $scope.date != undefined && 
                $scope.meet != undefined && $scope.time != undefined) {
                var movie = {};
                movie.name = $scope.name;
                movie.meet = $scope.meet;
                movie.contact = $scope.contact;
                movie.date = $scope.date;
                movie.time = $scope.time;
                $scope.movieArray.push(movie);

                // CLEAR TEXTBOX.
                $scope.name = null;
                $scope.meet = null;
                $scope.contact = null;
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
                
                arrMovie.push('Name:' + value.name + ',Meet:' + value.meet + ', contact:' + value.contact,' Date:' + date,' Time:' + value.time,);
            });
            $scope.display = arrMovie;
        };
    });


$(document).ready(function() {
  $('#rowclick4 tr')
    .filter(':has(:checkbox:checked)')
    .addClass('selected')
    .end()
  .click(function(event) {
    if (event.target.type !== 'checkbox') {
      $(':checkbox', this).trigger('click');
    }
  })
    .find(':checkbox')
    .click(function(event) {
      $(this).parents('tr:first').toggleClass('selected');
    });    
});

