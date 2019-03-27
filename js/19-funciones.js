'use strict'

/*
las funciones son un grupo de ordenes agrupados con un nombre concreto 
una funcion es una agrupacion reutilizable de un conjunto de instrucciones

*/
///definiendo la funcion

function calculadora() {
    //Consjuto de instrucciones que ejecuta la funcion
    console.log("hallo, hallo");

    //return se usa para retorna valores al luehar o metodo donde fue invocado
    //return "Hola yo calculo"
}
//llamando a la funcion
calculadora();

//capturando el return en una variable 
var lo_que_me_regresa = calculadora();

//ejemplo de funcion con parametros 

function caluladoraConParametros(numero1, numero2) {

    var respuesta = numero1 + numero2;
    return respuesta;
}

var num1 = 5;
var num2 = 10;

console.log(caluladoraConParametros(num1, num2));


/*
parametros opcionales
son parametros que no son obligatorios por que ya tienen un resultado dentro

*/

var muestra = calculadora_Con_Parametros_opcionales(2,2,false);
console.log(muestra+"impreso desde el llamado");

//en esta funcion solo estamos mandando dos parametros de 3 que tiene, sin embargo mostrar ta está inicializado en falso por lo tanto no hay necesidad en enviarlo a excepcion de que el valor sea cambiado externamente
function calculadora_Con_Parametros_opcionales(num1, num2, mostrar=true) {

    if (mostrar==false){
    console.log(num1 + num2+"impreso desde funcion");
    
    //return respuesta;
    }else{
          var respuesta = num1 + num2;
           return respuesta;  
             }
}