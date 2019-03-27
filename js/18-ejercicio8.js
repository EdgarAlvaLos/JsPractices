'use strict'

/*
calculadora que pida dos numeros por pantalla 
que verifique numeros si no son mal

y que nos muestre en el body de la pagina en una alerta y por consola 
el resultado de sumar restar, multiplicar y dividir esas dos sifras,
*/



    var numero1 = parseInt(prompt("ingersa un numero", 0));

    var numero2 = parseInt(prompt("ingersa un numero", 0));

var aux =0;

aux = numero1 * numero2
console.log ("la multiplicacion es" + aux);
aux = numero1 + numero2
console.log ("la suma es"+aux);
aux = numero1 / numero2
console.log ("la division es"+aux);
aux = numero1 - numero2
console.log ("la resta es"+aux);