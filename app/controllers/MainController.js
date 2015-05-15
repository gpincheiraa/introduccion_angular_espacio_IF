(function(){

angular
  .module('directivas')
  .controller('MainController',MainControllerFn);

  MainControllerFn.$inject = ['$scope'];

  function MainControllerFn($scope){

    //En este controlador definiremos las variables que usaremos en cada una de las directivas de ejemplo
    $scope.name = "Gonzalo";
    console.log("scope en MainController",$scope);
  }

})();