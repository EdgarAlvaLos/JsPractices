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
console.log(cine[0][0]);

