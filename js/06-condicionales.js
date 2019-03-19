"use strict"

//condicional if
// Si A es igual a B entonces haces algo 
var numero1 = 100;
var numero2=  500;

/*
operadores Relacionales 

Mayor : >
Menor : <
Mayor o igual >=
Menos o igual =<
Igual ==
Distinto !=

*/


if(numero1 > numero2){
   console.log("el numero"+ numero1 +"es mayor que el numero"+numero2);
   
   
   }else{
       console.log("el numero "+numero2+"es mayor que el numero"+numero1);
       
   }


/*
operadores logicos

AND  (y) = &&
OR   (o) = ||
NEGACION = !

*/

//negacion
var year =2017;

if(year != 2016) console.log("El año no es 2016");
else console.log("el año es 2016");

// AND 
if(year >= 2000 && year <= 2020 && year != 2018){
    console.log("estamos en la era actual")
   
   
   }else console.log("estamos en la era moderna");

//OR 

if (year == 2008 || year == 2018){
    
    console.log("el año acaba en 8");
}else console.log("el año no acaba en 8");
