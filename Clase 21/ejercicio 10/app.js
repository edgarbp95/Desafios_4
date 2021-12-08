let valor = prompt ("¿Cual es el valor del producto? ")

let descuento = prompt ("¿Qué descuento (%) aplicaba al producto?");

let valorDescuento = 100 - parseFloat(descuento);

//alert (valorDescuento)


let precioFinal = parseFloat(valor) * parseFloat(valorDescuento) / 100;

alert  ("El precio final del producto es: " + precioFinal )