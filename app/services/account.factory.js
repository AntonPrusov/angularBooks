(function() {

'use strict';

app.factory('account.repository', ['webApi', '$http', function(webApi, $http) {
	return {
		login: _login,
	};

	function _login(data) {
		return $http.post(webApi.DOMAIN + '/api/v2/login', data);
	}

}]);

})();