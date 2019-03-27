'use strict'

/*
plantillas de texto 
*/

var nombre = prompt("ingresa tu nombre ")
var apellido = prompt("ingresa tus apellidos ")

var texto =`
<h1> Hola que tal <h1/>
    <h3> mi nombre es : ${nombre} <h3>
         <h3> mi apellido es : ${apellido} <h3>
`;

document.write(texto);