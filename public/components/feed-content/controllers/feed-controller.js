'use strict';

app.controller('FeedController', ['$scope', '$resource', '$timeout', function ($scope, $resource, $timeout){
		

    //For loading
    $scope.loaded = true;

	//Feed initialization
    function startup() {

      // set a default username value
      $scope.username = "RussTerrell";
      
      // empty tweet model
      $scope.tweetsResult = [];

      // initiate masonry.js
      $scope.msnry = new Masonry('#tweet-list', {
        columnWidth: 320,
        itemSelector: '.tweet-item',
        transitionDuration: 0,
        isFitWidth: true
      });

      // layout masonry.js on widgets.js loaded event
      twttr.events.bind('loaded', function () {
        $scope.msnry.reloadItems();
        $scope.msnry.layout();
      });

      $scope.getTweets();
    }


	//Retrieve Tweets
    function getTweets (paging) {

      var params = {
        action: 'user_timeline',
        user: $scope.username
      };

      if ($scope.maxId) {
        params.max_id = $scope.maxId;
      }

      // create Tweet data resource
      $scope.tweets = $resource('/tweets/:action/:user', params);

      // GET request using the resource
      $scope.tweets.query( { }, function (res) {

        if( angular.isUndefined(paging) ) {
          $scope.tweetsResult = [];
        }else{
          console.log("Feed not coming through");
        }

        $scope.tweetsResult = $scope.tweetsResult.concat(res);

        // for paging - https://dev.twitter.com/docs/working-with-timelines
        $scope.maxId = res[res.length - 1].id;

        // render tweets with widgets.js
        $timeout(function () {
          twttr.widgets.load();
          $scope.loaded = true;
        }, 30);
      });
    }

    $scope.getTweets = function () {
      $scope.maxId = undefined;
      getTweets();
    }

    $scope.getMoreTweets = function () {
      getTweets(true);
    }
    
    startup();
            
}]);