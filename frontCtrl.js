angular.module('hackApp')
    .controller('frontCtrl', function($scope, apiService) {


        apiService.getTopStories().then(function(response) {
            $scope.news=response;
        });

        
    
         


    });
