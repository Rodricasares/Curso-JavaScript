
let person = {

    name:'Mario',
    lastName:'Zarza',
    age:6,
    email:'zarzita@email.com',
    language:'es',
    // Metodo get
    get lang(){
        return this.language.toUpperCase();
    },
    set lang(lang){
        this.language = lang.toUpperCase();
    },
    get fullName(){
        return ' Name:' + this.name + ' Last Name:' + this.lastName  + ' Age:' +  this.age   + ' Email:' +  this.email;;
    }
}

console.log(person.lang);//Metodo get, simplifica el codigo de la funcion dentro del objeto 

person.lang = 'en';

console.log(person);
console.log(person.lang);