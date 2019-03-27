'use strict'

//parametros REST y SPREAD

/*
en esta funcion es para recibir mas parametros de los que puede recivir
para eso agregamos un parametro rest que se declaran ...NombreParam de esta manera lo que nos hace es un arreglo con los parametros que está recibiendo 
ordenado de 0 hacía arriba 
*/
//                                   esto es una parametro REST
function listadoFrutas(fruta1, fruta2, ...restoDeFrutas) {
    console.log("fruta 1 " + fruta1);
    console.log("fruta 2 " + fruta2);
    console.log(restoDeFrutas);
}

listadoFrutas("Naranaja", "manzana", "Sandia", "pera");

// los paramtros SPREAD deshacen un arreglo y lo agregan como parametros normales
var frutas = ["Naranaja", "manzana"]
listadoFrutas(frutas, "Naranaja", "manzana", "Sandia", "pera");
