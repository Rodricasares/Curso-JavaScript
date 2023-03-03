//let autos = new Array('BMW,'Mercedes Benz', 'Audi', 'Volvo')

const autos = ['BMW','Mercedes Benz', 'Audi', 'Volvo'];
///////////////indice:   0        1               2       3
console.log(autos);

console.log(autos[3]);  ///seleccionamos el indice del array


// mostrar indice y valor del array
for(let i = 0; i < autos.length; i++){
    console.log(i+ ' : ' + autos[i])
}

                        //ARREGLOS

// arreglaremos el espacio en Mercedes Benz
autos[1] = 'MercedesBenz';
console.log(autos);
// Agregar elementos a un array
autos.push('Renaul');
console.log(autos)

//muestra la longitud del array
console.log(autos.length);

// Adredar con length
//No se recomienda agregar arreglos vacío
autos[autos.length] = 'Honda';
console.log(autos);
//No se recomienda agregar arreglos con indicesvacío
autos[8] = 'Citroen';
console.log(autos);
// Como saber si es un arreglo u array
console.log(Array.isArray(autos))
console.log(autos instanceof Array)
