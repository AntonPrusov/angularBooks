(function ()
{
    'use strict';

    app.controller('Header', ['$scope', '$translate', function ($scope, $translate)
    {
        $scope.isLogged = function() {
        	return localStorage.getItem('authToken') ? true : false;
        };

        $scope.langSwitch = function () {
            var lang = localStorage.getItem('preferredLanguage');

            var curlang = lang === 'en' ? 'ru' : 'en';

            $translate.use( curlang );

            localStorage.setItem('preferredLanguage', curlang)
        }
    }
    ]);

}
)();