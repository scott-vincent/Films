mainApp.factory("filmsApiService", ["$http", "$q",
    function($http, $q) {

		return {

			getFilms: function() {
				// Need to use a promise as it takes time to call the back-end.
				// The promise is resolved once the response is received.
				var deferred = $q.defer();
				
				var url = "/films";
				var op = "GET " + url;
				
				$http.get(url).then(
					function(response) {
						// REST call was successful
						console.log(op + " success - HTTP Status: " + response.status);
						deferred.resolve(response.data);
			        }, function(error) {
						// REST call failed
			        	var status = error.status;
			        	var errMsg = error.data.message || "No error message";
			        	console.error(op + " failed - HTTP Status: " + status + ", Error: " + errMsg);
			        	deferred.reject(status);
			        }
			    );
				
				return deferred.promise;
			}
			
		};
	}
]);
