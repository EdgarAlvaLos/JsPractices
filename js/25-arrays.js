/*
arrays conocidos como arreglos, matriceses una coleccion de tipos de datos 
indices inicializados en 0
*/

//estos son arrays simples y declaracion de los mismos

// indices     0       1      2   3
var nombres = ["Edgar","avalos",12,true]; // un arreglo declarado con valores dentro

var lenguajes = new Array("PHP","JS","GO","JAVA"); //array en forma de objeto


//longitud de un array 

//console.log(nombres.length);

//var elemento = parseInt(prompt("Que elemento del array quieres "));

//alert(nombres[elemento-1]);


/*Recorrer el array nomalmente */
for(var i=0;i < nombres.length;i++){
    
    alert(nombres[i]);
}


/*Usando el for each
//el for each nos itera todo el aray y nos lo muestra 

se utiliza nombreArray.forEach(elemento,index,array);

donde elemento es nuestra ifo que buscamos en el array
donde index es nuestgro indice recorrido
donde array es el array que estamos usando lo muestra 

*/
document.write("<ul>");

      lenguajes.forEach((elemento,index,array)=>{
    document.write("<li>"+index+" "+elemento+"</li>");
    
});

document.write("</ul>");

