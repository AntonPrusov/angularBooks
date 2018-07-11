(function ()
{
    'use strict';

    app.controller('Header',  ['$scope', '$translate', 'books.repository', '$rootScope', '$location', function ($scope, $translate, booksRepository, $rootScope, $location)
    {
        $scope.isLogged = function() {
        	return localStorage.getItem('authToken') ? true : false;
        };

        $scope.langSwitch = function () {
            var lang = localStorage.getItem('preferredLanguage');

            var curlang = lang === 'en' ? 'ru' : 'en';

            $translate.use( curlang );

            localStorage.setItem('preferredLanguage', curlang)
        };
        
        $scope.search = function () {
            booksRepository.searchBy($scope.searchString)
                .then(function (response) {

                    sessionStorage.setItem('searchResult', JSON.stringify(response.data));

                    $rootScope.$broadcast('search', response.data);

                    $location.path('/books');

                }, function (error) {
                    alert(error);
                });
        }
    }
    ]);

}
)();