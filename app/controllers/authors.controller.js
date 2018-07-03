(function ()
    {
        'use strict';

        app.controller('AuthorsController', ['$scope', 'authors.repository', function ($scope, authorsRepository)
        {
            $scope.sortField = 'firstname';

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

            $scope.deleteAuthor = function (author)
            {
                //authorsRepository.deleteAuthor(author.id);
                $scope.books.splice($scope.authors.indexOf(author), 1);
            };

            $scope.editAuthor = function (author)
            {
                authorsRepository.editAuthor(author.id, author);
            };

            authorsRepository.getAuthors()
                .then(function (response)
                    {
                        $scope.authors = response.data;
                    }, function (error)
                    {
                        alert(error);
                    }
                );
        }
        ]);

    }
)();
