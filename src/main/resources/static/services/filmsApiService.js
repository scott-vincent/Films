mainApp.factory("filmsApiService", ["$http", "$q",
    function($http, $q) {

		/**
		 * Do a GET Rest call
		 */
		function doGet(url) {
			// Need to use a promise as it takes time to call the back-end.
			// The promise is resolved once the response is received.
			var deferred = $q.defer();

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
	
		/**
		 * Do a DELETE Rest call
		 */
		function doDelete(url) {
			// Need to use a promise as it takes time to call the back-end.
			// The promise is resolved once the response is received.
			var deferred = $q.defer();

			var op = "DELETE " + url;
			
			$http.delete(url).then(
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

		/**
		 * Do a POST Rest call
		 */
		function doPost(url, body) {
			//
			// Write Me!
			//
			// This is similar to the above calls but you need to pass the body also.
			//
			// Use JSON.stringify to convert the body from an object into JSON.
			//
			// e.g.
			//
			// var body = { "title": "My Title", "year": "2017" };
			// var bodyData = JSON.stringify(body);
			//
			// $http.post(url, bodyData).then(...
		}
		
		return {

			// This is where we make all our back-end REST calls
			
			getFilms: function() {
				return doGet("/films");
			},
			
			getFilm: function(id) {
				return doGet("/films/" + id);
			},
			
			deleteFilm: function(id) {
				return doDelete("/films/" + id);
			}
			
		};
	}
]);
