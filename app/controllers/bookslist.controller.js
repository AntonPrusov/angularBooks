(function ()
{
    'use strict';

    app.controller('BooksList', ['$scope', 'books.repository', function ($scope, booksRepository)
            {
                $scope.sortField = 'title';

                $scope.sortBy = function (field)
                {
                    if ($scope.sortField == field)
                    {
                        $scope.sortField = '-' + field;
                    }
                    else
                    {
                        $scope.sortField = field;
                    }
                };

                $scope.deleteBook = function (book)
                {
                    $scope.books.splice($scope.books.indexOf(book), 1);
                };

                booksRepository.getBooks()
                .then(function (response)
                {
                    $scope.books = response.data;
                }, function (error)
                {
                    alert(error);
                }
                );
            }
        ]);

}
)();
