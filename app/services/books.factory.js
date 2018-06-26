(function() {

'use strict';

app.factory('books.repository', ['webApi', '$http', function(webApi, $http) {
	return {
		getBooks: _getBooks,
		getBookById: _getBookById,
		//updateBookById: _updateBookById
	};

	function _getBooks() {
		return $http.get(webApi.DOMAIN + '/api/v2/books');
	}

	function _getBookById(id) {
		return $http.get(webApi.DOMAIN + '/api/v2/books/' + id);
	}

}]);

})();