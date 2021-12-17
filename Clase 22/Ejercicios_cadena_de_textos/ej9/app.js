

/*
El método substr() devuelve los caracteres de una cadena que comienzan en una localización especificada y de acuerdo al número de caracteres que se especifiquen.
cadena.substr(inicio[, longitud])
Localización en la cual se empiezan a extraer caracteres. Si se da un número negativo, se trata como longCad + inicio donde  longCad es la longitud de la cadena (por ejemplo, si inicio es -3 se trata como longCad - 3).

var cadena = "abcdefghij";

console.log("(1,2): "    + cadena.substr(1,2));   // '(1, 2): bc'
console.log("(-3,2): "   + cadena.substr(-3,2));  // '(-3, 2): hi'
console.log("(-3): "     + cadena.substr(-3));    // '(-3): hij'
console.log("(1): "      + cadena.substr(1));     // '(1): bcdefghij'
console.log("(-20, 2): " + cadena.substr(-20,2)); // '(-20, 2): ab'
console.log("(20, 2): "  + cadena.substr(20,2));  // '(20, 2): '

*/