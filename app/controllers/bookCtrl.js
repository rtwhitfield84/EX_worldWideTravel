"use strict";

Travel.controller('bookCtrl', function($scope,ItemStorage) {

$scope.guideBooks = [];

ItemStorage.getBooks()
.then(function(data) {
    $scope.guideBooks = data;
    $scope.$apply();
	console.log("data",data);
  });

});




