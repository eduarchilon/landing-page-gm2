import { adicion, restar } from "./app/ejercicio01.js";
import { hayParOPareja } from "./app/ejercicio02.js";
import { esPalindromo } from "./app/ejercicio03.js"
import { convertirARomano } from "./app/ejercicio04.js"; 

/** Add event listener **/
const form = document.getElementById('form');
form.addEventListener('submit', formFunctions)

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

/*Funciones del evento submit del formulario*/
function formFunctions(e){
    e.preventDefault();
    let selectValue = document.getElementById('select').value
    let input = document.getElementById('text').value
    if(input!=='')
    switch (selectValue){
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
}

/*creacion del input y los botones de sumar y restar*/
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