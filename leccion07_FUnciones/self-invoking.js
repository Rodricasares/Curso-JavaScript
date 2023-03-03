
//Funciones: self-invoking

(function prueba(a,b){
    console.log('Ejecutando la función:' + (a+b))
})(4,6);



function miFuncion (a, b){
    console.log('La suma es:'+(a+b))
}

miFuncion(5, 5);

//Mostrar la función en un string
var miTexto = miFuncion.toString();
console.log(miTexto);
