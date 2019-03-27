'use strict'

/*
tabla de multiplicar de un numero introducido por pantalla
*/

 var numero1 = parseInt(prompt("ingersa un numero a multiplicar"));

 var numero2 = parseInt(prompt("ingera la tabla que quieres ver"));

for (var c=0; c<= numero2;c++){
    var aux = numero1 * c;
     console.log("el numero "+numero1+"por"+c+"es"+aux)
    document.write(numero1+"x"+c+"="+aux+"</br>");
    
}
