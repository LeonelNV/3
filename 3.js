//3 - Palindromo
function invertir(palabra){
    let palabrainvertida = palabra.split("").reverse().join("");
    return palabra === palabrainvertida;
 }
 function imprimir(palabra){
    let espal = invertir(palabra);
    let respuesta = espal ? "Si" : "No";
    console.log('La palabra "${palabra}" ${respuesta} es un palindromo')
 }
 let palabra = "Ferrocarril";
 imprimir(palabra);