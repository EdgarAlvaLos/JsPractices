'use strict'

/*
hacer un programa que muestre todos los numeros que hay entre dos numeros
introducidos por el usuario
*/
do {
    var numero1 = parseInt(prompt("ingresa el numero a programar"));
    var numero2 = parseInt(prompt("ingresa el numero a programar"));



} while (numero1 <=0 || numero2 <= 0)
    
   if (numero1 == numero2){
       alert("numero iguales sin diferencia alguna");
       
       
       }else  {
    for (var i = numero1; i <= numero2;i++){
        
        document.write("<h1> de numero "+numero1+"a numero "+numero2+"hay estos numeros :</h1>"+i);
                
        
    }
        
    }

