
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

console.log(person.name);
console.log(person.lastName);
console.log(person.age);
console.log(person.email);
console.log(person.fullName()) // metodo 


// como crear objetos en memoria con la propiedad  = new Object();

let person2 = new Object();
person2.name = 'Dani';
person2.lastName = 'Zarza';
person2.age = 2;
person2.email = 'zarzita2@email.com'


console.log(person2.name);
console.log(person2);
//formas de acceder al objeto
console.log(person2['age']);


// for in  **acceder a las propiedades del objeto

for (property in person) {
    console.log(property);
    console.log(person[property])
} 

