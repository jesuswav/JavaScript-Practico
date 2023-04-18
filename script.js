const form = document.getElementById('formulario')

const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const resultado = document.getElementById('resultado')
const boton = document.getElementById('button')

let num1
let num2

form.addEventListener('submit', sumarInputValues)

function sumarInputValues() {
    num1 = Number(input1.value)
    num2 = parseInt(input2.value)

    event.preventDefault()

    let operacion = num1 + num2

    resultado.innerHTML = `El resultado es: ${operacion}`
}