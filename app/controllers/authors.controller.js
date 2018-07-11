(function ()
    {
        'use strict';

        app.controller('AuthorsController', ['$scope', 'authors.repository', 'utils', function ($scope, authorsRepository, utils)
        {
            $scope.sortField = 'firstname';

            utils.notify({
                message: 'Hello!!!!',
                type: 'info'
            })

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

            };

            $scope.user = {
                name: 'awesome user'
            };

            $scope.updateUser = function () {
                console.log($scope.user);
            }


            authorsRepository.getAuthors()
                .then(function (response)
                    {
                        $scope.authors = response.data;

                    }, function (error)
                    {
                        utils.notify({
                            message: error.statusText,
                            type: 'danger'
                        });
                    }
                );
        }
        ]);

    }
)();
