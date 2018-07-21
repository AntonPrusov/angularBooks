(function() {
    'use strict';
    app.factory('authors.repository', ['webApi', '$http', function(webApi, $http) {
        return {
            getAuthors: _getAuthors,
            editAuthor: _editAuthor,
            deleteAuthor: _deleteAuthor,
            updateAuthor: _updateAuthor
        };



        function _getAuthors() {
            return $http.get(webApi.DOMAIN + '/api/v2/authors');
        };

        function _editAuthor(id, data) {
            return $http.put(webApi.DOMAIN + '/api/v2/authors/' + id, data)
        };

        function _deleteAuthor(id) {
            return $http.delete(webApi.DOMAIN + '/api/v2/authors/' + id);
        };

        function _updateAuthor(data) {
            return $http.post(webApi.DOMAIN + '/api/v2/authors/', data)
        }


    }]);
})();