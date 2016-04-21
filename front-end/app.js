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

    $scope.email = {
        name: "",
        from: "",
        to: "sactownsley@gmail.com",
        subject: "Photography Inquiry",
        text: ""
    }

    $scope.buttonName = "Send Email"

    $scope.sendEmail = function () {
        var email = _.clone($scope.email);
        email.text = $scope.email.from + " " + $scope.email.name + " " + $scope.email.text;
        $scope.buttonName = "Please wait...";
        $http.post('http://localhost:8080/api/message', email).then(function (response) {
            var form = document.getElementById("contact_form");
            form.reset();
            $scope.buttonName = "Email sent! Thank you!"
        })
    }


}]);