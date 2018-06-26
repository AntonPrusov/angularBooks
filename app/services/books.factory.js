(function() {
    'use strict';
    app.factory('books.repository', ['webApi', '$http', function(webApi, $http) {
        return {
            getBooks: _getBooks,
            getBookById: _getBookById,
            getAuthors: _getAuthors,
            updateBookById: _updateBookById
        };

        function _getBooks() {
            return $http.get(webApi.DOMAIN + '/api/v2/books');
        }

        function _getBookById(id) {
            return $http.get(webApi.DOMAIN + '/api/v2/books/' + id);
        }

        function _getAuthors() {
            return $http.get(webApi.DOMAIN + '/api/v2/authors');
        }

        function _updateBookById(id, data) {
        	return $http.put(webApi.DOMAIN + '/api/v2/books/' + id, data);
        }
    }]);
})();