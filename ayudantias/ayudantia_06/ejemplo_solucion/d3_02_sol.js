/*
d3_02.js -- Enter, update, exit
*/

// Definamos un nuevo _dataset_: los dígitos de pi.
var dataset = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

var WIDTH = 800;
var HEIGHT = 500;

var container = d3.select('body')
.append('svg')
.attr('width', WIDTH)
.attr('height', HEIGHT);

container.selectAll('rect')
.data(dataset)
.enter()
.append('rect')
.attr('height', function(datum){return datum * 30;})
.attr('width', 20)
.attr('x', function(datum, index){return index * 50;})
.attr('y', 10)
.attr('fill', 'red');


dataset.push(8);
dataset.push(9);
dataset.push(7);
console.log(dataset);


container.selectAll('rect')
.data(dataset)
.enter()
.append('rect')
.attr('height', function(datum){return datum * 30;})
.attr('width', 20)
.attr('x', function(datum, index){return index * 50;})
.attr('y', 10)
.attr('fill', 'blue');


container.selectAll('rect')
.data(dataset)
.attr('height', function(datum){return datum * 30;})
.attr('width', 20)
.attr('x', function(datum, index){return index * 50;})
.attr('y', 10)
.attr('fill', 'pink');


dataset.pop();
dataset.pop();

container.selectAll('rect')
.data(dataset)
.exit()
.remove();
