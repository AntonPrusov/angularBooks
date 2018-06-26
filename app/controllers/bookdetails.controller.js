(function ()
{
    'use strict';

    app.controller('BookDetails', ['$scope', 'books.repository', '$routeParams', function ($scope, booksRepository, $routeParams)
            {
                booksRepository.getBookById($routeParams.id)
                .then(function(response) {
                    $scope.bookDetails = response.data;
                    $scope.bookDetails.date = new Date($scope.bookDetails.date);
                    console.log($scope.bookDetails);
                }, function(error) {
                    alert(error)}
                    );

                $scope.isEditable = false;
                $scope.edit = function() {
                    $scope.isEditable = true;
                }
                $scope.cancelEdit = function() {
                    $scope.isEditable = false;
                }
            }
        ]);
}
)();
