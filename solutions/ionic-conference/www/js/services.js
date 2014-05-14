angular.module('starter.services', ['ngResource'])

// Conference sessions service
.factory('Session', function ($resource) {
    return $resource('http://localhost:5000/sessions/:sessionId');
});