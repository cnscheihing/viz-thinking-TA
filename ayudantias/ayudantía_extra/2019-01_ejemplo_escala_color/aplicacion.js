$(document).ready(function(){

  // ---- EJEMPLO AYUDANTÍA 5 ----
  var comunas = $('.comuna');

  comunas.each(function(index, values){
    // console.log($(this).attr('id'));
  });

  comunas.mouseenter(function(){
    var id_comuna = $(this).attr('id');
    $('#titulo').text(id_comuna);
    $(this).fadeTo("fast", 0.5);
  });

  comunas.mouseleave(function(){
    var id_comuna = $(this).attr('id');
    $('#titulo').text('Hola');
    $(this).fadeTo("fast", 1);
  });

  comunas.click(function(){
    var id_comuna = $(this).attr('id');

    if (!$('#lista').text().includes(id_comuna)) {
      $('#lista').append(', ' + id_comuna);
    }

  })


  // ---- EJEMPLO AYUDANTÍA 6 ----
  // Recuerden que deben cargar la librería d3 en el archivo HTML
  // ABRIR CSV Y CARGAR DATOS
  // Lista vacía con los datos
  var datos = [];
   
  // Agrego cada fila del archivo a lista (push = append de python en js)
  d3.csv("datos_comunas.csv", function(data){
      datos.push(data);
  });

  // Imprimo los datos en consola
  console.log(datos);
  
  // ESTABLECER ESCALA DE COLOR
  // Dominio -->  mínimo y  máximo de los datos
  // Recorrido --> color correspondiente mínimo y color correspondiente al máximo
  var myColor = d3.scaleLinear().domain([1,10]).range(["white", "blue"])
  
  // Imprimir color para un dato
  console.log(myColor(5));
  
  $('#boton_cambio_color').click(function(){
    for (var i = 0; i < datos.length; i++) {
      console.log(datos[i]["id_comuna"]);

      $('#' + datos[i]["id_comuna"]).css('fill', myColor(datos[i]["valor"]));

    }
  })

});
