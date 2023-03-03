let resultado = sumarTodo(3,2,5,1,9);
console.log(resultado);

function sumarTodo(){
    let suma=0;
    for (let i =0; i < arguments.length; i++){ //para saber longitud del arreglo debemos aportar la propiedad .length y hacer referencia al indice para que recorra todo el array
        suma += arguments[i]; ///argument[i] conla propiedad argument podremos ver el valor dentro del arreglo
    }
    return suma;
}

