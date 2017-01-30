angular.module('hackApp')
    .controller('itemCtrl', function($scope, apiService, $stateParams) {

            apiService.getSingleStory($stateParams.id).then(function(res) {
                $scope.item=res;}
                );


            

    
         








        });

                   