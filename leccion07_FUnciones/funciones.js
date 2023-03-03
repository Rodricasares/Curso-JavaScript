//FUNCIONES

//La fiuncion la podremos utilizar en cualquier lugar del codigo

miFuncion(3,2);


function miFuncion (a, b){
    console.log('La suma es:'+(a+b))
}

miFuncion(5, 5);


miFuncion(3,2);

//funciones con retour
function miFuncion2 (a, b){
   return a + b;
}
//Llamando a la función
let resultado = miFuncion2(2, 2);
console.log(resultado);

//Declaración de la función tipo expresión
let sumar = function (a, b){return a+b};
resultado = sumar(1,2);
console.log(resultado);

