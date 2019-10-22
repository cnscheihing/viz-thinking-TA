var resultado 		= 0;
var numero_actual = 0;
		global_operation = "+"; //por defecto, al seleccionar una operacion, se sumara el valor actual al resultado
$("#calculadora").on("click", ".boton", function() {
	$this = $(this);
	if($this.hasClass("operador")) {
		// Es un operador, ejecutar una operación
		var operation = $this.text().trim();
		calcularOperacionAnterior();
		global_operation = operation;
		
	}
	else {
		// Es un número
		numero_actual *= 10;
		numero_actual += parseInt($this.text());
		actualizarResultado(numero_actual);
	}
});

actualizarResultado = function(valor) {
	$resultado = $("#resultado");
	$resultado.text(valor);
}

calcularOperacionAnterior = function(){
	switch(global_operation) {
		case "+": sumar(); break;
		case "-": restar(); break;
		case "*": multiplicar(); break;
		case "%": dividir(); break;
		case "=": igual(); break;
		case "C": borrar(); break;
	}
}

sumar = function(){
	resultado += numero_actual;
	numero_actual = 0;
	actualizarResultado(resultado);
}

restar = function(){
	resultado -= numero_actual;
	numero_actual = 0;
	actualizarResultado(resultado);
}
multiplicar = function(){
	resultado *= numero_actual;
	numero_actual = 0;
	actualizarResultado(resultado);
}
dividir = function(){
	resultado /= numero_actual;
	numero_actual = 0;
	actualizarResultado(resultado);
}

igual = function(){
	resultado = numero_actual;
	numero_actual = 0;
	actualizarResultado(resultado);
}
borrar = function(){
	resultado = 0;
	numero_actual = 0;
	actualizarResultado(0);
	global_operation = "+";
}
