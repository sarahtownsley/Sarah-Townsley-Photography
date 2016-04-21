var app = angular.module("myApp", ['ngRoute']);

app.controller("MainController", ["$scope", "$location", "$anchorScroll", "$http", function ($scope, $location, $anchorScroll, $http) {


    // navigation


    $scope.scrollToSection = function (anchorID) {
        $(window).scrollTo($(anchorID), 800, {});
    }



    $scope.scrollToGallery = function (hideID, categoryID, galleryID) {
        $(document).ready(function () {
            $(hideID).click(function () {
                $(galleryID).hide(1000);
            });
            $(categoryID).click(function () {
                $(galleryID).show(1000);
                $(window).scrollTo($(galleryID), 800, {})
            })
        })
    }

   


}]);