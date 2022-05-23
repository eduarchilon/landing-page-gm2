/*
EJERCICIO 02 - Paridad o pareja
*/
let solution = document.getElementById('solution__container');

export function hayParOPareja(array){
    if (!isNaN(array)) {
        let cadena = array.split('')
        let nuevoArray = [];
        cadena.forEach(element => {
            nuevoArray.push(parseInt(element))
        });
        let pares = [];
        nuevoArray.sort();
        for (let i = 0; i < nuevoArray.length; i++) {
            if (nuevoArray[i] % 2 === 0 || nuevoArray[i + 1] === nuevoArray[i]) {
                pares.push(nuevoArray[i])
            }else{
                solution.innerHTML = `
                <p>¡No existen numeros pares ni numeros con pareja!</p>
                `
            }
        }
        let par = [];
        let parejaSumada = [];
        for (let i = 0; i < pares.length; i++) {
            if(pares[i]%2 === 0){
                par.push(pares[i])
            }if (pares[i]%2 !==0){
                parejaSumada.push(pares[i])
            }
            solution.innerHTML = `
                <p>Existen numeros pares o que son pareja</p>
                </br>
                </br>
                <h5>Numeros Pares:</h5>
                </br>
                <p>${par}</p>
                </br>
                <h5>Numeros con pareja:</h5>
                </br>
                <p>${parejaSumada}</p>
            `
        }
    }
}