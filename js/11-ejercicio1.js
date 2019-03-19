'use strict'

/*
programa que nos pida dos numero y que nos diga cual es el mayor, el menos y si son iguales,


*/

var numero1 = parseInt(prompt("ingersa un numero", 0));

var numero2 = parseInt(prompt("ingersa un numero", 0));

if (numero1 == numero2) {
    alert("Los numero son iguales")

} else if (numero1 > numero2) {
    var contador = diferencias(numero1, numero2);
    console.log(contador);
    alert("el numero que ingresaste primero es mayor que el segundo por " + contador)



} else alert("el numero que ingresaste en segundo lugar es mayor que el primero");

function diferencias(n1, n2) {
  
    for (var c = 0; n1 > n2; c++);
    console.log(c);
    
    return c;
    
}
