myApp.controller('homeController', ['$scope', function ($scope) {
    console.log('Hello');
    $scope.slides = [{
        image: "img/Maths.png"
    },
    {
        image: "img/PokerEye.png"
    },
    {
        image: "img/RoyalFlush.jpg"
    },
    {
        image: "img/StatsGraph.jpg"
    },
    {
        image: "img/Suits.jpg"
    }]
}]);