"use strict";

Travel.controller('bookCtrl', function($scope,dataService) {

$scope.present = "You here?";
$scope.guideBooks = [];

var promise = dataService.getBooks();
  promise.then(function(data) {

    $scope.guideBooks = data;
  });


});




