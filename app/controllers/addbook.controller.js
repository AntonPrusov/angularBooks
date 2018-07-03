(function () {
    'use strict';

    app.controller('AddBook', addBookController);

    function addBookController($scope, $uibModalInstance, booksRepository) {
        $scope.newBook = {
            title: '',
            author_id: null,
            date: '',
            cost: '',
            rate: '',
            intro: '',
        };

        booksRepository.getAuthors()
        .then(function (response) {
            $scope.authors = response.data.map(function (item) {
                return {
                    id: item.id,
                    name: item.firstname + ' ' + item.lastname
                }
            });
        }, function(error) {
            alert(error);
        });

        $scope.ok = function () {
            $uibModalInstance.close($scope.newBook);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('Вы отменили создание книги');
        }
    }

    addBookController.$inject = [
        '$scope',
        '$uibModalInstance',
        'books.repository'
    ];
})();