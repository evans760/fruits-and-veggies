/* setup your angular app here */

// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);


var myApp = angular.module('FandV', []);

myApp.controller('appCtrl', ['$scope', function($scope) {
  $scope.fruits = [];
  $scope.vegetables = [];
  $scope.both = fruits.concat(vegetables);
  $scope.click = function(destination, idx, currentArray)

  {

  $scope[destination].push($scope[currentArray] [idx]);
  $scope[currentArray].splice(idx,1);
}

$scope.check = function(currItem, arrName) {
  if(arrName === 'fruits') {
    if(fruits.indexOf(currItem) === -1) {
      return true;
    }
  } else {
    if(vegetables.indexOf(currItem) === -1) {

    }
  }
}}]);
