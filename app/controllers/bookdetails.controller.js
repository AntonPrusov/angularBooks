(function ()
{
    'use strict';

    app.controller('BookDetails', ['$scope', 'books.repository', '$routeParams', function ($scope, booksRepository, $routeParams)
            {   
                var bookModel = {};

                booksRepository.getBookById($routeParams.id)
                .then(function(response) {
                    $scope.authorDetails = response.data;
                    authorModel = angular.copy($scope.bookDetails);
                    $scope.authorDetails.date = new Date($scope.authorDetails.date);
                }, function(error) {
                    alert(error)}
                    );

                booksRepository.getAuthors()
                .then(function(response) {
                    $scope.authors = response.data.map(function(item) {
                        return {
                            id: item.id,
                            name: item.firstname + ' ' + item.lastname
                        }
                    });
                }, function(error) {
                    alert(error)}
                    );


                $scope.isEditable = false;

                $scope.edit = function() {
                    $scope.isEditable = true;
                }

                $scope.cancelEdit = function() {
                    $scope.authorDetails = angular.copy(authorModel);
                    $scope.isEditable = false;
                }

                $scope.save = function() {
                    booksRepository.updateBookById($scope.bookDetails.id, $scope.bookDetails);
                    $scope.isEditable = false;
                }

                $scope.getAuthorNameById = function(id) {
                    if(!$scope.authors || !id) return;

                    return $scope.authors.filter(function(item) {
                        return item.id === id;
                    })[0].name
                }
            }
        ]);
}
)();
