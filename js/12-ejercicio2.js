'use strict'

/*

utilizando un bucle mostrar la suma y la media dd los numeros introducidos 
hasta introducir un numero negativo 


*/
 var suma    = 0;
var contador = 0;

do{  

var numero = parseInt(prompt("introduce numero, ingresar uno negativo detiene la secuencia"));


if(isNaN(numero)){
    
    numero = 0;
    
}else if (numero >= 0){
    suma += numero;
    
    contador++;
}



} while(numero >= 0)
     alert("la sua de los numeros es "+ suma)
    alert("el resultado de la media es "+ suma/contador);