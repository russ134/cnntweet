//Main Angular.js
'use strict';

var app = angular.module('TweetApp', [
  'ngRoute',
  'ngMaterial',
  'ngResource',
  'ngSanitize']);


app.config(function($logProvider){
    $logProvider.debugEnabled(true);
});

  //Optional Material Design Custom theming
  /*$mdThemingProvider.theme('default')
  .primaryPalette('orange',{
    'hue-3': '600'
  })
  .accentPalette('red');*/
