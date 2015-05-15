(function(){
angular
  .module('gdg.directivas')
  .directive('gdgEjemplo1',[ejemplo1Fn]);

  function ejemplo1Fn(){

    //Definimos un objeto que tendrá todas las propiedades de las directivas
    var ddo = {
      restrict: 'E',
      templateUrl: 'app/directives/ejemplo1/partials/ejemplo1.tpl.html',
      transclude: true,
      replace: true
    };

    //Declaramos todas las funciones acá para así tener una mejor visión de las propiedades del ddo (directive definition object)


    return ddo;
  };
})();