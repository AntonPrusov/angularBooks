app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');

	$routeProvider
	.when('/', {
		templateUrl: 'app/views/home.template.html',
		/*controller: 'Home'*/
	})
	.when('/login', {
		templateUrl: 'app/views/login.template.html',
		controller: 'Login'
	})
	.when('/books', {
		templateUrl: 'app/views/books-list.template.html',
		controller: 'BooksList'
	})
	.when('/books/:id', {
		templateUrl: 'app/views/books-details.template.html',
		controller: 'BookDetails'
	})
	.when('/authors', {
        templateUrl: 'app/views/authors.template.html',
        controller: 'AuthorsController'
    })
	.otherwise('/');
})