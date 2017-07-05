mainApp.controller('homeController', function($scope, filmsApiService) {
	
	$scope.films = [];
	$scope.selected = {};
	
	filmsApiService.getFilms().then(
		function(data) {
			$scope.films = data;
		},
		function(error) {
			console.log("Failed to get list of films: " + error);
		}
	);
	
	// Try uncommenting the following line. You should get an HTTP error
	// as the back-end doesn't support doing DELETE yet!
	//
	// filmsApiService.deleteFilm("1");
	
	$scope.doSelectFilm = function(film) {
		$scope.selected = film;
	}
	
});
