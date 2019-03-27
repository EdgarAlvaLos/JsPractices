'use strict'

/*
programa que nos pida dos numero y que nos diga cual es el mayor, el menos y si son iguales,
Plus si los numero no son un numero o son menores o igual a 0 no pida que introduzcas datos

*/



while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    var numero1 = parseInt(prompt("ingersa un numero", 0));

    var numero2 = parseInt(prompt("ingersa un numero", 0));

}

if (numero1 == numero2) {
    alert("Los numero son iguales")

} else if (numero1 > numero2) {
    var contador = diferencias(numero1, numero2);

    alert("el numero que ingresaste primero es mayor que el segundo por " + contador);



} else {

    var contador = diferencias(numero2, numero1);

    alert("el numero que ingresaste primero es mayor que el segundo por " + contador);
}

function diferencias(n1, n2) {

    for (var c = 0; n1 != n2; n2++) {
        c++;

    }
    console.log(n1, n2);

    return c;


}
