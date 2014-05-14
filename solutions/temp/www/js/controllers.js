angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope) {
})

.controller('SessionsCtrl', function($scope, Session) {
    $scope.sessions = Session.query();
})

.controller('SessionCtrl', function($scope, $stateParams, Session) {
    $scope.session = Session.get({sessionId: $stateParams.sessionId});
})

.controller('LoginCtrl', function($scope) {
    $scope.login = function() {
        openFB.login('email',
            function() {
                alert('Facebook login succeeded');
            },
            function(error) {
                alert('Facebook login failed: ' + error.error_description);
            });
    };
})

.controller('ProfileCtrl', function($scope, $q) {
    openFB.api({
        path: '/me',
        params: {fields: 'id,name'},
        success: function(user) {
            console.log(user);
            $scope.$apply(function() {
                $scope.user = user;
            });
        },
        error: function(error) {
            console.log(error);
            alert('Facebook error: ' + error.error_description);
        }
    });
});

