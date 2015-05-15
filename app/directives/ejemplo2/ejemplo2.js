(function(){
angular
  .module('gdg.directivas')
  .directive('gdgEjemplo2',[ejemplo2Fn]);

  function ejemplo2Fn(){

    //Definimos un objeto que tendrá todas las propiedades de las directivas
    var ddo = {
      restrict: 'A',
      template: '<h1>DIRECTIVA EJEMPLO 2</h1>' + 
                '<div>Directive Name: {{name}}</div>' +
                'Change Directive Name : <input type="text" ng-model="name"/>',
      scope: false,
      controller: controllerFn,
      link: linkFn
    };

    //Declaramos todas las funciones acá para así tener una mejor visión de las propiedades del ddo (directive definition object)
    function linkFn(scope,element,attrs){
      console.log("scope en la directiva",scope);
    }

    function controllerFn($scope,$element,$attrs){
      $scope.name = "";
      $scope.nuevaVariable = "nueva variable";
    }

    return ddo;
  };
})();