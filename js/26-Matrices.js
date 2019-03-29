'use strict'

/*
los arrays de mutiple dimensiones son arrays dentro de otros arrays
*/  

var categorias = ["comedia","terror","Accion"];
var peliculas  = ["la verdad duele","la vida es bella","gran torino"];

var cine = [categorias, peliculas];

//nos movemos como queramos en los array 

//donde el array cine contiene los arreglos categorias y peliculas
//el primer indice accede al subarreglo y el elemento
//el el caso de 0,0 ingresa a categorias y muestra el elemento 0 que es comedia


//metodo push para agregar elementos al  arreglo
//peliculas.push(elemento);

/*
ejemplo de relleno de elementos nuevos a un arreglo por medio de un prompt
*/

do{
    var elemento = prompt("introduce peliculas, ingresa 0 para acabar");
peliculas.push(elemento);

}while (elemento != 0 );


//metodo pop elimina el ultimo elemento del arreglo :VVVVVV //como una pila de las que aprediste a usar en c++++++++++++++++++++++++++++++++
peliculas.pop();

console.log(peliculas);


//elminiar un elemento en especifico del arreglo 

var eliminacion = prompt("introduce lo que quieres eliminar del arreglo");


var indice = peliculas.indexOf(eliminacion);

console.log(indice);

 console.log(indice);
if(indice > -1){
    peliculas.splice(indice,1);
    console.log(peliculas);
}else if(indice==-1) console.log("nada que hacer");
console.log(peliculas);

/*
para convertir un arreglo a string
*/
var pelicula_String = peliculas.join();

console.log(pelicula_String+" "+ "El string");

//convertir de una cadena a un array 

var cadena = ("texto1, texto2, texto3");

var cadena_array =cadena.split(", ");
console.log(cadena_array)

/*
ordenar un array metodo short ordena en orden alfabetico, reverse para dar la vuelta al array "orden inverso";
*/




