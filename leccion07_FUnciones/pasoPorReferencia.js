
// Tipo primitivo
let x = 10;


function cambiarValor(a){
    a = 20;
}
 //Paso por valor
cambiarValor(x); // valor 10
console.log(x)

const persona = {
    nombre: 'Juan',
    apellido:'Zarza'
}

console.log(persona);

function cambiarValorObj(p1){

    p1.nombre = 'Paco';
    p1.apellido = 'Martinez';

}

//Paso por refererncia **de esta manera los cambios si se producen
cambiarValorObj(persona);
console.log(persona); //{Paco, Martinez}

