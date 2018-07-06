(function () {
    'use strict';

    app.directive('langSwitcher', langSwitcher);

    function langSwitcher() {
        return {
            restrict: 'E',
            templateUrl: './app/directives/lang-switcher/lang-switcher.template.html',
            scope: {},
            controller: ['$scope', '$translate', '$rootScope', function ($scope, $translate, $rootScope) {
                $scope.languages = [
                    {key: 'en', value: 'English'},
                    {key: 'ru', value: 'Rusiian'}
                ];

                $scope.showMenu = false;

                $scope.toggleMenu = function () {
                    $scope.showMenu = !$scope.showMenu;
                };

                var key = localStorage.getItem('preferredLanguage') || 'en';

                $scope.currentLang = $scope.languages.filter(function (item) {
                    return item.key === key;
                })[0];
                
                $scope.changeLang = function (key) {
                    $scope.currentLang = $scope.languages.filter(function (item) {
                        return item.key === key;
                    })[0];

                    $scope.showMenu = false;

                    $translate.use(key);

                    localStorage.setItem('preferredLanguage', key);

                }
            }]
        }
    }
})();