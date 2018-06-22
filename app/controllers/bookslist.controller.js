(function ()
{
    'use strict';

    app.controller('BooksList', function ($scope)
    {
        $scope.books = [
            {
                title: 'Harry Potter',
                author: 'J. Rowling',
                date: '1970-01-01',
                cost: 100,
                rate: 3,
                id: 1
            },

            {
                title: '321',
                author: '123',
                date: '1966-01-01',
                cost: 150,
                rate: 4,
                id: 2
            },

            {
                title: 'How to kill',
                author: 'Somebody',
                date: '2015-01-01',
                cost: 270,
                rate: 5,
                id: 3
            },

            {
                title: 'Abetka',
                author: 'Teacher',
                date: '2018-01-01',
                cost: 55,
                rate: 1,
                id: 4
            },

            {
                title: 'The War',
                author: 'A. Hitler',
                date: '1931-01-01',
                cost: 210,
                rate: 4,
                id: 5
            },

            {
                title: 'Some title',
                author: 'Some Author',
                date: '2016-01-01',
                cost: 112,
                rate: 2,
                id: 6
            },

            {
                title: 'Miss Marple',
                author: 'A. Cristi',
                date: '1966-01-01',
                cost: 190,
                rate: 4,
                id: 7
            },

            {
                title: 'Nadoelo',
                author: 'Me',
                date: '1999-01-01',
                cost: 120,
                rate: 4,
                id: 8
            },

            {
                title: 'Lorem',
                author: 'Ips',
                date: '1911-01-01',
                cost: 167,
                rate: 5,
                id: 9
            },

            {
                title: 'Mickey Mouse',
                author: 'W. Disney',
                date: '1954-01-01',
                cost: 7000,
                rate: 9,
                id: 10
            }
        ];

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

    }
    );

}
)();
