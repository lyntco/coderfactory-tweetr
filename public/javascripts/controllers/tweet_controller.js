angular.module('tweetr')
.controller('TweetController', ['$scope', 'TweetService', '$http', function TweetController ($scope, TweetService, $http) {
  $scope.tweets = [];
  // $scope.tweets = TweetService.getTweetsFromServer();
  TweetService.getTweetsFromServer()
  .then(function(tweets) {
    $scope.tweets = tweets;
    $scope.$apply();
  });
  // $http.get('/tweets')
  // .then(function(res) {
  //   console.log('got res', res);
  //   return $scope.tweets = res.data;
  // });

  $scope.addTweet = function (text) {
    TweetService.addTweet(text);
    $scope.tweet.text = '';
  }
}]);
