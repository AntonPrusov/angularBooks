(function ()
{
    'use strict';

    app.controller('BookDetails', ['$scope', 'books.repository', '$routeParams', function ($scope, booksRepository, $routeParams)
            {
                booksRepository.getBookById($routeParams.id)
                .then(function(response) {
                    console.log(response.data);
                }, function(error) {
                    alert(error)}
                    )
            }
        ]);
}
)();
