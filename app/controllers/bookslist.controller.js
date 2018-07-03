(function ()
{
    'use strict';

    app.controller('BooksList', ['$scope', 'books.repository', '$uibModal', function ($scope, booksRepository, $uibModal)
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

                    var modalInstance = $uibModal.open({
                        templateUrl: 'app/modals/confirm/confirm.template.html',
                        controller: 'Confirm',
                        size: 'sm'
                    });

                    modalInstance.result.then(function (result) {
                        if (!result) return;

                        booksRepository.deleteBook(book.id)
                        .then(function (response) {
                            $scope.books.splice($scope.books.indexOf(book), 1);
                        })
                    })
                };

                $scope.addBook = function() {
                    var modalInstance = $uibModal.open({
                        templateUrl: 'app/modals/add-book.template.html',
                        controller: 'AddBook',
                        size: 'lg'
                    });

                    modalInstance.result
                    .then(function (data) {
                        booksRepository.addBook(data).then(function (response) {
                            $scope.books.push(response.data);

                        });
                    }, function (error) {
                        alert(error);
                    });

                };

                booksRepository.getBooks()
                .then(function (response){
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
