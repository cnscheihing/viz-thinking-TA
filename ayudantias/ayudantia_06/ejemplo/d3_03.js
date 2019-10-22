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
var container = d3.select('body')
                  .append('svg')           // Añade elemento SVG,
                  .attr('width', WIDTH)    // le ajusta su ancho,
                  .attr('height', HEIGHT); // y también su altura.
