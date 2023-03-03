
let person = {

    name:'Mario',
    lastName:'Zarza',
    age:6,
    email:'zarzita@email.com',
    //agregar metodo ó función al objeto fullName
    fullName: function(){
        return ' Name:' + this.name + ' Last Name:' + this.lastName  + ' Age:' +  this.age   + ' Email:' +  this.email;;
    }
}

// Agrregar propiedades al objeto

person.telf = '666466166'; //Agregar

person.tel = '666466166'; // Valor erroneo, se debe de borrar { delete } 


// llamadas

console.log(person.name);
console.log(person.lastName);
console.log(person.age);
console.log(person.email);
console.log(person.fullName()) // metodo 

// cambio despues de agregar valor
console.log(person);
// borrar valor dentro del objeto delete
delete person.tel;
console.log(person);


// concatenar cada valor de la propiedad para imprimir en el NAVEGADOR 

console.log(person.name + ' ' + person.lastName + ' ' + person.age);

//for in 
for(property in person){
console.log(person[property]);
}

//Object.values()
let personArray = Object.values(person);
console.log(personArray);

//JSON.stringify()  
let personString = JSON.stringify(person);
console.log(personString);

