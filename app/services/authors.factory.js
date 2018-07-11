(function() {
    'use strict';
    app.factory('authors.repository', ['webApi', '$http', function(webApi, $http) {
        return {
            getAuthors: _getAuthors,
            editAuthor: _editAuthor,
            deleteAuthor: _deleteAuthor
        };



        function _getAuthors() {
            return $http.get(webApi.DOMAIN + '/api/v2/authors');
        };

        function _editAuthor(id, data) {

        };

        function _deleteAuthor(id) {
            return $http.delete(webApi.DOMAIN + '/api/v2/authors/' + id);
        };


    }]);
})();