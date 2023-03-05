function inicializarGestores(){

    var imagenes = ["carne.jpg", "drink.jpg", "fiorentina.jpg", "heade_ft.jpg"];
    var i = 0;

    var reloj = setInterval(cambiar, 5000);
    var imagen = document.getElementById("imagen");

    imagen.addEventListener("click", () => {
    console.log("Intervalo detenido")
    clearInterval(reloj);}, false);

    function cambiar(){
        if (imagenes.length == i) {
            i = 0;
        }
        imagen.style.backgroundImage = "url(images/"+imagenes[i]+")";
        console.log("La nueva imagen es: "+imagenes[i])
        i = i +1;
    }

	document.addEventListener("keydown", flechas)

	function flechas(event) {
	    var x = window.scrollX;
		var y = window.scrollY;
        const tecla = event.key.toLowerCase();

        if (tecla == 'arrowright') {
            alert("Flecha derecha pulsada");
        }
        else if (tecla == 'arrowleft') {
            alert("Flecha izquierda pulsada");
        }
        else if (tecla == 'arrowup') {
            alert("Flecha arriba pulsada");
        }
        else if (tecla == 'arrowdown') {
            alert("Flecha abajo pulsada");
        }
	}

	var imagen = document.getElementById("imagen");
      imagen.onclick = function () {
        alert("Has pulsado la imagen");
      };

      var usuario = document.getElementById("usuario");
      usuario.value = "tu@email";

      usuario.onblur = function () {
        if (usuario.value == "") {
          usuario.value = "tu@email";
        }
      };

      usuario.onfocus = function () {
        if (usuario.value == "tu@email") {
          usuario.value = "";
        }
      };

      var item = document.getElementById("combobox");
      item.addEventListener("change", gestorCombo);

      function gestorCombo() {
        console.log(item.value);
        console.log(item.options[item.selectedIndex].text);
        console.log(item.selectedIndex);
      }

      var formulario = document.getElementById("formulario");
      formulario.onsubmit = function () {
        console.log("click en submit");
        return false;
      };
    }

    window.onload = inicializarGestores;
