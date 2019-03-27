'use stritc'

/*
funciones anonimas
una funcion anonima es una funcion que no tiene nombre y se puede guardar en una variable 

se utiliza para hacer callbacks 

un callback :
una funcion de callback es una funcion anonima que se le pasa como parametro a otra funcion
*/

var pelicula = function(nombre){
    return "la pelicula es : "+ nombre;
    
}
 //ejemplo de un callback
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;
    
  sumaYmuestra(sumar);
   sumaPorDos(sumar);
    
    
 return sumar;   
}
// funciones flecha =>
sumame(5,7,dato => {
    console.log("la suma es: ", dato);
    
    
},
       dato => {
    console.log("la suma por dos es: ", (dato*2));

    
});

