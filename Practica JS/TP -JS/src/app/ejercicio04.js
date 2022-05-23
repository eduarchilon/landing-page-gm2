/*
EJERCICIO 04 - convertir a romano
*/

/** Seleccion el resultado**/
let solution = document.getElementById('solution__container');

export function convertirARomano(num) { 
    let converter = { 
        M: 1000, 
        CM: 900, 
        D: 500, 
        CD: 400, 
        C: 100, 
        XC: 90, 
        L: 50, 
        XL: 40, 
        X: 10, 
        IX: 9, 
        V: 5, 
        IV: 4, 
        I: 1 
    } 
    let romano;
    let prop;
    romano = '';  
    if(num<4000){
        for (prop in converter) { 
            while (num >= converter[prop]) { 
                romano += prop; 
                num -= converter[prop]; 
            } 
        }
        console.log(romano)
        solution.innerHTML = `
            <p> ${romano}</p>
        `
    }else{
        solution.innerHTML = `
            <p>¡No existe ese numero o no se puede exceder el maximo de 3999!</p>
        `
    }
}