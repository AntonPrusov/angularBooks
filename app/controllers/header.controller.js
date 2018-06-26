(function ()
{
    'use strict';

    app.controller('Header', function ($scope)
    {
        $scope.isLogged = function() {
        	return localStorage.getItem('authToken') ? true : false;
        };
    }
    );

}
)();