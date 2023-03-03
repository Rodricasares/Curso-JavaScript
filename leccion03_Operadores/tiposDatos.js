/*
Tipos de datos javaScript
*/
//Tipo de dato string
var nombre = "Mario";
console.log(nombre);


//Tipo de dato numerico

var numero = 1000;
console.log(typeof numero);

//Tipo de dato objeto

var obj ={
nombre:"Dani",
apellido: "Zarza"
}
console.log(obj);

//tipo boolean (true,false)

var bandera = true;
console.log(typeof bandera);


//tipo de dato function

function miFuncion(){

}
console.log(typeof miFuncion);

var simbolo = Symbol("mi simbolo");
console.log(simbolo);

//tipo clase es una function
class Persona{
    contructor(nombre,apellido){
    this.name = nombre;
    this.apellido = apellido;
    }
}

console.log(typeof Persona);
//tipo undefined, es cuando no asignamos un valor a la variable.
var x;
console.log(x);
//tipo undefined, pero podemos asignar undefined como valor.
var x = undefined;
console.log(x);
//null = ausencia de valor (Es un dato tipo object)
var y = null;
console.log(typeof y);

//Leccion02-punto12--Arreglos
var autos = ["BMV","Audi","Volvo"]
console.log(autos);
console.log(typeof autos);

//Una cadena vacía pertenece al tipo string
var z = '';
console.log(typeof z);



//concatenar valores
var nombre='Juan';
var apellido='Castañeda';
console.log(nombre +" "+ apellido);

var nombreCompleto = 'Carlos'+ ' ' + 'Muñoz';
console.log(nombreCompleto);

//Trabajar con numeros y sumas

//De esta manera no los suma los gunta como si fuse una cadena 
var x = nombre + 2 + 4;
console.log(x);
//von los parentecis es igual que con la ecuación, se hace primero el parentesis
var x = nombre + ( 2 + 4);
console.log(x);
//en caso de ir la suma delante valdria 
var x = 2 + 4 + nombre ;
console.log(x);