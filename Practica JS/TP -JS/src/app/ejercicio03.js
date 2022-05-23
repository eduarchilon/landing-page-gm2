/*
EJERCICIO 03 - Si es o no palindromo
*/

/** Seleccion el resultado**/
let solution = document.getElementById('solution__container');

export function esPalindromo(string){
    let array;
    //s = espacios en blanco y tabulaciones, g = global y "" que lo reemplaza por espacios en blanco con cadena vacia
    array = string.toLowerCase().replace(/\s+/g, '').split('')
    console.log(array)
    let reves = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array.reverse()[i]) {
            reves.push(array[i])
        }
    }
    if (reves.length === array.length) {
        solution.innerHTML = `
        <p>¡Es palindromo!</p>
    `
    }
    else{
        solution.innerHTML = `
        <p>¡No es palindromo!</p>
    `
    }
}