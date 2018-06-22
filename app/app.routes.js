app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');

	$routeProvider
	.when('/', {
		templateUrl: 'app/views/home.template.html',
		/*controller: 'Home'*/
	})
	.when('/books', {
		templateUrl: 'app/views/books-list.template.html',
		controller: 'BooksList'
	})
	.otherwise('/');
})