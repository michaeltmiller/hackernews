angular.module('hackApp', ['ui.router', 'ngSanitize', 'angularMoment'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('news',{
		url:'/news',
		templateUrl:'../news.html',
		controller:'frontCtrl'
	})
	.state('item',{
		url:'/item/:id',
		templateUrl:'../item.html',
		controller:'itemCtrl'
	});


	$urlRouterProvider
	.otherwise('/news');









});