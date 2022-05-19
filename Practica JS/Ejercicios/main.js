/*
EJERCIO 01
*/
// function adicion(array, numero){
//     let valor = array.join("");
//     let resultado = numero + parseInt(valor);
//     let cadena = resultado.toString().split('');
//     let nuevoArray = [];
//     cadena.forEach(element => {
//         nuevoArray.push(parseInt(element));
//     });
//     console.log(nuevoArray)
// }

// function restar(array, numero){
//     let valor = array.join("");
//     let resultado = parseInt(valor) - numero;
//     if(resultado > 0){
//         let cadena = resultado.toString().split('');
//         let nuevoArray = [];
//         cadena.forEach(element => {
//         nuevoArray.push(parseInt(element));
//         });
//         console.log(nuevoArray)
//     }else{
//         console.log("ERROR: Resultado negativo");
//     }
// }

// let array = [1,2,2];
// adicion(array, 4);
// restar(array, 2);

/*
EJERCICIO 02 
*/

// function hayParOPareja(array){
//     let resultado;
//     let pares = [];
//     array.sort();
//     // console.log(array)
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]%2===0 || array[i+1] === array[i]){
//             pares.push(array[i])
//         }
//     }
//     // console.log(pares)
//     let suma;
//     let doble;
//     for (let i = 0; i < pares.length; i++) {
//         suma = pares[i]
//     }
//     // console.log(suma)
//     if(suma%2==0 || (suma+suma)%2==0){
//         resultado = true;
//     }else{
//         resultado = false;
//     }
//     console.log(resultado)
// }

// let array = [1, 5, 7, 8];
// hayParOPareja(array);

/*
EJERCICIO 03 
*/

// function esPalindromo(string){
//     let array;
//     array = string.toLowerCase().replace(/ /, '').split('')
//     console.log(array)
//     let reves = [];
//     console.log(reves)
//     // recorrer el array con dos for el otro en reversa para ver si se parecen los elementos
//     for (let i= 0; i < array.length;  i++) {
//             if(array[i]===array.reverse()[i]){
//                 reves.push(array[i])
//             }
//         }
//     if(reves.length===array.length){
//         console.log("Es palindromo: " + reves + " = "  +  array)
//     }else{
//         console.log("No es palindromo")
//     }
// }

// let palabra = "osor";
// esPalindromo(palabra)

/*
EJERCICIO 04 
*/

// function convertirARomano(num) { 
//     let converter = { 
//         M: 1000, 
//         CM: 900, 
//         D: 500, 
//         CD: 400, 
//         C: 100, 
//         XC: 90, 
//         L: 50, 
//         XL: 40, 
//         X: 10, 
//         IX: 9, 
//         V: 5, 
//         IV: 4, 
//         I: 1 
//     } 
//     let romano;
//     let prop;
//     romano = '';  
//     if(num<4000){
//         for (prop in converter) { 
//             while (num >= converter[prop]) { 
//                 romano += prop; 
//                 num -= converter[prop]; 
//             } 
//         } return romano;
//     }else{
//         return "error"
//     }
// }

// let numero = 2099;
// console.log(convertirARomano(numero))