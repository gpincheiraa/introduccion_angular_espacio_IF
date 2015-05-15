(function(){
angular
  .module('gdg.directivas')
  .directive('gdgSvgText',[svgTextFn]);

  function svgTextFn(){

    //Definimos un objeto que tendrá todas las propiedades de las directivas
    var ddo = {
      restrict: 'E',
      scope:{
        text: '=',
        color: '@?'
      },
      link: {pre:  linkPreFn,
             post: linkPostFn
            }
    };

    //Declaramos todas las funciones acá para así tener una mejor visión de las propiedades del ddo (directive definition object)
    function linkPreFn(scope,element,attrs){
      
    }
    
    function linkPostFn(scope,element,attrs){
      
      var rectColor = "#d5463b";

      if(scope.color){
        rectColor = scope.color;
      }

      //INICIALIZAMOS EL SVG
      var svg = d3.select(element[0])
                  .append("svg")
                  .attr("width", 500)
                  .attr("height", 100);

      //Grupo contenedor del text y la figura
      var newGroup = svg.append("g");
      
       var svgRect = newGroup.append("rect")
                      .attr("height",0)
                      .attr("width",0)
                      .attr("x",50)
                      .attr("y",20)
                      .attr("fill",rectColor)

      //Este será el texto svg
      var svgText = newGroup.append("text")
                       .text(scope.text)
                       .attr("y",50)
                       .attr("x",50)
                       .attr("font-size",30)
                       .attr("fill","#F2F2F2")
                       .attr("font-weight","bold"); 
      
      //Obtenemos el tamaño del contenedor
      var bbox = svgText.node().getBBox();

      svgRect
        .attr("height",bbox.height + 5)
        .attr("width",bbox.width + 5);
      

      scope.$watch('text',function(newTxt,oldTxt){
        if(newTxt === oldTxt)
          return;

        //Actualizamos el valor del texto en el elemento d3 
        svgText.text(newTxt);
        //Actualizamos el ancho basado en el tamaño del texto
        var bbox = svgText.node().getBBox();

        svgRect.attr("width",bbox.width + 5)
               .attr("height",bbox.height + 5);

      });                 


    }

    return ddo;
      
  }
    

  
})();