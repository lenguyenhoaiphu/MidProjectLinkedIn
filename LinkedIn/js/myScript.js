var app = angular.module('myApp', ["xeditable"]);
app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

app.controller('myController', function($scope, $http) {
  $http.get('data.json')
  .success(function(response) {
      $scope.myData = response;
  });
});