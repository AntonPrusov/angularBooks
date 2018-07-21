(function ()
    {
        'use strict';

        app.controller('AuthorsController', ['$scope', 'authors.repository', 'utils', '$uibModal', function ($scope, authorsRepository, utils, $uibModal)
        {
            // $scope.sortField = 'firstname';

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
                var modalInstance = $uibModal.open({
                    templateUrl: 'app/modals/confirm/confirm.template.html',
                    controller: 'Confirm',
                    size: 'sm'
                });

                modalInstance.result.then(function (result) {
                    if (!result) return;

                    authorsRepository.deleteAuthor(author.id)
                        .then(function (response) {
                            $scope.authors.splice($scope.authors.indexOf(author), 1);
                            utils.notify({
                                message: 'Автор удален',
                                type: 'info'
                            });
                        })
                })
                //authorsRepository.deleteAuthor(author.id);
                //$scope.books.splice($scope.authors.indexOf(author), 1);
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

            $scope.saveAuthor = function(data, authorId) {
                if (authorId) {
                    authorsRepository.editAuthor(authorId, data)
                        .then(function (responce) {
                            utils.notify({
                                message: 'Автор отредактирован',
                                type: 'success'
                            })
                        }, function (error) {
                            utils.notify({
                                message: error,
                                type: 'danger'
                            })
                        });
                } else {
                    authorsRepository.updateAuthor(data)
                        .then(function (response) {
                            $scope.authors.push(response.data);
                            utils.notify({
                                message: 'Автор сохранен',
                                type: 'info'
                            });
                        });
                }
            }



            $scope.addAuthor = function() {
                $scope.inserted = {
                    id: 0,
                    firstname: '',
                    lastname: ''
                };

                $scope.authors.push($scope.inserted);
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
