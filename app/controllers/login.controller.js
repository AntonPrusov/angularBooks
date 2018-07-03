(function ()
{
    'use strict';

    app.controller('Login', ['$scope', 'account.repository', '$location', 'utils', function ($scope, accountRepository, $location, utils)
            {
                $scope.user =
                {
                    login: 'admin@gmail.com',
                    password: 'qQ1!1111'
                };

                $scope.login = function ()
                {
                    accountRepository.login($scope.user)
                    .then(function (response)  {
                        utils.notify({
                            message: 'Authorized',
                            type: 'success'
                        });
                        $location.path('/');
                        localStorage.setItem('authToken', response.data.authToken);

                        //console.log(localStorage.authToken);
                    }, function (error)
                    {
                        alert(error)
                    }
                    )
                };
            }
        ]);
}
)();
