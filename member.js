angular.module('hackApp')
    .directive('member', function($compile) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                member: '='
            },
            templateUrl: 'member.html',
            link: function(scope, element, attrs) {
                if (angular.isArray(scope.member.comments)) {
                    $compile('<collection ng-hide="ToggleView" collection="member.comments"></collection>')(scope, function(cloned, scope) {
                        element.append(cloned);
                    });
                }
            }
        }
    })
