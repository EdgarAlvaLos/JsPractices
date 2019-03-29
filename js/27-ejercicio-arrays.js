"use strict"

/*
1.pida 6 numeros por pantalla y los meta en un array
2.Mostrar el array entero (Todos los elementos) en cuarpo de la pagina y consola
3.Ordenarlo y mostrarlo 
4.invertirlo 
5.Mostrar cuantos elementos tiene el array
6.Busqueda de un valor introducido por el user, muestra indice y si lo encuentra

Se valora el uso de funciones 

*/


var arreglo = [];
var iteraciones = 0;
var aux =0 ;
do {
aux = prompt("ingresa los numero krnal");
    
    if (isNaN(aux)){
        alert("ingresa solo numeros");
        console.log("ingresa algo valido");
        
        
        }else {
    arreglo[iteraciones]= aux;

    iteraciones ++;
            
                        
        }
}while(iteraciones != 6)

    console.log(arreglo);


