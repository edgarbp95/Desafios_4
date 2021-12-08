let primerNumerito = prompt("¿Cuantos invitados son hombres?");
let segundoNumerito = prompt("¿Cuantos invitados son mujeres?");
let resultadoSuma = parseFloat(primerNumerito) + parseFloat(segundoNumerito);

alert("Son: " + resultadoSuma + " invitados en total.");

let tercerNumero = prompt("¿Cuántas porciones de chocotorta son para cada uno?");

alert ("Necesitas " + parseFloat(resultadoSuma)*parseFloat(tercerNumero) + " porciones de chocotorta.");