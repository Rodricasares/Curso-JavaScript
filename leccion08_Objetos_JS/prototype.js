// Funcion contructor de objetos de tipo person


function Person (name,lastName,age){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function(){
        return this.name + ' ' + this.lastName + ' ' + this.age;
    }
 }

 //Agregar la propiedad tlf a todas las person

 Person.prototype.tlf = '00000000';
  //crear objeto para luego reutilizar con new
 let tito = new Person('Rodri', 'Cantudo', 36);
 tito.telf = '646464848'; 
 console.log(tito.fullName());

 let mama = new Person('Juani', 'Sánchez', 55);
 mama.telf = '677977877';
 console.log(mama);

 tito.name = 'Rodrigo';
 console.log(tito);
 console.log(mama);
