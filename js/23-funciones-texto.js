'use strict'

/*
transformacion de textos 

*/

var  numero = 444;
var texto1 = "Curso de js que está siguiendo Edgar Avalos"
var texto2 = "Es bueno el curso pero le tengo que poner chingos de ganas"


var dato = numero.toString(); //convierte a strigno nuestro int
dato = texto1.toUpperCase(); //Todo a mayuscula

dato = texto2.toLowerCase(); //Todas en minuscula

console.log(typeof dato)


//calcaula la longitud

var nombre = "EdgarAvalos";
console.log(nombre.length); //.length calcula el largo de una cadena  incluyendo espacios 

//tambien podemos contar lo que exista en un array
var nombre = ["hola","hola","hola"];
console.log(nombre.length)

//concatenar "unir textos"

//var textoTotal = texto1 + texto2;


//ejemplo con concat

var textoTotal = texto1.concat(" "+ texto2);
console.log(textoTotal);


/*
metodos de busqueda 
*/
//busca la palabara dentro de un string y nos retorna la primera coincidencia de esa palabra
var busqueda = texto1.indexOf("Edgar");
console.log(busqueda);

// la ultima aparicion de la palabra 
var busqueda = texto1.lastIndexOf("Edgar");
console.log(busqueda);
//metodo search
var busqueda = texto1.search("Edgar"); // es lo mismo que usar indexOf
console.log(busqueda);
//metodo match
var busqueda = texto1.match("Edgar");//te devuelve un array con las palabras que hacen match y coleccion de objetos que hay en el string
console.log(busqueda);
//metodo substr
var busqueda = texto1.substr(31,5);//le enviamos cuantas letras y a partir de cuantos espacion va a buscar
console.log(busqueda);
//metodo charAr
var busqueda = texto1.charAt(10);//busca en el sting el indice que le envíe
console.log(busqueda);
//startWith busca en el string y devuelve tru y false al buscar al inicio
var busqueda = texto1.startsWith("Curso de Js");
console.log(busqueda);
//endWith busca en el string y devuelve tru or false al buscar al final
var busqueda = texto1.endsWith("Edgar Avalos");
console.log(busqueda);
//includes busca a una palabara "palabra Exacta case sensitive" devuelve true or false
var busqueda = texto1.includes("edgar avalos");
console.log(busqueda);
/*
metodos para separar  remaplazar lo de un string
*/

//remplaza lo que encuentre del primer parametro por lo que haya en el segundo parametro 
var busqueda = texto1.replace("Edgar avalos ", "Jose avalos");
console.log(busqueda);
//Slice separa el string a partir del indice de caracter indicado
var busqueda = texto1.slice(14);//devuelve lo que hay despues del caracter 14 puedes agregar un segundo parametro para indicar de donde a donde es el corte
console.log(busqueda);
//metodo split ingresa todo lo del string en un array si agregas un espacio  separa en el arreglo por palabra
 
var busqueda = texto1.split(" ");
console.log(busqueda);
//metodo trim(); recorta o quita los espacios por delante y por detras 
var busqueda = texto1.trim();

console.log(busqueda);