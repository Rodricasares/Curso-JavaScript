
let person = {

    name:'Mario',
    lastName:'Zarza',
    age:6,
    email:'zarzita@email.com',
    //metodo get
    get fullName(){
        return ' Name:' + this.name + ' Last Name:' + this.lastName  + ' Age:' +  this.age   + ' Email:' +  this.email;;
    }
}

console.log(person.fullName);//Metodo get, simplifica el codigo de la funcion dentro del objeto 
