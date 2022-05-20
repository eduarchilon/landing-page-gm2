/** Add event listener **/
const form = document.getElementById('form');
form.addEventListener('submit', formFunctions)

/** Seleccion el resultado**/
let solution = document.getElementById('solution__container')

/** Creo un evento on change al select de sumar y restar **/
const select = document.getElementById('select')
select.addEventListener('change', function(e){
    let buttonSubmit = document.getElementById('submit')
    let otherInput = document.getElementById('other-input');
    if(e.target.value === 'value1'){
        createInputNumberAndButton()
        buttonSubmit.style.display='none';
        otherInput.style.display = 'block';
    }else{
        buttonSubmit.style.display='block';
        otherInput.style.display = 'none';
    }
})

//Funciones del evento submit del formulario
function formFunctions(e){
    e.preventDefault();
    let select = document.getElementById('select').value;
    let input = document.getElementById('text').value
    if(input!=='')
    switch (select){
        case 'value2':
            hayParOPareja(input);
            break;
        case 'value3':
            esPalindromo(input);
            break;
        case 'value4':
            convertirARomano(parseInt(input));
            break;
        default:
            break;
    }
    // console.log(select.options[select'.selectedIndex].text)
}

//creacion del input y los botones de sumar y restar
function createInputNumberAndButton(){
    let otherInput = document.getElementById("other-input");
    otherInput.innerHTML = `
    <label for="number">Numero</label>
    <br/>
    <input type="number" name="number" id="number">
    <div class="operations">
        <button type="button" id="btn-sum" class="btn btn-sumar">Sumar</button>
        <button type="button" id="btn-rest" class="btn btn-restar">Restar</button>
    </div>
    `;
    const sum = document.getElementById('btn-sum');
    const rest = document.getElementById('btn-rest');
    sum.addEventListener('click', adicion);
    rest.addEventListener('click', restar);
}

/*
EJERCIO 01
*/
/*FUNCIONES CON INPUTS */
function adicion(input, number){
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

function restar(array, number){
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

/*
EJERCICIO 02 
*/

function hayParOPareja(array){
    if (!isNaN(array)) {
        let cadena = array.split('')
        let nuevoArray = [];
        cadena.forEach(element => {
            nuevoArray.push(parseInt(element))
        });
        let resultado;
        let pares = [];
        nuevoArray.sort();
        // console.log(nuevoArray)
        for (let i = 0; i < nuevoArray.length; i++) {
            if (nuevoArray[i] % 2 === 0 || nuevoArray[i + 1] === nuevoArray[i]) {
                pares.push(nuevoArray[i])
            }else{
                solution.innerHTML = `
                <p>¡No existen numeros pares ni numeros con pareja!</p>
                `
            }
        }
        console.log(pares)
        let par = [];
        let parejaSumada = [];
        for (let i = 0; i < pares.length; i++) {
            if(pares[i]%2 === 0){
                par.push(pares[i])
                console.log(par)
            }if (pares[i]%2 !==0){
                parejaSumada.push(pares[i])
                console.log(parejaSumada)
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

/*
EJERCICIO 03 
*/
function esPalindromo(string){
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

/*
EJERCICIO 04 
*/
function convertirARomano(num) { 
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