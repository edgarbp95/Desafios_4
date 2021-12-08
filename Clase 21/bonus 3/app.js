let sueldoBruto = prompt ("Ingrese su sueldo bruto: ");
let obraSocial = sueldoBruto * 3 / 100;
let jubilacion = sueldoBruto * 11 /100;
let ley19032 =  sueldoBruto * 3 / 100;
let sueldoNeto = sueldoBruto - obraSocial - jubilacion - ley19032;






alert ("Sueldo Bruto: $" + sueldoBruto + "\nDeducciones:\n" + "Obra social: $" + obraSocial + "\nLey19032: $" + ley19032 + "\nJubilación: $" + jubilacion + "\nNeto a pagar: $" + sueldoNeto)






//Realizar una calculadora de sueldo neto. Se solicita ingresar el sueldo bruto y se descuenta: Obra social 3%, jubilación 11%, Ley 19032 3%. Mostrar el monto de cada una de las deducciones y el monto final. No contempla impuesto a las ganancias ni sindicatos.
//ej: Sueldo bruto: $70.000
//Deducciones:
//Obra social: $2100
//Ley 19032: $2100
//Jubilación: $7700
//Neto a pagar: $58100

