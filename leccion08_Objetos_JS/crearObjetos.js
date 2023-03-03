// Funcion contructor de objetos de tipo person


function Person (name,lastName,age){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function(){
        return this.name + ' ' + this.lastName + ' ' + this.age;
    }
 }

 //crear objeto para luego reutilizar con new
 let tito = new Person('Rodri', 'Cantudo', 36);
 
 console.log(tito.fullName());

 let mama = new Person('Juani', 'Sánchez', 55);
 console.log(mama);

 tito.name = 'Rodrigo';
 console.log(tito);
 console.log(mama);

// Crear con new & forma simplificada

let miObj = new Object();
let miObj1 = {};

let miString = new String('Hola udemy');
let miString1 = 'Hola UDEMY';

let miBoolean = new Boolean(true);
let miBoolean1 = 15;

let miArray = new Array();
let miArray1 = [];

let miFuncion = new Function();
let miFuncion1 = function(){};


