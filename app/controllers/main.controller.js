(function ()
{
    'use strict';

    app.controller('Main', function ($scope)
    {
        console.log(135);
        $scope.x = 2;
        $scope.y = 23;

        $scope.color = 'red';

        $scope.data = ['jsf', 'sjfb', 'cjwc'];

        $scope.value = 0;

        $scope.sum = function ()
        {
            $scope.result = $scope.a + $scope.b
        }

        $scope.add = function ()
        {
            $scope.data.push($scope.item);
            $scope.item = "";
        }

        $scope.deleteItem = function (index)
        {
            $scope.data.splice(index, 1);
        }

        $scope.style = {width: 100,
        				height: 100,
        				color: "blue"}

    }
    );

}
)();