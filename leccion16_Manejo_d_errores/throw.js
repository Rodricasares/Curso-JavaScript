
'use strict'

let result = '';

try{
    if(isNaN(result)) throw 'No es un numero';
    else if (result === '') throw 'Es una cadena vacia';
    else if (result <= 0) throw 'Es un número negativo';
    else if (result > 0) throw 'Es un número positivo';
}
catch(error){
console.log(error);
console.log(error.name);
console.log(error.message);
}

