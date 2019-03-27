'use strict'

/*
programa que muestra numero divisores introducido 
*/

var numero = parseInt(prompt("ingresa un numero weon",0));

for(var i =1; i<= numero;i++){
    
    if(numero%i ==0){
         console.log("divisor "+ i);
        
    }
   
    
}