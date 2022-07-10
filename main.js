var resultado = document.getElementById("resultado");

function elValor() {
    alert("Has valorado con " + resultado.value + " puntos");
  }

var pais = document.getElementById("pais");
var iban = document.getElementById("iban");
var entidad = document.getElementById("entidad");
var sucursal = document.getElementById("sucursal");
var dc = document.getElementById("dc");
var cuenta = document.getElementById("cuenta");

function cBancaria() {
    alert("Le informamos que su cuenta bancaria es:  " + pais.value + iban.value + "-" + entidad.value + "-" + sucursal.value + "-" + dc.value + "-" + cuenta.value);
  }

  

var fecha = document.getElementById("fecha");

function diaSemana() {
    var dates = new Date(fecha.value);
    var day = dates.getDay();
    var semana;

    switch (day) {
        case 0: semana = "Domingo";
        break;
        case 1: semana = "Lunes";
        break;
        case 2: semana = "Martes";
        break;
        case 3: semana = "Miércoles";
        break;
        case 4: semana = "Jueves";
        break;
        case 5: semana = "Viernes";
        break;
        case 6: semana = "Sábado";
        break;
    }

    alert("La fecha selecionada en el elemento es un " + semana);
}








/* validación formulario

      https://developer.mozilla.org/es/docs/Learn/Forms/Form_validation
      https://www.freecodecamp.org/espanol/news/validacion-basica-de-formularios-en-javascript/

      biblios
      https://www.w3resource.com/javascript-exercises/javascript-dom-exercises.php
      https://sweetalert2.github.io/#handling-buttons*/