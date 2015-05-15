(function(){

angular
  .module('directivas')
  .controller('SvgController',SvgControllerFn);

  SvgControllerFn.$inject = ['$scope'];

  function SvgControllerFn($scope){

    $scope.name = "Gonzalo";
    // $scope.lastName = "Pincheira";
  }

})();