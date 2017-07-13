var app = angular.module('flapperNews', []);

app.factory('posts', [function(){
  var o = {
    posts:  [
      {title: "post 1", upVotes: 5},
      {title: "post 2", upVotes: 3},
      {title: "post 3", upVotes: 7},
      {title: "post 4", upVotes: 2.5},
    ]
  };

  return o;
}]);

app.controller('MainCtrl', [
'$scope', 'posts',
function($scope, posts){
  $scope.posts = posts.posts;



  $scope.addPost = function(){
    if (!$scope.title || $scope.title==='') {return;}
    $scope.posts.push({
      title:$scope.title,
      link:$scope.link,
      upVotes:0 });
    $scope.title='';
    $scope.link='';
  }

  $scope.incrementUpVotes = function(post) {
    post.upVotes++;
  }
}]);
