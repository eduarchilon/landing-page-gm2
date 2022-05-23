/*
EJERCIO 01 - Adicion y resta
*/

/** Seleccion el resultado**/
let solution = document.getElementById('solution__container');

/*FUNCIONES CON INPUTS */
export function adicion(input, number){
    let arrayString = [];
    let arrayNumber = [];
    input = document.getElementById('text').value
    number = parseInt(document.getElementById('number').value)
    arrayString = input.split(',')
    arrayString.forEach(element => {
        arrayNumber.push(parseInt(element))
    });
    let newNumber = parseInt(arrayNumber.join(''))
    let resultado;
    let resultadoArray = [];
    let resultadoArrayNumber = [];
    if(!isNaN(newNumber) && newNumber>number){
        resultado = newNumber + number;
        resultadoArray = resultado.toString().split('')
        for (let element of resultadoArray) {
            resultadoArrayNumber.push(parseInt(element));
            solution.innerHTML = `
                <h5>Array:</h5>
                </br>
                <p>[${arrayNumber}]</p>
                </br>
                </br>
                <h5>Numero:</h5>
                <p>${number}</p>
                </br>
                </br>
                <h5>Resultado:</h5>
                </br>
                <p>[${resultadoArrayNumber}]</p>
                ` ;
    }
}else{
            solution.innerHTML = `
                    <p>¡Debe ingresar solo numeros!</p>
                ` 
        console.log("Error")
        
        
    }
    }

export function restar(input, number){
    let arrayString = [];
    let arrayNumber = [];
    input = document.getElementById('text').value
    number = parseInt(document.getElementById('number').value)
    arrayString = input.split(',')
    arrayString.forEach(element => {
        arrayNumber.push(parseInt(element))
    });
    let newNumber = parseInt(arrayNumber.join(''))
    let resultado;
    let resultadoArray = [];
    let resultadoArrayNumber = [];
    if(!isNaN(newNumber) && newNumber>number){
        resultado = newNumber - number;
        resultadoArray = resultado.toString().split('')
        for (let element of resultadoArray) {
            resultadoArrayNumber.push(parseInt(element));
            solution.innerHTML = `
                <h5>Array:</h5>
                </br>
                <p>[${arrayNumber}]</p>
                </br>
                </br>
                <h5>Numero:</h5>
                <p>${number}</p>
                </br>
                </br>
                <h5>Resultado:</h5>
                </br>
                <p>[${resultadoArrayNumber}]</p>
                ` ;
    }
}else{
            solution.innerHTML = `
                    <p>¡Debe ingresar solo numeros!</p>
                ` 
        console.log("Error")
        
        
    }
}