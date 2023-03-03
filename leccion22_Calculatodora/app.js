console.log('Hola calculadora')
function sumar(){
const forma = document.getElementById('forma');
let operadorA = forma['operandoA']
let operadorB = forma['operandoB']
let resultado = parseInt(operadorA.value)+parseInt(operadorB.value);//parseInt convierte el valor a numerico, tambien impide escribir cualquier otro valor
document.getElementById('resultado').innerHTML = `Resultado:${resultado}`;
}
