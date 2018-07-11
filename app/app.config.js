app.run(function($rootScope, $location) {
	$rootScope.$on('$routeChangeSuccess', function() {
		$rootScope.currentMenuItem = $location.path() || '/home';
	});

});

// check authorization
app.config(['$httpProvider', function($httpProvider) {

	$httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
		return {
			request: function(config) {
				config.headers = config.headers || {};
	
				if (localStorage.getItem('authToken')) {
					config.headers.Authorization = 'Bearer ' + localStorage.getItem('authToken');
				}

				return config;
			},
			responseError: function(response) {
				if (response.status === 401) {
					$location.path('/');
				}

				return $q.reject(response);
			}
		};

	}]);
}]);

// translate
/*
app.config(['$translateProvider', function($translateProvider) {
	var translations = {
		en: {
			'Authors': 'Authors'
		},
		ru: {
			'Authors': 'Авторы'
		}
	};

    $translateProvider
        .translations('en', translations.en)
        .translations('ru', translations.ru)
        .preferredLanguage(localStorage.getItem('preferredLanguage') || 'en');
}]);*/

app.config(['$translateProvider', function($translateProvider) {
    $translateProvider.useStaticFilesLoader({
		prefix: 'i18n/',
		suffix: '.json'
	})

    $translateProvider
        .preferredLanguage(localStorage.getItem('preferredLanguage') || 'en');
}]);

app.run(['editableOptions', function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
}]);