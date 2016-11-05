//Main Angular.js
'use strict';

var app = angular.module('TweetApp', [
  'ngRoute',
  'ngMaterial']);


app.config(function($logProvider){
    $logProvider.debugEnabled(true);
});

  //Custom theming
  /*$mdThemingProvider.theme('default')
  .primaryPalette('blue-grey')
  .accentPalette('red');*/


//}]);