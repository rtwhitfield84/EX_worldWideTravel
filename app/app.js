"use strict";

var Travel =  angular.module('travelApp', ['ngRoute']);

Travel.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/guide-list.html',
		controller: 'bookCtrl'
	})	
	.otherwise('/');
});

