var FinderApp = angular.module('FinderApp', []);
FinderApp.controller('FinderCalcCtrl', ['$scope', function ($scope) {
  $scope.power           = 1.0;
  $scope.sensorWidth     = 0;
  $scope.sensorHeight    = 0;
  $scope.sensorFormatMap = { // in mm.
    'aps-c' : { width: 23.5, height: 15.6 },
    '135'   : { width: 36.0, height: 24.0 },
    '645'   : { width: 60.0, height: 45.0 }
  };
  $scope.sensorFormat = '135'; // default
  $scope.$watch('sensorFormat', function (val) {
    var format = $scope.sensorFormatMap[val];
    if (format) {
      $scope.sensorWidth  = format.width;
      $scope.sensorHeight = format.height;
    }
  });
}]);
