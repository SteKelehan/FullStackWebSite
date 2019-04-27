myApp.controller('navController', ['$scope', '$location', function ($scope, $location) {
    // This is changing the URL location path you click each of the butons
    $scope.isActive = function (destination) {
        return destination === $location.path();
    }
}])