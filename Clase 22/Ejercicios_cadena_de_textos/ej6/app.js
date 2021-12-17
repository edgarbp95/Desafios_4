



/*¡ Las computadoras cuentan desde 0, no desde 1! Para extraer el último caracter de cualquier cadena, podríamos usar la siguiente línea, combinando esta técnica con la propiedad length que vimos arriba:

browserType[browserType.length-1];
Copy to Clipboard
El largo de "mozilla" es 7, pero es porque el contador comienza en 0, la posición del caracter es 6, por lo tanto, necesitamos length-1. Puedes usar esto para, por ejemplo, encontrar la primera letra de una serie de cadenas y ordenarlas alfabéticamente.*/