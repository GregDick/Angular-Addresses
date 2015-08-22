angular
  .module('angularAddresses')
  .controller('LogoutCtrl', function ($scope, $location) {
    Auth.logout(function () {
      $location.path('/login');
      $scope.$apply();
    });
  });
