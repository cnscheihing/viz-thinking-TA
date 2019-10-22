$(document).ready(function(){
	var botonOcultar = $("#boton_ocultar");
	var botonModo = $("#boton_modo");
	var textoOculto = $("h2");
	
	botonOcultar.on("click", function(){
		//alert("hola");
		
		$("ul").slideToggle();
		var $this = $(this);
		if($this.text() == "Ocultar"){
			$("#container").show();
			$("#container").append('<div>Se ocultó la lista :O</div>');
			$this.text("Mostrar");
		}
		else {
			$this.text("Ocultar");
			$("#container").hide();
		}
	});

	botonModo.on("click", function(){
		$("body").toggleClass("noche");
		$("body").toggleClass("dia");
	});
});
	