
function inicializarGestores()
{
	var imagen = document.getElementById("imagen");
	var reloj = setInterval(cambioFondo,5000);	// Gestión del evento que llama a la función que cambia el fondo

	var i = 0;	// Índice para rotar las imágenes del fondo
	var imagenes = ["../imagenes/fresas.jpg",	//Imágenes para rotar
		"../imagenes/limon.jpg",
		"../imagenes/mandarinas.jpg",
		"../imagenes/manzanas.jpg",
		"../imagenes/melon.jpg",
		"../imagenes/sesamo.jpg"];


	// Añadir un listener para llamar al método de imprimir las teclas cuando el usuario tenga el foco en la ventana del navegador
	window.addEventListener('focus', imprimirTecla, false);

	function imprimirTecla(){
		document.addEventListener("keydown", function (event) {

			// Obtener las coordenadas dactuales del scroll
			var x = window.scrollX;
			var y = window.scrollY;

			// Obtener los eventos de las teclas pulsadas
			const keyName = event.key;

			// Comprobar que las teclas coincidan con las flechas del teclado
			switch(keyName){
				case "ArrowRight":
					alert("Has pulsado la flecha derecha");
					break;
				case "ArrowLeft":
					alert("Has pulsado la flecha izquierda");
					break;
				case "ArrowUp":
					alert("Has pulsado la flecha de arriba");
					break;
				case "ArrowDown":
					alert("Has pulsado la flecha de abajo");
					break;
			}
		}, { once: true });	// Ejecutar sólo una vez
	}

	// Bloquear el scroll al pulsar cualquiera de las flechas
	window.addEventListener("keydown", function(e) {
		if(["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"].indexOf(e.code) > -1) {
			e.preventDefault();
		}
	}, false);


	imagen.onclick = function()
	{
		alert("Has pulsado la imagen");

		// Borrar evento del intervalo
		clearInterval(reloj);
	}

	var usuario = document.getElementById("usuario");
	usuario.value = 'tu@email';

	usuario.onblur = function(){
		if (usuario.value == ''){
			usuario.value = "tu@email";
		}
	}

	usuario.onfocus = function(){
		if (usuario.value == 'tu@email'){
			usuario.value = '';
		}
	}

	var item = document.getElementById("combobox");
	item.addEventListener("change",gestorCombo);

	function gestorCombo(){
		console.log(item.value);
		console.log(item.options[item.selectedIndex].text);
		console.log(item.selectedIndex);
	} 

	var formulario = document.getElementById('formulario');
	formulario.onsubmit = function(){
		console.log("click en submit");
		return false;
	}

	// Función para cambiar el fondo
	function cambioFondo() {
		if(i>=0 && i < 6){
			imagen.style.backgroundImage = "url("+imagenes[i]+")";
			i++;
		}
		else{
			i = 0;
		}
	}
}

window.onload = inicializarGestores;
