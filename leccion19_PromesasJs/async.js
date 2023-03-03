


//codigo asíncrono

let promesa = new Promise((resolved) => {
console.log('inicio promesa');
setTimeout( () => resolved('saludos con promesa timeout 3 seg. después'), 3000);
console.log('fin de la promesa');
});
promesa.then(valor => console.log(valor))

//////////////////ASYNC\\\\\\\\\\\\\\\\\\\

//Metodo async

async function miFunc(){
    return 'Saludos con promesa y async'; // return hace la misma función que resolved
}
miFunc().then(valor => console.log(valor)) //En este caso debemos colocar los() para llamar a la función 
