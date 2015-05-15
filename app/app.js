(function(){

//Este módulo lo crearemos exclusivamente para guardar todas las directivas que escribamos y luego importaremos
//este módulo a nuestra aplicación principal.
angular
  .module('gdg.directivas',[]);

//Módulo principal. Este es el módulo principal que definimos en el html en la directiva raiz ng-app
//Cómo segundo argumento le pasamos las dependencias, en este caso nuestro módulo de directivas
angular
  .module('directivas',['gdg.directivas']);


})();