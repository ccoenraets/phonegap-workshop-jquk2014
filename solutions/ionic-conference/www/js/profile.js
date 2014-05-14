angular.module('starter.profile', [])


    // Routes
    .config(function ($stateProvider) {

        openFB.init('465374093524857'); // Defaults to sessionStorage for storing the Facebook token

        $stateProvider

            .state('app.login', {
                url: "/login",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/login.html",
                        controller: "LoginCtrl"
                    }
                }
            })

            .state('app.profile', {
                url: "/profile",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/profile.html",
                        controller: "ProfileCtrl"
                    }
                }
            })

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