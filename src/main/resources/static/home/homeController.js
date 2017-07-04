mainApp.controller('homeController', function($scope, filmsApiService) {
	
	$scope.films = [];
	
	filmsApiService.getFilms().then(
		function(data) {
			$scope.films = data;
		},
		function(error) {
			console.log("Failed to get list of films: " + error);
		}
	);
	
});
