'use strict';

/**
 * @ngdoc overview
 * @name fApp
 * @description
 * # fApp
 *
 * Main module of the application.
 */
angular.module('fApp', ["ui.router"]).config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.when("","/a")
	$stateProvider.state("a",{
		url:"/a",
		templateUrl:"views/a.html",
		controller:"a",
	}).state("b",{
		url:"/b",
		templateUrl:"views/b.html",
		controller:"b"
	})
});

 
