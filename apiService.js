angular.module('hackApp')
.service('apiService', function($http){

	this.getTopStories=function(){
		return $http.get('http://node-hnapi.herokuapp.com/news')
		.then(function(res){
			console.log(res);
			return res.data;
		});
	};

	this.getSingleStory=function(id){
		return $http.get('http://node-hnapi.herokuapp.com/item/'+id)
		.then(function(res){
			return res.data;
		});
	};



});