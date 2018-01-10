'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
  $scope.user = {};
  $scope.list = [];
  $scope.mainModel = {
       value1 : false,
       value2 : false,
       value3 : false,
       value4 : false
  };
  $scope.drinkModel = {
       value1 : false,
       value2 : false,
       value3 : false,
       value4 : false,
       value5 : false
  };
  $scope.fruitModel = {
       value1 : false,
       value2 : false,
       value3 : false,
       value4 : false
  };
  $scope.pick = (model) => {
    var result = [];
    for(var key in $scope[model]){
      if($scope[model][key]) result.push($scope[model][key]);
    }
    $scope.user[model] = result.join(', ')
    return $scope.user[model];
  };
  $scope.clear = (index) => {
    // const index = $scope.list.indexOf(username);
    $scope.list.splice(index, 1);
  };
  $scope.update = (username, index) => {
    $scope.user.name = username;
    $scope.clear(index);
  };
  $scope.reset = () => {
    $scope.list.push($scope.user);
    const models = ['mainModel', 'drinkModel', 'fruitModel'];
    models.forEach((model) => {
      for(var key in $scope[model]){
        $scope[model][key] = false;
      }
    });
    $scope.user = {};
  };
}]);