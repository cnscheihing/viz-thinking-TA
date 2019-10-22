// d3_03.js --> Scale

// Primero, definamos un nuevo _dataset_ extendido.
var dataset = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5,
                  8, 9, 7, 9, 3, 2, 3, 8, 4, 6,
                  2, 6, 4, 3, 3, 8, 3, 2, 7, 9,
                  5, 10, 2, 8, 8, 4, 1, 9, 7, 1];

// Definamos el ancho y la altura del elemento SVG.
var WIDTH  = 800;
var HEIGHT = 500;

// Luego, elaboremos un contenedor.
var mesa_trabajo_illustrator = d3.select('body')
                  .append('svg')           // Añade elemento SVG,
                  .attr('width', WIDTH)    // le ajusta su ancho,
                  .attr('height', HEIGHT); // y también su altura.

var scale = d3.scaleLinear()
.domain([0, d3.max(dataset)])
.range([0, HEIGHT]);

console.log(scale(10));
console.log(scale(2));
console.log(scale(7));

mesa_trabajo_illustrator.selectAll('rect')
.data(dataset)
.enter()
.append('rect')
.attr('width', 15)
.attr('height', function(datum){return datum * 30;})
.attr('height', scale)
.attr('x', function(datum, index){return index*50;})
.attr('y',0)
.attr('y', function(datum){return HEIGHT - scale(datum);})
.attr('fill','brown');


function numberColor(digit){
  if (digit <= 3){
    return 'red';
  }
  else if (digit <= 6){
    return 'blue';
  }
  else{
    return 'green';
  }
};

mesa_trabajo_illustrator.selectAll('rect')
.data(dataset)
.attr('width', 15)
.attr('height', function(datum){return datum * 30;})
.attr('height', scale)
.attr('x', function(datum, index){return index*20;})
.attr('y',0)
.attr('y', function(datum){return HEIGHT - scale(datum);})
.attr('fill', numberColor);
